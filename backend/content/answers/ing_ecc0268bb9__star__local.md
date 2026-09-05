---
qid: ing_ecc0268bb9__star__local
question: 'Explain: Add Another URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 356
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:22:22-05:00'
sources: []
---

**Situation**  
At a streaming‑media startup we were migrating the recommendation engine from a monolithic Java app to a microservice architecture. The new service needed to check whether a user had already watched a video before pushing it as a suggestion, but the watch history table was petabytes in size and queries were timing out.

**Task**  
Implement an efficient pre‑filter that could quickly reject “already watched” URLs for 10 M concurrent users with <5 ms latency, while keeping memory usage under 4 GB per node.

**Action**  
I designed a distributed Bloom filter layer. Each user’s watch list was hashed into a bit array using 7 independent hash functions (C++ xxhash). The filter shards were stored in Redis Cluster for low‑latency reads and written to disk via RocksDB snapshots every hour. To handle the “add another URL” operation, I added an asynchronous background job that batch‑updates the Bloom filter when new watch events arrive, ensuring eventual consistency without blocking real‑time traffic. We also tuned the false‑positive rate to 0.1% by adjusting array size based on expected unique URLs per user.

**Result**  
Query latency dropped from 120 ms to under 4 ms for >90% of requests. Memory consumption stayed at ~3.2 GB/node, and the system processed 15 M watch events per day with a <0.5% false‑positive rate. I learned how to balance probabilistic data structures against strict latency requirements and the importance of asynchronous updates in real‑time systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
