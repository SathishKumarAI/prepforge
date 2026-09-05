---
qid: ing_e600ff55c0__star__local
question: 'Explain: Types of Pagination'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 347
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:07:50-05:00'
sources: []
---

**Situation**  
While leading the backend team at a fintech startup, we built a public REST API that returned transaction histories. Our customers were hitting rate limits and timeouts because each call could return thousands of records.

**Task**  
I needed to design a pagination strategy that balanced developer usability, performance, and scalability, then explain it clearly to both engineers and product managers.

**Action**  
I evaluated three common patterns: offset‑based, cursor‑based, and keyset pagination. I implemented cursor pagination using opaque tokens (e.g., base64‑encoded `last_seen_id` + timestamp) because it avoids “duplicate or missing” records when new data is inserted concurrently. The API returned a `next_cursor` field; clients could request the next page with that token. I also added optional `limit` and `sort_by` parameters, documented defaults, and wrote unit tests to cover edge cases (empty result sets, last page). To illustrate trade‑offs, I prepared a slide deck comparing latency, complexity, and consistency for each type.

**Result**  
After deployment, average response time dropped from 1.8 s to 0.9 s, and API error rates fell by 45%. Clients praised the intuitive cursor system, and we avoided the pitfalls of offset pagination. I learned that a clear, concrete use case plus side‑by‑side comparison makes abstract concepts digestible for non‑technical stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
