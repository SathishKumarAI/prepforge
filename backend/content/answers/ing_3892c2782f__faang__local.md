---
qid: ing_3892c2782f__faang__local
question: 'Explain: Consider Alternatives — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 465
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:55:48-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise design for a *consistent‑hashing* based key‑value store (e.g., distributed cache or CDN).  
Assumptions:  
- Hot keys are skewed; we need load balancing.  
- Nodes can join/leave frequently.  
- Low lookup latency (< 10 ms) and high fault tolerance.

**Approach**  
1. **Hash ring** – map each node to several virtual nodes on a 0–2³² circle using SHA‑256.  
2. **Key placement** – hash the key, find the first clockwise virtual node; that physical node stores the key.  
3. **Rebalancing** – when a node joins/leaves, only its adjacent segment changes, so only ~1/N keys move.  
4. **Replication** – store each key on *k* consecutive successors for redundancy.  
5. **Failure detection** – use gossip or heartbeats; if a node fails, its virtual nodes are removed and the ring re‑hashed.

**Depth**  
- Complexity: O(log V) lookup (binary search on sorted virtual‑node list).  
- Storage overhead: V ≈ 100× real nodes balances load.  
- Consistency: eventual; use hinted handoff or read‑repair to keep replicas in sync.  
- Scalability: adding/removing nodes is O(1) for each affected key.

**Edge Cases**  
- *Hot spot*: if a few keys dominate, add more virtual nodes or use consistent hashing with weighted replication.  
- *Large node churn*: frequent rebalancing may thrash; mitigate by batching joins/leaves.  
- *Clock skew*: timestamps used in hinted handoff can mis‑order writes; rely on logical clocks.

**Optimize & Communicate**  
Explain that the ring eliminates large data migrations, keeping cache warm and reducing latency spikes. Emphasize trade‑offs: more virtual nodes → better balance but higher memory usage. Conclude by summarizing how consistent hashing satisfies dynamic scaling while preserving low lookup cost—key for any FAANG‑level distributed system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
