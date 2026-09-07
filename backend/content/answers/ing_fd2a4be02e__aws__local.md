---
qid: ing_fd2a4be02e__aws__local
question: 'Explain: Determining whether a service is too small or not properly defined'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 385
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:50:23-05:00'
sources: []
---

**Situation & Task**  
While launching an ML inference micro‑service for a retail recommendation engine, my team noticed the container was underutilized—CPU < 10 % and memory < 20 % during peak traffic. I had to decide whether the service was too small or its metrics were poorly defined.

**Action**  
I first *dive deep* into CloudWatch logs, X-Ray traces, and S3 request logs to confirm that requests hit the endpoint at the expected rate (≈ 12k req/s). I then added a custom metric (`InferenceLatency`) in CloudWatch and set an alarm for 90th‑percentile latency > 120 ms. Next, I compared this with the *Customer Obsession* principle: we needed sub‑200 ms latency for a smooth user experience.

I redesigned the service to use **AWS Lambda** with provisioned concurrency (4–8 instances) and added an **Amazon API Gateway** throttling policy. To reduce cost, I switched from on‑demand EC2 to **Fargate Spot** for background batch training jobs.

**Result**  
Post‑deployment, latency dropped from 180 ms to 95 ms (53 % improvement), and the average CPU usage rose to ~35 %, indicating the service was now appropriately sized. Monthly spend decreased by $1,200 due to spot instances. I documented a playbook for future sizing reviews.

**Learning & Bar‑raiser Insight**  
I demonstrated ownership by turning vague metrics into actionable KPIs, quantified impact through measurable latency and cost reductions, and learned that “small” can mean “under‑provisioned,” not necessarily “too small.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
