# FACTS.md
All facts extracted from project documents. Do not add or modify without a cited source.

---

## A. Intermediary / Partner Model

### Primary Intermediary: Modern World Business Solutions (MWBS)
- **Brand:** Modern World Business Solutions; trading name MWBS; website: mwbsolutions.co.uk
- **Role:** Master ISO / distribution partner providing access to multiple acquirers, hardware logistics, the MWBS Partner Portal, onboarding support, and MCA distribution.
- **What MWBS provides to us:**
  - Access to acquiring banks: AIB, Elavon, Trust Payments, emerchantpay, Worldpay, myPOS
  - White-label Partner Portal for quote generation, CRM, and revenue monitoring
  - Terminal hardware at published prices (see Pricing section)
  - Terminal support (helpdesk via Service Logistics)
  - MCA product (via Recap)
  - Open Banking (via SOTpay / Gala Technology)
  - E-commerce gateway access
  - Branded terminal logos (on eligible devices)

(Source: MWBSv1_3ThePortalBrochure.pdf; MWBSv2_0HardwareBrochure.pdf; MWBSv1_5EcommerceBrochure.pdf)

### What We Can Claim Publicly
- We are a partner/reseller of MWBS. [NEEDED: Confirm exact approved wording with MWBS compliance]
- Partner Portal is white-labelled; quotes can be generated under our own branding.
- Terminal logos can carry our brand on eligible devices (see Acquirer & Device Matrix below).
- MCA offer emails to merchants are sent with partner branding.

(Source: MWBSv1_3ThePortalBrochure.pdf → "A White-Label Solution"; MWBSPreApprovedMCABrochure.pdf)

### Branding Restrictions
- Partner logos on terminals require specific file formats and sizes; lead time up to 12 weeks (longer for Ingenico devices).
- Not all terminals support partner logo branding -- see Acquirer & Device Matrix.

(Source: MWBSv2_0HardwareBrochure.pdf → "Branded Terminals")

### Geographic Constraints
- UK-primary operation based on MWBS documents; some products have specific country restrictions (see product entries below).
- PSP Angels global solutions have their own restricted country lists (see Product 6 and 7 below).

### Required Disclosures
[NEEDED: MWBS has not provided a specific required disclosure script for partner outreach or websites in the documents available. Confirm with MWBS compliance team.]

---

## B. Product Catalogue

### Product 1: Card-Present Merchant Services (MWBS via acquirer banks)
- **Merchant types:** Low-to-high risk retail, hospitality, leisure, trades, services
- **Supported payment methods:** Chip & PIN, contactless/NFC, magstripe, mobile wallets
- **Geographies/currencies:** Primarily UK; GBP and EUR available (Panel Settings in Merchant Panel shows GBP and EUR)
- **Settlement timings:** Varies by acquirer and risk band; emerchantpay low risk: T+3 (CP), T+3 (CNP), T+7 (VT only); high risk: weekly with 1-week delay (Source: EMP-WW-AcceptancePolicy → various rows)
- **Integration:** Card terminals (pre-configured); ePOS-integrated or standalone
- **Ops:** Refunds added at acquirer level automatically; pre-auths and cashback added pre-dispatch on request; American Express added at point of order
- **Dependency on intermediary:** Full dependency on MWBS for underwriting, acquirer access, and terminal supply

(Source: MWBSv2_0HardwareBrochure.pdf → "Additional Terminal Requests"; EMP_EU_UK_CardPresent_SalesDeck_02.pdf)

#### Acquirer & Device Matrix (as documented)
Acquirers supported: AIB, Elavon, Trust Payments, emerchantpay, Worldpay, myPOS
Devices: Castles Saturn 1000, Castles Vega 3000 (various configs), Ingenico Move 3500/5000, Ingenico Desk 3500/5000/Lane 5000, Ingenico AXIUM DX8000, myPOS Go/Carbon/Slim/Combo, Pax A77/A50/A920 Pro, Verifone V200c/V240m
Note: "Castles Saturn 1000 -- MWBS Logo Only" for partner branding

(Source: MWBSv2_0HardwareBrochure.pdf → "Acquirer & Device Matrix" page 21)

---

### Product 2: E-Commerce / Virtual Terminal
- **Merchant types:** Online retailers, mail order, telephone order businesses; hospitality, retail, leisure, travel, high-risk verticals
- **Payment methods:** Card-not-present (CNP), virtual terminal (VT), pay-by-link, payment buttons for social media
- **Integration options:** Hosted checkout, API, pay-by-link, embedded payment buttons
- **Gateway partners:** [NEEDED: specific gateway names not extracted from available text in MWBSv1_5EcommerceBrochure.pdf -- brochure references API documentation buttons but text did not capture gateway names]

#### E-Commerce Suggested Rates (MWBS)
Low Risk:
- Monthly fee: £10 p/m; Per-transaction fee: 12p -- for Hospitality, Retail, Leisure
Medium Risk:
- Monthly fee: £10 p/m; Per-transaction fee: 12p -- for Hospitality, Retail, Leisure
- Monthly fee: £10 p/m; Per-transaction fee: 15p -- for Hospitality, Retail, Leisure and Travel
High Risk:
- Monthly fee: £30 p/m; Per-transaction fee: 15p -- for Adult Sites, Gaming, Gambling, Travel and CBD
- Monthly fee: £40 p/m; Per-transaction fee: 20p -- for High Risk Verticals
- Monthly fee: £40 p/m; Per-transaction fee: 20p -- for High Risk Verticals, Forex, Gaming, Crypto and CBD
- Monthly fee: £30 p/m; Per-transaction fee: 15p -- for Competitions, Travel, Gaming, Gambling, Guns and CBD

**Revenue share note:** Revenue share on suggested monthly rates split between MWBS and acquiring bank; remainder equally shared between MWBS and MWBS partner. 100% of any pricing uplift on suggested monthly pricing allocated to the MWBS partner.

(Source: MWBSv1_5EcommerceBrochure.pdf → "Payment Gateways and VT" / "Suggested Rates")

---

### Product 3: EPOS -- Register (Smart Volution)
- **Merchant types:** Retail, hospitality (restaurants, cafes, bars), personal services, leisure attractions
- **Key verticals:** Apparel, convenience, vape/e-cig, field sales, theme parks, soft play, museums, salons, restaurants, food trucks
- **Software tiers:** Lite, Core, Plus -- sold as monthly or annual SaaS per device
- **Hardware:** Sunmi T2/T2 Lite/T2 Mini (desktop); Sunmi M2/V2/P2 Pro (handheld); HP Engage One Prime; Pax A920 (all-in-one or tethered)
- **Integration:** App-to-app (POSitive/Weblink on Pax A920); standalone EPOS or semi-integrated with desktop
- **Portal:** portal.smartvolution.com
- **Supplier:** Smart Volution Limited (proprietary and confidential)

(Source: RegisterPartnerOverviewLevelSet2020.pdf; RegisterQuickSetupGuideSunmiDevices.pdf; MerchantProvisioningQuickStartGuide.pdf; 68e04b924eb09 ConfiguringA920 guide)

---

### Product 4: EPOS -- Clover (by Fiserv / Clover Network)
- **Merchant types:** Retail, hospitality (full service restaurants, quick service, pub), personal services, sports venues
- **Hardware:** Flex (portable, 5.99" screen, LTE/WiFi, thermal printer), Station Duo 2 (countertop, 14" merchant + 8" customer screen), Flex Pocket (launching Q3 2025, EMEA target)
- **Software plans and pricing:**
  - Payments Plus Bundle: No monthly service plan fee
  - Register Lite Bundle: £6.99 per month per device
  - Register Bundle: First device £39.95/month; each additional device £6.99/month
  - Table Service: First device £59.95/month; each additional device £6.99/month
- **Key software features:** Inventory management, order management, table mapping, tableside ordering, employee management, kitchen printers, pub features (Fast Pay), service charges, bill splitting, clover app market

(Source: CloverJuly2024SoftwareandSectors.pdf → "Software as a Service | Pricing" pp. 58--61; CloverJuly2024Flex.pdf; CloverJuly2024StationDuo2.pdf; CloverFlex4Pocket_v2.pdf)

---

### Product 5: Merchant Cash Advance (MCA) -- via Recap
- **What it is:** Short-term business funding repaid from a percentage of daily card transaction revenue; not a traditional loan
- **Provider:** Recap (MCA provider); distributed via MWBS portal
- **Eligibility criteria:**
  - Must have existing MID and be taking credit card payments (MID does not have to be with MWBS)
  - Actively trading for minimum 3 months
  - Minimum £5,000 per month via card sales
  - No insolvencies, bankruptcies, or active Companies House strike-offs
- **Exclusions:** High-risk industries (adult, gambling, firearms); PayPal/Amazon/eBay-based businesses; no active MCA in place (exception: can refinance to settle existing MCA)
- **Advance range:** £5,000 to £1,000,000
- **Maximum advance:** 2x monthly card revenue
- **Repayment:** 1--20% of daily card turnover
- **Factor rates:** 1.03--1.30 (fixed fee, subject to application)
- **Pre-approval rate:** 90%
- **Offer validity:** 7 working days
- **Funding speed:** Typically 3--4 days from start to funded (examples from Dec 2023)
- **Commission to partner (standard MCA):** Circa 15% of the funded margin
- **Commission on pre-approved MCA (Elavon merchants):** 15% of the Advance Fee on new; 10% on auto-renewal
- **Commission payment:** Partners invoice MWBS once funds clear; paid following Friday
- **Pre-approved MCA:** Available exclusively for Elavon merchants via MWBS Partner Portal; refreshed every two weeks

**Example 1 (Dec 2023):** Funding £29,000 | Repayment £38,715 | Daily sales % 20% | Partner commission £1,457 | Time: 3 days
**Example 2 (Dec 2023):** Funding £12,000 | Repayment £16,560 | Daily sales % 20% | Partner commission £684 | Time: 4 days

(Source: MCAPartnerProcessGuide.pdf; MWBSPreApprovedMCABrochure.pdf / 660d3da3abec5 and 663358686170a)

---

### Product 6: Global Processing -- PSP Angels "Global Solution" (Offer 03_1)
- **Provider:** pspangels.com | info@pspangels.com | +357 977 39369 / +356 996 25490
- **Method:** Credit/debit card acquiring; API or cashier integration; dashboard provided; funds held by provider and settled in bulk
- **Cards accepted:** Visa, Mastercard, Maestro
- **Processing currency:** EUR
- **MCC codes:** 6012, 6051, 7995 (7995 requires whitelist)
- **Acquiring bank country:** EU
- **Min/max transaction:** EUR 10 / EUR 2,500
- **Min monthly volume:** EUR 250,000
- **Fees:**
  - Setup fee: EUR 800 (waivable with min EUR 100k/month for first 2 months)
  - Processing fee: 6.5%
  - Transaction fee: EUR 0.40
  - Chargeback fee: EUR 45
  - Decline fee: EUR 0.40
  - Annual fee: EUR 1,800
  - Rolling reserve: 10% / 6 months
- **Settlement:** T+7; EUR; minimum settlement EUR 1,000
- **Features:** FTD yes; 3D and 2D Secure yes; MOTO/VT no; recurring payments no; OCT no
- **Blocked countries:** Afghanistan, American Samoa, Albania, Balkans, Belarus, Burma, Barbados, Botswana, Burkina Faso, Cote D'Ivoire, DRC, Cambodia, Cayman Islands, Cuba, DPRK, Ethiopia, Ghana, Guam, Jamaica, Iran, Iraq, Libya, Liberia, Pakistan, Panama, Puerto Rico, Sri Lanka, Sudan, Syria, Senegal, The Bahamas, Trinidad and Tobago, Tunisia, Uganda, USA, US Virgin Islands, Yemen, Zimbabwe, Guinea Bissau, Haiti, Somalia, Nicaragua, Mauritius, Myanmar, Turkey, Philippines

(Source: offer03_1globalsolution.pdf)

---

### Product 7: Global Processing -- PSP Angels "Global Solution" (Offer 35 -- CNY/US cards)
- **Method:** Card acquiring via API or Praxis cashier; funds held and settled in bulk
- **Cards accepted:** Mastercard, JCB, US cards
- **Processing currency:** CNY
- **Acquiring bank:** China
- **Fees:**
  - Setup fee: USD 1,000
  - Processing fee: 6--6.5%
  - Transaction fee: USD 0.20
  - Chargeback fee: USD 40
  - Refund fee: USD 2
  - Decline fee: USD 0.20
  - Monthly fee: nil
  - Annual fee: nil
  - Rolling reserve: 10% for 180 days
- **Settlement:** T+14; settlement fee 3% (USD) or free (BTC); settlement currencies USDT/BTC; minimum first payout USD 5,000; no minimum thereafter
- **Features:** OCT yes; FTD yes; MOTO/VT no; recurring no; 3D Secure no; cashier: Praxis
- **Blocked countries:** China, Ghana, Hong Kong, South Korea, Macao, Nigeria, Pakistan, South Africa, Singapore, Taiwan, Turkey, Vietnam

(Source: offer35globalsolution.pdf)

---

### Product 8: Crypto Acquiring -- PSP Angels (Offer 16)
- **Method:** Pay-by-link; no setup or integration required; end user pays with card for crypto currency purchase
- **Cards accepted:** Visa, Visa Electron, Mastercard, Maestro
- **Fees:**
  - Processing fee: 15% (no rolling reserve)
  - Setup fee: nil
  - Refund fee: EUR 10 + 1 (10% cost if refund is for unverified transaction; client or merchant must pay)
- **Settlement currency:** Crypto only (BTC, ETH, LTC, BCH, USDT, USDT trc20)
- **Settlement fee:** Blockchain fee
- **Settlement:** T+1
- **KYC:** Required for every deposit; payer can upload own KYC or skip (provider informs merchant via Telegram group); no settlement until documents accepted; verification same day
- **Transaction limits:** Min EUR 61; Max EUR 5,000; Daily EUR 10,000; Monthly EUR 30,000
- **FTDs:** Yes
- **Restricted countries:** Afghanistan, Algeria, Bangladesh, Bolivia, Canada, China, Colombia, Cambodia, Congo, Cote d'Ivoire, DPRK, Ecuador, Estonia, Guyana, Indonesia, Iran, Iraq, Japan, Jordan, Kyrgyzstan, Laos, Liberia, Morocco, Nepal, Pakistan, Saudi Arabia, Somalia, Sudan, Taiwan, Thailand, USA, Vietnam

(Source: Offer16CryptoSolution.pdf)

---

### Product 9: Open Banking -- SOTpay (Gala Technology)
- **Method:** MOTO/phone payments using Open Banking instead of card; merchant registers transaction via portal, customer receives bank payment journey
- **Banks integrated (as documented):** Barclays, First Direct, Halifax, HSBC Personal, Lloyds, Monzo, Nationwide, NatWest, RBS, Revolut, Santander, TSB, AIB, Bank of Ireland, Bank of Scotland, Danske, M&S, Ulster, Tesco, Barclays Corporate, HSBC Business, Lloyds Business, Clydesdale, Yorkshire
- **Benefit:** Reduces card processing costs; results returned simultaneously to customer and merchant

(Source: SOTpayOpenBankingJourney.pdf)

---

### Product 10: Opayo (SagePay) Virtual Terminal and Gateway
- **Provider:** Opayo (formerly SagePay; now operated by Elavon/FIS)
- **Function:** Cloud-based admin area for transaction management, reporting, VT, fraud prevention
- **Merchant-facing tools:** Virtual Terminal, transaction search, reports, payment page customisation, fraud rules
- **Login URLs:** Test: https://test.sagepay.com/mysagepay/login.msp | Live: https://live.sagepay.com/mysagepay/login.msp
- **Support:** support@opayo.io

(Source: mysagepayguidek.pdf)

---

## C. Pricing and Commercials

### Worldpay Platinum Pricing Tiers (via MWBS)
*These are floor/base/ceiling rates by card type and monthly volume band.*

**Consumer Credit (Visa & Mastercard):**
| Volume Band | Floor Rate | Base Rate | Ceiling Rate | Frequency |
|---|---|---|---|---|
| £0--100k | 0.90% | 1.50% | 2.99% | Per Transaction |
| £100k--£250k | 0.80% | 1.50% | 2.99% | Per Transaction |
| £250k--£1m | 0.77% | 1.50% | 2.99% | Per Transaction |
| £1m--£3m | 0.75% | 1.50% | 2.99% | Per Transaction |
| £3m--£5m | 0.65% | 1.50% | 2.99% | Per Transaction |
| £5m--£10m | 0.60% | 1.50% | 2.99% | Per Transaction |

**Consumer Debit (Visa & Mastercard):**
| Volume Band | Floor Rate | Base Rate | Ceiling Rate | Frequency |
|---|---|---|---|---|
| £0--100k | 0.49% | 1.50% | 1.99% | Per Transaction |
| £100k--£250k | 0.40% | 1.50% | 1.99% | Per Transaction |
| £250k--£1m | 0.35% | 1.50% | 1.99% | Per Transaction |
| £1m--£3m | 0.31% | 1.50% | 1.99% | Per Transaction |
| £3m--£5m | 0.29% | 1.50% | 1.99% | Per Transaction |
| £5m--£10m | 0.27% | 1.50% | 1.99% | Per Transaction |

**Mastercard Commercial & Visa Commercial Credit:**
| Volume Band | Floor Rate | Base Rate | Ceiling Rate | Frequency |
|---|---|---|---|---|
| £0--100k | 2.20% | 2.50% | 3.99% | Per Transaction |
| £100k--£250k | 1.90% | 2.50% | 3.99% | Per Transaction |
| £250k--£1m | 1.87% | 2.50% | 3.99% | Per Transaction |
| £1m--£3m | 1.85% | 2.50% | 3.99% | Per Transaction |
| £3m--£5m | 1.81% | 2.50% | 3.99% | Per Transaction |
| £5m--£10m | 1.80% | 2.50% | 3.99% | Per Transaction |

**Visa Commercial Debit:**
| Volume Band | Floor Rate | Base Rate | Ceiling Rate | Frequency |
|---|---|---|---|---|
| £0--100k | 1.50% | 2.50% | 3.99% | Per Transaction |
| £100k--£250k | 1.45% | 2.50% | 3.99% | Per Transaction |
| £250k--£1m | 1.40% | 2.50% | 3.99% | Per Transaction |
| £1m--£3m | 1.35% | 2.50% | 3.99% | Per Transaction |
| £3m--£5m | 1.30% | 2.50% | 3.99% | Per Transaction |
| £5m--£10m | 1.25% | 2.50% | 3.99% | Per Transaction |

**Worldpay Secondary Fees:**
- Auth Fee: Floor £0.010; Base £0.025; Ceiling £0.045 (per transaction)
- Chargeback Admin Fee: £20 (per transaction -- fixed)
- MMSC (Minimum Monthly Service Charge): Floor £10; Base £15; Ceiling £20 (monthly)
- PCI IP Compliance Scan: £35 (annually)
- PCI Non-Compliance Fee: £22.50 (monthly)
- PCI Programme Fee: £5 (monthly)
- PCI IP Managed Programme Fee: £17.50 (monthly)
- PCI Verbal Assessment Fee: £20 (annually)

**Worldpay Premium Transaction Charges:**
- CNP/MOTO: Floor £0.003 per transaction
- E-Com Non-Secure: Floor £0.005 per transaction
- E-Com Secure: Floor £0.0045 per transaction
- Inter-regional: 1.25% + 6.5p per transaction
- Intra-regional: Floor £0.010 per transaction

(Source: WorldpayPlatinumpricingtiers.xlsx → Sheet1)

---

### Clover IC++ Pricing Sheet
*The Clover IC++ pricing sheet (CloverICPricingNQFeespricingsheet.xlsx) contains column headers for IC++ Rate (%) and Fixed Rate per card type (Visa/Mastercard sub-types, Maestro, Diners) but all rate cells are blank -- rates must be keyed in by the partner.*

(Source: CloverICPricingNQFeespricingsheet.xlsx → "IC++ by Card Type" and "NQ Uplift Fees by Card Type")

---

### Hardware Price List (MWBS -- exact prices)

**Verifone:**
| Item | Price |
|---|---|
| Verifone V200c | £196.00 |
| Verifone V240m (Wi-Fi/3G) | £284.00 |
| Charging Only Base | £44.00 |
| Bluetooth Base | £120.00 |
| V200c Refurb/Out of Warranty/Customer Damage | £120.00 |
| V240m Refurb/Out of Warranty/Customer Damage | £126.00 |
| Annual Charge (per device per year) | £12.00 |

**Pax:**
| Item | Price |
|---|---|
| Pax A920 Pro Wi-Fi/4G | £335.00 |
| Pax A920 Pro Charging Base | £38.00 |
| Pax A920 Pro Charging and Bluetooth Base | £50.00 |
| Pax A920 Charging Base | £38.00 |
| Pax A920 Charging and Bluetooth Base | £50.00 |
| Pax A77 | £375.00 |
| A80 Countertop | £226.00 |
| Pax Store/Software Fee (per device per year) | £15.00 |

**Castles Technology:**
| Item | Price |
|---|---|
| Castles Saturn 1000 (No Charging Base) | £285.00 |
| Castles Saturn 1000 Charging Base | £38.00 |
| Castles Vega 3000 Mobile/Portable with Bluetooth Comms Base | £334.00 |
| Castles Vega 3000 Mobile/Portable with Charging Base | £315.00 |
| Castles Vega 3000 Mobile/Portable with No Base | £273.00 |
| Charging Base | £57.00 |
| Bluetooth Base | £88.00 |
| Castles MP200 Wi-Fi/Bluetooth | £164.00 |
| Castles MP200 Wi-Fi/Bluetooth/3G | £177.00 |
| Castles Vega 3000 Countertop Ethernet/Wi-Fi | £208.00 |
| Castles Vega 3000 Countertop Ethernet/Wi-Fi and 4G | £227.00 |
| Annual Software/License Fee/Support (per year) | £60.00 |

**Ingenico:**
| Item | Price |
|---|---|
| Desk 3500 | £233.00 |
| Lane 3000 PIN Pad | £220.00 |
| Move 3500 3G/GPRS | £372.00 |
| Move 3500 Bluetooth/Wi-Fi | £410.00 |
| Move 5000 3G/Wi-Fi | £497.00 |
| Move 5000 Charging Only Base | £28.00 |
| Move 5000 Bluetooth/Charging Base | £82.00 |
| Desk 3500 Refurbishment | £120.00 |
| Move 3500 3G Refurbishment (must be returned with base) | £139.00 |
| Move 3500 BT Wi-Fi Refurbishment (must be returned with base) | £139.00 |
| Annual Software/License Fee/Support (per year) | £60.00 |

**Despatch and Technical Support:**
| Item | Price |
|---|---|
| Terminals Configured and Despatched (next business day) | £17.00 |
| Pallet Storage per pallet per month (or part thereof) | £11.00 |
| Helpdesk Fee per terminal per month (minimum £300.00) | £5.00 PTPM |
| Terminal swap via DPD SWAPIT (incl. delivery and collection; cut-off 3pm) | £22.50 |
| Terminal Testing | £6.50 |
| Roaming SIM per month (min 12-month contract, 20MB pooled data) | £1.70 |
| Terminal Collections (ad hoc, customer to Service Logistics) | £15.00 |
| On-Site Technical Engineer Visit (30 mins) | £87.00 |
| On-Site Technical Engineer (thereafter per 15 mins) | £12.50 |
| Plug and Play Engineer (40 mins) | £46.00 |
| Plug and Play Engineer (thereafter per 15 mins) | £12.50 |

**Additional Courier Fees (Standard Deliveries):**
| Service | Price |
|---|---|
| Next day before 10:30am | £12.50 |
| Next day before Midday | £5.00 |
| Highlands and Islands (2 days) | £9.50 |
| Northern Ireland (next day) | £12.00 |
| Eire/IOM/CI | £12.00 |
| Eire (next day) | £12.00 |
| Channel Islands (next day) | £30.00 |
| Saturday | £9.50 |
| Saturday before 10:30am | £19.00 |
| Saturday before Midday | £13.00 |
| Sunday Mainland UK | £19.00 |

**SWAPIT Courier:**
| Service | Price |
|---|---|
| SWAPIT before 10:30am | £17.50 |
| SWAPIT before Midday | £11.50 |
| SWAPIT Saturday | £9.50 |
| SWAPIT Saturday before 10:30am | £19.00 |
| SWAPIT Saturday before Midday | £13.00 |
| SWAPIT Highlands and Islands | £9.50 |
| SWAPIT Eire | £19.00 |
| SWAPIT NI | £12.50 |
| SWAPIT Channel Islands | £34.50 |
| SWAPIT Mainland UK Sunday | £25.00 |
| Re-deliver to different address | £11.50 |
| Refused/return-to-sender | £11.50 |

**Verifone Ocius Integration (Rental):**
| Solution | Duration | Price |
|---|---|---|
| P400+ (IP connection) | 12 months | £32.50/month |
| P400+ (IP connection) | 24 months | £24.00/month |
| P400+ (IP connection) | 36 months | £19.00/month |
| P400+ (IP connection) | 48 months | £17.00/month |
| V240M+ (Tri Comms) | 12 months | £76.00/month |
| V240M+ (Tri Comms) | 24 months | £48.00/month |
| V240M+ (Tri Comms) | 36 months | £37.00/month |
| V240M+ (Tri Comms) | 48 months | £31.50/month |
| V240M+ (Wi-Fi) | 12 months | £58.00/month |
| V240M+ (Wi-Fi) | 24 months | £38.00/month |
| V240M+ (Wi-Fi) | 36 months | £29.50/month |
| V240M+ (Wi-Fi) | 48 months | £25.50/month |

Set-up fees: £25 for all Ocius options.

**Verifone Ocius Capex (P400+):**
- P400+: £220.00 | P400 Ethernet cable: £32.00 | PSU: £13.00
- Gateway (12 months): £13.00/month | (24 months): £11.50/month | (36 months): £10.00/month | (48 months): £10.00/month

**Verifone Ocius Capex (V240M Tri Comms):**
- V240M 3G Plus: £48.00 | Charging Base: £56.75
- Gateway (12 months): £13.00/month | (24 months): £11.50/month | (36 months): £10.00/month | (48 months): £9.75/month

**Verifone Ocius Capex (V240M Wi-Fi/Bluetooth):**
- V240M: £410.00 | Charging Base: £57.00
- Gateway (12 months): £13.00/month | (24 months): £11.50/month | (36 months): £10.00/month | (48 months): £9.75/month

**Managed Service (Ocius):**
- P400+: 36 or 48 months = £5.00/month
- V240M Tri Comms: 36 or 48 months = £7.50/month

(Source: MWBSv2_0HardwareBrochure.pdf → "Price List" pages 10--17)

---

### Clover Software Pricing
- Payments Plus Bundle: No monthly fee
- Register Lite Bundle: £6.99 per month per device
- Register Bundle: First device £39.95/month; additional devices £6.99/month
- Table Service: First device £59.95/month; additional devices £6.99/month

(Source: CloverJuly2024SoftwareandSectors.pdf → "Software as a Service | Pricing" pp. 58--61)

---

## D. Onboarding Requirements

### emerchantpay KYC Document List (Applicable to emerchantpay-routed merchants)
1. Application and Agreement for Account Opening and Payment Services -- notary certified original
2. Merchant Application and Agreement Form -- originally signed
3. Certificate of Incumbency/Good Standing/Company Extract (or Cyprus equivalent documents) -- must include company name, incorporation number, date, directors, share capital, shareholders, registered address. EU companies: downloadable or notarised/apostilled. Non-EU: apostilled original or notarised.
4. Certificate of Incorporation / Registration -- as above
5. Memorandum and Articles of Association -- as above
6. Trust deed or Nominee shareholder agreement (where applicable) -- certified true copy
7. Licences/Certificates/Permission/Approvals for regulated business activities -- certified true copy
8. Power of Attorney (if account managed by non-director) -- notarised original and apostilled
9. Board Resolution (if company has more than 1 director) -- original with wet signatures
10. Personal documents for each Director: Passport copy + Proof of residential address (utility bill or bank statement, self-certified)
11. Personal documents for each UBO
12. Personal documents for additional signatories

(Source: ListofrequiredDocuments2019.pdf)

### MCA Boarding Requirements (MWBS)
- Business website link
- Application completed on CRM (full director and beneficial owner details)
- Proof of business banking
- Photo ID for each beneficial owner
- Correct mobile number and email for each individual (required for digital contract signing)
- Note confirming merchant consent for Open Banking (speeds process; without it, 3--12 months PDF bank statements required, causing delay and potentially lower offer)

(Source: MCAPartnerProcessGuide.pdf → "Basic Boarding Requirements")

### MWBS Risk Sector Appetite (Cashflows/MWBS underwriting -- Aug 2022)
Categories are: **Mainstream** (can recruit), **Restricted** (refer for enhanced checks), **Prohibited** (cannot sign).

**Selected Restricted examples:**
- Advertising Services (MCC 7311) -- both CP and CNP
- Adult Clothing and Toys / Adult Shops (MCC 5999) -- both CP and CNP
- CBD Products UK merchants only, UK & EU processing (MCC 5499)
- Cosmetic Surgery <30 days delivery (MCC 8099) -- requires Medical Council Membership; UK only
- Windows/Doors/Conservatories/Solar & Home Improvements (MCC 1520) -- requires financials
- Dating -- mainstream (MCC 7273 CNP) -- VISA High Risk Registration required
- E-Cigarettes/VAPE non-UK ECOM (MCC 5993) -- country blocks required
- ESTA/Immigration/Visa/Passport Services (MCC 9399)
- Cruise Lines -- onboard spend only (MCC 4411)
- Insurance (MCC 6300) -- requires FCA registration / eMoney licence

**Selected Prohibited examples:**
- Ad flipping platforms
- Adult escort agencies, dating specialist/casual liaison websites (MCC 7273)
- Cosmetic surgery >30 days delivery or non-Medical Council Membership or non-UK
- Travel packages, tour operators, ATOL/ABTA regulated travel (MCCs 4411 reserved, 4722, 4772)
- Hotels with pre-pay casual reservation sites (MCC 7011)
- Cruise line reservation/package bookings

**Key underwriting signals (from Risk Appetite Sheet2):**
- Day threshold min/max; ATV threshold min/max; Turnover threshold max [NEEDED: actual values not populated in sheet]
- Partner exceptions noted: some partners have standard terms of T+3 and 0% rolling reserve up to £10k exposure
- VISA GARS: high turnover or high ATV should not be auto-boarded
- Fraud checks and duplication checks required before auto-boarding
- Scheme High Risk Registration required for certain categories

(Source: RiskSectorAppetite.xlsx → "RISK APPETITE AUG 2022" and "Sheet1")

### emerchantpay Acceptance Policy (Global -- v01, April 2021)
Three risk tiers with different settlement and documentation requirements:
- **Low Risk / Standard:** Settlement T+3 (CP), T+3 (CNP), T+7 (VT only); standard due diligence; requires photos of business premises; CNP requires 3DS 1/2; start-up with 100% MOTO requires additional review
- **High Risk / Enhanced:** Settlement weekly with 1-week delay; enhanced due diligence; photos of business; CNP requires 3DS 1/2; refunds and rolling reserve on case-by-case basis
- **Prohibited:** Unacceptable across all channels

Selected examples:
- Low Risk: Accessory & Apparel Stores (MCC 5699), Accounting Services (MCC 8931), Agricultural Co-ops (MCC 763), Air Ambulance (MCC 4119)
- High Risk: Adult content (MCC 5967), Advertising (MCC 7311), Air Carriers (MCC 4511)
- Prohibited: Ad flipping platforms (MCC 7299)

(Source: EMP-WW-AcceptancePolicy-v01-20210701-_1_.pdf → various rows)

---

## E. Terminal Support
- MWBS helpdesk: 01933 656 323 (via Service Logistics)
- Service Logistics: 0345 620 0000; available Mon--Sat 8am--11pm; Sun 8am--8pm
- myPOS devices: +44 20 3129 1091 (24/7)
- Terminal support only available on terminals on a monthly contract through MWBS
- Annual helpdesk fee: £5 per terminal per month (minimum £300)

(Source: MWBSv2_0HardwareBrochure.pdf → "Terminal Support" pages 18--19)
