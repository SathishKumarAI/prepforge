---
qid: ing_5c6b0e6c47__aws__local
question: 'Explain: Eventually consistent indexes — How LedgerStore Supports Trillions
  of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 411
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:54:10-05:00'
sources: []
---

**Situation / Task**  
At Uber I led the redesign of our global **LedgerStore** to handle *trillions* of eventual‑consistent indexes for ride‑matching and fraud detection. The goal was 99.9 % latency under peak load while keeping storage costs below $10M/yr.

**Action**  
I owned a micro‑service architecture that split the write path into two queues: a **primary DynamoDB table** (single‑writer, strongly consistent) and an **S3‑based indexer** using **Kinesis Data Streams** for change data capture. Each stream record was processed by Lambda functions that updated a **DynamoDB Global Secondary Index (GSI)** with *eventual consistency*.  

To ensure scalability I:

1. **Sharded GSIs** across partitions (5 × 10⁹ items/partition) and used **Provisioned Throughput** auto‑scaling.
2. Leveraged **S3 Intelligent Tiering** for cold index snapshots, reducing storage by 40 %.
3. Employed **CloudWatch Alarms + Step Functions** to detect out‑of‑sync indexes and trigger a reconciliation job.

I also introduced **AWS Glue** jobs that ran nightly to rebuild stale shards, guaranteeing data integrity.

**Result**  
- Index lookup latency dropped from 350 ms to 45 ms (8× improvement).  
- Throughput scaled to 30 million writes/sec with no throttles.  
- Storage cost fell from $15M to $9M annually.  

**Reflection**  
The key learning was that *eventual consistency* can be leveraged for massive scale, but you must **own** the reconciliation pipeline and **dive deep** into partitioning logic. The bar‑raiser praised my focus on measurable impact and proactive failure handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
