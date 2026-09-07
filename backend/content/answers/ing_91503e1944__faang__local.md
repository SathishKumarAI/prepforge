---
qid: ing_91503e1944__faang__local
question: 'Explain: Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 481
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:22:19-05:00'
sources: []
---

**Consistent Hashing – A Systems‑Design Perspective**

| Step | What to do |
|------|------------|
| **Clarify** | We need a hash‑to‑node mapping that minimizes remapping when nodes join/leave, supports high availability and load balance. Assume we have *N* backend servers, each identified by a key (e.g., IP), and a large keyspace for client requests. |
| **Approach** | 1️⃣ Map both servers and data keys to the same ring (0–2³²‑1). <br>2️⃣ For each server, generate *k* virtual nodes (replicas) spread evenly on the ring. <br>3️⃣ To locate a key, hash it to a point on the ring and walk clockwise until you hit the first server’s replica; that server owns the key. |
| **Depth** | *Time*: O(log N) with balanced binary search over sorted replicas (or O(1) if using a hash table + modulo). <br>*Space*: O(k × N) for replicas; typical k=100 gives ~5–10% overhead. <br>Load balancing: virtual nodes smooth uneven key distributions. Fault tolerance: when a server fails, only its replicas’ keys shift to the next alive node. |
| **Edge Cases** | • Server churn causing many keys to move if *k* is too low.<br>• Extremely skewed data (e.g., hot spots) still handled by replica distribution but may need dynamic re‑replication.<br>• Ring wrap‑around logic must be bug‑free. |
| **Optimize & Communicate** | • Use consistent hashing libraries (e.g., Ketama) for production. <br>• Cache the hash ring in memory and expose a lightweight API (`GetNode(key)`), explaining that updates are rare so we can rebuild the ring offline. <br>• In interview, emphasize trade‑offs: more replicas → better balance vs. higher memory; deterministic mapping → easy debugging. |

*Bottom line*: Consistent hashing gives you an elegant, scalable way to distribute load and tolerate node failures with minimal data movement—exactly what a large ML serving system needs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
