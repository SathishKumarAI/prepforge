---
qid: ing_e69c2fd895__faang__local
question: 'Explain: Heartbeat with Quorum — How to Detect Node Failures in Distributed
  Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 492
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:34:45-05:00'
sources: []
---

**Clarify**  
We need a reliable way for nodes in a distributed system to detect when one of their peers has failed. The requirement is *quorum‑based* detection: a node should consider another dead only if enough other nodes agree (to avoid false positives from network partitions). I’ll assume we have a gossip or heartbeat channel, stable clocks aren’t required, and the system tolerates up to *f* failures in an N‑node cluster.

**Approach**  
1. **Heartbeat exchange**: Each node periodically broadcasts a lightweight “alive” message containing its ID and a monotonically increasing counter.  
2. **Quorum voting**: Upon receiving heartbeats, a node tallies how many distinct peers have reported the target as alive within the last *T* seconds. If the count ≥ quorum (⌊N/2⌋+1), we treat the peer as healthy; otherwise flag it dead.  
3. **Failure notification**: When a failure is confirmed, nodes propagate this status via the same channel so that all agree on the new view.

**Depth**  
- *Complexity*: O(N) per node per heartbeat interval (just counting).  
- *Fault‑tolerance*: With quorum > N/2, at most f failures can be hidden; we still detect them once enough healthy nodes stop hearing from the failed one.  
- *Time to detection*: Roughly one heartbeat period plus a small safety margin.

**Edge Cases**  
- **Network partition**: A split cluster may see < quorum alive nodes and falsely declare everyone dead; mitigated by using a higher quorum or adding a secondary “coordinator” node.  
- **Clock skew**: Not needed because we rely on message arrival, not timestamps.  
- **Burst failures**: If many nodes fail simultaneously, the system may temporarily lose quorum; we can fall back to a safe mode.

**Optimize & Communicate**  
To reduce traffic, compress heartbeats (e.g., Bloom filters of live IDs). I’d explain this trade‑off during the interview: smaller messages vs. slightly higher false‑positive rate in quorum calculation. Also note that tuning *T* and heartbeat frequency balances latency against bandwidth. This structured plan shows clear reasoning, complexity awareness, and practical robustness—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
