---
qid: ing_41f96ae3c0__aws__local
question: 'Explain: Setting Up LangWatch (Open-Source, Cloud or Self-Hosted)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 369
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:55:04-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* A client needed real‑time monitoring of their LLM inference pipeline (Latent Space, Prompting, Safety) to meet SLA and compliance.  
*Task:* Build LangWatch – an open‑source observability stack that can run in the cloud or self‑hosted on premises.  
*Action:* I scoped requirements: ingest 10 k tokens/s, store 1 TB/day, alert latency >200 ms.  
I chose **Amazon Managed Service for Prometheus** (AMP) + **Grafana Cloud** for metrics; **AWS Kinesis Data Firehose** to ship raw logs to **S3 Glacier Deep Archive** (cost‑effective). For self‑hosted mode I bundled Docker images and Helm charts, adding an optional **OpenSearch** cluster on EC2 Spot Instances.  
I designed a multi‑region deployment: each region runs an **ECS Fargate** task with the LangWatch agent; traffic is routed via **ALB** + **AWS WAF** for security. Auto‑scaling is driven by CloudWatch alarms (CPU >70 % → add tasks).  

*Result:* In production, latency alerts dropped from 15 min to <2 min, cost per GB fell 35 % vs the legacy solution, and we achieved 99.9 % uptime across regions.  
**Bar‑raiser cues:** I demonstrated ownership by delivering a fully tested IaC repo, dived deep into Kinesis payload sizing, quantified performance gains, and documented lessons from an initial false‑positive alert spike.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
