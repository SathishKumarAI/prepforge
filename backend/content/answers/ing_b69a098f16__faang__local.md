---
qid: ing_b69a098f16__faang__local
question: 'Explain: Distributed consensus — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 443
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:47:38-05:00'
sources: []
---

**Distributed Consensus – System‑Design Overview**

| Step | What I’d do |
|------|-------------|
| **Clarify** | *Goal:* ensure all replicas agree on the same state (e.g., log entries) despite failures or network partitions.<br>*Assumptions to confirm:* is it a crash‑fault or Byzantine model? How many nodes, what latency budget, and does the system need linearizability or just eventual consistency? |
| **Approach** | 1. Pick a consensus protocol (Raft for understandability, Paxos/HotStuff for scalability).<br>2. Model the cluster as leader‑follower with heartbeats.<br>3. Define log replication steps: *prepare*, *commit*, and *install*.<br>4. Add safety layers: term numbers, voting, state persistence. |
| **Depth** | *Raft*: <br>• Leader election via randomized timeouts → O(1) messages per round.<br>• Log replication uses AppendEntries RPCs; follower replies with lastIndex/term for consistency check.<br>• Commit rule: majority of replicas have replicated the entry and leader’s term ≥ current. Complexity: **O(N)** message overhead, but *N* is small (≤ 7–13). HotStuff extends Raft to Byzantine‑tolerant shards with O(1) rounds per commit. |
| **Edge Cases** | • Network partitions → split‑brain; handled by strict majority voting.<br>• Log divergence after crash → catch‑up via snapshotting.<br>• Clock skew affecting timeouts – mitigate with randomized backoff. |
| **Optimize & Communicate** | *Optimizations*: use compact log compaction, batch entries per RPC, and gossip for state sync. Explain trade‑offs: higher throughput vs. increased latency. In a interview, I’d diagram the flow, highlight safety invariants, and emphasize how each design choice protects consistency under failure modes. |

*Word count:* ~195 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
