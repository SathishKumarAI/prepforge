---
qid: ing_86d4a8c4a8__fp__local
question: 'Explain: When you add and use rewards cards with Apple Pay transactions
  in stores'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 321
total_tokens: 496
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:51:03-05:00'
sources: []
---

**Why Apple Pay can read a rewards card at checkout**

When you tap an iPhone or Apple Watch on a POS terminal, the device initiates a *contactless communication* session (NFC). The terminal sends a random challenge; your phone uses a *device‑specific cryptographic key* to sign it. This proves that the transaction is authorized by the card issuer without exposing the master account number—an instance of zero‑knowledge authentication.

A rewards card, however, is not a payment instrument but a *loyalty credential*. In Apple Pay, loyalty data are stored in an encrypted “Wallet” container and transmitted as a separate, signed payload alongside the payment token. The POS terminal forwards this to the issuer’s server, which looks up the customer profile and updates points or applies offers. Because the loyalty packet is independent of the payment authorization, it can be sent even if the transaction fails (e.g., declined card), ensuring that rewards are never lost.

**Non‑obvious insight:**  
The same cryptographic handshake that protects payments also guarantees *confidentiality* for loyalty data. Thus a single NFC tap simultaneously completes a secure payment and an anonymous reward claim, all while keeping the customer’s card number hidden from the merchant—a subtle fusion of security and privacy engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
