---
qid: ing_9b1c6b9e08__faang__local
question: 'Explain: Replication Between Services — Change Data Capture (CDC) | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 440
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:44:58-05:00'
sources: []
---

**Replication Between Services – CDC in System Design**

| Step | What to do |
|------|------------|
| **Clarify** | • Replication target: which services need up‑to‑date data?<br>• Latency tolerance (real‑time vs batch)?<br>• Data consistency model (strong, eventual)?<br>• Failure semantics (at‑least‑once vs exactly‑once)? |
| **Approach** | 1. **Capture**: Append‑only transaction log or change stream (Kafka/Redis Streams).<br>2. **Transform**: Schema‑aware enrichment; handle schema evolution via Avro/Protobuf.<br>3. **Distribute**: Publish to topic partitions per entity; consumer groups per target service.<br>4. **Apply**: Each service consumes, idempotently applies changes to its own store (CRDT or write‑ahead log). |
| **Depth** | • Use a *log compaction* strategy for stateful services.<br>• Idempotency via unique change IDs + de‑duplication cache.<br>• Exactly‑once delivery achieved with Kafka’s transactional API and consumer offsets stored in the same transaction. <br>• Complexity: O(log N) per record write, linear to number of partitions; read path is O(1). |
| **Edge Cases** | • Schema drift → versioned schemas & backward compatibility.<br>• Network partition → replay of missed events once connectivity resumes.<br>• Hot‑spotting if one entity dominates a partition. |
| **Optimize & Communicate** | • Add *pre‑aggregation* in Kafka Streams to reduce downstream load.<br>• Monitor lag metrics; auto‑scale consumer groups.<br>Explain trade‑offs: higher throughput vs slightly stale data, and the cost of ensuring exactly‑once semantics (transactional overhead). |

This CDC pipeline gives near‑real‑time, fault‑tolerant replication while keeping each service’s domain model isolated.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
