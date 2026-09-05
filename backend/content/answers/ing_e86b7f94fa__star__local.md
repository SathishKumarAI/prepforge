---
qid: ing_e86b7f94fa__star__local
question: 'Explain: Strong Consistency Where Invariants Live'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 380
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:12:59-05:00'
sources: []
---

**Situation:**  
At my previous company we were building a real‑time recommendation engine that stored user interaction logs in a sharded NoSQL database. A compliance audit revealed that any read of the “user preference” table had to reflect all writes from the last 24 hours—no stale data could be served, otherwise the marketing team risked violating GDPR.

**Task:**  
I was tasked with ensuring *strong consistency* for those preference reads while keeping the write throughput high enough to handle millions of events per day.

**Action:**  
First, I mapped out where the invariants lived: each user’s preference vector had to be atomic and up‑to‑date across all replicas. I introduced a two‑phase commit protocol on top of our existing Raft cluster, coupling it with a lightweight “write‑ahead log” that buffered changes in memory before persisting them. For reads, I implemented an epoch‑based versioning system; the client would always hit the leader node and receive a read‑your‑writes guarantee by checking the local version counter against the global epoch. To keep latency low, I added a local cache with a short TTL (5 ms) that could serve stale data only if it was within the same epoch window.

**Result:**  
After deployment, read consistency violations dropped from 0.8% to <0.001%, meeting GDPR requirements. Write throughput stayed above 1.2 M ops/sec, and average read latency increased by just 12 ms—well within SLA. I learned that strong consistency can coexist with high performance when invariants are clearly defined and enforced at the protocol level rather than relying on eventual‑consistency tricks alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
