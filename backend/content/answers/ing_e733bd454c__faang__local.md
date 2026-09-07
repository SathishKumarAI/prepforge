---
qid: ing_e733bd454c__faang__local
question: 'Explain: Amazon Kinesis Data Streams Application — Amazon Kinesis Data
  Streams Terminology and concepts - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 635
total_tokens: 882
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:37:28-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise overview of *Amazon Kinesis Data Streams* (KDS) – its key terms (shards, records, consumers, etc.) and how they interact in a typical streaming pipeline.

---

### 1️⃣ Approach  

| Term | What it means | Why it matters |
|------|---------------|----------------|
| **Stream** | Logical container for data | Top‑level unit of ingestion |
| **Shard** | Single read/write partition inside a stream | Determines capacity & parallelism |
| **Record** | Unit of payload (JSON, binary) + partition key | The actual data flowing through KDS |
| **Partition Key** | Hash used to assign records to shards | Enables ordering within a shard |
| **Sequence Number** | Immutable identifier per record | Enables precise read positions |
| **Consumer** | App that reads from the stream | Can be *Simple* (KCL) or *Enhanced* (Lambda, Firehose) |
| **Checkpoint** | Stored sequence number per shard | Guarantees at‑least‑once processing |
| **Retention Period** | 24‑7 days default | Controls how long records stay available |

---

### 2️⃣ Depth  

- **Shards**: Each supports ~1 MB/s write + 5 MB/s read. Scaling is done by *shard split* or *merge*.  
- **Records**: Max 1 MB payload; the partition key’s hash must be deterministic to keep ordering guarantees per shard.  
- **Consumers & Checkpoints**: The Kinesis Client Library (KCL) handles load balancing and checkpointing across multiple instances, ensuring exactly‑once semantics when combined with idempotent processing.  
- **Retention**: Data can be kept up to 365 days if needed; older data is purged automatically.

---

### 3️⃣ Edge Cases  

| Scenario | Issue | Mitigation |
|----------|-------|------------|
| High write burst > shard capacity | Throttling, record loss | Split shards or use multiple streams |
| Consumer lagging behind | Out‑of‑date checkpoints | Increase consumer throughput or add instances |
| Record size > 1 MB | Rejected by KDS | Chunk payload or compress |

---

### 4️⃣ Optimize & Communicate  

- **Auto‑scaling**: Use CloudWatch metrics (`ReadProvisionedThroughputExceeded`, `WriteProvisionedThroughputExceeded`) to trigger shard splits.  
- **Cost control**: Keep shards minimal; delete unused streams promptly.  
- **Reliability**: Pair KDS with Lambda for real‑time processing and S3/Fargate for batch archival.

When explaining, start with the high‑level stream concept, drill into shards/records, then describe consumer patterns and checkpointing before touching on scaling and edge cases—mirroring how FAANG interviewers expect a clear, structured answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
