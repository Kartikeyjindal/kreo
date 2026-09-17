def to_float(val):
    if val is None:
        return None
    if isinstance(val, (int, float)):
        return float(val)
    if isinstance(val, str):
        try:
            return float(val.replace("₹", "").replace(",", "").replace("%", "").strip())
        except ValueError:
            return None
    return None

def to_pct(val):
    v = to_float(val)
    if v is None:
        return None
    return float(v * 100) if abs(v) <= 1.0 else float(v)

def evaluate_fundamentals(input_data, config=None):
    if config is None:
        config = {}
    data = dict(input_data)
        
    pe_threshold = to_float(config.get("pe")) or 15.0
    pb_threshold = to_float(config.get("pb")) or 2.5
    roe_threshold = to_float(config.get("roe")) or 20.0
    roce_threshold = to_float(config.get("roce")) or 20.0

    weights = {
        "pe": 10,
        "pb": 8,
        "roe": 10,
        "roce": 10,
        "eps": 8,
        "sales_growth": 10,
        "profit_growth": 10,
        "dividend_yield": 5,
        "debt_to_equity": 10,
        "promoter_holding": 5,
        "book_value": 4
    }

    pe_val = to_float(data.get("P/E"))
    pb_val = to_float(data.get("P/B"))
    roe_val = to_pct(data.get("ROE"))
    roce_val = to_pct(data.get("ROCE"))
    eps_val = to_float(data.get("EPS_TTM"))
    sales_growth_val = to_pct(data.get("SALES_GROWTH"))
    profit_growth_val = to_pct(data.get("PROFIT_GROWTH"))
    div_yield_val = to_pct(data.get("DIV._YIELD"))
    promoter_holding_val = to_pct(data.get("PROMOTER_HOLDING"))
    book_value_val = to_float(data.get("BOOK_VALUE_TTM"))
    debt_val = to_float(data.get("DEBT"))
    shares_val = to_float(data.get("NO_OF_SHARES"))

    def score_pe(pe):
        if pe is None: return 0
        if pe < pe_threshold: return 90
        elif pe < pe_threshold + 10: return 75
        elif pe < pe_threshold + 20: return 60
        elif pe < pe_threshold + 30: return 40
        elif pe < pe_threshold + 45: return 25
        else: return 10

    def score_pb(pb):
        if pb is None: return 0
        if pb < pb_threshold * 0.4: return 90
        elif pb < pb_threshold: return 75
        elif pb < pb_threshold * 1.6: return 60
        elif pb < pb_threshold * 2.4: return 40
        else: return 20

    def score_roe(roe):
        if roe is None: return 0
        if roe >= roe_threshold + 15: return 90
        elif roe >= roe_threshold + 5: return 75
        elif roe >= roe_threshold: return 60
        elif roe >= roe_threshold - 10: return 40
        else: return 20

    def score_roce(roce):
        if roce is None: return 0
        if roce >= roce_threshold + 15: return 90
        elif roce >= roce_threshold + 5: return 75
        elif roce >= roce_threshold: return 60
        elif roce >= roce_threshold - 10: return 40
        else: return 20

    def score_eps(eps):
        if eps is None: return 0
        if eps >= 100: return 90
        elif eps >= 50: return 75
        elif eps >= 20: return 60
        elif eps >= 10: return 40
        else: return 20

    def score_sales_growth(sg):
        if sg is None: return 0
        if sg > 25: return 90
        elif sg > 15: return 75
        elif sg > 5: return 60
        elif sg > 0: return 40
        else: return 20

    def score_profit_growth(pg):
        if pg is None: return 0
        if pg > 25: return 90
        elif pg > 15: return 75
        elif pg > 5: return 60
        elif pg > 0: return 40
        else: return 20

    def score_dividend_yield(dy):
        if dy is None: return 0
        if dy >= 3: return 90
        elif dy >= 2: return 75
        elif dy >= 1: return 50
        elif dy > 0: return 30
        else: return 10

    def score_debt_to_equity(dte):
        if dte is None: return 0
        if dte <= 0.05: return 90
        elif dte < 0.3: return 75
        elif dte < 0.6: return 60
        elif dte < 1: return 40
        elif dte < 2: return 20
        else: return 10

    def score_promoter_holding(ph):
        if ph is None: return 0
        if ph >= 65: return 90
        elif ph >= 50: return 75
        elif ph >= 35: return 50
        elif ph >= 20: return 30
        else: return 10

    def score_book_value(bv):
        if bv is None: return 0
        if bv >= 300: return 90
        elif bv >= 200: return 75
        elif bv >= 100: return 60
        elif bv >= 50: return 40
        else: return 20

    # Derived D/E
    try:
        if debt_val is not None and book_value_val and shares_val and (book_value_val * shares_val) != 0:
            debt_to_equity = debt_val / (book_value_val * shares_val)
        else:
            debt_to_equity = None
    except Exception:
        debt_to_equity = None

    scores = {
        "pe": score_pe(pe_val),
        "pb": score_pb(pb_val),
        "roe": score_roe(roe_val),
        "roce": score_roce(roce_val),
        "eps": score_eps(eps_val),
        "sales_growth": score_sales_growth(sales_growth_val),
        "profit_growth": score_profit_growth(profit_growth_val),
        "dividend_yield": score_dividend_yield(div_yield_val),
        "debt_to_equity": score_debt_to_equity(debt_to_equity),
        "promoter_holding": score_promoter_holding(promoter_holding_val),
        "book_value": score_book_value(book_value_val)
    }

    valid_metrics = [f for f in weights if scores[f] > 0]
    valid_total_weight = sum(weights[f] for f in valid_metrics)
    total_score = sum(scores[f] * weights[f] for f in valid_metrics)
    final_score = total_score / valid_total_weight if valid_total_weight > 0 else 50.0

    if final_score >= 72:
        verdict = "strong buy"
    elif final_score >= 60:
        verdict = "buy"
    elif final_score >= 50:
        verdict = "hold"
    elif final_score >= 35:
        verdict = "sell"
    else:
        verdict = "strong sell"

    return {
        "final_score": round(final_score, 2),
        "verdict": verdict,
    }
