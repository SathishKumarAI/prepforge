---
qid: ing_bb3ac49ee0__faang__local
question: 'Explain: Audit with ease — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 522
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:58:09-05:00'
sources: []
---

## Clarify  
You’re asking how an **event‑driven architecture (EDA)** can simplify auditing in ML pipelines.  
Assumptions I’d confirm:  
1. We need immutable, tamper‑proof audit logs for every data and model event.  
2. Events are produced by multiple microservices (data ingestion, feature store, training jobs).  
3. The system must support real‑time compliance checks and post‑hoc forensic analysis.

## Approach  
1. **Define a canonical event schema** (`event_id`, `timestamp`, `source`, `payload`, `hash`).  
2. **Publish events to a fault‑tolerant log store** (Kafka, Pulsar) with *exactly‑once* semantics.  
3. **Consume events into an audit service** that validates integrity (checks hashes), enriches metadata, and writes to a read‑optimized DB (Cassandra/ClickHouse).  
4. **Expose query APIs** for auditors; optionally stream to SIEM tools.

## Depth  
- **Event Schema**: Include a cryptographic signature (`SHA‑256` + HMAC) so any tampering is detectable.  
- **Exactly‑once delivery**: Use idempotent consumer offsets and transactional writes (Kafka transactions).  
- **Audit Service**: Stateless, horizontally scalable; processes events in micro-batches for throughput. Complexity ≈ *O(n)* per event.  
- **Storage**: Columnar DB enables fast range queries on `timestamp` & `source`. Partition by day to keep shards small.

## Edge Cases  
- **Clock skew** → include logical timestamps (Lamport clocks) or vector clocks.  
- **Schema evolution** → versioned schemas with Avro/Protobuf and backward compatibility checks.  
- **Data loss** → enable replay from Kafka logs if audit DB fails; store raw event payloads.

## Optimize & Communicate  
- **Compression & deduplication** reduce storage (gzip + delta encoding).  
- **Indexing on `hash`** allows quick integrity validation for audits.  
- **Monitoring**: metrics on lag, failure rates, and hash mismatches feed into a DevOps dashboard.  

Narrate this flow to interviewers as “From source → event bus → audit service → storage → query”, highlighting how EDA naturally decouples production from compliance while guaranteeing tamper‑evidence and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
