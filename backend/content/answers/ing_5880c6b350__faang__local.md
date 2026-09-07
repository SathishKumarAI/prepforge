---
qid: ing_5880c6b350__faang__local
question: 'Explain: Authorization Flow — How VISA Works When Swiping a Credit Card'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 574
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:09:25-05:00'
sources: []
---

**Authorization Flow – How Visa Processes a Swipe**

| Step | What Happens | Key Points |
|------|--------------|------------|
| **1️⃣ Transaction Initiated** | Cardholder taps/ swipes → POS reads PAN, expiration, CVV. | Data encrypted (EMV chip) or tokenized. |
| **2️⃣ Application Request** | POS sends transaction data + amount to Acquirer’s payment gateway. | Uses ISO 8583 protocol; may include additional fraud‑check flags. |
| **3️⃣ Routing & Forwarding** | Gateway forwards the message to Visa Net → Visa’s “Authorization System.” | Load‑balanced, geographically distributed servers. |
| **4️⃣ Risk & Fraud Check** | Visa evaluates: velocity limits, card status (active/blocked), issuer‑specific rules, and global fraud lists. | Uses real‑time analytics; can call issuer for additional data. |
| **5️⃣ Issuer Decision** | Visa routes request to Card‑Issuer’s “Authorization System.” | Issuer verifies available credit, account status, and internal policy. |
| **6️⃣ Response Back** | Issuer returns *Approved* or *Declined* (plus reason code). | Sent back through Visa Net → Acquirer → POS. |
| **7️⃣ Settlement Prep** | Approved transaction is queued for settlement; debit/credit of balances occurs later via clearing houses. | Batch processing at end‑of‑day or real‑time if using instant‑settle. |

### Clarify
- Assume EMV chip, not mag‑stripe.
- Visa Net handles routing; we’re focusing on the authorization path.

### Approach
1. Map message flow from POS to Issuer via Visa.
2. Highlight decision points (risk, issuer).
3. Mention key protocols and security layers.

### Depth
- ISO 8583 fields: MTI, PAN, amount, terminal ID.
- Tokenization replaces PAN for PCI‑compliance.
- Visa’s “Fraud Management System” uses machine‑learning models trained on billions of transactions to flag anomalies in milliseconds.
- Decision latency target < 150 ms.

### Edge Cases
- **Card blocked** → immediate decline.
- **Insufficient funds** → issuer declines; may trigger a "reserve" if available credit is pending.
- **Network outage** → fallback to offline authorization with later capture.

### Optimize & Communicate
- Emphasize low‑latency routing and distributed fraud engines for scalability.
- Explain how real‑time risk scoring reduces false declines, improving user experience.
- Note that settlement latency can be optimized by “instant‑settle” options, reducing the time between authorization and account debit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
