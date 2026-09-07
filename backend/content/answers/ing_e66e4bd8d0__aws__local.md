---
qid: ing_e66e4bd8d0__aws__local
question: 'Explain: How a Request Flows Through the System — Design Load Balancer
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 526
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:59:04-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the redesign of a high‑traffic recommendation API that was bottlenecked by uneven traffic spikes. The goal was to build a **fully managed, fault‑tolerant request pipeline** that could serve 200k RPS while keeping latency < 120 ms.

**Action – Design & Tech Choices**  
1. **Application Load Balancer (ALB)**: Front‑end receives HTTPS requests and performs host/path routing. ALB’s target groups auto‑scale based on CloudWatch alarms, eliminating manual intervention.  
2. **Container Service (ECS Fargate)**: Each micro‑service runs in a task with 512 MiB CPU/1 GiB RAM; Fargate handles the scaling and isolation, reducing operational overhead.  
3. **Cache Layer (ElastiCache Redis)**: Frequently used model embeddings are cached for < 5 ms lookups, cutting downstream compute by ~30 %.  
4. **SQS + Lambda**: For heavy‑weight inference jobs we offload to a serverless queue; Lambda workers scale to 10k concurrent invocations, keeping the API responsive.  
5. **Observability**: X-Ray traces every hop; CloudWatch dashboards show 99.9 % availability and 95th percentile latency < 110 ms.

**Result**  
- Traffic rose from 50k to 200k RPS with a 25 % cost reduction (from $12K/month to $9K).  
- Customer‑obsessed metric: **Mean Time to Recovery (MTTR)** dropped from 2.5 h to < 10 min after incidents.

**Bar‑raiser Notes**  
*Ownership*: I wrote the Terraform scripts and owned post‑deployment monitoring.  
*dive deep*: I profiled each micro‑service, identified cache hit rates, and tuned SQS visibility timeouts.  
*Quantified impact*: 200k RPS, 25 % cost savings, 95th percentile latency < 110 ms.  
*Learning from failure*: After a first‑time “cold start” spike we added warm‑up containers, demonstrating iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
