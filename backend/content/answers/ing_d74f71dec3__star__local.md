---
qid: ing_d74f71dec3__star__local
question: 'Explain: NoSQL Database — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 422
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:39:22-05:00'
sources: []
---

**Situation** – At my last company we built a real‑time analytics dashboard for ad impressions that needed to track per‑user click counters in sub‑millisecond time. The existing MySQL table was bottlenecking; read traffic spiked during ad launches and the single point of failure was unacceptable.

**Task** – Design a distributed counter service on top of a NoSQL store that could handle 200 k increments per second, return counts with <10 ms latency, and recover from node failures without data loss or race conditions.

**Action** – I chose Cassandra for its tunable consistency and wide‑column model. Each counter was split into *shards* (hash of userID) to spread writes across nodes. We implemented an optimistic concurrency control using lightweight transactions (LWTs) for single‑node increments, falling back to a *compare‑and‑set* approach when contention exceeded 5 %. For cross‑region replication we used Cassandra’s eventual consistency with read‑repair and hinted handoff; missing updates were reconciled via a last‑write-wins timestamp plus a vector clock per shard. We exposed the service through gRPC, batching writes into micro‑batches (size 32) to reduce round trips. Monitoring showed latency stayed below 8 ms under peak load and recovery time was <30 s after a node crash.

**Result** – The counter system handled 250 k ops/s with 99.9% availability across three data centers, reducing dashboard latency by 70 %. I learned that careful shard design plus Cassandra’s LWTs can give strong consistency where needed while still leveraging eventual consistency for scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
