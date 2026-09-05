---
qid: ing_06bd89ab41__eli5__local
question: 'Explain: Basic payment flow — How do Apple Pay and Google Pay work?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 253
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:46:18-05:00'
sources: []
---

Think of Apple Pay or Google Pay like a secret‑handshake version of buying a coffee.

1. **You tap the phone** – your device talks to the shop’s point‑of‑sale (POS) system through radio waves (NFC).  
2. **A temporary “token” is sent** – instead of giving the real card number, your phone gives a one‑time code that only works for this purchase and this store.  
3. **The shop forwards the token to its bank** – the merchant’s payment processor receives the token and asks the card network (Visa/Mastercard) to verify it.  
4. **Your bank approves** – the network checks your account balance, then sends back a “yes” or “no.”  
5. **You get your coffee** – if approved, the transaction is settled; the merchant gets paid, and you never exposed your actual card details.

So the flow is: tap → token → merchant → bank → approval, all while keeping your real card hidden for security.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
