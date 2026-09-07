---
qid: ing_e5944a6d2b__aws__local
question: 'Explain: Reliability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 392
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:57:10-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the redesign of a recommendation engine that powered 4 M daily active users. The system had frequent outages during traffic spikes, eroding customer trust and cutting revenue by ~3 % per month.

**Action – Design & AWS Services**  
* **Reliability‑first architecture**: Deployed the model as an **ECS Fargate** cluster behind a **Application Load Balancer (ALB)** with *cross‑zone load balancing*.  
* **Multi‑region failover**: Replicated the entire stack to a secondary region and used **Route 53 latency routing + health checks** for instant switchover.  
* **Auto‑Scaling & Spot Instances**: Configured target tracking on CPU usage (70%) with *Spot Fleet* to keep costs 30 % lower while ensuring capacity during peaks.  
* **Observability**: Integrated **CloudWatch Alarms**, **X-Ray tracing**, and **AWS Distro for OpenTelemetry**; set up a real‑time dashboard in Grafana.

**Result**  
Uptime rose from 94 % to **99.95 %** within two months, cutting incident tickets by 70 %. The multi‑region setup reduced recovery time objective (RTO) from 1 h to <5 min. Cost savings of $120K/month were achieved while maintaining performance.

**Learning & Ownership**  
I owned the post‑mortem process: documented root causes, updated runbooks, and ran a “blameless” retrospective that identified gaps in our monitoring strategy. This iterative loop is now part of our quarterly reliability review.  

*Leadership Principles:* **Ownership**, **Dive Deep**, **Customer Obsession**, **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
