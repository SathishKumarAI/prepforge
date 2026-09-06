---
qid: ing_84d252df63__fp__local
question: Who Presents the QR Code? — 4 Ways of QR Code Payment
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 388
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:47:39-05:00'
sources: []
---

**Who “presents” the QR code for a payment?**

In a typical QR‑based transaction there are two logical agents: **the payer’s device** and **the payee’s point of sale (POS)**.  
* From a *security* viewpoint, the payer’s device must generate a cryptographically fresh nonce or token that binds the amount to the transaction.  This guarantees non‑repudiation; if the merchant were to present the code, the payer could later deny having authorized it.  
* Conversely, the POS must be able to **verify** the authenticity of the incoming QR string and map it to a valid merchant account.  Therefore the merchant’s terminal usually displays a *static* “merchant identifier” QR that the customer scans.  

Thus there are four operational patterns:

1. **Payer‑initiated** – The mobile wallet creates a one‑time code; the merchant scans it (common in India and China).  
2. **Merchant‑initiated static** – A fixed QR on the counter is scanned by the payer’s phone (used in European contactless systems).  
3. **Dynamic merchant QR** – The terminal shows a time‑limited QR that encodes both merchant ID and session token, reducing replay risk.  
4. **Bidirectional verification** – Both sides display a QR; the payer confirms the merchant’s code before scanning, preventing phishing.

The subtle insight most overlook: *the QR is not just a visual prompt—it is a signed data capsule whose placement determines who can forge or tamper with the payment flow.* By aligning the “presenter” with the party that must prove intent, we preserve integrity without extra infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
