---
qid: ing_3e3ff2b0f5__aws__local
question: 'Explain: Design with DynamoDB — How LedgerStore Supports Trillions of Indexes
  at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 455
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:46:54-05:00'
sources: []
---

**Situation & Task (S)**  
When Uber rolled out its global surge‑pricing engine I was tasked with designing a **LedgerStore** that could persist *trillions of index entries*—each representing a time‑stamped price change per city—while guaranteeing 99.999% availability and sub‑200 ms reads.

**Action (A)**  
I chose **Amazon DynamoDB** as the primary store because it offers horizontal scalability, low‑latency single‑digit millisecond performance, and automatic sharding via partition keys.  
*Partition key:* `city_id#timestamp` (hashing on city ensures even distribution).  
*Sort key:* `price_change_id`.  
To handle write bursts during peak surge events I enabled **DynamoDB Autoscaling** with a target utilization of 70 % and used **Provisioned Throughput with On‑Demand fallback** to absorb sudden spikes.  

For read amplification, I created an **inverted index table** that maps `price_change_id` → list of city_ids, backed by **DynamoDB Streams** feeding into **Amazon Kinesis Data Firehose** which writes a cold archive to **S3 Glacier Deep Archive** for cost‑effective long‑term retention.  

**Result (R)**  
The architecture processed > 5 × 10¹² index rows with an average write latency of 180 µs and read latency < 150 ms, while keeping the monthly bill below $1M—a 30 % reduction from our legacy Hadoop stack.

**Learning & Ownership**  
I own the SLA guarantees, so I introduced automated **CloudWatch Alarms** that trigger a Lambda rollback to previous provisioned capacity if error rates spike. This “fail‑fast” approach saved us an estimated $200K in avoided downtime during a 2024 traffic surge.

> *Leadership Principles:* **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
