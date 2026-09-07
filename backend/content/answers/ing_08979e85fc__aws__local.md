---
qid: ing_08979e85fc__aws__local
question: 'Explain: Broker — Can Kafka Lose Messages?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 661
total_tokens: 890
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:45:32-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession* – ensuring data reliability for downstream ML pipelines; *Dive Deep* – analyzing Kafka’s guarantees and trade‑offs.

---

### Situation  
I was leading a migration of our recommendation engine from an on‑prem Spark cluster to an event‑driven architecture on AWS. The core data source was **Apache Kafka** producing user interaction events that feed into real‑time feature stores. My team had to guarantee *no loss* of messages because even a single dropped click could skew model training and degrade the customer experience.

### Task  
Validate whether Kafka can lose messages under normal operation, document failure modes, and design a fault‑tolerant ingestion layer that meets SLAs: **99.999% durability** with < 1 ms latency for high‑volume streams (≈ 10 k events/s).

### Action  
1. **Dive Deep into Kafka Guarantees** –  
   *Replication factor ≥ 3, `acks=all`, and idempotent producers (`enable.idempotence=true`).*  
   *Implemented a **Kafka Streams** topology that writes each record to an S3 bucket via the **S3 Sink Connector**, adding a checksum per batch.*  

2. **AWS Service Stack** –  
   - **Amazon MSK (managed Kafka)**: automatic broker provisioning, in‑cluster encryption, and CloudWatch metrics for under‑replicated partitions.  
   - **Lambda** (event‑driven) to process the S3 logs, verify checksums, and publish validated records to **Amazon Kinesis Data Firehose** for downstream ML services.  
   - **SQS Dead‑Letter Queue** for any checksum failures.

3. **Scalability & Cost** –  
   *MSK cluster with 12 broker nodes (4 GB RAM each) kept replication lag < 50 ms; cost ≈ $0.025/hr per broker.*  
   *Lambda concurrency set to auto‑scale, costing <$0.20/day*.

### Result  
- Achieved **99.999% durability**: over a 6‑month test period we logged only 3 checksum mismatches out of 1.2 billion events (≈ 2.5 × 10⁻⁹ loss rate).  
- Latency from ingestion to feature store remained < 2 ms, meeting the recommendation engine’s SLA.  
- The solution reduced operational overhead by 40% compared to manual Kafka monitoring.

---

**What a bar‑raiser looks for:**  
*Ownership* – I owned the entire pipeline and drove it end‑to‑end.  
*Dive Deep* – I dissected Kafka’s replication mechanics, implemented checksum validation, and quantified failure rates.  
*Quantified Impact* – 3 mismatches in 1.2 billion events = 99.999% reliability, directly protecting user experience.  
*Learning from Failure* – The checksum check surfaced a rare broker‑side bug; we patched MSK’s configuration to prevent recurrence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
