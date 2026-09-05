---
qid: vq_cf47f574a8__star__local
question: Name of three modes which hadoop can run?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 361
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:20:29-05:00'
sources: []
---

**Situation:**  
During a campus hackathon I was tasked with building a data pipeline that ingested real‑time IoT telemetry from 3,000 devices and stored it for batch analytics.

**Task:**  
I needed to decide how Hadoop would run in our environment: whether we could use YARN, MapReduce, or the newer Spark mode, and ensure low latency while keeping costs under budget.

**Action:**  
First I set up a Mini‑Cluster with Hadoop 3.2 on Docker. I ran the ingestion job using **YARN**, which allowed us to schedule the task across the cluster nodes and monitor resource usage via the ResourceManager UI. For heavy transformations I switched to **MapReduce** jobs, writing Java mappers that parsed JSON logs into Parquet files—this gave me deterministic execution time and easy debugging. Finally, for the analytics layer I launched a **Spark on YARN** job; by leveraging Spark’s in‑memory engine we cut query times from 45 s (MapReduce) to under 10 s while still using the same cluster.

**Result:**  
The pipeline processed 1.2 TB of data daily, with end‑to‑end latency dropping from 30 minutes to just 5 minutes. Cost per GB fell by 18% because Spark jobs ran in the existing YARN pool without extra infrastructure. I learned that understanding Hadoop’s three execution modes—YARN for cluster management, MapReduce for batch ETL, and Spark on YARN for low‑latency analytics—is crucial to balancing performance and cost in real deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
