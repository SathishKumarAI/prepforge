---
qid: ing_cb1418a86c__fp__local
question: 'Explain: Active-passive — GitHub - donnemartin/system-design-primer: Learn
  how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 405
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:12:17-05:00'
sources: []
---

**Active‑Passive Replication (Primary–Secondary)**  
The core problem is *availability under partial failure*: a service must keep running even if one node crashes or network partitions occur.  
A **primary** (active) accepts writes and forwards every state change to one or more **secondaries** (passives). The secondaries apply the same updates in order but do not accept client writes; they only serve reads or act as fail‑over targets.

Why this works:  
1. **Single source of truth** – The primary guarantees serializability because all mutations originate there.  
2. **Eventual consistency** – By pushing a bounded, ordered log to secondaries (e.g., via Raft logs or Kafka topics), we ensure that every replica eventually converges without needing synchronous coordination for each write.  
3. **Fail‑over geometry** – If the primary fails, one secondary can be promoted to primary instantly; the system never needs to split the network into “active” and “passive” shards.

Deeper principle: this is an *optimistic concurrency* scheme that trades latency for consistency. The cost of copying every log entry is offset by eliminating locks on writes.  

**Non‑obvious insight**  
The key to scalability isn’t how many secondaries you keep, but *how you order and compress the change stream*. Techniques like *log compaction*, *snapshotting*, or *vector clocks* allow a passive to catch up quickly after a long partition, turning an “active‑passive” pair into a *continuous replication pipeline* that can scale to thousands of replicas with minimal coordination overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
