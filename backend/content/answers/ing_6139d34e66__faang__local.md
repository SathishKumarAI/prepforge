---
qid: ing_6139d34e66__faang__local
question: 'Explain: Change Data Capture is offered for Kinesis'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 479
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:29:56-05:00'
sources: []
---

**Clarify**  
You’re asking how *Change Data Capture (CDC)* works in Amazon Kinesis, the streaming service that ingests real‑time data from sources like databases or logs.  
Assumptions:  
1) The source emits change events (INSERT/UPDATE/DELETE).  
2) Those changes need to be forwarded to downstream consumers with minimal latency and exactly‑once semantics.

**Approach**  
Explain CDC at three layers: the *producer* that captures changes, the *Kinesis stream* that transports them, and the *consumer* that processes them.  

**Depth**  
- **Producer:** Use a CDC connector (e.g., Debezium) or database‑native tools to read transaction logs (binlog for MySQL, logical replication for PostgreSQL). Each change is serialized as a JSON record containing table name, operation type, primary key, before/after values.  
- **Kinesis Stream:** Records are sent via the PutRecord API; Kinesis guarantees at‑least‑once delivery per shard and preserves order within a shard. The stream can be partitioned by hash of the primary key so that all changes for a row hit the same shard.  
- **Consumer:** A Kinesis Data Streams consumer (e.g., Lambda, KCL) reads records, applies idempotent logic to handle duplicates, updates downstream systems (data lake, search index). Exactly‑once is achieved by tracking offsets or using DynamoDB checkpoints.  

**Edge Cases**  
- *Schema evolution*: add/remove columns—use schema registry or nullable fields.  
- *High cardinality keys*: risk shard imbalance; use composite hash or dynamic partitioning.  
- *Network partitions*: Kinesis retries but may duplicate, so consumers must dedupe.

**Optimize & Communicate**  
For low latency, batch PutRecord calls and enable enhanced fan-out for consumers. To scale, increase shards or use Kinesis Data Firehose for automatic delivery to S3/Redshift. In interviews I’d emphasize trade‑offs: higher shard count = more cost but better parallelism; idempotency adds complexity but guarantees correctness. This structured explanation demonstrates clear problem framing, technical depth, and awareness of operational concerns—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
