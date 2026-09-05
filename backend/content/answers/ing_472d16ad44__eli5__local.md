---
qid: ing_472d16ad44__eli5__local
question: 'Explain: Stage 2 — How Google Authenticator Works'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 206
total_tokens: 365
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:29:52-05:00'
sources: []
---

**Stage 2 – What actually happens inside Google Authenticator**

Imagine you and your friend each have a secret recipe book (the *shared secret key*). Every time the clock hits a new minute, both of you flip to the same page in your books and read the same line. That line is your **one‑time password**.

In technical terms, Google Authenticator takes the shared secret and combines it with the current time (in 30‑second blocks) using a simple math trick called *HMAC*. The result is a short, changing number that only you can see because you hold the recipe book. Every 30 seconds it updates automatically, so even if someone sees your code once, it’s useless after a minute.

That’s how the app keeps your login both fast (no typing) and secure (codes change constantly).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
