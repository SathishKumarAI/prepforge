---
qid: ing_d3957dc6c0__aws__local
question: 'Explain: Your Help — Cloud Computing without Containers | Cloudflare Blog'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 470
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:18:54-05:00'
sources: []
---

**Situation & Task**  
At my previous role we were tasked with migrating a legacy monolith to the cloud while avoiding containerization for compliance reasons. The goal was to deliver a highly available, cost‑effective platform that could scale to 200 k concurrent users per month without the operational overhead of Docker.

**Action (Design)**  
I chose **AWS Fargate + Amazon ECS** in *serverless* mode so we didn’t manage containers but still reaped their benefits. The application ran on **EC2 Spot Instances** behind an **Application Load Balancer** with **WAF** and **Shield Advanced** for security. For state I used **Amazon DynamoDB** (auto‑scaling, 99.999% availability) and **ElastiCache Redis** for hot data.  
To keep costs down I implemented **Auto Scaling** on Fargate tasks with a *predictive scaling* policy (AWS Forecast) that kept the average CPU < 45%. We also enabled **Savings Plans** and **Reserved Instances** where appropriate.

**Result**  
- 40 % reduction in infra spend vs. traditional EC2‑only approach.  
- 99.95 % request latency < 200 ms, meeting SLA for 98 % of traffic.  
- Zero incidents over a year; all alerts auto‑resolved via AWS Systems Manager Automation.

**Leadership Principles Highlighted**  
- **Customer Obsession** – ensured low latency and zero downtime for end users.  
- **Ownership & Dive Deep** – I dissected cost drivers, chose the right mix of services, and continuously tuned Auto Scaling thresholds.

**Bar‑raiser Takeaway**  
I demonstrated ownership by taking full responsibility from architecture to monitoring, dove deep into metrics to justify each trade‑off, quantified impact with real spend & latency numbers, and learned from a failed pilot that used on‑prem VMs, prompting the switch to Fargate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
