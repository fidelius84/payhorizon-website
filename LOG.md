# LOG.md
## Decision and Extraction Log

---

## Documents Read

| File | Content Summary |
|---|---|
| EMP-WW-AcceptancePolicy-v01-20210701 | emerchantpay global acceptance policy v01 (April 2021); full MCC-level risk appetite |
| EMP_EU_UK_CardPresent_SalesDeck_02 | emerchantpay EU/UK card-present sales deck v02; product suite, terminal range |
| ListofrequiredDocuments2019 | KYC document requirements for emerchantpay merchant onboarding |
| MWBSv2_0HardwareBrochure | Full hardware price list, terminal catalogue, acquirer-device matrix, support contacts |
| MWBSv1_3ThePortalBrochure | MWBS Partner Portal overview; white-label, quote builder, multi-acquirer |
| MWBSv1_5EcommerceBrochure | E-commerce and VT gateway rates by risk tier; revenue share model |
| MWBSv1_7OurTeamBrochure3 | MWBS team directory; operational contacts |
| MWBS_v1_2_Merchant_Panel_User_Guide | Merchant Panel user guide; all features including MCA and Open Banking |
| MCAPartnerProcessGuide | MCA partner process; criteria, exclusions, advance parameters, commission, workflow |
| MWBSPreApprovedMCABrochure (x2) | Pre-approved MCA for Elavon merchants; Recap as MCA provider; commission |
| RiskSectorAppetite.xlsx | MWBS/Cashflows risk appetite Aug 2022; Mainstream/Restricted/Prohibited by MCC |
| WorldpayPlatinumpricingtiers.xlsx | Worldpay Platinum tiered pricing; floor/base/ceiling rates; secondary fees |
| CloverICPricingNQFeespricingsheet.xlsx | Clover IC++ pricing template -- all rate cells blank (template only) |
| CloverJuly2024SoftwareandSectors | Clover SaaS pricing plans; target sectors |
| CloverJuly2024Flex | Clover Flex hardware overview |
| CloverJuly2024StationDuo2 | Clover Station Duo 2 hardware overview |
| CloverFlex4Pocket_v2 | Clover Flex Pocket (launching Q3 2025); EMEA; retail price TBD |
| DX8000ProductSheet | Worldpay/Axium DX8000 terminal product sheet |
| offer03_1globalsolution | PSP Angels Global Processing (EUR, EU acquiring); full fee schedule |
| offer35globalsolution | PSP Angels Global Solution (CNY, China acquiring); full fee schedule |
| Offer16CryptoSolution | PSP Angels Crypto Solution (pay-by-link, 15% processing fee) |
| SOTpayOpenBankingJourney | SOTpay Open Banking journey; bank list; merchant and customer flow |
| RegisterPartnerOverviewLevelSet2020 | Register EPOS (Smart Volution) overview; verticals, hardware, software |
| RegisterQuickSetupGuideSunmiDevices | Register setup guide for Sunmi devices |
| MerchantProvisioningQuickStartGuide | Register merchant portal provisioning guide |
| A920 POSitive/Weblink config guide | Configuring PAX A920 with POSitive or Weblink integration |
| POSitiveUserGuide (x2 versions) | POSitive payment application user guide |
| mysagepayguidek | Opayo (SagePay) account user guide |
| Move5000/Move3500 datasheets | Ingenico terminal specs |
| A77 datasheet | PAX A77 specs |
| Saturn1000F2 datasheets | Castles Saturn 1000 F2 specs and guides |
| EPGOverviewBattlecard | Image-only; no text extracted |

---

## Key Extracted Facts

1. MWBS is the master ISO/intermediary; Payhorizon operates as a reseller beneath them.
2. Six acquirers available via MWBS: AIB, Elavon, Trust Payments, emerchantpay, Worldpay, myPOS.
3. Worldpay Platinum floor rates: Credit 0.60-0.90% / Debit 0.27-0.49%; Commercial Credit 1.80-2.20%.
4. MWBS hardware sold on pro-forma; not shipped until paid in full.
5. Terminal helpdesk: Service Logistics Mon-Sat 8am-11pm / Sun 8am-8pm; fee GBP5 PTPM (min GBP300).
6. MCA: GBP5k-GBP1m; factor rates 1.03-1.30; partner commission circa 15%; funded 3-4 days.
7. Pre-approved MCA (Elavon merchants): 15% new / 10% renewal; paid following Friday after clearance.
8. E-commerce suggested rates: Low risk GBP10/month + 12p/tx; High risk up to GBP40/month + 20p/tx.
9. PSP Angels Global EUR: 6.5% processing + EUR 0.40/tx; rolling reserve 10% / 6 months; T+7.
10. Clover software: Payments Plus (free) / Register Lite (GBP6.99) / Register (GBP39.95) / Table Service (GBP59.95).

---

## Open Questions [NEEDED]

1. [NEEDED] Approved public-facing wording for Payhorizon to describe its MWBS relationship.
2. [NEEDED] Required website/outreach disclosures re: regulated acquirer.
3. [NEEDED] Payhorizon commission / buy-rate structure with MWBS.
4. [NEEDED] Clover IC++ and NQ Uplift actual rates (sheet is blank template).
5. [NEEDED] RiskSectorAppetite.xlsx Sheet1 threshold values (not populated).
6. [NEEDED] PSP Angels EU and Asia Solution (file 6217b52798ec6) -- not fully extracted.
7. [NEEDED] EPGOverviewBattlecard content -- image-only, extraction failed.
8. [NEEDED] Acquirer buy rates for Elavon, Trust Payments, AIB, myPOS.
9. [NEEDED] Payhorizon FCA status or registered agent status.
10. [NEEDED] Contract terms between Payhorizon and MWBS (revenue share, exclusivity).

---

## Document Conflicts

None. Pricing documents cover different acquirers and are not contradictory. MWBS risk appetite and emerchantpay acceptance policy are separate policies for separate acquirers.

---

## Extraction Notes

- Most project "PDF" files are ZIP archives with JPEG images and .txt extracts.
- EPGOverviewBattlecard.pdf is image-only with no text.
- CloverICPricingNQFeespricingsheet.xlsx is a blank rate template.
- RiskSectorAppetite.xlsx Sheet1 has parameter labels but no values.
- All prices confirmed from MWBSv2_0HardwareBrochure.pdf pages 10-17 and ecommerce brochure.

Log created: 2026-03-02
