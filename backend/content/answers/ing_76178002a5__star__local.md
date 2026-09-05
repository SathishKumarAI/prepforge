---
qid: ing_76178002a5__star__local
question: 'Explain: Data Blocks — HDFS Architecture Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 352
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:30:12-05:00'
sources: []
---

**Situation**  
During a summer internship at a fintech startup, we were migrating our daily transaction logs from an on‑premise relational database to Hadoop for real‑time fraud detection. The data volume was growing by ~20 GB per day and the team needed a fault‑tolerant storage layer that could handle 99.9% uptime.

**Task**  
I had to design how we would store those logs in HDFS, ensuring high availability and efficient read/write performance for the Spark jobs that fed our ML models.

**Action**  
I broke the data into 128 MB blocks—HDFS’s default size—to balance I/O overhead with replication. For each block I set a replication factor of three to protect against node failures while keeping network traffic manageable. Using the `hdfs dfs -setrep` command, I programmatically adjusted replication for hot partitions during peak hours. I also configured rack awareness so that replicas were stored on different racks, reducing correlated failure risk. Finally, I scripted periodic block compaction scripts in Python to merge small files into larger blocks, cutting down metadata overhead and speeding up Spark shuffle reads.

**Result**  
The HDFS cluster handled 300 GB of daily logs with <0.1% read latency increase compared to the legacy system. The fault‑tolerance strategy prevented data loss during a two-node outage, and our fraud detection pipeline’s throughput improved by 35 %. I learned how block sizing, replication policy, and rack awareness directly impact both reliability and performance in big‑data workflows.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
