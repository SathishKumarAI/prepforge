---
qid: ing_c1a61cacd1__aws__local
question: 'Explain: Connect to almost anything — Apache Kafka'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 423
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:40:58-05:00'
sources: []
---

**Situation / Task**  
I was asked to build a real‑time ML pipeline that could ingest data from *any* source—Kafka topics, REST APIs, and legacy databases—and feed it into a SageMaker model for inference. The goal was to deliver predictions with < 200 ms latency while keeping cost under $5k/month.

**Action**  
1. **Ownership & Dive Deep** – I scoped the data‑flow: *source → Kafka (MSK) → Lambda → S3 → Glue ETL → SageMaker endpoint*.  
2. Used **Amazon MSK Connect** with JDBC, HTTP, and custom connectors to pull from heterogeneous sources into a single topic.  
3. Triggered **AWS Lambda** on each record; it batched 1k events, serialized to Parquet, and wrote to S3 (cost‑effective storage).  
4. **Glue** crawled the data, generated schema, and scheduled nightly Spark jobs to train/update the model in SageMaker.  
5. Deployed the endpoint with **Auto Scaling** and a *warm pool* of instances to keep latency < 200 ms.

**Result**  
- Latency dropped from 1.2 s to 180 ms (90% improvement).  
- Throughput scaled to 50k events/sec without manual intervention.  
- Monthly cost stayed at $4,800 while handling a 3× traffic spike during peak season.  

**Learnings & Bar‑raiser cues**  
I documented failure modes (connector disconnects) and automated retries via Lambda DLQs, ensuring *Customer Obsession*—the end users never saw a lag. The design balances **scalability**, **availability**, and **cost**, and showcases deep technical insight expected of a bar‑raiser.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
