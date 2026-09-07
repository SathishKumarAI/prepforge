---
qid: ing_f70e8efb32__faang__local
question: 'Explain: Data Correctness — Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 502
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:14:21-05:00'
sources: []
---

**Clarify**

We need to explain *data correctness*—specifically the **reliability** of data—in a system‑design context.  
Assumptions:  
1. The system ingests large volumes from heterogeneous sources (IoT, logs, user events).  
2. Downstream services rely on that data for analytics or real‑time decisions.  
3. “Reliability” means the data is accurate, consistent, and available when needed.

**Approach**

1. **Capture → Validation → Storage → Dissemination**.  
2. Build a *data pipeline* with built‑in checks at each hop.  
3. Use idempotent writes, versioning, and audit trails to guarantee integrity.

**Depth**

- **Ingestion**: Use Kafka/Flink; enforce schema via Avro/Protobuf. Reject or flag malformed records.  
- **Validation**: Apply deterministic rules (range, type) + probabilistic checks (outlier detection with z‑score). Store violations in a separate “bad data” stream for later review.  
- **Storage**: Write to immutable append‑only logs (e.g., Cloud Storage/BigQuery) and a transactional store (PostgreSQL) for quick reads. Use *write‑once* semantics; maintain checksums per batch.  
- **Consistency**: Apply *exactly‑once delivery* patterns—consumer offsets stored in a separate reliable store, use idempotent producers.  
- **Recovery**: Replay from the log on failure; reconcile with source via checksums.  

Complexity: O(n) for validation, constant for writes; space overhead ~2× raw data.

**Edge Cases**

- Duplicate messages → deduplication by unique ID.  
- Schema drift → backward‑compatible evolution or schema registry enforcement.  
- Network partitions → eventual consistency but with “read‑your‑writes” guarantees via causal ordering.

**Optimize & Communicate**

Explain trade‑offs: strict validation can add latency; relax checks for high‑velocity streams and flag instead of reject. Show how monitoring dashboards (data quality score, error rates) surface issues early. Conclude by stressing that reliable data is a *first‑class citizen* in system design—architect the pipeline as a series of small, verifiable steps rather than a monolith.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
