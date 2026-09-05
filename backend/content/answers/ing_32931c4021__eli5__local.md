---
qid: ing_32931c4021__eli5__local
question: 'Explain: Cache Repeated Work — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 230
total_tokens: 392
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:56:00-05:00'
sources: []
---

Imagine a busy bakery that receives the same order every day: a dozen chocolate croissants. Instead of kneading dough from scratch each time, the baker keeps a small stack of pre‑baked croissants ready to hand out. In client‑server terms, the “bakery” is the server, the “customers” are clients, and the pre‑made croissants are cached results.

**Cache** means temporarily storing a result (like a computed response) so it can be reused quickly. **Repeated work** refers to the same calculation or database query that many clients request over time. By putting this result in a cache—an in‑memory store such as Redis—the server answers new requests instantly without redoing the heavy lifting.

The key trade‑off: keep the cached data fresh enough (evict old entries) while gaining speed. This simple “pre‑made croissant” trick is what most high‑traffic web services use to stay fast and efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
