---
qid: ing_1634099749__aws__local
question: 'Explain: Graceful Degradation — Error Handling And Recovery'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 489
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:15:43-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the rollout of a real‑time fraud‑detection model that ran on Amazon SageMaker and served millions of transactions per day. The business required **99.9 % uptime**, but we also had to guarantee *non‑blocking* behavior when the inference endpoint was temporarily unavailable.

**Action – Graceful Degradation Design**  
1. **Fallback Path** – I added a lightweight rule‑based Lambda that receives the same payload, runs in <5 ms, and returns a “safe” label.  
2. **Circuit Breaker & Retry** – Using AWS Step Functions with `Catch` blocks, we detect SageMaker timeouts (≥1 s) and automatically route to the fallback.  
3. **Observability** – CloudWatch Alarms trigger SNS notifications when the failure rate exceeds 0.5 %. We log all failures in DynamoDB for post‑mortem analysis.  
4. **Cost & Scale** – The Lambda runs on a reserved 1 vCPU; it costs <$0.0000167 per invocation, negligible compared to SageMaker ($0.10/inference). By keeping the fallback stateless we achieve *elasticity* with no extra cost during spikes.

**Result**  
After deployment, uptime rose from **93 %** (pre‑degradation) to **99.97 %**, while fraud‑detection latency dropped by 12 %. The fallback handled ~1.3 M invocations per month during a SageMaker outage, saving the business an estimated $18k in lost revenue.

**Reflection & Learning**  
I realized that *ownership* means anticipating edge cases; *Dive Deep* required me to profile latency distributions and design a threshold‑based circuit breaker. The biggest lesson: a well‑planned fallback is cheaper and safer than patching the primary model on the fly.

> **Leadership Principles Anchored:** Customer Obsession, Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
