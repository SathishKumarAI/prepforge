---
qid: ing_c57e1350b4__aws__local
question: 'Explain: API Reliability — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 442
total_tokens: 675
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:49:30-05:00'
sources: []
---

**What’s an API and why does its reliability matter?**

> **Situation:** In my last role I led the redesign of a public ML‑prediction service that was hit by 12 % downtime after a surge in traffic during a product launch.  
> **Task:** Build a fault‑tolerant, low‑latency API layer that guarantees *99.9 % availability* and sub‑200 ms response time for every request.  
> **Action:**  
> 1. **Design**: Exposed REST/GraphQL endpoints behind an Application Load Balancer (ALB) with weighted routing to two identical EC2 Auto Scaling groups, each running the inference container in a private subnet.  
> 2. **Resilience**: Employed AWS WAF and Shield for DDoS protection, CloudWatch Alarms + Lambda auto‑scale on request latency, and health checks that trigger immediate traffic shift when an instance fails.  
> 3. **Observability**: Integrated X-Ray traces and Prometheus metrics to detect bottlenecks; used DynamoDB Streams to replay failed requests into a dead‑letter queue for later reprocessing.  
> 4. **Cost/Scale**: Leveraged Spot Instances (30 % cost savings) with fallback on On‑Demand, and set up S3 cross‑region replication for model artifacts to reduce inference latency globally.  
> **Result:** Post‑deployment, uptime rose from 97.6 % to 99.95 %, latency dropped by 35 %, and we cut infrastructure costs by 22 %. The API now supports >50k TPS with zero data loss.

**Leadership Principles:** *Customer Obsession* (ensuring uninterrupted service), *Ownership* (owning the end‑to‑end reliability stack).  
Bar‑raiser focus: clear ownership, deep dive into failure modes, measurable impact, and learning loop from the post‑mortem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
