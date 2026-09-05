---
qid: ing_1c0641f288__fp__local
question: 'Explain: Reference — Kafka Acks Explained'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 395
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:05:35-05:00'
sources: []
---

**Kafka Acks: Why the “1‑2‑3” settings are essential**

When a producer sends a record, it must decide *when* to consider that send successful.  
At the core is the trade‑off between **durability** (the guarantee that data survives failures) and **throughput** (the speed at which records can be written).  

1. **`acks=0` – No acknowledgment**  
   The broker immediately returns success after writing to its local log.  
   *Why it works*: The producer never blocks; throughput is maximal.  
   *Risk*: If the leader crashes before persisting the record, that record is lost.  
2. **`acks=1` – Leader only**  
   The broker acknowledges once the leader has appended the record to its log and sent a heartbeat to the controller.  
   *Why it works*: Guarantees that the data exists on at least one node; loss only if the leader dies before replication.  
3. **`acks=all` (or `-1`) – Full quorum**  
   The broker waits until every in‑sync replica has appended the record.  
   *Why it works*: Even if the leader fails, all other replicas already contain the data; no loss occurs unless the entire ISR shrinks below one node.

The non‑obvious insight: **Acks are a manifestation of the CAP theorem for writes**. By tuning `acks`, a producer moves along the durability–latency axis while respecting the *Consistency* and *Partition tolerance* guarantees that Kafka’s replication protocol provides. Thus, “1‑2‑3” is not arbitrary—it encodes how many replicas must survive before a write is deemed permanent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
