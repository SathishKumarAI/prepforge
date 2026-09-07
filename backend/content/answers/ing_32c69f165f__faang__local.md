---
qid: ing_32c69f165f__faang__local
question: 'Explain: Capture and Settlement Flow — How VISA Works When Swiping a Credit
  Card'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 675
total_tokens: 914
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:42:42-05:00'
sources: []
---

**1️⃣ Clarify**  
We need to explain the *capture* (authorization → settlement) workflow that occurs when a customer swipes a VISA credit card at a merchant’s point‑of‑sale (POS).  
Assumptions:  
- Card is in an active account, issuer and acquirer are connected via VISA network.  
- The transaction uses “present‑card” magnetic stripe or chip; no contactless/EMV‑only nuance.

**2️⃣ Approach**  
Outline the end‑to‑end flow:  
1. **Authorization request** (capture of funds) → 2. **Issuer approval** → 3. **Acknowledgement to merchant** → 4. **Settlement (fund transfer)** → 5. **Reconciliation & reporting**.

**3️⃣ Depth**  
| Step | What happens | Key actors | Timing |
|------|--------------|------------|--------|
| **Swipe/Chip read** | POS captures PAN, expiry, CVV, transaction amount. | Terminal | <1 s |
| **Authorization (AUTH)** | Terminal sends encrypted request to acquirer → VISA network → issuer. Issuer checks limits, fraud rules, and available credit. | Acquirer → VISA → Issuer | 200–500 ms (network) |
| **Approval/Decline** | Issuer returns “Approved” or “Declined”. If approved, a *authorization code* is issued. | Issuer → VISA → Acquirer → Terminal | <1 s |
| **Capture / Settlement** | At end of day or when merchant batches transactions, the acquirer sends a *settlement file* to VISA, which forwards it to issuers. Funds are debited from cardholder’s account and credited to merchant’s settlement account (minus interchange + network fees). | Acquirer → VISA → Issuer → Merchant bank | 1–3 days |
| **Reconciliation** | Merchants receive a daily statement of settled amounts; disputes handled via charge‑back process. | Merchant, Acquirer, Issuer | Ongoing |

*Technical notes*:  
- All messages use ISO 20022 or legacy ISO 8583 formats over TLS/SSL.  
- Visa’s *Single Message* (SM) format reduces round‑trips.  
- Interchange fees are set by VISA per card type and transaction category.

**4️⃣ Edge Cases**  
- **Expired card**: Authorization fails; merchant can request a new PAN.  
- **Insufficient credit**: Decline with “credit limit exceeded.”  
- **Fraud alerts**: Issuer may flag or temporarily block the account.  
- **Offline transactions** (e.g., lost connectivity): Terminal stores the transaction and submits it once online.

**5️⃣ Optimize & Communicate**  
Explain that Visa’s *real‑time* authorization reduces risk, while batch settlement balances speed vs. liquidity for merchants. Mention that newer schemes (e.g., *tokenization*, *EMV Co‑Chip*) enhance security but follow the same core flow. Conclude by highlighting how each step protects stakeholders: cardholder (fraud protection), issuer (credit risk), acquirer/merchant (revenue capture).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
