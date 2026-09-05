---
qid: ing_83188028a5__star__local
question: 'Explain: Caching Strategy — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 362
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:55:22-05:00'
sources: []
---

**Situation**  
During my internship at a fintech startup, we built a real‑time fraud detection engine that pulled user transaction data from a distributed NoSQL store. The latency kept creeping above our SLA of 50 ms once the traffic hit 10k requests per second.

**Task**  
I was tasked with designing a caching layer to reduce read latency while keeping cache consistency with the underlying database, and to present this design in an upcoming system‑design interview for a senior ML engineer role.

**Action**  
First I profiled the workload: ~70 % of reads were for user profiles that changed only once per day. I chose Redis as an in‑memory store because of its sub‑microsecond read times and Lua scripting for atomic updates. To keep consistency, I implemented a write‑through pattern where every DB update also invalidated or updated the cache key via a Pub/Sub channel. For hot items (top 5 % users), I pre‑warm the cache during off‑peak hours using a background job that serializes recent transactions into a flat file and bulk loads them into Redis. I also added a least‑recently‑used eviction policy with a TTL of 24 h to avoid stale data.

**Result**  
The caching strategy cut average read latency from 120 ms to 32 ms, keeping us well below the SLA even at peak load. In the interview, I was able to explain trade‑offs—latency vs. consistency, memory cost vs. cache hit ratio—and received praise for my clear, data‑driven justification of each design choice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
