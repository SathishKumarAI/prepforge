---
qid: ing_84d252df63__faang__local
question: Who Presents the QR Code? — 4 Ways of QR Code Payment
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 509
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:53:39-05:00'
sources: []
---

**Clarify**  
We’re asked “Who presents the QR code?” in the context of **four payment flows using QR codes** (e.g., merchant‑initiated, customer‑initiated, scan‑to‑pay, and dynamic QR).  Confirm whether we need to list all parties that generate or display a QR at each step, and whether the focus is on *who* physically presents it in the user journey.

**Approach**  
1. Enumerate the four common QR payment patterns.  
2. For each pattern, identify the entity (merchant app, customer device, bank server, third‑party gateway) that creates/serves the QR.  
3. Summarize succinctly and note any overlap or special cases.

**Depth**  

| Pattern | Typical Flow | Who presents the QR |
|---------|--------------|---------------------|
| **Merchant‑initiated static QR** | Merchant displays a fixed code on POS or receipt | **Merchant’s point‑of‑sale device / printed material** |
| **Customer‑initiated static QR** | Customer scans a merchant‑supplied code (e.g., in an app) to trigger payment | **Merchant’s mobile/website UI** |
| **Dynamic QR (scan‑to‑pay)** | Customer’s banking app generates a one‑time code for each transaction | **Customer’s banking app / wallet** |
| **Hybrid dynamic QR** | Merchant app shows a QR that pulls a token from the bank on scan | **Merchant’s POS or mobile app** (but token originates from the bank) |

Key nuance: In “dynamic QR” flows, the merchant only displays a *placeholder*; the actual payment data is fetched from the bank after scanning.

**Edge Cases**  
- Offline merchants may use pre‑printed static codes.  
- Some regions use QR on receipts that are read by a customer’s app (reverse flow).  
- Security: dynamic QRs must be time‑bound to prevent replay attacks.

**Optimize & Communicate**  
Highlight that the “presenter” depends on who owns the payment intent at code generation time. Stress clear ownership for audit and fraud prevention, and suggest using SDKs to abstract QR rendering regardless of party. This answer balances breadth (four patterns) with depth (specific presenters), showing structured reasoning suitable for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
