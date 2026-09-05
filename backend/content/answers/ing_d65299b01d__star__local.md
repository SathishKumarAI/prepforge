---
qid: ing_d65299b01d__star__local
question: 'Explain: Eventual consistency — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 273
output_tokens: 353
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:37:23-05:00'
sources: []
---

**Situation:**  
At my previous startup we were migrating our user‑profile service from a monolithic database to a distributed NoSQL store (Cassandra) to support 10 M daily writes. The team noticed that after profile updates, some microservices still read stale data for up to 30 seconds.

**Task:**  
I had to design and implement an eventual consistency strategy that guaranteed near‑real‑time reads while keeping write latency low, all within the constraints of our existing API layer and budget.

**Action:**  
I introduced a *read‑through cache* with Redis as a secondary store. On writes I performed an asynchronous “write‑back” to Cassandra and simultaneously updated Redis via a Kafka stream, ensuring that any read hit would get the latest value from cache first. For critical reads (e.g., authentication), we added a short “cache‑stale‑timeout” fallback: if Redis returned stale data older than 5 s, the service fetched fresh data from Cassandra and refreshed the cache. I also implemented vector clocks to detect conflicting updates and exposed a retry policy for clients.

**Result:**  
Read latency dropped from ~150 ms to <10 ms in 95% of cases, while write throughput stayed below 20 µs per record. Stale reads were reduced to less than 0.01% of all requests, and the system now reliably met our SLA for real‑time profile updates. I learned that combining a fast cache with a message‑driven sync layer can bridge the gap between eventual consistency and user expectations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
