---
qid: ing_1b075a87bc__aws__local
question: 'Explain: HTTP Method Behavior — Idempotency | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 363
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:27:24-05:00'
sources: []
---

**Situation / Task**  
I led the redesign of a public REST API for our recommendation engine (≈10 M requests/day). The team was hitting “duplicate processing” bugs because non‑idempotent POSTs were being retried by clients after transient network failures, inflating compute costs and polluting analytics.  

**Action**  
* **Ownership & Customer Obsession** – I first mapped the failure surface: 12 % of traffic hit retries, causing ~2 M duplicate recommendation runs daily (~$5k/month).  
* **Dive Deep** – I introduced a *client‑supplied Idempotency-Key* header for all state‑changing calls. The backend stores the key + result in an **Amazon DynamoDB** table with TTL 48 h. If a request arrives with a duplicate key, we return the cached response without re‑executing the ML inference pipeline.  
* **Bias for Action & Invent & Simplify** – Implemented this via a lightweight **API Gateway + Lambda** layer; no changes to the core model service.  
* **Deliver Results** – After rollout, duplicate runs dropped by 99 % (from 12 % to <0.1 %), cutting compute spend from $5k/month to <$200/month and improving latency by 15 %.  

**Result**  
The idempotency design not only saved cost but also gave customers a reliable experience; we now see a 4× higher retention on the recommendation feature. I documented lessons in our post‑mortem, emphasizing that even “small” API quirks can cascade into significant operational pain.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
