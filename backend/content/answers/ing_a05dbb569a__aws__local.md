---
qid: ing_a05dbb569a__aws__local
question: How Does Concurrency Works? — Concurrency vs Parallelism - by Ashish Pratap
  Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 435
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:27:41-05:00'
sources: []
---

**Situation / Task**  
While leading a data‑science team at my last role, we had to process *50 GB* of sensor logs nightly for an anomaly‑detection model. The existing single‑threaded pipeline took ~6 h, missing our 4 pm deployment window.

**Action (Technical Design)**  
I re‑architected the ETL as a **concurrent microservice** on AWS Lambda + Step Functions.  
- *Concurrency*: Lambda functions are stateless; each receives a partition of logs from S3 (`S3:ObjectCreated`).  
- *Parallelism*: We launched 200 parallel workers (max concurrency per account) to ingest chunks in parallel, leveraging **Kinesis Data Firehose** to buffer bursts.  
- *Scalability*: The system auto‑scales via Lambda’s event source mapping; each function writes results to DynamoDB for idempotent aggregation.  
- *Cost/Availability*: Pay‑as‑you‑go Lambda keeps spend <$200/month vs $1,500 on a dedicated EC2 cluster. Step Functions provide fault tolerance and retries.

**Result (Data‑Driven)**  
Execution time dropped from 6 h to **45 min**, a **90% reduction**. The model’s inference latency improved by 40%, enabling real‑time alerts for 100k devices.  

**Reflection & Learning**  
I owned the end‑to‑end pipeline, diving deep into Lambda limits (15 s vs. 15 m) and Kinesis shard throughput. After a failed first run due to unhandled throttling, I added exponential backoff and CloudWatch alarms—an example of *Bias for Action* and *Ownership*.  

**Leadership Principles Highlighted**  
- **Customer Obsession**: Faster alerts directly improve client uptime.  
- **Dive Deep / Ownership**: End‑to‑end ownership, iterative learning from failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
