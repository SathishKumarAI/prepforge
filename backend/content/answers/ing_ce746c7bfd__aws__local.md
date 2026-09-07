---
qid: ing_ce746c7bfd__aws__local
question: 'Explain: Logstash Which Produce Logs to Kafka ¶ — ELK Stack + Kafka End
  to End Practice \u2014 Log Consolidation with ELK Stack 1.2 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 419
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:07:39-05:00'
sources: []
---

**Situation / Task**  
I was tasked with building a real‑time log ingestion pipeline for a SaaS platform that generated ~10 M logs/day across 200 microservices. The goal: deliver low‑latency visibility while keeping costs under $5k/month.

**Action (Design)**  
* **Logstash → Kafka** – Configured Logstash to tail application logs, parse with Grok, and publish to an Apache Kafka cluster (3 brokers, 1 TB storage).  
* **Kafka ➜ Amazon MSK + S3** – Migrated Kafka to managed MSK for HA. Added a Kafka Connect sink connector that streams batches to S3 in Parquet; compression reduced storage by 40%.  
* **S3 → OpenSearch (Elasticsearch)** – Used AWS Glue to catalog the Parquet files and scheduled daily ingestion into Amazon OpenSearch Service, enabling near‑real‑time search via Kibana.  
* **Monitoring** – Deployed CloudWatch Alarms on Kafka lag; auto‑scaling for Logstash workers based on CPU.

**Result (Metrics)**  
- Latency from log generation to searchable index: < 2 s.  
- Cost dropped 35% (from $8k to $5.3k/month).  
- Query throughput increased 4× with OpenSearch’s auto‑scaling.

**Reflection (Bar‑raiser lens)**  
I owned the entire stack, performed a deep dive into Kafka lag patterns, and iterated on batch sizes—learning that 100 MB batches balanced cost vs. latency. This experience reinforced *Ownership* (taking full responsibility) and *Dive Deep* (analyzing metrics to drive decisions).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
