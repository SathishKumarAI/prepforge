---
qid: ing_c8ee80d34b__aws__local
question: 'Explain: Sharding using random suffixes — Using write sharding to distribute
  workloads evenly in your DynamoDB table - Amazon DynamoDB'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 418
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:56:11-05:00'
sources: []
---

**Situation (S)**  
At my previous role we built a recommendation engine that wrote millions of “view” events per day into a single DynamoDB table. A hot‑partition on the user ID caused throttling and 4xx errors.

**Task (T)**  
I had to redesign the ingestion pipeline so that writes were evenly distributed while preserving query semantics for later analytics.

**Action (A)**  

- **Sharding with random suffixes**: I appended a deterministic, yet pseudo‑random suffix (`_01…_10`) to every user key.  
  - *Design*: `PK = UserID#Shard`, `SK = EventTimestamp`.  
  - *AWS services*: DynamoDB for storage, Lambda for transformation, Kinesis Data Firehose for ingestion.  
- **Write sharding**: Each incoming record was routed to one of the ten shards using a hash of the user ID (SHA‑256 → modulo 10). This guarantees even distribution regardless of user activity patterns.  
- **Query adaptation**: For analytics I used DynamoDB Streams + Glue ETL to re‑assemble data into a consolidated table or Athena for ad‑hoc queries.  
- **Scalability & cost**: The 10 shards allowed each partition key to stay below the 300 WPS limit, eliminating throttling while keeping provisioned throughput at ~30 W per shard. Total read/write capacity reduced by 40% compared to a single hot partition.

**Result (R)**  
Write latency dropped from 200 ms to <20 ms and error rate fell from 12% to <0.1%. The ingestion cost decreased by $3,600/month.  

*Leadership Principles:* **Ownership** – I took full responsibility for the performance issue; **Dive Deep** – I analyzed traffic patterns and DynamoDB limits; **Deliver Results** – achieved measurable latency & cost improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
