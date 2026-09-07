---
qid: ing_815f3be74d__faang__local
question: 'Explain: What CAP Really Means — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 372
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:45:37-05:00'
sources: []
---

**Clarify**  
You’re asking what the **CAP theorem** really says about distributed systems.  
*Assumptions*: we’re talking about a replicated data store that must serve reads/writes across multiple nodes and network partitions can happen.

**Approach**  
Explain each of the three properties, why they conflict, and how trade‑offs are made in real systems (e.g., Dynamo vs. Spanner).

**Depth**  
- **Consistency**: every read sees the most recent write (strict).  
- **Availability**: the system always responds to requests.  
- **Partition tolerance**: the system keeps working even when a network split occurs.  
CAP states that in the presence of a partition, you can guarantee at most two of the three.  
Real‑world choices:  
- *CP* (e.g., HBase): sacrifice availability; reject writes until the partition heals to keep data consistent.  
- *AP* (e.g., Cassandra): stay available and let reads return stale data during a split; later reconcile via eventual consistency.  
- *CA* is impossible in practice because partitions are inevitable.

**Edge Cases**  
If partitions are rare, you might lean CP for strong guarantees. If latency is critical and partitions common, AP may be preferred. Testing involves simulating network splits and measuring read/write latencies vs. staleness.

**Optimize & Communicate**  
Highlight that many modern systems (e.g., Spanner) mitigate the trade‑off by adding a global clock to provide “strict consistency” while remaining available—effectively moving the boundaries of CAP with new primitives. Conclude by noting that the theorem guides design, not dictates a single solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
