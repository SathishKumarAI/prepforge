---
qid: ing_35ffa4e501__eli5__local
question: 'Explain: Webhook Security — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 204
total_tokens: 363
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:01:17-05:00'
sources: []
---

Imagine a mailbox that only accepts letters from a trusted friend. A **webhook** is like that mailbox: it sits on your server and waits for another service (the sender) to drop a message into it whenever something happens—say, a new order or a payment confirmation.

The security challenge is keeping the mailbox from letting in strangers. You do this by giving each mailer a secret key (a **shared secret**) that only they know. When they drop a letter, they attach a small signature made from the message and the secret. Your server reads the letter, recomputes the signature with its own copy of the secret, and if the two match you accept it; otherwise you reject it as spam.

So webhook security is simply “prove the sender knows the secret before you trust their message.” It’s like a digital lock that only your friend can open.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
