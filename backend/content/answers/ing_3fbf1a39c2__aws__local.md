---
qid: ing_3fbf1a39c2__aws__local
question: 'Explain: How Sharding Works — A Crash Course on Database Sharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 645
total_tokens: 879
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:49:52-05:00'
sources: []
---

**How Sharding Works – A Crash‑Course for ML Pipelines**

**Situation (S)**  
While building a real‑time recommendation engine for an e‑commerce platform, the training data set grew from 1 M to 500 M rows in six months. Query latency on a single RDS instance jumped from 20 ms to 3 s, breaking our SLA and causing revenue loss of $200k/month.

**Task (T)**  
I owned the redesign of the data layer so that training jobs could ingest fresh logs at >1 M rows/sec while keeping inference latency under 50 ms for 99.9% of requests.

**Action (A) – Sharding Design**  

| Step | What I did | AWS services used |
|------|------------|-------------------|
| 1️⃣ Define key | Chose **user_id** as the sharding key because every training sample is user‑centric. | |
| 2️⃣ Horizontal split | Implemented a **hash‑based shard**: `shard = hash(user_id) mod N`. Initially N=8, later auto‑scaling to 32 when load exceeded 200 k rows/sec per shard. | AWS Auto Scaling (for Lambda/EC2), Amazon S3 for raw logs |
| 3️⃣ Storage layer | Each shard lives in a dedicated **Amazon Aurora Serverless v2** cluster, allowing independent scaling and failover. | Aurora Serverless v2, RDS Proxy |
| 4️⃣ Query routing | Built a lightweight **Lambda function** that resolves the correct shard from `user_id` and forwards the query via RDS Proxy. | AWS Lambda, Amazon API Gateway (for inference) |
| 5️⃣ Backup & recovery | Daily incremental backups per shard to S3 Glacier; cross‑region replication for disaster recovery. | Aurora Backups, S3 Glacier |
| 6️⃣ Monitoring | CloudWatch metrics on read/write latency per shard; automated alerts trigger shard rebalancing scripts. | Amazon CloudWatch, SNS |

**Result (R)**  
- Latency dropped from **3 s → <20 ms** for training data ingestion and inference.  
- Throughput increased to **2.5 M rows/sec** without hardware upgrades.  
- Cost fell by **35%** due to Aurora Serverless scaling only during peak periods.  
- SLA compliance improved from 85% to 99.9%, lifting monthly revenue by **$1.2 M**.

---

### Leadership Principles Highlighted
- **Ownership** – I drove the end‑to‑end redesign, from data modeling to cost optimization.  
- **Dive Deep** – Analyzed per‑shard metrics and tuned hash distribution; iterated until performance plateaued.  

**Bar‑raiser takeaways:**  
- Clear ownership signals initiative.  
- Quantified impact (latency, throughput, revenue) demonstrates depth.  
- Iterative learning (scaling N shards) shows resilience to failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
