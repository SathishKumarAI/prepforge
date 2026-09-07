---
qid: ing_024ab4dde8__aws__local
question: 'Explain: Summary — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 531
total_tokens: 760
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:29:27-05:00'
sources: []
---

**Situation (S)**  
I was leading a data‑science team that built an online recommendation engine for a global e‑commerce platform. Our model ingested 10 GB of clickstream logs per day and produced real‑time scores for 5 M users. The monolithic ingestion pipeline started throttling during peak traffic, causing latency to climb from 50 ms to >1 s and a 12 % drop in conversion rates.

**Task (T)**  
Design a sharded architecture that scales horizontally while keeping the system highly available and cost‑efficient, ensuring we can still serve low‑latency predictions at scale.

**Action (A)**  

| Step | Design choice | AWS services | Why |
|------|---------------|--------------|-----|
| 1 | Partition data by user hash | **Amazon Kinesis Data Streams** + **Kinesis Data Analytics** | Sharding the stream ensures each shard handles ~200 k events/sec, preventing hot‑spots. |
| 2 | Persist per‑shard state in a distributed store | **Amazon DynamoDB (global tables)** | Provides single‑digit millisecond reads/writes and automatic cross‑region replication for high availability. |
| 3 | Batch model updates per shard | **AWS Glue + SageMaker Pipelines** | Allows incremental training on new data without downtime. |
| 4 | Serve predictions via a stateless API | **Amazon API Gateway + Lambda@Edge** (or EC2 Auto Scaling) | Serverless functions scale to thousands of concurrent requests; Edge caching reduces latency by ~30 %. |
| 5 | Monitor and auto‑scale shards | **CloudWatch Alarms + Kinesis Autoscaling** | Keeps throughput within SLA, adjusting shard count up/down automatically. |

**Result (R)**  
- Latency dropped from >1 s to <70 ms (95th percentile).  
- Throughput increased 4× without additional hardware costs; monthly spend stayed under $12k.  
- Conversion rate recovered by **9 %**, translating to an estimated $3M annual lift.  

**Learning & Bar‑raiser cues**  
I owned the entire data‑pipeline, documented shard‑key design, and ran a post‑mortem that revealed a mis‑configured shard key caused uneven load—an example of *Ownership* and *Dive Deep*. The iterative autoscaling experiment validated our assumptions with real metrics, embodying *Bias for Action* and *Deliver Results*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
