---
qid: ing_f2bc6e0e83__star__local
question: 'Explain: Data Replication in DBMS — Data Replication in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 394
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:33:23-05:00'
sources: []
---

**Situation:**  
At a fintech startup, our machine‑learning pipeline ingested real‑time transaction data from a PostgreSQL cluster that was distributed across three regions to support low latency analytics for fraud detection. During peak trading hours the primary node would throttle, causing our model training jobs to stall and increasing prediction lag.

**Task:**  
I had to design a replication strategy that ensured high availability of transactional data for the ML pipeline while keeping read/write consistency within acceptable bounds, all without breaking the existing schema or overloading the network.

**Action:**  
I implemented logical replication using PostgreSQL’s built‑in streaming replication. First, I set up a primary node and two stand‑by replicas with WAL archiving enabled. Then, for each critical table (e.g., `transactions`, `users`), I created publication objects on the primary and subscription objects on the replicas, filtering only rows that matched our fraud score thresholds to reduce bandwidth. To handle conflict resolution, I added a versioning column (`updated_at`) and used PostgreSQL’s “replication slots” to ensure no data loss during network partitions. Finally, I integrated the replicas into our Spark‑based training jobs via JDBC with connection pooling, adding a simple round‑robin load balancer to distribute read queries.

**Result:**  
The replication setup reduced read latency by 35 % and eliminated training stalls during traffic spikes. Our fraud detection model’s inference time dropped from 1.2 s to 0.8 s on average, increasing the daily transaction throughput by ~12 %. I learned that careful publication filtering and versioning are key to balancing consistency with performance in real‑time ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
