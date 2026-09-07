---
qid: ing_bb4e160ed1__faang__local
question: 'Explain: Two phase commit protocol — 2Phasecommit'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 421
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:58:24-05:00'
sources: []
---

**Clarify**  
Two‑phase commit (2PC) is a distributed transaction protocol that guarantees atomicity across multiple participants (e.g., databases). I’ll assume we’re coordinating *n* nodes, each with a local resource manager, and that the coordinator can detect failures but cannot recover partial commits.

**Approach**  
1. **Phase 1 – Voting**: The coordinator sends a *prepare* request to all participants. Each replies “yes” (commit) or “no” (abort).  
2. **Phase 2 – Commit/Abort**: If every participant votes yes, the coordinator broadcasts *commit*; otherwise it broadcasts *abort*. Participants then persist their decision and acknowledge.

**Depth**  
- **State machine**: Coordinator keeps `PREPARED`, `COMMITTED`, or `ABORTED`.  
- **Durability**: Votes are logged before replying. The commit/abort message is logged by all participants.  
- **Complexity**: O(n) messages, 2 rounds of communication.  
- **Trade‑offs**: Linear latency and blocking on coordinator failure; no rollback once a node has committed.

**Edge Cases**  
- Coordinator crash after Phase 1: participants wait indefinitely unless a timeout or watchdog triggers a retry.  
- Network partitions: some nodes may be unreachable, leading to an abort.  
- Non‑cooperative participant that never responds: again forces an abort via timeout.

**Optimize & Communicate**  
To mitigate blocking, one can use *three‑phase commit* (adding a “pre‑commit” phase) or employ optimistic concurrency with write‑ahead logs. In production, we often replace 2PC with distributed consensus (Raft/ Paxos) for higher availability. I’d explain these choices to interviewers, highlighting how 2PC’s simplicity fits low‑latency OLTP workloads but scales poorly under failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
