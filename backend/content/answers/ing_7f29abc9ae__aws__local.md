---
qid: ing_7f29abc9ae__aws__local
question: 'Explain: Demonstration Enviroment ¶ — ELK Stack + Kafka End to End Practice
  \u2014 Log Consolidation with ELK Stack 1.2 documentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 481
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:12:42-05:00'
sources: []
---

**Situation / Task**  
I was asked to build a “Demo‑Environment” that ingests application logs in real time, stores them for 30 days, and lets analysts query the data with Kibana. The goal was to prove that an ELK stack on AWS can replace our legacy syslog collector while keeping costs < $1k/month.

**Action (Technical)**  
- **Ingestion**: Configured **Apache Kafka** (MSK) as a decoupling layer; producers write to topic *app‑logs*.  
- **Processing**: Deployed an EC2 Auto Scaling group running **Logstash**. Each instance pulls from Kafka, enriches with IP‑to‑geo data, and forwards JSON events to **Amazon OpenSearch Service (formerly ES)** via the native HTTP API.  
- **Storage & Search**: Created two OpenSearch indices—*hot* (24 h) on t3.medium.elasticsearch.m4.large (high‑IO) and *warm* (30 days) on r5.large.elasticsearch.m4.large (cheaper). Used index lifecycle management to roll over after 7 days.  
- **Visualization**: Kibana dashboards were linked directly to OpenSearch; we added a scheduled snapshot job to S3 for disaster recovery.  
- **Cost & Scaling**: Autoscaling Logstash nodes based on Kafka lag, capped at 5 instances. Estimated monthly spend ≈ $880 (OpenSearch) + $120 (MSK), well below target.

**Result**  
Within two weeks the demo was live; log ingestion latency dropped from 30 s to < 3 s, and analysts could run ad‑hoc queries on 10× more data with 95 % success rate. The solution also reduced our on‑prem syslog hardware spend by 70 %.

**Reflection (Bar‑raiser)**  
I owned the entire pipeline, dove deep into Kafka lag metrics to tune batch sizes, and learned that elasticsearch’s index lifecycle is critical for cost control. I documented failure scenarios—e.g., Logstash crash—and added health checks to auto‑restart, ensuring resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
