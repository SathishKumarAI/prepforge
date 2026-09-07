---
qid: ing_e788795065__faang__local
question: 'Explain: Append-only (mostly) — Data streams | Elastic Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 495
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:38:24-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain *append‑only data streams* and *elastic documents*.  
Assumptions: we’re talking about real‑time ingestion pipelines (e.g., Kafka, Pulsar), storage tiers that never rewrite old data, and document stores (Cassandra, DynamoDB) that can scale horizontally.

**Approach**  
1. Define “append‑only” and why it matters for streaming.  
2. Contrast with mutable writes.  
3. Explain how elastic documents fit: schema‑flexible, sharded storage, auto‑scaling, and eventual consistency.

**Depth**  

| Concept | What it means | Why it’s useful |
|---------|---------------|-----------------|
| **Append‑only** | Data is written once to a log; no updates or deletes on the same record. | Guarantees immutability → fault tolerance, replayability, linearizable reads. |
| **Data streams** | Ordered sequence of records (Kafka topic partitions). | Enables real‑time analytics, event sourcing, and microservice decoupling. |
| **Elastic documents** | Documents stored in a NoSQL store that shards automatically and scales out on demand. | Handles variable schema, high write throughput, and large cardinality without manual rebalancing. |

*Example*: A clickstream pipeline writes each event to Kafka (append‑only). Downstream services read the stream, transform events into JSON documents, and persist them in DynamoDB. The table auto‑scales partitions as traffic spikes, and because writes are idempotent, retries don’t corrupt data.

**Edge cases**  
- **Compaction**: Logs grow forever; need log compaction or TTL to avoid storage bloat.  
- **Backpressure**: If consumers lag, the producer must handle flow control.  
- **Schema evolution**: Elastic docs allow optional fields but may cause query complexity if not versioned.

**Optimize & communicate**  
To improve latency, use *exactly‑once semantics* with idempotent keys and transactional writes to the document store. I’d explain this trade‑off (more overhead vs. data correctness) and show a diagram of producer → stream → consumer → elastic doc. This demonstrates structured thinking, depth in technical detail, and clear communication—qualities valued by FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
