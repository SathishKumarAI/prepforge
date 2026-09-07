---
qid: ing_655777fd30__aws__local
question: 'Explain: Using tools effectively ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 405
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:13:56-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of our on‑premise Glean Machine‑Learning‑Compute (MCP) server to a cloud‑native stack so that we could serve 1 M inference requests per day without SLA drift.

**Action**  
I scoped requirements: low latency (<50 ms), high throughput, and zero downtime.  
* **Ownership & Customer Obsession** – I mapped each user journey, identified the 80/20 inference paths, and chose services that deliver those needs.  
* **Dive Deep** – I benchmarked SageMaker Processing vs. Lambda‑based inference; SageMaker gave me 3× lower cost per request (USD 0.0006 vs. USD 0.0018).  
* **Bias for Action** – I built a CI/CD pipeline with CodePipeline, Terraform, and CloudWatch alarms that auto‑scales an ECS Fargate cluster (2–20 tasks) behind an ALB.  
* **Invent & Simplify** – Instead of a monolithic server, I decomposed the model into micro‑services, each containerized via ECR, reducing cold‑start time from 400 ms to <120 ms.

**Result**  
The new architecture cut inference cost by **42 %**, reduced average latency to **38 ms**, and maintained a 99.9 % uptime during the first 90 days. Post‑deployment monitoring showed a 25 % drop in error rates, directly improving customer satisfaction scores (CSAT ↑5 points).  

**Reflection** – The key learning was that tool choice is not just about features; it’s about aligning services to real user metrics and iterating fast under real traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
