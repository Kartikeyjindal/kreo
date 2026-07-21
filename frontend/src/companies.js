const stockList = [
  {
    "symbol": "360ONE",
    "name": "360 One Wam Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "3MINDIA",
    "name": "3M India Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "ABB",
    "name": "ABB India Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "ABBOTINDIA",
    "name": "Abbott India Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "ACC",
    "name": "ACC Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "ADANIENSOL",
    "name": "Adani Energy Solutions Ltd.",
    "sector": "CONGLOMERATE"
  },
  {
    "symbol": "ADANIENT",
    "name": "Adani Enterprises Ltd.",
    "sector": "CONGLOMERATE"
  },
  {
    "symbol": "ADANIGREEN",
    "name": "Adani Green Energy Ltd.",
    "sector": "CONGLOMERATE"
  },
  {
    "symbol": "ADANIPORTS",
    "name": "Adani Ports and Special Economic Zone Ltd.",
    "sector": "CONGLOMERATE"
  },
  {
    "symbol": "ADANIPOWER",
    "name": "Adani Power Ltd.",
    "sector": "CONGLOMERATE"
  },
  {
    "symbol": "ATGL",
    "name": "Adani Total Gas Ltd.",
    "sector": "CONGLOMERATE"
  },
  {
    "symbol": "ABCAPITAL",
    "name": "Aditya Birla Capital Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "AIAENG",
    "name": "AIA Engineering Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AJANTPHARM",
    "name": "Ajanta Pharma Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "ALKEM",
    "name": "Alkem Laboratories Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "AMBUJACEM",
    "name": "Ambuja Cements Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "APARINDS",
    "name": "Apar Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "APLAPOLLO",
    "name": "APL Apollo Tubes Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "APOLLOHOSP",
    "name": "Apollo Hospitals Enterprise Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "ASHOKLEY",
    "name": "Ashok Leyland Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "ASIANPAINT",
    "name": "Asian Paints Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "ASTRAL",
    "name": "Astral Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "AUBANK",
    "name": "AU Small Finance Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "AUROPHARMA",
    "name": "Aurobindo Pharma Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "AIIL",
    "name": "Authum Investment & Infrastructure Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DMART",
    "name": "Avenue Supermarts Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "AWL",
    "name": "AWL Agri Business Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AXISBANK",
    "name": "Axis Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "BAJAJ-AUTO",
    "name": "Bajaj Auto Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "BAJFINANCE",
    "name": "Bajaj Finance Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "BAJAJFINSV",
    "name": "Bajaj Finserv Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "BAJAJHLDNG",
    "name": "Bajaj Holdings & Investment Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "BAJAJHFL",
    "name": "Bajaj Housing Finance Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BALKRISIND",
    "name": "Balkrishna Industries Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "BANKBARODA",
    "name": "Bank Of Baroda",
    "sector": "BANKING"
  },
  {
    "symbol": "BANKINDIA",
    "name": "Bank Of India",
    "sector": "BANKING"
  },
  {
    "symbol": "MAHABANK",
    "name": "Bank Of Maharashtra",
    "sector": "BANKING"
  },
  {
    "symbol": "BERGEPAINT",
    "name": "Berger Paints India Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "BDL",
    "name": "Bharat Dynamics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BEL",
    "name": "Bharat Electronics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BHARATFORG",
    "name": "Bharat Forge Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BHEL",
    "name": "Bharat Heavy Electricals Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "BPCL",
    "name": "Bharat Petroleum Corporation Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "BHARTIARTL",
    "name": "Bharti Airtel Ltd.",
    "sector": "TELECOM"
  },
  {
    "symbol": "BHARTIHEXA",
    "name": "Bharti Hexacom Ltd.",
    "sector": "TELECOM"
  },
  {
    "symbol": "BIOCON",
    "name": "Biocon Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "BLUESTARCO",
    "name": "Blue Star Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "BOSCHLTD",
    "name": "Bosch Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "BRIGADE",
    "name": "Brigade Enterprises Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "BRITANNIA",
    "name": "Britannia Industries Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "BSE",
    "name": "BSE Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "CANBK",
    "name": "Canara Bank",
    "sector": "BANKING"
  },
  {
    "symbol": "CENTRALBK",
    "name": "Central Bank Of India",
    "sector": "OTHER"
  },
  {
    "symbol": "CDSL",
    "name": "Central Depository Services (India) Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "CGPOWER",
    "name": "CG Power and Industrial Solutions Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "CHOLAHLDNG",
    "name": "Cholamandalam Financial Holdings Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "CHOLAFIN",
    "name": "Cholamandalam Investment and Finance Company Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "CIPLA",
    "name": "Cipla Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "COALINDIA",
    "name": "Coal India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "COCHINSHIP",
    "name": "Cochin Shipyard Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "COFORGE",
    "name": "Coforge Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "COHANCE",
    "name": "Cohance Lifesciences Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "COLPAL",
    "name": "Colgate-Palmolive (India) Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "CONCOR",
    "name": "Container Corporation Of India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "COROMANDEL",
    "name": "Coromandel International Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "CRISIL",
    "name": "CRISIL Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "CUMMINSIND",
    "name": "Cummins India Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "DABUR",
    "name": "Dabur India Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "DALBHARAT",
    "name": "Dalmia Bharat Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "DIVISLAB",
    "name": "Divi''s Laboratories Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "DIXON",
    "name": "Dixon Technologies (India) Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "DLF",
    "name": "DLF Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "DRREDDY",
    "name": "Dr. Reddy''s Laboratories Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "EICHERMOT",
    "name": "Eicher Motors Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "ENDURANCE",
    "name": "Endurance Technologies Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "ESCORTS",
    "name": "Escorts Kubota Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "ETERNAL",
    "name": "Eternal Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "EXIDEIND",
    "name": "Exide Industries Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "FORTIS",
    "name": "Fortis Healthcare Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "NYKAA",
    "name": "FSN E-Commerce Ventures Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "GAIL",
    "name": "GAIL (India) Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "GRSE",
    "name": "Garden Reach Shipbuilders & Engineers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SCRIP-122275",
    "name": "GE Vernova T&D India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GICRE",
    "name": "General Insurance Corporation of India",
    "sector": "BANKING"
  },
  {
    "symbol": "GILLETTE",
    "name": "Gillette India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GLAXO",
    "name": "Glaxosmithkline Pharmaceuticals Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "GLENMARK",
    "name": "Glenmark Pharmaceuticals Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "MEDANTA",
    "name": "Global Health Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "GMRAIRPORT",
    "name": "GMR Airports Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GODIGIT",
    "name": "Go Digit General Insurance Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GODFRYPHLP",
    "name": "Godfrey Phillips India Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "GODREJCP",
    "name": "Godrej Consumer Products Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "GODREJIND",
    "name": "Godrej Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GODREJPROP",
    "name": "Godrej Properties Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "GRASIM",
    "name": "Grasim Industries Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "FLUOROCHEM",
    "name": "Gujarat Fluorochemicals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GUJGASLTD",
    "name": "Gujarat Gas Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "HAVELLS",
    "name": "Havells India Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "HCLTECH",
    "name": "HCL Technologies Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "HDFCAMC",
    "name": "HDFC Asset Management Company Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "HDFCBANK",
    "name": "HDFC Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "HDFCLIFE",
    "name": "HDFC Life Insurance Company Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "HEROMOTOCO",
    "name": "Hero MotoCorp Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "HEXT",
    "name": "Hexaware Technologies Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "HINDALCO",
    "name": "Hindalco Industries Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "HAL",
    "name": "Hindustan Aeronautics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HINDPETRO",
    "name": "Hindustan Petroleum Corporation Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "HINDUNILVR",
    "name": "Hindustan Unilever Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "HINDZINC",
    "name": "Hindustan Zinc Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "POWERINDIA",
    "name": "Hitachi Energy India Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "HONAUT",
    "name": "Honeywell Automation India Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "HUDCO",
    "name": "Housing & Urban Development Corporation Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "HYUNDAI",
    "name": "Hyundai Motor India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ICICIBANK",
    "name": "ICICI Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "ICICIGI",
    "name": "ICICI Lombard General Insurance Company Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "ICICIPRULI",
    "name": "ICICI Prudential Life Insurance Company Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "IDBI",
    "name": "IDBI Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "IDFCFIRSTB",
    "name": "IDFC First Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "INDIANB",
    "name": "Indian Bank",
    "sector": "BANKING"
  },
  {
    "symbol": "IOC",
    "name": "Indian Oil Corporation Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "IOB",
    "name": "Indian Overseas Bank",
    "sector": "BANKING"
  },
  {
    "symbol": "IRCTC",
    "name": "Indian Railway Catering And Tourism Corporation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "IRFC",
    "name": "Indian Railway Finance Corporation Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "IREDA",
    "name": "Indian Renewable Energy Development Agency Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "INDUSTOWER",
    "name": "Indus Towers Ltd.",
    "sector": "TELECOM"
  },
  {
    "symbol": "INDUSINDBK",
    "name": "IndusInd Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "NAUKRI",
    "name": "Info Edge (India) Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "INFY",
    "name": "Infosys Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "INDIGO",
    "name": "Interglobe Aviation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "IPCALAB",
    "name": "Ipca Laboratories Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "IRB",
    "name": "IRB Infrastructure Developers Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "ITCHOTELS",
    "name": "ITC Hotels Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ITC",
    "name": "ITC Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "ITI",
    "name": "ITI Ltd.",
    "sector": "TELECOM"
  },
  {
    "symbol": "JSL",
    "name": "Jindal Stainless Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "JINDALSTEL",
    "name": "Jindal Steel & Power Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "JIOFIN",
    "name": "JIO Financial Services Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "JKCEMENT",
    "name": "JK Cement Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "JSWENERGY",
    "name": "JSW Energy Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "JSWINFRA",
    "name": "JSW Infrastructure Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JSWSTEEL",
    "name": "JSW Steel Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "JUBLFOOD",
    "name": "Jubilant FoodWorks Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "KPRMILL",
    "name": "K.P.R. Mill Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KALYANKJIL",
    "name": "Kalyan Jewellers India Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "KAYNES",
    "name": "Kaynes Technology India Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "KEI",
    "name": "KEI Industries Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "KOTAKBANK",
    "name": "Kotak Mahindra Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "KPITTECH",
    "name": "KPIT Technologies Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "LTF",
    "name": "L&T Finance Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "LTTS",
    "name": "L&T Technology Services Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "LT",
    "name": "Larsen & Toubro Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "LAURUSLABS",
    "name": "Laurus Labs Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "LICHSGFIN",
    "name": "LIC Housing Finance Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "LICI",
    "name": "Life Insurance Corporation of India",
    "sector": "BANKING"
  },
  {
    "symbol": "LINDEINDIA",
    "name": "Linde India Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "LLOYDSME",
    "name": "Lloyds Metals & Energy Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "LTIM",
    "name": "LTIMindtree Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "LUPIN",
    "name": "Lupin Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "LODHA",
    "name": "Macrotech Developers Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "SCRIP-132720",
    "name": "Mahindra & Mahindra Financial Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SCRIP-100520",
    "name": "Mahindra & Mahindra Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MANKIND",
    "name": "Mankind Pharma Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "MARICO",
    "name": "Marico Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "MARUTI",
    "name": "Maruti Suzuki India Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "MFSL",
    "name": "Max Financial Services Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "MAXHEALTH",
    "name": "Max Healthcare Institute Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "MAZDOCK",
    "name": "Mazagon Dock Shipbuilders Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "METROBRAND",
    "name": "Metro Brands Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "MOTILALOFS",
    "name": "Motilal Oswal Financial Services Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "MPHASIS",
    "name": "Mphasis Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "MRF",
    "name": "MRF Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "MCX",
    "name": "Multi Commodity Exchange Of India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MUTHOOTFIN",
    "name": "Muthoot Finance Ltd.",
    "sector": "CONGLOMERATE"
  },
  {
    "symbol": "NH",
    "name": "Narayana Hrudayalaya Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "NATIONALUM",
    "name": "National Aluminium Company Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "NBCC",
    "name": "NBCC (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NESTLEIND",
    "name": "Nestle India Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "NHPC",
    "name": "NHPC Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "NAM-INDIA",
    "name": "Nippon Life India Asset Management Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NLCINDIA",
    "name": "NLC India Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "NMDC",
    "name": "NMDC Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "NTPCGREEN",
    "name": "NTPC Green Energy Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "NTPC",
    "name": "NTPC Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "OBEROIRLTY",
    "name": "Oberoi Realty Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "ONGC",
    "name": "Oil & Natural Gas Corporation Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "OIL",
    "name": "Oil India Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "PAYTM",
    "name": "One97 Communications Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "OFSS",
    "name": "Oracle Financial Services Software Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "PAGEIND",
    "name": "Page Industries Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "PATANJALI",
    "name": "Patanjali Foods Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "POLICYBZR",
    "name": "PB Fintech Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "PERSISTENT",
    "name": "Persistent Systems Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "PETRONET",
    "name": "Petronet LNG Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "PIIND",
    "name": "PI Industries Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "PIDILITIND",
    "name": "Pidilite Industries Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "POLYCAB",
    "name": "Polycab India Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "POONAWALLA",
    "name": "Poonawalla Fincorp Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "PFC",
    "name": "Power Finance Corporation Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "POWERGRID",
    "name": "Power Grid Corporation Of India Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "PREMIERENE",
    "name": "Premier Energies Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "PRESTIGE",
    "name": "Prestige Estates Projects Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "PGHH",
    "name": "Procter & Gamble Hygiene and Health Care Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PNB",
    "name": "Punjab National Bank",
    "sector": "BANKING"
  },
  {
    "symbol": "RADICO",
    "name": "Radico Khaitan Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "RVNL",
    "name": "Rail Vikas Nigam Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "RECLTD",
    "name": "REC Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "RELIANCE",
    "name": "Reliance Industries Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "MOTHERSON",
    "name": "Samvardhana Motherson International Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "SBICARD",
    "name": "SBI Cards And Payment Services Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "SBILIFE",
    "name": "SBI Life Insurance Company Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "SCHAEFFLER",
    "name": "Schaeffler India Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "SHREECEM",
    "name": "Shree Cement Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "SHRIRAMFIN",
    "name": "Shriram Finance Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "SIEMENS",
    "name": "Siemens Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "SJVN",
    "name": "SJVN Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "SOLARINDS",
    "name": "Solar Industries India Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "SONACOMS",
    "name": "Sona BLW Precision Forgings Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "SRF",
    "name": "SRF Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "SBIN",
    "name": "State Bank Of India",
    "sector": "BANKING"
  },
  {
    "symbol": "SAIL",
    "name": "Steel Authority Of India Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "SUNPHARMA",
    "name": "Sun Pharmaceutical Industries Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "SUNDARMFIN",
    "name": "Sundaram Finance Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "SUPREMEIND",
    "name": "Supreme Industries Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "SUZLON",
    "name": "Suzlon Energy Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "SWIGGY",
    "name": "Swiggy Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TATACOMM",
    "name": "Tata Communications Ltd.",
    "sector": "CONGLOMERATE"
  },
  {
    "symbol": "TCS",
    "name": "Tata Consultancy Services Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "TATACONSUM",
    "name": "Tata Consumer Products Ltd.",
    "sector": "CONGLOMERATE"
  },
  {
    "symbol": "TATAELXSI",
    "name": "Tata Elxsi Ltd.",
    "sector": "CONGLOMERATE"
  },
  {
    "symbol": "TATAINVEST",
    "name": "Tata Investment Corporation Ltd.",
    "sector": "CONGLOMERATE"
  },
  {
    "symbol": "TATAMOTORS",
    "name": "Tata Motors Ltd.",
    "sector": "CONGLOMERATE"
  },
  {
    "symbol": "TATAPOWER",
    "name": "Tata Power Company Ltd.",
    "sector": "CONGLOMERATE"
  },
  {
    "symbol": "TATASTEEL",
    "name": "Tata Steel Ltd.",
    "sector": "CONGLOMERATE"
  },
  {
    "symbol": "TATATECH",
    "name": "Tata Technologies Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "TECHM",
    "name": "Tech Mahindra Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "FEDERALBNK",
    "name": "The Federal Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "FACT",
    "name": "The Fertilisers And Chemicals Travancore Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "INDHOTEL",
    "name": "The Indian Hotels Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NIACL",
    "name": "The New India Assurance Company Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "PHOENIXLTD",
    "name": "The Phoenix Mills Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "THERMAX",
    "name": "Thermax Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "TITAN",
    "name": "Titan Company Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "TORNTPHARM",
    "name": "Torrent Pharmaceuticals Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "TORNTPOWER",
    "name": "Torrent Power Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "TRENT",
    "name": "Trent Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "TIINDIA",
    "name": "Tube Investments of India Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "TVSMOTOR",
    "name": "TVS Motor Company Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "UCOBANK",
    "name": "UCO Bank",
    "sector": "BANKING"
  },
  {
    "symbol": "ULTRACEMCO",
    "name": "Ultratech Cement Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "UNIONBANK",
    "name": "Union Bank Of India",
    "sector": "BANKING"
  },
  {
    "symbol": "UBL",
    "name": "United Breweries Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "UNITDSPR",
    "name": "United Spirits Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "UNOMINDA",
    "name": "UNO Minda Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "UPL",
    "name": "UPL Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "VBL",
    "name": "Varun Beverages Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "VEDL",
    "name": "Vedanta Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "VMM",
    "name": "Vishal Mega Mart Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "IDEA",
    "name": "Vodafone Idea Ltd.",
    "sector": "TELECOM"
  },
  {
    "symbol": "VOLTAS",
    "name": "Voltas Ltd.",
    "sector": "CONGLOMERATE"
  },
  {
    "symbol": "WAAREEENER",
    "name": "Waaree Energies Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "WIPRO",
    "name": "Wipro Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "YESBANK",
    "name": "Yes Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "ZYDUSLIFE",
    "name": "Zydus Lifesciences Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "AADHARHFC",
    "name": "Aadhar Housing Finance Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "AARTIDRUGS",
    "name": "Aarti Drugs Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AARTIIND",
    "name": "Aarti Industries Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "AARTIPHARM",
    "name": "Aarti Pharmalabs Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AAVAS",
    "name": "Aavas Financiers Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "ACMESOLAR",
    "name": "Acme Solar Holdings Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ACE",
    "name": "Action Construction Equipment Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ACUTAAS",
    "name": "Acutaas Chemicals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ABFRL",
    "name": "Aditya Birla Fashion and Retail Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "ABREL",
    "name": "Aditya Birla Real Estate Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ABSLAMC",
    "name": "Aditya Birla Sun Life AMC Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "AVL",
    "name": "Aditya Vision Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AEGISLOG",
    "name": "Aegis Logistics Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "AEGISVOPAK",
    "name": "Aegis Vopak Terminals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AETHER",
    "name": "Aether Industries Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "AFCONS",
    "name": "Afcons Infrastructure Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "AFFLE",
    "name": "Affle 3i Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "AGI",
    "name": "AGI Greenpac Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "AHLUCONT",
    "name": "Ahluwalia Contracts (India) Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "AJAXENGG",
    "name": "Ajax Engineering Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AKUMS",
    "name": "Akums Drugs & Pharmaceuticals Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "AKZOINDIA",
    "name": "Akzo Nobel India Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "APLLTD",
    "name": "Alembic Pharmaceuticals Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "ALIVUS",
    "name": "Alivus Life Sciences Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ALKYLAMINE",
    "name": "Alkyl Amines Chemicals Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "ABDL",
    "name": "Allied Blenders And Distillers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ALOKINDS",
    "name": "Alok Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SCRIP-100008",
    "name": "Amara Raja Energy & Mobility Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AMBER",
    "name": "Amber Enterprises India Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "ANANDRATHI",
    "name": "Anand Rathi Wealth Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ANANTRAJ",
    "name": "Anant Raj Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "ANGELONE",
    "name": "Angel One Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "ANURAS",
    "name": "Anupam Rasayan India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "APOLLO",
    "name": "Apollo Micro Systems Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "APOLLOTYRE",
    "name": "Apollo Tyres Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "APTUS",
    "name": "Aptus Value Housing Finance India Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "ACI",
    "name": "Archean Chemical Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ARVINDFASN",
    "name": "Arvind Fashions Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "ARVIND",
    "name": "Arvind Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ASAHIINDIA",
    "name": "Asahi India Glass Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ASHOKA",
    "name": "Ashoka Buildcon Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "ASKAUTOLTD",
    "name": "ASK Automotive Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ASTERDM",
    "name": "Aster DM Healthcare Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "ASTRAMICRO",
    "name": "Astra Microwave Products Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ASTRAZEN",
    "name": "Astrazeneca Pharma India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ATHERENERG",
    "name": "Ather Energy Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ATUL",
    "name": "Atul Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "AURIONPRO",
    "name": "Aurionpro Solutions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AVALON",
    "name": "Avalon Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AVANTEL",
    "name": "Avantel Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AVANTIFEED",
    "name": "Avanti Feeds Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "AWFIS",
    "name": "Awfis Space Solutions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AXISCADES",
    "name": "Axiscades Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AZAD",
    "name": "Azad Engineering Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BAJAJELEC",
    "name": "Bajaj Electricals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BALAMINES",
    "name": "Balaji Amines Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "BALRAMCHIN",
    "name": "Balrampur Chini Mills Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BALUFORGE",
    "name": "Balu Forge Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BANCOINDIA",
    "name": "Banco Products (India) Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "BANDHANBNK",
    "name": "Bandhan Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "BANARISUG",
    "name": "Bannari Amman Sugars Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BANSALWIRE",
    "name": "Bansal Wire Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BASF",
    "name": "BASF India Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "BATAINDIA",
    "name": "Bata India Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "BAYERCROP",
    "name": "Bayer CropScience Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "BELRISE",
    "name": "Belrise Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BEML",
    "name": "BEML Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SCRIP-219234",
    "name": "Bengal & Assam Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BIKAJI",
    "name": "Bikaji Foods International Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BIRLACORPN",
    "name": "Birla Corporation Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "BSOFT",
    "name": "Birlasoft Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "BBOX",
    "name": "Black Box Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BLS",
    "name": "BLS International Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BLUEDART",
    "name": "Blue Dart Express Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BLUEJET",
    "name": "Blue Jet Healthcare Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "BBTC",
    "name": "Bombay Burmah Trading Corporation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SCRIP-311155",
    "name": "Bondada Engineering Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BOROLTD",
    "name": "Borosil Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BORORENEW",
    "name": "Borosil Renewables Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "FIRSTCRY",
    "name": "Brainbees Solutions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CAMLINFINE",
    "name": "Camlin Fine Sciences Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CAMPUS",
    "name": "Campus Activewear Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "CANFINHOME",
    "name": "Can Fin Homes Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "CAPLIPOINT",
    "name": "Caplin Point Laboratories Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "CGCL",
    "name": "Capri Global Capital Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CARBORUNIV",
    "name": "Carborundum Universal Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CARERATING",
    "name": "Care Ratings Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "CARTRADE",
    "name": "CarTrade Tech Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CASTROLIND",
    "name": "Castrol India Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "CCL",
    "name": "CCL Products (India) Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "MAPMYINDIA",
    "name": "CE Info Systems Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CEATLTD",
    "name": "Ceat Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "CEIGALL",
    "name": "Ceigall India Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "CELLO",
    "name": "Cello World Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CENTURYPLY",
    "name": "Century Plyboards (India) Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "CERA",
    "name": "Cera Sanitaryware Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CESC",
    "name": "CESC Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "CHALET",
    "name": "Chalet Hotels Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CHAMBLFERT",
    "name": "Chambal Fertilisers and Chemicals Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "CHEMPLASTS",
    "name": "Chemplast Sanmar Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CHENNPETRO",
    "name": "Chennai Petroleum Corporation Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "CHOICEIN",
    "name": "Choice International Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CIEINDIA",
    "name": "CIE Automotive India Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "CIGNITITEC",
    "name": "Cigniti Technologies Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "CUB",
    "name": "City Union Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "CLEAN",
    "name": "Clean Science And Technology Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "CMSINFO",
    "name": "CMS Info Systems Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CAMS",
    "name": "Computer Age Management Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CONCORDBIO",
    "name": "Concord Biotech Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "CRAFTSMAN",
    "name": "Craftsman Automation Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "CREDITACC",
    "name": "CreditAccess Grameen Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "CROMPTON",
    "name": "Crompton Greaves Consumer Electricals Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "CSBBANK",
    "name": "CSB Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "CYIENT",
    "name": "Cyient Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "DBCORP",
    "name": "D.B. Corp Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "DATAPATTNS",
    "name": "Data Patterns (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DCBBANK",
    "name": "DCB Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "DCMSHRIRAM",
    "name": "DCM Shriram Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "DEEPAKFERT",
    "name": "Deepak Fertilisers And Petrochemicals Corporation Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "DEEPAKNTR",
    "name": "Deepak Nitrite Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "DELHIVERY",
    "name": "Delhivery Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DEVYANI",
    "name": "Devyani International Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "DHANUKA",
    "name": "Dhanuka Agritech Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DIACABS",
    "name": "Diamond Power Infrastructure Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DBL",
    "name": "Dilip Buildcon Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "DCAL",
    "name": "Dishman Carbogen Amcis Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "DODLA",
    "name": "Dodla Dairy Ltd",
    "sector": "OTHER"
  },
  {
    "symbol": "DOMS",
    "name": "DOMS Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AGARWALEYE",
    "name": "Dr. Agarwal''s Health Care Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "LALPATHLAB",
    "name": "Dr. Lal Pathlabs Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "DYNAMATECH",
    "name": "Dynamatic Technologies Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "EIDPARRY",
    "name": "E.I.D. - Parry (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "E2E",
    "name": "E2E Networks Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "EASEMYTRIP",
    "name": "Easy Trip Planners Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "ECLERX",
    "name": "eClerx Services Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "EDELWEISS",
    "name": "Edelweiss Financial Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "EIHOTEL",
    "name": "EIH Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DRBECK",
    "name": "Elantas Beck India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ELECON",
    "name": "Elecon Engineering Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "EMIL",
    "name": "Electronics Mart India Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "ELECTCAST",
    "name": "Electrosteel Castings Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "ELGIEQUIP",
    "name": "Elgi Equipments Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SCRIP-278126",
    "name": "Elitecon International Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "EMAMILTD",
    "name": "Emami Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "EMBDL",
    "name": "Embassy Developments Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "EMCURE",
    "name": "Emcure Pharmaceuticals Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "EMUDHRA",
    "name": "eMudhra Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ENGINERSIN",
    "name": "Engineers India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ENTERO",
    "name": "Entero Healthcare Solutions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "EPIGRAL",
    "name": "Epigral Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "EPL",
    "name": "EPL Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "EQUITASBNK",
    "name": "Equitas Small Finance Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "ERIS",
    "name": "Eris Lifesciences Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "ESABINDIA",
    "name": "Esab India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ETHOSLTD",
    "name": "Ethos Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "EUREKAFORB",
    "name": "Eureka Forbes Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "FDC",
    "name": "FDC Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "FIEMIND",
    "name": "Fiem Industries Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "FINEORG",
    "name": "Fine Organic Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "FINCABLES",
    "name": "Finolex Cables Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "FINPIPE",
    "name": "Finolex Industries Ltd.",
    "sector": "CONGLOMERATE"
  },
  {
    "symbol": "FSL",
    "name": "Firstsource Solutions Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "SCRIP-124743",
    "name": "Fischer Medical Ventures Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "FIVESTAR",
    "name": "Five-Star Business Finance Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "FORCEMOT",
    "name": "Force Motors Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GABRIEL",
    "name": "Gabriel India Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "GALAXYSURF",
    "name": "Galaxy Surfactants Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GALLANTT",
    "name": "Gallantt Ispat Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "GANESHHOUC",
    "name": "Ganesh Housing Corporation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GRWRHITECH",
    "name": "Garware Hi-Tech Films Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GARFIBRES",
    "name": "Garware Technical Fibres Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GENUSPOWER",
    "name": "Genus Power Infrastructures Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "GHCL",
    "name": "GHCL Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "GLAND",
    "name": "Gland Pharma Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "GMMPFAUDLR",
    "name": "GMM Pfaudler Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SCRIP-305653",
    "name": "GMR Power and Urban Infra Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GOCOLORS",
    "name": "Go Fashion (India) Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "GPIL",
    "name": "Godawari Power And Ispat Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "GODREJAGRO",
    "name": "Godrej Agrovet Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "GOKEX",
    "name": "Gokaldas Exports Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GOKULAGRO",
    "name": "Gokul Agro Resources Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GOPAL",
    "name": "Gopal Snacks Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GRINFRA",
    "name": "GR Infraprojects Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "GRANULES",
    "name": "Granules India Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "GRAPHITE",
    "name": "Graphite India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GRAVITA",
    "name": "Gravita India Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "GREAVESCOT",
    "name": "Greaves Cotton Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GREENLAM",
    "name": "Greenlam Industries Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "GRINDWELL",
    "name": "Grindwell Norton Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GUJALKALI",
    "name": "Gujarat Alkalies And Chemicals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GAEL",
    "name": "Gujarat Ambuja Exports Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GMDCLTD",
    "name": "Gujarat Mineral Development Corporation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GNFC",
    "name": "Gujarat Narmada Valley Fertilizers & Chemicals Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "GPPL",
    "name": "Gujarat Pipavav Port Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "GSFC",
    "name": "Gujarat State Fertilizers & Chemicals Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "GSPL",
    "name": "Gujarat State Petronet Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "GULFOILLUB",
    "name": "Gulf Oil Lubricants India Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "HGINFRA",
    "name": "H.G. Infra Engineering Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "HAPPSTMNDS",
    "name": "Happiest Minds Technologies Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "HAPPYFORGE",
    "name": "Happy Forgings Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HATSUN",
    "name": "Hatsun Agro Product Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "HAWKINCOOK",
    "name": "Hawkins Cookers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HBLENGINE",
    "name": "HBL Engineering Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HCG",
    "name": "Healthcare Global Enterprises Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HEG",
    "name": "HEG Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HEIDELBERG",
    "name": "Heidelberg Cement India Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "HEMIPROP",
    "name": "Hemisphere Properties India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HERITGFOOD",
    "name": "Heritage Foods Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "HFCL",
    "name": "HFCL Ltd.",
    "sector": "TELECOM"
  },
  {
    "symbol": "HIKAL",
    "name": "Hikal Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HSCL",
    "name": "Himadri Speciality Chemical Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HCC",
    "name": "Hindustan Construction Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HINDCOPPER",
    "name": "Hindustan Copper Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "HNDFDS",
    "name": "Hindustan Foods Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HMT",
    "name": "HMT Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HOMEFIRST",
    "name": "Home First Finance Company India Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "HONASA",
    "name": "Honasa Consumer Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ISEC",
    "name": "ICICI Securities Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "ICRA",
    "name": "ICRA Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "IFBIND",
    "name": "IFB Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "IFCI",
    "name": "IFCI Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "IIFLCAPS",
    "name": "IIFL Capital Services Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "IIFL",
    "name": "IIFL Finance Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "IMAGICAA",
    "name": "Imagicaaworld Entertainment Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "INDGN",
    "name": "Indegene Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "INDIAGLYCO",
    "name": "India Glycols Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INDIASHLTR",
    "name": "India Shelter Finance Corporation Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "ITDC",
    "name": "India Tourism Development Corporation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INDIAMART",
    "name": "Indiamart Intermesh Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "IEX",
    "name": "Indian Energy Exchange Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INDIGOPNTS",
    "name": "Indigo Paints Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ICIL",
    "name": "Indo Count Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INDOSTAR",
    "name": "Indostar Capital Finance Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "IGL",
    "name": "Indraprastha Gas Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "INFIBEAM",
    "name": "Infibeam Avenues Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "INGERRAND",
    "name": "Ingersoll-Rand (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INNOVACAP",
    "name": "Innova Captab Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INOXGREEN",
    "name": "Inox Green Energy Services Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "INOXINDIA",
    "name": "Inox India Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "IWEL",
    "name": "Inox Wind Energy Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INOXWIND",
    "name": "Inox Wind Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "SCRIP-306788",
    "name": "Insolation Energy Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INTELLECT",
    "name": "Intellect Design Arena Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "IGIL",
    "name": "International Gemmological Institute (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "IKS",
    "name": "Inventurus Knowledge Solutions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "IONEXCHANG",
    "name": "Ion Exchange (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "IRCON",
    "name": "Ircon International Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "ISGEC",
    "name": "ISGEC Heavy Engineering Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ITDCEM",
    "name": "ITD Cementation India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JKIL",
    "name": "J Kumar Infraprojects Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "JAIBALAJI",
    "name": "Jai Balaji Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JISLJALEQS",
    "name": "Jain Irrigation Systems Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JPPOWER",
    "name": "Jaiprakash Power Ventures Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JSFB",
    "name": "Jana Small Finance Bank Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JBCHEPHARM",
    "name": "JB Chemicals & Pharmaceuticals Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "JBMA",
    "name": "JBM Auto Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JSLL",
    "name": "Jeena Sikho Lifecare Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JINDALSAW",
    "name": "Jindal Saw Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "JINDWORLD",
    "name": "Jindal Worldwide Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JKLAKSHMI",
    "name": "JK Lakshmi Cement Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "JKPAPER",
    "name": "JK Paper Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JKTYRE",
    "name": "JK Tyre & Industries Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "JMFINANCIL",
    "name": "JM Financial Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JCHAC",
    "name": "Johnson Controls - Hitachi Air Conditioning India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JSWHL",
    "name": "JSW Holdings Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JUBLINGREA",
    "name": "Jubilant Ingrevia Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JUBLPHARMA",
    "name": "Jubilant Pharmova Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "JUNIPER",
    "name": "Juniper Hotels Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JLHL",
    "name": "Jupiter Life Line Hospitals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JWL",
    "name": "Jupiter Wagons Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "JUSTDIAL",
    "name": "Just Dial Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "JYOTHYLAB",
    "name": "Jyothy Labs Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "JYOTICNC",
    "name": "Jyoti CNC Automation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KAJARIACER",
    "name": "Kajaria Ceramics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KPIL",
    "name": "Kalpataru Projects International Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SCRIP-132468",
    "name": "Kama Holdings Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KANSAINER",
    "name": "Kansai Nerolac Paints Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "KARURVYSYA",
    "name": "Karur Vysya Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "KSCL",
    "name": "Kaveri Seed Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KEC",
    "name": "KEC International Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "KENNAMET",
    "name": "Kennametal India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RUSTOMJEE",
    "name": "Keystone Realtors Ltd",
    "sector": "OTHER"
  },
  {
    "symbol": "KFINTECH",
    "name": "KFin Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KIOCL",
    "name": "KIOCL Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KIRLOSBROS",
    "name": "Kirloskar Brothers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KIRLFER",
    "name": "Kirloskar Ferrous Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KIRLOSIND",
    "name": "Kirloskar Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KIRLOSENG",
    "name": "Kirloskar Oil Engines Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KIRLPNU",
    "name": "Kirloskar Pneumatic Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KITEX",
    "name": "Kitex Garments Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KNRCON",
    "name": "KNR Constructions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KPIGREEN",
    "name": "KPI Green Energy Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "KRBL",
    "name": "KRBL Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "KIMS",
    "name": "Krishna Institute of Medical Sciences Ltd",
    "sector": "RETAIL"
  },
  {
    "symbol": "KRN",
    "name": "KRN Heat Exchanger And Refrigeration Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KSB",
    "name": "KSB Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "LATENTVIEW",
    "name": "Latent View Analytics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "LXCHEM",
    "name": "Laxmi Organic Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "IXIGO",
    "name": "Le Travenues Technology Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "LEMONTREE",
    "name": "Lemon Tree Hotels Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "LGBBROSLTD",
    "name": "LG Balakrishnan & Bros Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "LLOYDSENGG",
    "name": "Lloyds Engineering Works Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "LLOYDSENT",
    "name": "Lloyds Enterprises Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "LMW",
    "name": "LMW Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "LTFOODS",
    "name": "LT Foods Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "LUMAXTECH",
    "name": "Lumax Auto Technologies Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "LUXIND",
    "name": "Lux Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MCLOUD",
    "name": "Magellanic Cloud Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MGL",
    "name": "Mahanagar Gas Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "MAHSCOOTER",
    "name": "Maharashtra Scooters Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "MAHSEAMLES",
    "name": "Maharashtra Seamless Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "MHRIL",
    "name": "Mahindra Holidays & Resorts India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MAHLIFE",
    "name": "Mahindra Lifespace Developers Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "MANINFRA",
    "name": "Man InfraConstruction Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "MANAPPURAM",
    "name": "Manappuram Finance Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "MRPL",
    "name": "Mangalore Refinery And Petrochemicals Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "MANORAMA",
    "name": "Manorama Industries Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "MARKSANS",
    "name": "Marksans Pharma Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "MASFIN",
    "name": "MAS Financial Services Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "MASTEK",
    "name": "Mastek Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "MAXESTATES",
    "name": "Max Estates Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "MEDPLUS",
    "name": "Medplus Health Services Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "METROPOLIS",
    "name": "Metropolis Healthcare Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "MINDACORP",
    "name": "Minda Corporation Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "MIDHANI",
    "name": "Mishra Dhatu Nigam Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MMTC",
    "name": "MMTC Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "MOIL",
    "name": "MOIL Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "MSUMI",
    "name": "Motherson Sumi Wiring India Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "MPSLTD",
    "name": "MPS Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BECTORFOOD",
    "name": "Mrs. Bectors Food Specialities Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "MTARTECH",
    "name": "MTAR Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NATCOPHARM",
    "name": "Natco Pharma Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "NFL",
    "name": "National Fertilizers Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "SCRIP-104882",
    "name": "National Standard (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NAVA",
    "name": "Nava Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NAVINFLUOR",
    "name": "Navin Fluorine International Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "NAZARA",
    "name": "Nazara Technologies Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "NCC",
    "name": "NCC Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "NEOGEN",
    "name": "Neogen Chemicals Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "NESCO",
    "name": "Nesco Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NETWEB",
    "name": "Netweb Technologies India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NETWORK18",
    "name": "Network 18 Media & Investments Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "NPST",
    "name": "Network People Services Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NEULANDLAB",
    "name": "Neuland Laboratories Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "NEWGEN",
    "name": "Newgen Software Technologies Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "NIITMTS",
    "name": "NIIT Learning Systems Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "NIRLON",
    "name": "Nirlon Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NIVABUPA",
    "name": "Niva Bupa Health Insurance Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NSLNISP",
    "name": "NMDC Steel Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "NUVAMA",
    "name": "Nuvama Wealth Management Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "NUVOCO",
    "name": "Nuvoco Vistas Corporation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "OLAELEC",
    "name": "OLA Electric Mobility Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "OLECTRA",
    "name": "Olectra Greentech Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ONESOURCE",
    "name": "Onesource Specialty Pharma Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "OPTIEMUS",
    "name": "Optiemus Infracom Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ORIANA",
    "name": "Oriana Power Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ORIENTCEM",
    "name": "Orient Cement Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ORIENTELEC",
    "name": "Orient Electric Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "PARADEEP",
    "name": "Paradeep Phosphates Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PARAS",
    "name": "Paras Defence And Space Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PCJEWELLER",
    "name": "PC Jeweller Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "PCBL",
    "name": "PCBL Chemical Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PDSL",
    "name": "PDS Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PGIL",
    "name": "Pearl Global Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PFIZER",
    "name": "Pfizer Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "PGEL",
    "name": "PG Electroplast Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "SCRIP-130305",
    "name": "Piccadily Agro Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PILANIINVS",
    "name": "Pilani Investment And Industries Corporation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PEL",
    "name": "Piramal Enterprises Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "PPLPHARMA",
    "name": "Piramal Pharma Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "PNGJL",
    "name": "PN Gadgil Jewellers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PNBHOUSING",
    "name": "PNB Housing Finance Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "PNCINFRA",
    "name": "PNC Infratech Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "POLYMED",
    "name": "Poly Medicure Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "POLYPLEX",
    "name": "Polyplex Corporation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "POWERMECH",
    "name": "Power Mech Projects Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "PRAJIND",
    "name": "Praj Industries Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "PRICOLLTD",
    "name": "Pricol Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "PRSMJOHNSN",
    "name": "Prism Johnson Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PRIVISCL",
    "name": "Privi Speciality Chemicals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PGHL",
    "name": "Procter & Gamble Health Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "PRUDENT",
    "name": "Prudent Corporate Advisory Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PTC",
    "name": "PTC India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PTCIL",
    "name": "PTC Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PSB",
    "name": "Punjab & Sind Bank",
    "sector": "OTHER"
  },
  {
    "symbol": "PURVA",
    "name": "Puravankara Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "PVRINOX",
    "name": "PVR Inox Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "QUESS",
    "name": "Quess Corp Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "RSYSTEMS",
    "name": "R Systems International Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "RAILTEL",
    "name": "Railtel Corporation Of India Ltd.",
    "sector": "TELECOM"
  },
  {
    "symbol": "RAIN",
    "name": "Rain Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RAINBOW",
    "name": "Rainbow Children''s Medicare Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "RAJESHEXPO",
    "name": "Rajesh Exports Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RALLIS",
    "name": "Rallis India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RKFORGE",
    "name": "Ramkrishna Forgings Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RCF",
    "name": "Rashtriya Chemicals and Fertilizers Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "RATEGAIN",
    "name": "RateGain Travel Technologies Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "RATNAMANI",
    "name": "Ratnamani Metals & Tubes Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "RTNINDIA",
    "name": "RattanIndia Enterprises Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RTNPOWER",
    "name": "RattanIndia Power Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RAYMONDLSL",
    "name": "Raymond Lifestyle Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RAYMOND",
    "name": "Raymond Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RBLBANK",
    "name": "RBL Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "REDINGTON",
    "name": "Redington Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "REDTAPE",
    "name": "Redtape Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "REFEX",
    "name": "Refex Industries Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "RELAXO",
    "name": "Relaxo Footwears Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "RELINFRA",
    "name": "Reliance Infrastructure Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RPOWER",
    "name": "Reliance Power Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RELIGARE",
    "name": "Religare Enterprises Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RESPONIND",
    "name": "Responsive Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RBA",
    "name": "Restaurant Brands Asia Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RHIM",
    "name": "RHI Magnesita India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RITES",
    "name": "Rites Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "ROLEXRINGS",
    "name": "Rolex Rings Ltd",
    "sector": "OTHER"
  },
  {
    "symbol": "ROUTE",
    "name": "Route Mobile Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RRKABEL",
    "name": "RR Kabel Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SAFARI",
    "name": "Safari Industries (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SAGILITY",
    "name": "Sagility India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SAILIFE",
    "name": "Sai Life Sciences Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "SAMHI",
    "name": "Samhi Hotels Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SAMMAANCAP",
    "name": "Sammaan Capital Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SANDUMA",
    "name": "Sandur Manganese & Iron Ores Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "SANOFICONR",
    "name": "Sanofi Consumer Healthcare India Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "SANOFI",
    "name": "Sanofi India Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "SANSERA",
    "name": "Sansera Engineering Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "SAPPHIRE",
    "name": "Sapphire Foods India Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "SARDAEN",
    "name": "Sarda Energy & Minerals Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "SAREGAMA",
    "name": "Saregama India Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "SBFC",
    "name": "SBFC Finance Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "THELEELA",
    "name": "Schloss Bangalore Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SCHNEIDER",
    "name": "Schneider Electric Infrastructure Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "SENCO",
    "name": "Senco Gold Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "SEQUENT",
    "name": "Sequent Scientific Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "SCRIP-112329",
    "name": "SG Mart Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SHAILY",
    "name": "Shaily Engineering Plastics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SHAKTIPUMP",
    "name": "Shakti Pumps (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SHARDACROP",
    "name": "Sharda Cropchem Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "SHARDAMOTR",
    "name": "Sharda Motor Industries Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "SFL",
    "name": "Sheela Foam Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "SCRIP-131201",
    "name": "Shilchar Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SHILPAMED",
    "name": "Shilpa Medicare Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "SCI",
    "name": "Shipping Corporation Of India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SHOPERSTOP",
    "name": "Shoppers Stop Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "RENUKA",
    "name": "Shree Renuka Sugars Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SHRIPISTON",
    "name": "Shriram Pistons & Rings Ltd",
    "sector": "OTHER"
  },
  {
    "symbol": "SHYAMMETL",
    "name": "Shyam Metalics And Energy Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "SIGNATURE",
    "name": "Signatureglobal (India) Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "SIS",
    "name": "SIS Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SKFINDIA",
    "name": "SKF India Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "SKIPPER",
    "name": "Skipper Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SKYGOLD",
    "name": "Sky Gold and Diamonds Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SOBHA",
    "name": "Sobha Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "SONATSOFTW",
    "name": "Sonata Software Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "SPICEJET",
    "name": "SpiceJet Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "STARCEMENT",
    "name": "Star Cement Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "STARHEALTH",
    "name": "Star Health and Allied Insurance Company Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "SWSOLAR",
    "name": "Sterling and Wilson Renewable Energy Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "STAR",
    "name": "Strides Pharma Science Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "STYRENIX",
    "name": "Styrenix Performance Materials Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SUBROS",
    "name": "Subros Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "SUDARSCHEM",
    "name": "Sudarshan Chemical Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SUMICHEM",
    "name": "Sumitomo Chemical India Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "SPARC",
    "name": "Sun Pharma Advanced Research Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SUNTV",
    "name": "Sun TV Network Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "SUNDARMHLD",
    "name": "Sundaram Finance Holdings Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SUNCLAY",
    "name": "Sundaram-Clayton Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SUNDRMFAST",
    "name": "Sundram Fasteners Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SUNFLAG",
    "name": "Sunflag Iron And Steel Company Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "SUNTECK",
    "name": "Sunteck Realty Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "SUPRAJIT",
    "name": "Suprajit Engineering Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "SPLPETRO",
    "name": "Supreme Petrochem Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SUPRIYA",
    "name": "Supriya Lifescience Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "SURYAROSNI",
    "name": "Surya Roshni Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "SUVEN",
    "name": "Suven Life Sciences Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SWANENERGY",
    "name": "Swan Energy Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SWARAJENG",
    "name": "Swaraj Engines Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SYMPHONY",
    "name": "Symphony Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SYNGENE",
    "name": "Syngene International Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "SYRMA",
    "name": "Syrma SGS Technology Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "TMB",
    "name": "Tamilnad Mercantile Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "TANLA",
    "name": "Tanla Platforms Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "TARC",
    "name": "TARC Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "TATACHEM",
    "name": "Tata Chemicals Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "TTML",
    "name": "Tata Teleservices (Maharashtra) Ltd.",
    "sector": "TELECOM"
  },
  {
    "symbol": "TBOTEK",
    "name": "TBO Tek Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TDPOWERSYS",
    "name": "TD Power Systems Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "TECHNOE",
    "name": "Techno Electric & Engineering Company Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "TIIL",
    "name": "Technocraft Industries (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TEGA",
    "name": "Tega Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TEJASNET",
    "name": "Tejas Networks Ltd.",
    "sector": "TELECOM"
  },
  {
    "symbol": "TEXRAIL",
    "name": "Texmaco Rail & Engineering Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "THANGAMAYL",
    "name": "Thangamayil Jewellery Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "ANUP",
    "name": "The Anup Engineering Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GESHIP",
    "name": "The Great Eastern Shipping Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INDIACEM",
    "name": "The India Cements Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "SCRIP-132209",
    "name": "The Jammu & Kashmir Bank Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KTKBANK",
    "name": "The Karnataka Bank Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RAMCOCEM",
    "name": "The Ramco Cements Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "SOUTHBANK",
    "name": "The South Indian Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "THOMASCOOK",
    "name": "Thomas Cook (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "THYROCARE",
    "name": "Thyrocare Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TI",
    "name": "Tilaknagar Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TIMETECHNO",
    "name": "Time Technoplast Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "TIMKEN",
    "name": "Timken India Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "TIPSMUSIC",
    "name": "Tips Music Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "TITAGARH",
    "name": "Titagarh Rail Systems Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "TARIL",
    "name": "Transformers & Rectifiers (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TCI",
    "name": "Transport Corporation Of India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TRANSRAILL",
    "name": "Transrail Lighting Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TRIDENT",
    "name": "Trident Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TRIVENI",
    "name": "Triveni Engineering & Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TRITURBINE",
    "name": "Triveni Turbine Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TTKPRESTIG",
    "name": "TTK Prestige Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TVSHLTD",
    "name": "TVS Holdings Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TVSSCS",
    "name": "TVS Supply Chain Solutions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "UFLEX",
    "name": "Uflex Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "UJJIVANSFB",
    "name": "Ujjivan Small Finance Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "UNICHEMLAB",
    "name": "Unichem Laboratories Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "UNIMECH",
    "name": "Unimech Aerospace and Manufacturing Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "USHAMART",
    "name": "Usha Martin Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "UTIAMC",
    "name": "UTI Asset Management Company Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "VGUARD",
    "name": "V-Guard Industries Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "VMART",
    "name": "V-Mart Retail Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "V2RETAIL",
    "name": "V2 Retail Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "WABAG",
    "name": "VA Tech Wabag Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VAIBHAVGBL",
    "name": "Vaibhav Global Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DBREALTY",
    "name": "Valor Estate Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "VTL",
    "name": "Vardhman Textiles Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VARROC",
    "name": "Varroc Engineering Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MANYAVAR",
    "name": "Vedant Fashions Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "VENTIVE",
    "name": "Ventive Hospitality Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VESUVIUS",
    "name": "Vesuvius India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VIJAYA",
    "name": "Vijaya Diagnostic Centre Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VINATIORGA",
    "name": "Vinati Organics Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "VIPIND",
    "name": "VIP Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VOLTAMP",
    "name": "Voltamp Transformers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VRLLOG",
    "name": "VRL Logistics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VSTIND",
    "name": "VST Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "WAAREERTL",
    "name": "Waaree Renewable Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "WEBELSOLAR",
    "name": "Websol Energy System Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "WELCORP",
    "name": "Welspun Corp Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "WELENT",
    "name": "Welspun Enterprises Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "WELSPUNLIV",
    "name": "Welspun Living Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "WESTLIFE",
    "name": "Westlife Foodworld Ltd",
    "sector": "FMCG"
  },
  {
    "symbol": "WHIRLPOOL",
    "name": "Whirlpool Of India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "WOCKPHARMA",
    "name": "Wockhardt Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "WONDERLA",
    "name": "Wonderla Holidays Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "SCRIP-105872",
    "name": "WPIL Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "YATHARTH",
    "name": "Yatharth Hospital & Trauma Care Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BASF",
    "name": "BASF India Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "BAYERCROP",
    "name": "Bayer CropScience Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "DHANUKA",
    "name": "Dhanuka Agritech Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RALLIS",
    "name": "Rallis India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SHARDACROP",
    "name": "Sharda Cropchem Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "SUMICHEM",
    "name": "Sumitomo Chemical India Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "20MICRONS",
    "name": "20 Microns Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "532067",
    "name": "3B Blackbio Dx Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "5PAISA",
    "name": "5Paisa Capital Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "63MOONS",
    "name": "63 Moons Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "540718",
    "name": "Aayush Art And Bullion Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "539528",
    "name": "Aayush Wellness Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ABCOTS",
    "name": "AB Cotspin India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ABINFRA",
    "name": "AB Infrabuild Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AFSL",
    "name": "Abans Financial Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ACCELYA",
    "name": "Accelya Solutions India Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "ADFFOODS",
    "name": "ADF Foods Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "BIRLAMONEY",
    "name": "Aditya Birla Money Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ADOR",
    "name": "Ador Welding Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "543230",
    "name": "Advait Energy Transitions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ADVENZYMES",
    "name": "Advanced Enzyme Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SATINDLTD",
    "name": "Aeroflex Enterprises Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AEROFLEX",
    "name": "Aeroflex Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "544224",
    "name": "Afcom Holdings Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AGARIND",
    "name": "Agarwal Industrial Corporation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AGIIL",
    "name": "AGI Infra Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AIMTRON",
    "name": "Aimtron Electronics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AJMERA",
    "name": "Ajmera Realty & Infra India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ALEMBICLTD",
    "name": "Alembic Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "505725",
    "name": "Algoquant Fintech Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ALICON",
    "name": "Alicon Castalloy Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "ALLETEC",
    "name": "All E Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ACLGATI",
    "name": "Allcargo Gati Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ALLCARGO",
    "name": "Allcargo Logistics Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "ATL",
    "name": "Allcargo Terminals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ALLDIGI",
    "name": "Alldigi Tech Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "ADSL",
    "name": "Allied Digital Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ALPEXSOLAR",
    "name": "Alpex Solar Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "506597",
    "name": "Amal Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AMBIKCO",
    "name": "Ambika Cotton Mills Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "544037",
    "name": "Amic Forging Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AMNPLST",
    "name": "Amines & Plasticizers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AMRUTANJAN",
    "name": "Amrutanjan Health Care Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ANDHRAPAP",
    "name": "Andhra Paper Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ANDREWYU",
    "name": "Andrew Yule & Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AWHCL",
    "name": "Antony Waste Handling Cell Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ANUHPHR",
    "name": "Anuh Pharma Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "APCOTEXIND",
    "name": "Apcotex Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PARKHOTELS",
    "name": "Apeejay Surrendra Park Hotels Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "APOLLOPIPE",
    "name": "Apollo Pipes Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "APTECHT",
    "name": "Aptech Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ARIHANTCAP",
    "name": "Arihant Capital Markets Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ARIHANTSUP",
    "name": "Arihant Superstructures Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "ARKADE",
    "name": "Arkade Developers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ARMANFIN",
    "name": "Arman Financial Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ARROWGREEN",
    "name": "Arrow Greentech Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ARTEMISMED",
    "name": "Artemis Medicare Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ARVSMART",
    "name": "Arvind Smartspaces Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ASHAPURMIN",
    "name": "Ashapura Minechem Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ASHIANA",
    "name": "Ashiana Housing Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "543766",
    "name": "Ashika Credit Capital Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ASIANENE",
    "name": "Asian Energy Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ASIANTILES",
    "name": "Asian Granito India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "531847",
    "name": "Asian Star Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "526433",
    "name": "ASM Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ASALCBR",
    "name": "Associated Alcohols & Breweries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ASTEC",
    "name": "Astec Lifesciences Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "ATULAUTO",
    "name": "Atul Auto Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AURUM",
    "name": "Aurum Proptech Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "APS",
    "name": "Australian Premium Solar (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AUTOCORP",
    "name": "Automobile Corporation of Goa Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "AUTOAXLES",
    "name": "Automotive Axles Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "ASAL",
    "name": "Automotive Stampings and Assemblies Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "AVADHSUGAR",
    "name": "Avadh Sugar & Energy Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AVTNPL",
    "name": "AVT Natural Products Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "523850",
    "name": "Axtel Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "AYMSYNTEX",
    "name": "AYM Syntex Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BLKASHYAP",
    "name": "B.L. Kashyap and Sons Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "STYLEBAAZA",
    "name": "Baazar Style Retail Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "BAJAJCON",
    "name": "Bajaj Consumer Care Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "BAJAJHCARE",
    "name": "Bajaj Healthcare Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BAJAJHIND",
    "name": "Bajaj Hindusthan Sugar Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "507944",
    "name": "Bajaj Steel Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BAJEL",
    "name": "Bajel Projects Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BALAJITELE",
    "name": "Balaji Telefilms Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BALMLAWRIE",
    "name": "Balmer Lawrie & Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "532485",
    "name": "Balmer Lawrie Investments Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "512025",
    "name": "Banganga Paper Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BARBEQUE",
    "name": "Barbeque-Nation Hospitality Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BASILIC",
    "name": "Basilic Fly Studio Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BCLIND",
    "name": "BCL Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "539018",
    "name": "Beekay Steel Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BLAL",
    "name": "BEML Land Assets Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "509438",
    "name": "Benares Hotels Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BESTAGRO",
    "name": "Best Agrolife Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BETA",
    "name": "Beta Drugs Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "BFINVEST",
    "name": "BF Investment Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BFUTILITIE",
    "name": "BF Utilities Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BGRENERGY",
    "name": "BGR Energy Systems Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BHAGERIA",
    "name": "Bhageria Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BHAGCHEM",
    "name": "Bhagiradha Chemicals & Industries Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "BEPL",
    "name": "Bhansali Engineering Polymers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BBL",
    "name": "Bharat Bijlee Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "521238",
    "name": "Bharat Global Developers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "541096",
    "name": "Bharat Parenterals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BHARATRAS",
    "name": "Bharat Rasayan Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BHARATWIRE",
    "name": "Bharat Wire Ropes Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BIL",
    "name": "Bhartiya International Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "BIGBLOC",
    "name": "Bigbloc Construction Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "BIRLANU",
    "name": "BirlaNu Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BLISSGVS",
    "name": "Bliss GVS Pharma Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BLSE",
    "name": "BLS E-Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "539607",
    "name": "Blue Cloud Softech Solutions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "514440",
    "name": "Blue Pearl Agriventures Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "542669",
    "name": "BMW Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "526125",
    "name": "BN Holdings Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BODALCHEM",
    "name": "Bodal Chemicals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BOMDYEING",
    "name": "Bombay Dyeing And Manufacturing Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BSHSL",
    "name": "Bombay Super Hybrid Seeds Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BOROSCI",
    "name": "Borosil Scientific Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "543831",
    "name": "Bright Outdoor Media Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BCG",
    "name": "Brightcom Group Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BUTTERFLY",
    "name": "Butterfly Gandhimathi Appliances Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "C2C",
    "name": "C2C Advanced Systems Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CANTABIL",
    "name": "Cantabil Retail India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CAPACITE",
    "name": "Capacit''e Infraprojects Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "CIFL",
    "name": "Capital India Finance Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CAPITALSFB",
    "name": "Capital Small Finance Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "CARRARO",
    "name": "Carraro India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CARYSIL",
    "name": "Carysil Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "538734",
    "name": "Ceinsys Tech Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CELLECOR",
    "name": "Cellecor Gadgets Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CENTRUM",
    "name": "Centrum Capital Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CENTUM",
    "name": "Centum Electronics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CENTENKA",
    "name": "Century Enka Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "543920",
    "name": "CFF Fluid Control Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CLSEL",
    "name": "Chaman Lal Setia Exports Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CHEMCON",
    "name": "Chemcon Speciality Chemicals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CHEMFAB",
    "name": "Chemfab Alkalis Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "519477",
    "name": "CIAN Agro Industries & Infrastructure Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "542727",
    "name": "City Pulse Multiventures Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "542866",
    "name": "Colab Platforms Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "543619",
    "name": "Concord Control Systems Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CEWATER",
    "name": "Concord Enviro Systems Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CONFIPET",
    "name": "Confidence Petroleum India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CCCL",
    "name": "Consolidated Construction Consortium Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CONTROLPR",
    "name": "Control Print Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "COOLCAPS",
    "name": "Cool Caps Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "543928",
    "name": "Cosmic CRF Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "COSMOFIRST",
    "name": "Cosmo First Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CREATIVE",
    "name": "Creative Newtech Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MUFTI",
    "name": "Credo Brands Marketing Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "CREST",
    "name": "Crest Ventures Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "523105",
    "name": "Cropster Agro Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CSLFINANCE",
    "name": "CSL Finance Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CUPID",
    "name": "Cupid Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "CYIENTDLM",
    "name": "Cyient DLM Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DLINKINDIA",
    "name": "D-Link (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DPABHUSHAN",
    "name": "D.P. Abhushan Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DALMIASUG",
    "name": "Dalmia Bharat Sugar And Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DAMCAPITAL",
    "name": "DAM Capital Advisors Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DANISH",
    "name": "Danish Power Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DATAMATICS",
    "name": "Datamatics Global Services Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "DCMSRIND",
    "name": "DCM Shriram Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DCW",
    "name": "DCW Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DCXINDIA",
    "name": "DCX Systems Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DDEVPLSTIK",
    "name": "Ddev Plastiks Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DECCANCE",
    "name": "Deccan Cements Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "512068",
    "name": "Deccan Gold Mines Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DEEDEV",
    "name": "Dee Development Engineers Ltd",
    "sector": "OTHER"
  },
  {
    "symbol": "DEEPINDS",
    "name": "Deep Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DELTACORP",
    "name": "Delta Corp Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DEN",
    "name": "Den Networks Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "DENTA",
    "name": "Denta Water And Infra Solutions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DHAMPURSUG",
    "name": "Dhampur Sugar Mills Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DHANI",
    "name": "Dhani Services Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "DHANBANK",
    "name": "Dhanlaxmi Bank Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DHARMAJ",
    "name": "Dharmaj Crop Guard Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DHUNINV",
    "name": "Dhunseri Investments Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DVL",
    "name": "Dhunseri Ventures Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DIFFNKG",
    "name": "Diffusion Engineers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GEORGFISCH",
    "name": "Disa India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DISHTV",
    "name": "Dish TV India Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "DIVGIITTS",
    "name": "Divgi Torqtransfer Systems Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DOLATALGO",
    "name": "Dolat Algotech Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DOLLAR",
    "name": "Dollar Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DOLPHIN",
    "name": "Dolphin Offshore Enterprises (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "526783",
    "name": "Dr Agarwals Eye Hospital Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DREAMFOLKS",
    "name": "Dreamfolks Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DREDGECORP",
    "name": "Dredging Corporation Of India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DWARKESH",
    "name": "Dwarikesh Sugar Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DSSL",
    "name": "Dynacons Systems & Solutions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DYCL",
    "name": "Dynamic Cables Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "530643",
    "name": "Eco Recycling Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ECOSMOBLTY",
    "name": "Ecos (India) Mobility & Hospitality Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "512008",
    "name": "EFC (I) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "EIHAHOTELS",
    "name": "EIH Associated Hotels Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "EIMCOELECO",
    "name": "Eimco Elecon (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "503681",
    "name": "Elcid Investments Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ELDEHSG",
    "name": "Eldeco Housing & Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ELECTHERM",
    "name": "Electrotherm (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ELIN",
    "name": "Elin Electronics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ELPROINTL",
    "name": "Elpro International Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "EMSLIMITED",
    "name": "EMS Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "533477",
    "name": "Enkei Wheels (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ENIL",
    "name": "Entertainment Network (India) Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "EIEL",
    "name": "Enviro Infra Engineers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "EPACK",
    "name": "EPACK Durable Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "531035",
    "name": "Eraaya Lifespaces Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ESAFSFB",
    "name": "ESAF Small Finance Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "ESFL",
    "name": "Essen Speciality Films Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ESTER",
    "name": "Ester Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "EVEREADY",
    "name": "Eveready Industries India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "EVERESTIND",
    "name": "Everest Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "EKC",
    "name": "Everest Kanto Cylinder Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "EXCELINDUS",
    "name": "Excel Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "EXICOM",
    "name": "Exicom Tele-Systems Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "EXPLEOSOL",
    "name": "Expleo Solutions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "FAIRCHEMOR",
    "name": "Fairchem Organics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "FAZE3Q",
    "name": "Faze Three Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "FEDFINA",
    "name": "Fedbank Financial Services Ltd",
    "sector": "BANKING"
  },
  {
    "symbol": "511628",
    "name": "Fedders Holding Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "FMGOETZE",
    "name": "Federal-Mogul Goetze (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "506414",
    "name": "Fermenta Biotech Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "FILATEX",
    "name": "Filatex India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "FCL",
    "name": "Fineotex Chemical Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "508954",
    "name": "Finkurve Financial Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "FINOPB",
    "name": "Fino Payments Bank Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "FLAIR",
    "name": "Flair Writing Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "FOCE",
    "name": "Foce India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "FOCUS",
    "name": "Focus Lighting & Fixtures Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "FOODSIN",
    "name": "Foods & Inns Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "544186",
    "name": "Forbes Precision Tools And Machine Parts Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "FOSECOIND",
    "name": "Foseco India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "522195",
    "name": "Frontier Springs Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "FUSION",
    "name": "Fusion Finance Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GALAPREC",
    "name": "Gala Precision Engineering Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GANDHAR",
    "name": "Gandhar Oil Refinery (India) Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "GANDHITUBE",
    "name": "Gandhi Special Tubes Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GANESHBE",
    "name": "Ganesh Benzoplast Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GGBL",
    "name": "Ganesh Green Bharat Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GANESHIN",
    "name": "Ganesh Infraworld Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GANECOS",
    "name": "Ganesha Ecosphere Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GARUDA",
    "name": "Garuda Construction & Engineering Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GATEWAY",
    "name": "Gateway Distriparks Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GEPIL",
    "name": "GE Power India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GEECEE",
    "name": "GeeCee Ventures Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GENESYS",
    "name": "Genesys International Corporation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GEOJITFSL",
    "name": "Geojit Financial Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GHCLTEXTIL",
    "name": "GHCL Textiles Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "505504",
    "name": "GHV Infra Projects Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GICHSGFIN",
    "name": "GIC Housing Finance Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GKWLIMITED",
    "name": "GKW Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GLOBUSSPR",
    "name": "Globus Spirits Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GLOSTERLTD",
    "name": "Gloster Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GMBREW",
    "name": "GM Breweries Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "GNA",
    "name": "GNA Axles Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "GOCLCORP",
    "name": "GOCL Corporation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GODAVARIB",
    "name": "Godavari Biorefineries Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "GOLDIAM",
    "name": "Goldiam International Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GOODLUCK",
    "name": "Goodluck India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GOODYEAR",
    "name": "Goodyear India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GPTHEALTH",
    "name": "GPT Healthcare Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GPTINFRA",
    "name": "GPT Infraprojects Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "523862",
    "name": "Grand Oak Canyons Distillery Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GRAUWEIL",
    "name": "Grauer & Weil (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GREENPANEL",
    "name": "Greenpanel Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GREENPLY",
    "name": "Greenply Industries Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "GRMOVER",
    "name": "GRM Overseas Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GRPLTD",
    "name": "GRP Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GTLINFRA",
    "name": "GTL Infrastructure Ltd.",
    "sector": "TELECOM"
  },
  {
    "symbol": "GTPL",
    "name": "GTPL Hathway Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "GUFICBIO",
    "name": "Gufic Biosciences Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GIPCL",
    "name": "Gujarat Industries Power Company Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "513536",
    "name": "Gujarat Natural Resources Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GUJTHEM",
    "name": "Gujarat Themis Biosyn Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GULPOLY",
    "name": "Gulshan Polyols Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "526407",
    "name": "Hampton Sky Realty Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HARDWYN",
    "name": "Hardwyn India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HARIOMPIPE",
    "name": "Hariom Pipe Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HARSHA",
    "name": "Harsha Engineers International Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "530927",
    "name": "Haryana Financial Corporation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HATHWAY",
    "name": "Hathway Cable & Datacom Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "532467",
    "name": "Hazoor Multi Projects Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HERANBA",
    "name": "Heranba Industries Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "HESTERBIO",
    "name": "Hester Biosciences Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HEUBACHIND",
    "name": "Heubach Colorants India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HEXATRADEX",
    "name": "Hexa Tradex Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HITECH",
    "name": "Hi-Tech Pipes Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HIMATSEIDE",
    "name": "Himatsingka Seide Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HIRECT",
    "name": "Hind Rectifiers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HGS",
    "name": "Hinduja Global Solutions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HINDCOMPOS",
    "name": "Hindustan Composites Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HINDOILEXP",
    "name": "Hindustan Oil Exploration Company Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "HINDWAREAP",
    "name": "Hindware Home Innovation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HLEGLAS",
    "name": "HLE Glascoat Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HLVLTD",
    "name": "HLV Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HMAAGRO",
    "name": "HMA Agro Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HONDAPOWER",
    "name": "Honda India Power Products Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HPL",
    "name": "HPL Electric & Power Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "HUBTOWN",
    "name": "Hubtown Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "HUHTAMAKI",
    "name": "Huhtamaki India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ICEMAKE",
    "name": "ICE Make Refrigeration Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "IDEAFORGE",
    "name": "Ideaforge Technology Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "IFBAGRO",
    "name": "IFB Agro Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "IFGLEXPOR",
    "name": "IFGL Refractories Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "IGPL",
    "name": "IG Petrochemicals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "IGARASHI",
    "name": "Igarashi Motors India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "IKIO",
    "name": "IKIO Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "BAJAJINDEF",
    "name": "Indef Manufacturing Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "IMPAL",
    "name": "India Motor Parts & Accessories Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INDNIPPON",
    "name": "India Nippon Electricals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "IPL",
    "name": "India Pesticides Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DPSCLTD",
    "name": "India Power Corporation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INDIANHUME",
    "name": "Indian Hume Pipe Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "IMFA",
    "name": "Indian Metals & Ferro Alloys Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INDOAMIN",
    "name": "Indo Amines Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INDOFARM",
    "name": "Indo Farm Equipments Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INDORAMA",
    "name": "Indo Rama Synthetics (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INDOTECH",
    "name": "Indo Tech Transformers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INDOTHAI",
    "name": "Indo Thai Securities Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INDOCO",
    "name": "Indoco Remedies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INDRAMEDCO",
    "name": "Indraprastha Medical Corporation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "501298",
    "name": "Industrial & Prudential Investment Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INFOBEAN",
    "name": "Infobeans Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INNOVANA",
    "name": "Innovana Thinklabs Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INSECTICID",
    "name": "Insecticides (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "505358",
    "name": "Integra Engineering India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "INTERARCH",
    "name": "Interarch Building Solutions Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "IOLCP",
    "name": "IOL Chemicals And Pharmaceuticals Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "IRMENERGY",
    "name": "IRM Energy Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "508807",
    "name": "IST Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JAGAJITIND",
    "name": "Jagatjit Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JAGRAN",
    "name": "Jagran Prakashan Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "JAGSNPHARM",
    "name": "Jagsonpal Pharmaceuticals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JAICORPLTD",
    "name": "Jai Corp Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JPASSOCIAT",
    "name": "Jaiprakash Associates Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JAMNAAUTO",
    "name": "Jamna Auto Industries Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "JASH",
    "name": "Jash Engineering Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JAYBARMARU",
    "name": "Jay Bharat Maruti Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "JAYAGROGN",
    "name": "Jayant Agro-Organics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JAYNECOIND",
    "name": "Jayaswal Neco Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "512233",
    "name": "Jaybharat Textiles & Real Estate Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JKSYNTHETC",
    "name": "Jaykay Enterprises Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JGCHEM",
    "name": "JG Chemicals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JINDRILL",
    "name": "Jindal Drilling & Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JINDALPHOT",
    "name": "Jindal Photo Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JINDALPOLY",
    "name": "Jindal Poly Films Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JPOLYINVST",
    "name": "Jindal Poly Investment and Finance Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JITFINFRA",
    "name": "JITF Infralogistics Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "JNKINDIA",
    "name": "JNK India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "FLATPROD",
    "name": "John Cockerill India Ltd",
    "sector": "OTHER"
  },
  {
    "symbol": "JTEKTINDIA",
    "name": "JTEKT India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JTLIND",
    "name": "JTL Industries Ltd",
    "sector": "METALS"
  },
  {
    "symbol": "JUBLCPL",
    "name": "Jubilant Agri And Consumer Products Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "514448",
    "name": "Jyoti Resins & Adhesives Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "JYOTISTRUC",
    "name": "Jyoti Structures Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KABRAEXTRU",
    "name": "Kabra Extrusiontechnik Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KICL",
    "name": "Kalyani Investment Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KSL",
    "name": "Kalyani Steels Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "KAMDHENU",
    "name": "Kamdhenu Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KARNIKA",
    "name": "Karnika Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KCP",
    "name": "KCP Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "KDDL",
    "name": "KDDL Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KELLTONTEC",
    "name": "Kellton Tech Solutions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KERNEX",
    "name": "Kernex Microsystems (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "543542",
    "name": "Kesar India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KKCL",
    "name": "Kewal Kiran Clothing Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KHAICHEM",
    "name": "Khaitan Chemicals & Fertilizers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "543953",
    "name": "Khazanchi Jewellers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KILBUNENGG",
    "name": "Kilburn Engineering Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KILITCH",
    "name": "Kilitch Drugs (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KINGFA",
    "name": "Kingfa Science & Technology (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KIRIINDUS",
    "name": "Kiri Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KECL",
    "name": "Kirloskar Electric Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "524520",
    "name": "KMC Speciality Hospitals (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KMEW",
    "name": "Knowledge Marine & Engineering Works Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KODYTECH",
    "name": "Kody Technolab Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KOKUYOCMLN",
    "name": "Kokuyo Camlin Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KOLTEPATIL",
    "name": "Kolte-Patil Developers Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "KOPRAN",
    "name": "Kopran Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "KOTHARINDL",
    "name": "Kothari Industrial Corporation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KOTHARIPET",
    "name": "Kothari Petrochemicals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KOVAI",
    "name": "Kovai Medical Center & Hospital Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KPEL",
    "name": "KP Energy Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "544150",
    "name": "KP Green Engineering Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KRISHANA",
    "name": "Krishana Phoschem Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KRISHIVAL",
    "name": "Krishival Foods Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KRISHNADEF",
    "name": "Krishna Defence and Allied Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KRITI",
    "name": "Kriti Industries (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KROSS",
    "name": "Kross Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KRSNAA",
    "name": "Krsnaa Diagnostics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KRYSTAL",
    "name": "Krystal Integrated Services Ltd",
    "sector": "OTHER"
  },
  {
    "symbol": "KSE",
    "name": "KSE Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KSOLVES",
    "name": "KSolves India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KUANTUM",
    "name": "Kuantum Papers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "539997",
    "name": "Kwality Pharmaceuticals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "LAOPALA",
    "name": "La Opala RG Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "LANCER",
    "name": "Lancer Container Lines Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "LANDMARK",
    "name": "Landmark Cars Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "LAXMIDENTL",
    "name": "Laxmi Dental Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "LGHL",
    "name": "Laxmi Goldorna House Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "LEMERITE",
    "name": "Le Merite Exports Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "LIBERTSHOE",
    "name": "Liberty Shoes Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "LIKHITHA",
    "name": "Likhitha Infrastructure Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "LINC",
    "name": "Linc Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "LINCOLN",
    "name": "Lincoln Pharmaceuticals Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "523475",
    "name": "Lotus Chocolate Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "514446",
    "name": "LS Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "539682",
    "name": "Lucent Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "LUMAXIND",
    "name": "Lumax Industries Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "507836",
    "name": "Mac Charles (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "543787",
    "name": "Macfos Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MACPOWER",
    "name": "Macpower CNC Machines Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "MBAPL",
    "name": "Madhya Bharat Agro Products Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MADRASFERT",
    "name": "Madras Fertilizers Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "MAFATLAIND",
    "name": "Mafatlal Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MAGADSUGAR",
    "name": "Magadh Sugar & Energy Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MTNL",
    "name": "Mahanagar Telephone Nigam Ltd.",
    "sector": "TELECOM"
  },
  {
    "symbol": "MAHLOG",
    "name": "Mahindra Logistics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MAITHANALL",
    "name": "Maithan Alloys Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "MAMATA",
    "name": "Mamata Machinery Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MANINDS",
    "name": "Man Industries (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MANAKCOAT",
    "name": "Manaksia Coated Metals & Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MANALIPETC",
    "name": "Manali Petrochemicals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MANGLMCEM",
    "name": "Mangalam Cement Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MANGCHEFER",
    "name": "Mangalore Chemicals & Fertilizers Ltd.",
    "sector": "DIVERSIFIED"
  },
  {
    "symbol": "MVGJL",
    "name": "Manoj Vaibhav Gems ''N'' Jewellers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MARATHON",
    "name": "Marathon Nextgen Realty Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "MARINE",
    "name": "Marine Electricals (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "517467",
    "name": "Marsons Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MASTERTR",
    "name": "Master Trust Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MATRIMONY",
    "name": "Matrimony.Com Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MAXIND",
    "name": "Max India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MAYURUNIQ",
    "name": "Mayur Uniquoters Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MEDIASSIST",
    "name": "Medi Assist Healthcare Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MMWL",
    "name": "Media Matrix Worldwide Ltd",
    "sector": "OTHER"
  },
  {
    "symbol": "MOL",
    "name": "Meghmani Organics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "538668",
    "name": "Meghna Infracon Infrastructure Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "531357",
    "name": "Mercury Ev-Tech Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MICEL",
    "name": "MIC Electronics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "526570",
    "name": "Midwest Gold Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MINDTECK",
    "name": "Mindteck (India) Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "MMFL",
    "name": "MM Forgings Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "519003",
    "name": "Modi Naturals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MOLDTKPAC",
    "name": "Mold-Tek Packaging Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MONARCH",
    "name": "Monarch Networth Capital Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MONTECARLO",
    "name": "Monte Carlo Fashions Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "MOREPENLAB",
    "name": "Morepen Laboratories Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "523160",
    "name": "Morganite Crucible (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MOS",
    "name": "MOS Utility Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MOSCHIP",
    "name": "Moschip Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MOTISONS",
    "name": "Motisons Jewellers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MSPL",
    "name": "MSP Steel & Power Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "MSTCLTD",
    "name": "MSTC Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MUFIN",
    "name": "Mufin Green Finance Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MUKANDLTD",
    "name": "Mukand Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "MUKKA",
    "name": "Mukka Proteins Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "MUNJALAU",
    "name": "Munjal Auto Industries Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "MUTHOOTMF",
    "name": "Muthoot Microfin Ltd.",
    "sector": "CONGLOMERATE"
  },
  {
    "symbol": "NBIFIN",
    "name": "N.B.I. Industrial Finance Co. Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NACLIND",
    "name": "NACL Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NAHARPOLY",
    "name": "Nahar Poly Films Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NAHARSPING",
    "name": "Nahar Spinning Mills Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NSIL",
    "name": "Nalwa Sons Investments Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NAVKARCORP",
    "name": "Navkar Corporation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NAVNETEDUL",
    "name": "Navneet Education Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NCLIND",
    "name": "NCL Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NDRAUTO",
    "name": "NDR Auto Components Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NELCAST",
    "name": "Nelcast Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NELCO",
    "name": "Nelco Ltd.",
    "sector": "TELECOM"
  },
  {
    "symbol": "NDTV",
    "name": "New Delhi Television Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "NIBE",
    "name": "NIBE Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NIITLTD",
    "name": "NIIT Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NILKAMAL",
    "name": "Nilkamal Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NINSYS",
    "name": "Nintec Systems Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NITCO",
    "name": "Nitco Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NITINSPIN",
    "name": "Nitin Spinners Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KERALACHEM",
    "name": "Nitta Gelatin India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NOCIL",
    "name": "Nocil Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NORTHARC",
    "name": "Northern ARC Capital Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "NOVARTIND",
    "name": "Novartis India Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "NRBBEARING",
    "name": "NRB Bearings Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "NUCLEUS",
    "name": "Nucleus Software Exports Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "OMINFRAL",
    "name": "Om Infra Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "OMAXE",
    "name": "Omaxe Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "MOBIKWIK",
    "name": "One Mobikwik Systems Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ONEPOINT",
    "name": "One Point One Solutions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ORCHPHARMA",
    "name": "Orchid Pharma Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "ORICONENT",
    "name": "Oricon Enterprises Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "GREENPOWER",
    "name": "Orient Green Power Company Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "ORIENTTECH",
    "name": "Orient Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "OAL",
    "name": "Oriental Aromatics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ORIENTHOT",
    "name": "Oriental Hotels Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "531859",
    "name": "Oriental Rail Infrastructure Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "OSWALAGRO",
    "name": "Oswal Agro Mills Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "OSWALGREEN",
    "name": "Oswal Greentech Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "OWAIS",
    "name": "Owais Metal & Mineral Processing Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PAISALO",
    "name": "Paisalo Digital Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PAKKA",
    "name": "Pakka Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PANACEABIO",
    "name": "Panacea Biotec Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PANAMAPET",
    "name": "Panama Petrochem Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "539469",
    "name": "Panorama Studios International Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PARAGMILK",
    "name": "Parag Milk Foods Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "PARACABLES",
    "name": "Paramount Communications Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PARSVNATH",
    "name": "Parsvnath Developers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PASHUPATI",
    "name": "Pashupati Cotspin Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PATELENG",
    "name": "Patel Engineering Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "532742",
    "name": "Paushak Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PENINLAND",
    "name": "Peninsula Land Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "PENIND",
    "name": "Pennar Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PERMAGNET",
    "name": "Permanent Magnets Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PITTIENG",
    "name": "Pitti Engineering Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PIXTRANS",
    "name": "Pix Transmissions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PLATIND",
    "name": "Platinum Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PNBGILTS",
    "name": "PNB Gilts Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "543709",
    "name": "PNGS Gargi Fashion Jewellery Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "POKARNA",
    "name": "Pokarna Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "540717",
    "name": "Polo Queen Industrial & Fintech Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "POCL",
    "name": "Pondy Oxides & Chemicals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PVSL",
    "name": "Popular Vehicles & Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PRABHA",
    "name": "Prabha Energy Ltd",
    "sector": "OTHER"
  },
  {
    "symbol": "PRAKASH",
    "name": "Prakash Industries Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "PPL",
    "name": "Prakash Pipes Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DIAMONDYD",
    "name": "Prataap Snacks Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "531637",
    "name": "Praveg Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PRECAM",
    "name": "Precision Camshafts Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "PRECWIRE",
    "name": "Precision Wires India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PREMEXPLN",
    "name": "Premier Explosives Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PFOCUS",
    "name": "Prime Focus Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PRIMESECU",
    "name": "Prime Securities Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PRINCEPIPE",
    "name": "Prince Pipes and Fittings Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PROTEAN",
    "name": "Protean e-Gov Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PSPPROJECT",
    "name": "PSP Projects Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "PFS",
    "name": "PTC India Financial Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PDMJEPAPER",
    "name": "Pudumjee Paper Products Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PUNJABCHEM",
    "name": "Punjab Chemicals & Crop Protection Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "QUADFUTURE",
    "name": "Quadrant Future Tek Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "QPOWER",
    "name": "Quality Power Electrical Equipments Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "QUICKHEAL",
    "name": "Quick Heal Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "538119",
    "name": "R&B Denims Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RACLGEAR",
    "name": "RACL Geartech Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "RADHIKAJWE",
    "name": "Radhika Jeweltech Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RADIANTCMS",
    "name": "Radiant Cash Management Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RPEL",
    "name": "Raghav Productivity Enhancers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RAJRILTD",
    "name": "Raj Rayon Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RAJPALAYAM",
    "name": "Rajapalayam Mills Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "544291",
    "name": "Rajesh Power Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RAJOOENG",
    "name": "Rajoo Engineers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RAJRATAN",
    "name": "Rajratan Global Wire Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RAMRAT",
    "name": "Ram Ratna Wires Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RAMASTEEL",
    "name": "Rama Steel Tubes Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RAMCOIND",
    "name": "Ramco Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RAMCOSYS",
    "name": "Ramco Systems Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RAMKY",
    "name": "Ramky Infrastructure Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RML",
    "name": "Rane (Madras) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RANEHOLDIN",
    "name": "Rane Holdings Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RPTECH",
    "name": "Rashi Peripherals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RATNAVEER",
    "name": "Ratnaveer Precision Engineering Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RELTD",
    "name": "Ravindra Energy Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "533285",
    "name": "RDB Infrastructure And Power Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RIIL",
    "name": "Reliance Industrial Infrastructure Ltd.",
    "sector": "OIL_GAS"
  },
  {
    "symbol": "REMUS",
    "name": "Remus Pharmaceuticals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RGL",
    "name": "Renaissance Global Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "REPCOHOME",
    "name": "Repco Home Finance Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "REPRO",
    "name": "Repro India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "543590",
    "name": "Rhetan TMT Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RICOAUTO",
    "name": "Rico Auto Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "517035",
    "name": "RIR Power Electronics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RISHABH",
    "name": "Rishabh Instruments Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RITCO",
    "name": "Ritco Logistics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RKSWAMY",
    "name": "RK Swamy Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RMDRIP",
    "name": "RM Drip and Sprinklers System Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "540358",
    "name": "RMC Switchgears Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ROSSARI",
    "name": "Rossari Biotech Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ROSSTECH",
    "name": "Rossell Techsys Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ROTO",
    "name": "Roto Pumps Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ROHLTD",
    "name": "Royal Orchid Hotels Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RPGLIFE",
    "name": "RPG Life Sciences Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "RPSGVENT",
    "name": "RPSG Ventures Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "504346",
    "name": "RRP Semiconductor Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RSWM",
    "name": "RSWM Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RUPA",
    "name": "Rupa & Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RUSHIL",
    "name": "Rushil Decor Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SCHAND",
    "name": "S Chand And Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SPAL",
    "name": "S.P. Apparels Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SAGCEM",
    "name": "Sagar Cements Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "SAHANA",
    "name": "Sahana System Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SAHASRA",
    "name": "Sahasra Electronic Solutions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "KALAMANDIR",
    "name": "Sai Silks (Kalamandir) Ltd.",
    "sector": "RETAIL"
  },
  {
    "symbol": "515043",
    "name": "Saint-Gobain Sekurit India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SAKSOFT",
    "name": "Saksoft Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SALASAR",
    "name": "Salasar Techno Engineering Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "SALZERELEC",
    "name": "Salzer Electronics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SANATHAN",
    "name": "Sanathan Textiles Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SANDHAR",
    "name": "Sandhar Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SANGAMIND",
    "name": "Sangam (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SANGHIIND",
    "name": "Sanghi Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SANGHVIMOV",
    "name": "Sanghvi Movers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SANSTAR",
    "name": "Sanstar Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "538992",
    "name": "Sar Auto Products Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SARTELE",
    "name": "Sar Televenture Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "512020",
    "name": "Saraswati Commercial (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SARLAPOLY",
    "name": "Sarla Performance Fibers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SARVESHWAR",
    "name": "Sarveshwar Foods Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SASKEN",
    "name": "Sasken Technologies Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "SASTASUNDR",
    "name": "Sastasundar Ventures Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SSEGL",
    "name": "Sathlokhar Synergys E&C Global Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SATIA",
    "name": "Satia Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SATIN",
    "name": "Satin Creditcare Network Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SAURASHCEM",
    "name": "Saurashtra Cement Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SOTL",
    "name": "Savita Oil Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SBC",
    "name": "SBC Exports Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SCODATUBES",
    "name": "Scoda Tubes Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SEAMECLTD",
    "name": "Seamec Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SELAN",
    "name": "Selan Exploration Technology Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SENORES",
    "name": "Senores Pharmaceuticals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SEPC",
    "name": "SEPC Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SERVOTECH",
    "name": "Servotech Renewable Power System Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SESHAPAPER",
    "name": "Seshasayee Paper and Boards Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "539199",
    "name": "SG Finserve Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SHK",
    "name": "SH Kelkar And Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SHALBY",
    "name": "Shalby Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "539895",
    "name": "Shalimar Agencies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SHALPAINTS",
    "name": "Shalimar Paints Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SHANKARA",
    "name": "Shankara Building Products Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SHANTIGEAR",
    "name": "Shanthi Gears Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "539921",
    "name": "Shanti Educational Initiatives Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SHAREINDIA",
    "name": "Share India Securities Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SCILAL",
    "name": "Shipping Corporation of India Land and Assets Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "532323",
    "name": "Shiva Cement Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SBCL",
    "name": "Shivalik Bimetal Controls Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SHIVALIK",
    "name": "Shivalik Rasayan Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SHREDIGCEM",
    "name": "Shree Digvijay Cement Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "540737",
    "name": "Shree Ganesh Remedies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SHREEPUSHK",
    "name": "Shree Pushkar Chemicals & Fertilisers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SVLL",
    "name": "Shree Vasu Logistics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "512453",
    "name": "Shri Jagdamba Polymers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "531359",
    "name": "Shriram Asset Management Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SHRIRAMPPS",
    "name": "Shriram Properties Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "SIGACHI",
    "name": "Sigachi Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SIGNPOST",
    "name": "Signpost India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "523606",
    "name": "Sika Interplant Systems Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SILVERTUC",
    "name": "Silver Touch Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SIMPLEXINF",
    "name": "Simplex Infrastructures Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SINDHUTRAD",
    "name": "Sindhu Trade Links Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "SIRCA",
    "name": "SIRCA Paints India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SIYSIL",
    "name": "Siyaram Silk Mills Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SJLOGISTIC",
    "name": "SJ Logistics (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SJS",
    "name": "SJS Enterprises Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SMCGLOBAL",
    "name": "SMC Global Securities Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SMLISUZU",
    "name": "SML Isuzu Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "SMSPHARMA",
    "name": "SMS Pharmaceuticals Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "SNOWMAN",
    "name": "Snowman Logistics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SOLARA",
    "name": "Solara Active Pharma Sciences Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "544354",
    "name": "Solarium Green Energy Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SOLEX",
    "name": "Solex Energy Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SDBL",
    "name": "Som Distilleries And Breweries Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "SOMANYCERA",
    "name": "Somany Ceramics Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "SPIC",
    "name": "Southern Petrochemical Industries Corporation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SPANDANA",
    "name": "Spandana Sphoorty Financial Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SPECTRUM",
    "name": "Spectrum Electrical Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SPMLINFRA",
    "name": "SPML Infra Ltd.",
    "sector": "CONSTRUCTION"
  },
  {
    "symbol": "SPORTKING",
    "name": "Sportking India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SRHHYPOLTD",
    "name": "Sree Rayalaseema Hi-Strength Hypo Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SABTNL",
    "name": "Sri Adhikari Brothers Television Network Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "SRM",
    "name": "SRM Contractors Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SGLTL",
    "name": "Standard Glass Lining Technology Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "STANLEY",
    "name": "Stanley Lifestyles Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "STEELXIND",
    "name": "Steel Exchange India Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "SSWL",
    "name": "Steel Strips Wheels Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "STEELCAS",
    "name": "Steelcast Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "STEL",
    "name": "STEL Holdings Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "STERTOOLS",
    "name": "Sterling Tools Ltd.",
    "sector": "TELECOM"
  },
  {
    "symbol": "STLTECH",
    "name": "Sterlite Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "STOVEKRAFT",
    "name": "Stove Kraft Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "534535",
    "name": "String Metaverse Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "STYLAMIND",
    "name": "Stylam Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SUBEXLTD",
    "name": "Subex Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "543828",
    "name": "Sudarshan Pharma Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SULA",
    "name": "Sula Vineyards Ltd.",
    "sector": "FMCG"
  },
  {
    "symbol": "SUMMITSEC",
    "name": "Summit Securities Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SUNDROP",
    "name": "Sundrop Brands Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "539300",
    "name": "Sunrakshakk Industries India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SURAJEST",
    "name": "Suraj Estate Developers Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "SURAJLTD",
    "name": "Suraj Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SURAKSHA",
    "name": "Suraksha Diagnostic Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SURYODAY",
    "name": "Suryoday Small Finance Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "SUYOG",
    "name": "Suyog Telematics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SWANDEF",
    "name": "Swan Defence and Heavy Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SWELECTES",
    "name": "Swelect Energy Systems Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "SYNCOMF",
    "name": "Syncom Formulations (India) Ltd.",
    "sector": "PHARMA"
  },
  {
    "symbol": "SGIL",
    "name": "Synergy Green Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "526506",
    "name": "Systematix Corporate Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "539956",
    "name": "TAAL Enterprises Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TAC",
    "name": "TAC Infosec Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TAJGVK",
    "name": "Taj GVK Hotels & Resorts Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TALBROAUTO",
    "name": "Talbros Automotive Components Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "TNPL",
    "name": "Tamil Nadu Newsprint & Papers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TNPETRO",
    "name": "Tamilnadu Petroproducts Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TANEJAERO",
    "name": "Taneja Aerospace & Aviation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TANFACIND",
    "name": "Tanfac Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TARSONS",
    "name": "Tarsons Products Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TASTYBITE",
    "name": "Tasty Bite Eatables Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TATVA",
    "name": "Tatva Chintan Pharma Chem Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "512038",
    "name": "TCC Concept Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TCIEXP",
    "name": "TCI Express Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TCPLPACK",
    "name": "TCPL Packaging Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TEAMLEASE",
    "name": "TeamLease Services Ltd.",
    "sector": "IT"
  },
  {
    "symbol": "501421",
    "name": "TechNVision Ventures Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TEMBO",
    "name": "Tembo Global Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TEXINFRA",
    "name": "Texmaco Infrastructure & Holdings Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SREERAYALK",
    "name": "TGV SRACC Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ANDHRSUGAR",
    "name": "The Andhra Sugars Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "HITECHGEAR",
    "name": "The Hi-Tech Gears Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "THEINVEST",
    "name": "The Investment Trust of India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ORISSAMINE",
    "name": "The Orissa Minerals Development Company Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "RUBYMILLS",
    "name": "The Ruby Mills Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "SANDESH",
    "name": "The Sandesh Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "STCINDIA",
    "name": "The State Trading Corporation Of India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "540980",
    "name": "The Yamuna Syndicate Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "THEJO",
    "name": "Thejo Engineering Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "THEMISMED",
    "name": "Themis Medicare Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TIRUMALCHM",
    "name": "Thirumalai Chemicals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TIL",
    "name": "TIL Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TIMEXWATCH",
    "name": "Timex Group India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TINNARUBR",
    "name": "Tinna Rubber And Infrastructure Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TFCILTD",
    "name": "Tourism Finance Corporation Of India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TREL",
    "name": "Transindia Real Estate Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TRANSPEK",
    "name": "Transpek Industry Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TBZ",
    "name": "Tribhovandas Bhimji Zaveri Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TECHLABS",
    "name": "Trident Techlabs Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TTKHLTCARE",
    "name": "TTK Healthcare Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TUTICORALK",
    "name": "Tuticorin Alkali Chemicals and Fertilizers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TVTODAY",
    "name": "TV Today Network Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "TVSELECT",
    "name": "TVS Electronics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "TVSSRICHAK",
    "name": "TVS Srichakra Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "UDAICEMENT",
    "name": "Udaipur Cement Works Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "UGROCAP",
    "name": "Ugro Capital Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "UEL",
    "name": "Ujaas Energy Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ULTRMARINE",
    "name": "Ultramarine & Pigments Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "UNIECOM",
    "name": "Unicommerce eSolutions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "UNIPARTS",
    "name": "Uniparts India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "UNIENTER",
    "name": "Uniphos Enterprises Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "UNITECH",
    "name": "Unitech Ltd.",
    "sector": "REALTY"
  },
  {
    "symbol": "UNIVCABLES",
    "name": "Universal Cables Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "509960",
    "name": "UP Hotels Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "UDS",
    "name": "Updater Services Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "URJA",
    "name": "Urja Global Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "UTKARSHBNK",
    "name": "Utkarsh Small Finance Bank Ltd.",
    "sector": "BANKING"
  },
  {
    "symbol": "UTTAMSUGAR",
    "name": "Uttam Sugar Mills Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VMARCIND",
    "name": "V-Marc India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VSTTILLERS",
    "name": "V.S.T. Tillers Tractors Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "519152",
    "name": "Vadilal Enterprises Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VADILALIND",
    "name": "Vadilal Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VAKRANGEE",
    "name": "Vakrangee Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VALIANTORG",
    "name": "Valiant Organics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VHL",
    "name": "Vardhman Holdings Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VSSL",
    "name": "Vardhman Special Steels Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "DENTALKART",
    "name": "Vasa Denticity Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VASCONEQ",
    "name": "Vascon Engineers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VEEDOL",
    "name": "Veedol Corporation Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "543931",
    "name": "Veefin Solutions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VENKEYS",
    "name": "Venky''S (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VENUSPIPES",
    "name": "Venus Pipes & Tubes Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VERANDA",
    "name": "Veranda Learning Solutions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "512229",
    "name": "Veritas (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VERTOZ",
    "name": "Vertoz Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VIDHIING",
    "name": "Vidhi Specialty Food Ingredients Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VILAS",
    "name": "Vilas Transcore Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VIMTALABS",
    "name": "Vimta Labs Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VINDHYATEL",
    "name": "Vindhya Telelinks Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VINCOFE",
    "name": "Vintage Coffee & Beverages Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VINYAS",
    "name": "Vinyas Innovative Technologies Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "543597",
    "name": "Virtuoso Optoelectronics Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VISAKAIND",
    "name": "Visaka Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VISHNU",
    "name": "Vishnu Chemicals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VPRPL",
    "name": "Vishnu Prakash R Punglia Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VLSFINANCE",
    "name": "VLS Finance Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "PORRITSPEN",
    "name": "Voith Paper Fabrics India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "VTMLTD",
    "name": "VTM Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "WALCHANNAG",
    "name": "Walchandnagar Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "WANBURY",
    "name": "Wanbury Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "WEALTH",
    "name": "Wealth First Portfolio Managers Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "REMIMETAL",
    "name": "Welspun Specialty Solutions Ltd.",
    "sector": "METALS"
  },
  {
    "symbol": "WENDT",
    "name": "Wendt (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "WSTCSTPAPR",
    "name": "West Coast Paper Mills Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "WCIL",
    "name": "Western Carriers (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "WHEELS",
    "name": "Wheels India Ltd.",
    "sector": "AUTO"
  },
  {
    "symbol": "WINDLAS",
    "name": "Windlas Biotech Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "WINDMACHIN",
    "name": "Windsor Machines Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "WEL",
    "name": "Wonder Electricals Ltd.",
    "sector": "POWER"
  },
  {
    "symbol": "538451",
    "name": "Worth Investment & Trading Co Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "XCHANGING",
    "name": "Xchanging Solutions Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "XPROINDIA",
    "name": "Xpro India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "544310",
    "name": "Yash Highvoltage Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "YASHO",
    "name": "Yasho Industries Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "YATRA",
    "name": "Yatra Online Ltd",
    "sector": "OTHER"
  },
  {
    "symbol": "511702",
    "name": "Yogi Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "YUKEN",
    "name": "Yuken India Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ZTECH",
    "name": "Z-Tech (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ZEEMEDIA",
    "name": "Zee Media Corporation Ltd.",
    "sector": "MEDIA"
  },
  {
    "symbol": "ZFSTEERING",
    "name": "ZF Steering Gear (India) Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ZODIAC",
    "name": "Zodiac Energy Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ZOTA",
    "name": "Zota Health Care Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ZUARI",
    "name": "Zuari Agro Chemicals Ltd.",
    "sector": "OTHER"
  },
  {
    "symbol": "ZUARIIND",
    "name": "Zuari Industries Ltd.",
    "sector": "OTHER"
  }
];

export default stockList;