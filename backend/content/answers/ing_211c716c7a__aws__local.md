---
qid: ing_211c716c7a__aws__local
question: How would you shard the data if you were working with SQL DB?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 415
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:42:09-05:00'
sources: []
---

**Situation / Task**  
I was leading a data‑engineering sprint to support an ML pipeline that ingested **10 TB** of clickstream logs in a single PostgreSQL cluster. The team needed horizontal scaling so the model could train on near‑real‑time data without throttling production traffic.

**Action**  
* **Sharding Strategy** – I chose *hash‑based partitioning* on the `user_id` column, creating 64 shards (one per range of hash values). This guarantees even key distribution and keeps hot keys isolated.  
* **Infrastructure** – Deployed each shard on an Amazon RDS PostgreSQL instance in a **Multi‑AZ** configuration for high availability.  
* **Automation** – Used AWS DMS to replicate writes from the source DB to the shards, with Lambda functions monitoring replication lag and auto‑scaling the read replicas when query latency exceeded 200 ms.  
* **Cost/Scalability Trade‑off** – By keeping each shard under 100 GB, I avoided RDS “provisioned IOPS” spikes; we paid ~$0.24/hr per instance versus a single large instance that would have cost ~$1.20/hr and been a bottleneck.

**Result**  
Training latency dropped from **12 hrs** to **2 hrs**, and query throughput increased 4× with <5 ms average latency. The solution also reduced monthly RDS spend by **$3,600** while maintaining 99.99% availability.  

**Learning** – The key was *dive deep* into the data distribution before picking a sharding key; a naïve range split would have caused severe skew and cost overruns. I documented this in our post‑mortem, and it became the baseline for future multi‑tenant workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
