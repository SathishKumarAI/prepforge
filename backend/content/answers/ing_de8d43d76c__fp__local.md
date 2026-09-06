---
qid: ing_de8d43d76c__fp__local
question: 'Explain: Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 508
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:53:06-05:00'
sources: []
---

**Why we need CDC**

In a modern data‑warehouse or analytics stack the *source* is a live OLTP database that mutates constantly. Downstream services (search indexes, ML pipelines, audit logs) must react to those mutations without polling or re‑scanning billions of rows. The fundamental problem is **change detection under high throughput**: we want an event stream that is **causal, ordered, and lossless**, yet consumes minimal I/O.

**Core principles**

| Principle | How it drives design |
|-----------|---------------------|
| *Temporal locality* | Only recent rows change; store a “last‑modified” timestamp or log sequence number (LSN) to skip unchanged data. |
| *Write‑as‑you‑go* | Capture at the point of mutation (triggers, binlog readers). This turns a batch problem into an incremental stream, reducing latency and disk I/O. |
| *Idempotence & idempotency keys* | Each change emits a unique key (primary key + LSN) so downstream can safely retry without duplication—critical for distributed systems. |
| *Decoupling* | Use a message broker (Kafka, Pulsar). The capture process is isolated from consumers; scaling, back‑pressure, and fault tolerance become independent concerns. |

**Typical architecture**

1. **Capture source** – read the database’s binary log or use CDC‑capable connectors.  
2. **Transformation layer** – enrich with metadata (timestamp, operation type) and serialize to a schema‑driven format (Avro/Protobuf).  
3. **Transport** – publish to a partitioned topic keyed by entity ID for parallelism.  
4. **Consumers** – apply change‑propagation logic: upsert into data lake, trigger ML retraining, etc.

**Non‑obvious insight**

The *real* bottleneck is not the volume of changes but the *ordering guarantees*. If consumers process records out of order (e.g., due to partition skew), downstream models may see stale or contradictory inputs. Therefore a minimal design must enforce **per‑entity ordering**—often via key‑based partitioning—while still allowing global parallelism. This subtle trade‑off between throughput and causal consistency is what distinguishes robust CDC systems from naïve change‑log pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
