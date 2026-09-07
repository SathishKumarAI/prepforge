---
qid: ing_a1108a9a89__faang__local
question: 'Explain: Minimum in-sync replica — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 572
total_tokens: 805
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:58:50-05:00'
sources: []
---

**Clarify**  
You’re asking how Kafka’s *acks* setting interacts with the *min.insync.replicas* configuration. In other words, when a producer sends a message, how many broker replicas must acknowledge receipt before the write is considered successful, and what happens if that threshold isn’t met?

**Approach**  
1. Define each term (acks, min.insync.replicas).  
2. Explain the three acks options (`0`, `1`, `-1`).  
3. Show how *min.insync.replicas* limits durability when `acks=-1`.  
4. Walk through success/failure scenarios.

**Depth**  
| Setting | Meaning |
|---------|---------|
| **acks=0** | Producer does not wait for any acknowledgment; fastest but no durability guarantee. |
| **acks=1** | Leader broker acknowledges immediately after persisting locally; followers may lag or fail. |
| **acks=-1** *(all)* | Leader waits until *min.insync.replicas* replicas (including itself) have acknowledged. |

`min.insync.replicas` is a topic‑level property. If the number of live replicas drops below this value, writes with `acks=-1` will fail with a **NotEnoughReplicas** error. This protects against data loss when the cluster loses enough nodes to fall below the desired safety margin.

*Example*: Topic has 3 replicas, `min.insync.replicas=2`.  
- Normal: Leader + 2 followers ack → success.  
- One follower dies: only 2 alive (leader+1). Since 2 ≥ minInsync, writes still succeed.  
- Two followers die: only leader remains; 1 < 2 → write fails.

**Edge Cases**  
- **Under‑provisioned replication**: setting `min.insync.replicas` > total replicas causes all writes to fail.  
- **Transient network splits**: a follower may be temporarily unreachable, causing timeouts even though the cluster is healthy overall.  
- **Mixed acks**: producers can override the topic default; ensure consistency across applications.

**Optimize & Communicate**  
- Tune `min.insync.replicas` to balance durability vs availability (e.g., 2 for 3‑node topics).  
- Monitor replication lag and *NotEnoughReplicas* errors in metrics.  
- In code, catch the specific exception and implement back‑off or retry logic.

This concise mapping of acks ↔ min.insync.replicas gives interviewers confidence you understand Kafka’s durability guarantees and can reason about trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
