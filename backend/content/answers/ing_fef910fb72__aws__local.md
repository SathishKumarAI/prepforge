---
qid: ing_fef910fb72__aws__local
question: 'Explain: Calculating Throughput — Latency vs Throughput vs Bandwidth |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 430
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:54:38-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a migration of our recommendation engine to a serverless architecture on **AWS Lambda + Amazon SageMaker**. The client demanded 99.9 % availability while keeping per‑request latency under **150 ms** and throughput at **10k requests/sec** during peak traffic.

**Action**  
I started by *dive deep* into the metric definitions:  

- **Latency** – time from request arrival to response, measured via CloudWatch metrics.  
- **Throughput** – number of completed requests per second, derived from `Invocations` and `Duration`.  
- **Bandwidth** – data volume transferred, captured with VPC Flow Logs.

Using these, I built a **real‑time dashboard** (Amazon CloudWatch + Grafana) that fed into an Auto Scaling policy for Lambda concurrency. To keep latency low, I pre‑warmed 5 k concurrent executions and cached model weights in **ElastiCache Redis**, reducing cold starts from ~1 s to <50 ms. For throughput, I partitioned the SageMaker endpoint across multiple instances (using Elastic Inference) and applied *request batching*.

I also introduced a **cost‑optimization loop**: daily Lambda usage reports were parsed with AWS Cost Explorer APIs; we reduced wasted concurrency by 30% while maintaining throughput, saving ~$12k/month.

**Result**  
Post‑migration, latency dropped from 350 ms to 120 ms (Δ −230 ms), throughput increased from 4.5 k to 10.2 k req/s (+127%), and cost fell by 25%.  

**Leadership Principles Highlighted**  
- **Customer Obsession** – delivered a faster, cheaper service for end users.  
- **Ownership** – drove the full redesign, monitored metrics, and iterated until SLA met.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
