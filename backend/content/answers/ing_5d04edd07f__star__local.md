---
qid: ing_5d04edd07f__star__local
question: 'Explain: ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 331
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:33:59-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a recommendation engine that served real‑time product suggestions to millions of users. The backend used a NoSQL store for fast reads, but the user‑profile updates (likes, purchases) had to be persisted reliably because they fed into the ML pipeline.

**Task:**  
I needed to design a transaction layer that would guarantee ACID properties while still allowing low‑latency writes and seamless integration with our batch model training jobs.

**Action:**  
We wrapped each write in a lightweight two‑phase commit protocol using Redis streams for the log and an external Postgres database for durability. The “prepare” phase wrote a signed, encrypted record to the stream; the “commit” phase atomically moved it into Postgres via a single `INSERT … ON CONFLICT` statement. For reads we used read‑through caching with optimistic concurrency control: each cached item carried a version number that the ML job verified before consuming data. We also built an event‑driven CDC pipeline that listened to the Redis stream and pushed changes to Kafka, where our training jobs consumed them incrementally.

**Result:**  
Write latency stayed below 12 ms for 95% of operations, while consistency violations dropped from 3.2% to <0.001%. The batch model now trained on fully consistent data, improving recommendation accuracy by 7% in A/B tests. I learned that a hybrid approach—combining fast NoSQL reads with a lightweight transactional log—can satisfy ACID without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
