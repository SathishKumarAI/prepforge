---
qid: ing_394da6c6a8__aws__local
question: 'Explain: Connect API — Connectapi'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 417
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:34:35-05:00'
sources: []
---

**ConnectAPI – A Bridge Between AWS ML & Customer Experience**

*Situation:*  
At my previous role I led a project to embed real‑time sentiment analysis into our contact‑center workflow. The legacy system had no way to surface model predictions to agents during calls.

*Task:*  
Design an API that pulls inference results from Amazon SageMaker, pushes them into the existing Contact Lens (Connect) dashboard, and logs usage for compliance—all while staying within SLA of 200 ms per call.

*Action:*  
I built a **serverless ConnectAPI** using:
- **Amazon API Gateway** (REST + WebSocket) – throttling & caching to keep latency < 150 ms.  
- **AWS Lambda** – orchestrates SageMaker Runtime invoke, transforms JSON, and writes to **Amazon DynamoDB** for audit trails.  
- **SNS** – notifies agents via the Connect UI when sentiment crosses a threshold.  
I added **CloudWatch metrics** (invoke latency, error rate) and **X‑Ray tracing** to surface bottlenecks.

*Result:*  
Within two weeks of rollout, call‑center agents could see live sentiment scores, reducing average handling time by **12 %** and increasing first‑contact resolution from 68 % to 78 %. API uptime hit **99.98 %**, meeting our SLA.

> *Leadership Principles*: **Customer Obsession** (agents get actionable insights), **Ownership** (owning the end‑to‑end flow), **Dive Deep** (profiling latency, cost per invocation ~$0.0004).  
> *Bar‑raiser focus*: demonstrated ownership, quantified impact, and a post‑mortem loop that added automated retries after an early failure caused 5 % latency spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
