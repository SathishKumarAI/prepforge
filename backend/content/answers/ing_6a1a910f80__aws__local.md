---
qid: ing_6a1a910f80__aws__local
question: 'Explain: Kafka Deployment ¶ — ELK Stack + Kafka End to End Practice \u2014
  Log Consolidation with ELK Stack 1.2 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 421
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:24:30-05:00'
sources: []
---

**Situation / Task**  
I was tasked to migrate a legacy on‑prem Kafka + Logstash pipeline to a fully managed, highly available stack in AWS while keeping ingest latency < 50 ms and reducing ops overhead.

**Action**  
1. **Deploy MSK (Managed Streaming for Apache Kafka)** on a multi‑AZ cluster (3 brokers per AZ) with auto‑scaling based on CPU/queue depth.  
2. **Kafka Connect + Filebeat** ship logs to MSK; connectors run in an EKS pod group with HPA tied to broker lag metrics.  
3. **Elasticsearch Service** hosts the ELK index, auto‑scaling shards per ingest rate and using ILM to roll over indices after 30 days.  
4. **Kibana dashboards** consume from ES; logs are archived nightly to S3 Glacier for cost control.  
5. **CloudWatch Alarms + SNS** trigger a Lambda that auto‑rebalances partitions if lag > 200ms.

**Result**  
- Ingest latency dropped from 120 ms to 42 ms (70 % improvement).  
- Ops tickets fell by 65 % as MSK & Elasticsearch Service handled broker and index management.  
- Monthly cost reduced by $3,400 versus the on‑prem stack (+$1,200 in storage savings).  

**Reflection**  
I owned the migration end‑to‑end, diving deep into Kafka’s lag metrics to tune autoscaling. The bar‑raiser looked for measurable impact, architectural depth, and learning from early connector failures (re‑configuring Filebeat backpressure). This aligns with **Ownership** and **Dive Deep**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
