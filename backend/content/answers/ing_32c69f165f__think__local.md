---
qid: ing_32c69f165f__think__local
question: 'Explain: Capture and Settlement Flow — How VISA Works When Swiping a Credit
  Card'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 582
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:51:37-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Focus on *credit* transactions, not debit or prepaid.  
- Assume a standard Visa‑network path (POS → acquirer → Visa → issuer).  
- Ignore optional services (3D Secure, EMV chip) unless asked.

**2️⃣ Mental model: two‑phase flow**  
1. **Capture (Authorization)** – quick “pre‑auth” to confirm card validity & available credit.  
2. **Settlement (Clearing & Fund Transfer)** – later batch process that moves money from issuer to acquirer and updates balances.

**3️⃣ Step‑by‑step reasoning**  

| Stage | What happens | Key actors | Typical time |
|-------|--------------|------------|--------------|
| **Swipe / tap** | POS reads PAN, expiration, CVV/Chip data. | Merchant terminal | 0 s |
| **Authorization request** | Terminal sends XML/ISO‑8583 message to acquirer’s processor. | Acquirer → Visa Network | <1 s (real‑time) |
| **Visa routing** | Visa routes to card‑holder’s issuing bank. | Issuer | <1 s |
| **Risk check & credit limit** | Issuer verifies fraud rules, available credit; approves or declines. | Issuer | <1 s |
| **Auth response** | Issuer returns approval code back through Visa → acquirer → merchant. | Merchant receives “approved” | ~1–2 s |
| **Capture / settlement (batch)** | At end of day, acquirer sends capture batch to Visa. | Acquirer → Visa → Issuer | Minutes‑to‑hours |
| **Fund transfer** | Visa clears the amount; issuer debits cardholder’s account and credits acquirer’s settlement account. | Issuer → Acquirer | 1–2 business days |
| **Reconciliation** | Merchant reports totals; acquirer posts to merchant’s bank account (net of fees). | Merchant → Acquirer | Days |

**4️⃣ Common traps to avoid**  
- Mixing up *authorization* vs. *capture*.  
- Forgetting that settlement is usually delayed by a day or more.  
- Ignoring that Visa only routes; the actual money moves between banks.

**5️⃣ Sanity‑check & communicate**  
- Verify each actor’s role (merchant, acquirer, issuer, Visa).  
- Confirm timing: instant auth vs. batched settlement.  
- Use a simple diagram or table when explaining to non‑technical stakeholders.  

This structured approach ensures you cover all key steps without overlooking the distinct phases that make Visa’s “swipe‑to‑settle” possible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
