---
qid: ing_cc600860b0__faang__local
question: 'Explain: Read Path — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 527
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:34:30-05:00'
sources: []
---

**Read‑Path System Design Cheat Sheet**

| Step | What to Cover | Why It Matters |
|------|---------------|----------------|
| **Clarify** | *Problem*: “Design the read path for a high‑throughput, low‑latency key‑value store.” <br>Assumptions: <ul><li>Reads dominate writes (≈95 %).<li>Data is immutable after write.<li>Latency target ≤ 5 ms.</li></ul>| Sets scope and constraints. |
| **Approach** | 1️⃣ **Cache Layer** – in‑memory LRU/LSLRU per shard. <br>2️⃣ **Distributed Storage** – consistent hashing + replication (R=3). <br>3️⃣ **Metadata Service** – routing table, versioning. <br>4️⃣ **Consistency Model** – eventual with read‑repair. | Gives high‑level architecture before details. |
| **Depth** | • *Cache*: local node cache → remote cache cluster (Redis/MemoryStore) → storage. <br>• *Routing*: hash key → shard id via consistent hashing; fallback to replicas if primary down. <br>• *Read Repair*: on cache miss, fetch from 2nd replica; if data differs, update caches. <br>• *Complexity*: Cache hit O(1); storage read O(log N) (B‑tree). | Shows trade‑offs: latency vs. consistency. |
| **Edge Cases** | • Cache stampede on hot key → use per‑key locking or cache‑aside with back‑off.<br>• Replica failure → quorum reads; if majority unavailable, serve stale from local cache.<br>• Data skew → rebalancing via virtual nodes. | Highlights robustness and test scenarios. |
| **Optimize & Communicate** | • Add *read‑through* policy: auto‑populate cache on miss. <br>• Use *compression* for large values to reduce network I/O. <br>Explain that each optimization trades write overhead, memory usage, or complexity. End with a quick sanity check: “If we hit 10 k reads/sec and 99.9 % hit rate, our cache can stay under 1 GB.” | Demonstrates clear reasoning, stakeholder‑friendly explanation, and readiness for follow‑up questions. |

*Word count: ~210*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
