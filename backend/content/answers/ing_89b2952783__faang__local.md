---
qid: ing_89b2952783__faang__local
question: 'Explain: Distributed Counter API Design — Distributed Counter System Design
  - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 506
total_tokens: 744
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:04:34-05:00'
sources: []
---

**Distributed Counter API – System‑design walk‑through**

| Step | What I’d do |
|------|-------------|
| **Clarify** | *Goal*: support an integer counter that can be incremented/decremented/read from many nodes with low latency and high availability.<br>*Assumptions*: <br>• Operations are idempotent (client retries allowed).<br>• Reads must reflect a recent write within a few ms. <br>• Scale: millions of ops/sec, 10 k+ users. |
| **Approach** | 1️⃣ Partition the counter across *N* shards (hash‑based or consistent hashing). 2️⃣ Each shard runs a replicated state machine (Raft/Etcd) to guarantee strong consistency locally. 3️⃣ Expose a thin REST/gRPC API that forwards increments/decrements to the responsible shard; reads aggregate from all shards and sum. 4️⃣ Use vector clocks or Lamport timestamps for conflict resolution if eventual consistency is acceptable. |
| **Depth** | *Increment*: client → gateway → shard leader (Raft log append) → follower replication → ack. <br>*Read*: gateway queries all leaders in parallel, aggregates sums. Complexity: O(N) reads; O(1) writes per shard. Raft gives linear‑time commit per operation on the leader. Latency ≈ network round‑trip + 2×log write time (~5 ms). |
| **Edge Cases** | • Leader failover → quorum loss → temporary unavailability.<br>• Network partitions: split‑brain if no consensus; mitigated by Raft’s safety. <br>• Clock skew for timestamp‑based merge → use logical clocks. <br>• Overflow/underflow of counter – use 64‑bit signed int and cap checks. |
| **Optimize & Communicate** | • Cache recent totals in a CDN or local cache to reduce read traffic. <br>• Batch multiple increments into a single Raft entry for high write throughput. <br>Explain trade‑offs: strong consistency + low latency vs. eventual consistency with higher scalability; Raft gives safety at cost of 2–3× network round‑trips per write. Conclude by summarizing the design’s resilience, horizontal scalability, and how it meets the SLA targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
