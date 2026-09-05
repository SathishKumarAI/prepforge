---
qid: ing_f94911a901__star__local
question: 'Explain: It Reduces Fault Tolerance — Bonsai Blog | Fully Managed Elasticsearch
  & OpenSearch \u2022 Why Elasticsearch should not be your Primary Data Store'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 302
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:46:58-05:00'
sources: []
---

**Situation:**  
During a migration of our customer‑feedback platform to a cloud‑native stack, we were tempted to use Elasticsearch as the sole source of truth because it offered full-text search and real-time analytics out of the box.

**Task:**  
I had to evaluate whether Elasticsearch could safely serve as our primary data store for all transactional records (orders, inventory, user profiles) without jeopardizing durability and consistency.

**Action:**  
First, I benchmarked write throughput against the ACID guarantees required by our order‑processing system. Then I set up a replicated ES cluster on Kubernetes, enabling snapshot‑based backups every 15 minutes and cross‑region replication. I also introduced a secondary PostgreSQL instance to act as the canonical source of truth, using Debezium for change data capture to keep ES in sync. Finally, I built automated alerts that would trigger failover if ES lost two replicas or reported write‑ahead log inconsistencies.

**Result:**  
The dual‑store architecture reduced latency by 30 % on search queries while maintaining 99.999% availability for transactional writes. We avoided costly data loss incidents during a node failure and learned that Elasticsearch excels at read‑heavy, schema‑flexible workloads but should be paired with an RDBMS for core business state.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
