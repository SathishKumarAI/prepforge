---
qid: ing_3dae983982__faang__local
question: 'Explain: Consumer — Can Kafka Lose Messages?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 468
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:07:09-05:00'
sources: []
---

**Clarify**  
We’re asked whether Apache Kafka can lose messages that a consumer reads.  
Assumptions to confirm:  
1. Producer writes to a single topic/partition.  
2. Consumer uses the default *auto‑commit* or manual commit of offsets.  
3. The cluster is healthy (no broker failures during read).  

**Approach**  
Explain Kafka’s durability guarantees, consumer offset handling, and scenarios where data may be lost from the consumer perspective.

**Depth**  
Kafka stores records on disk in append‑only log segments; once a segment is flushed it survives crashes. A message can only disappear if:  

| Scenario | Loss Mechanism | Consumer effect |
|----------|----------------|-----------------|
| **Uncommitted offset** | If the consumer fails before committing, on restart it re‑reads the same record. No loss. |
| **Explicit delete / compaction** | Topic configured with `cleanup.policy=delete` or `compact`; older offsets may be purged if retention/size limits hit. Consumer sees no record. |
| **Segment truncation** | If a broker crashes before segment is synced, that data is lost cluster‑wide; consumer will never see it. |
| **Network partition** | Producer sends but the broker never receives → message never stored. |

Thus Kafka itself does not “lose” committed messages in normal operation; loss occurs only from misconfiguration or failures before persistence.

**Edge cases**  
* Very low retention time (seconds) → consumer may miss data if lagged.  
* Manual offset commit after processing but before write → accidental duplication, not loss.  
* Using `auto.commit` with small intervals can cause reprocessing on crash.

**Optimize & communicate**  
To guarantee “no loss” from the consumer side: use **exactly‑once semantics** (`enable.idempotence=true`, transactional producer), commit offsets *after* writing to a durable store, and set adequate retention. Explain that Kafka’s design ensures durability; losses are user‑configurable or fault‑induced rather than inherent.  

This answer balances clarity, technical depth, and covers edge conditions—key for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
