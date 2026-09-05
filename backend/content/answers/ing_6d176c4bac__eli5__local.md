---
qid: ing_6d176c4bac__eli5__local
question: 'Explain: Non-Functional Requirements — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 266
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:29:14-05:00'
sources: []
---

Think of a tiny‑tall bridge that carries cars (your URLs) from one side of a river to the other, but with a twist: every car is given a super‑short name so it’s easy to remember and fit on a parking sign.  
**Non‑functional requirements** are the rules that tell us how good that bridge must be, not what it does. For TinyURL they include:

* **Speed (performance)** – cars should cross in milliseconds, even if millions of people queue at once.  
* **Reliability (availability)** – the bridge must stay open 24/7; a few minutes down means all traffic is stuck.  
* **Scalability** – as traffic grows, the bridge adds more lanes without slowing down.  
* **Security** – no one can tamper with the short names or redirect cars to bad places.  
* **Maintainability** – if a lane needs repair, it can be fixed without closing the whole bridge.

So, while the functional part is “turn long URLs into tiny ones,” the non‑functional requirements tell us how fast, safe, and robust that transformation must be.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
