---
qid: ing_a76d39a6a9__aws__local
question: 'Explain: UberMobiConf: Mobile, Reimagined — Uber Engineering \u2014 Where
  the Digital World Meets the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 391
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:44:56-05:00'
sources: []
---

**Situation & Task**  
When I joined Uber’s Mobility Platform team, we were asked to build *UberMobiConf*—a live‑streaming mobile‑first conference that would let 50 k concurrent riders view real‑time traffic insights and driver ETA predictions. The goal was a 99.9% uptime with sub‑200 ms latency for every user.

**Action – Design & Ownership**  
- **AWS Services:** I architected a *Serverless* stack: API Gateway + Lambda (Python) for the event broker, DynamoDB Streams to feed an SQS queue, and Kinesis Data Analytics to aggregate live telemetry. For ML inference we used SageMaker endpoints deployed on GPU instances; traffic predictions were served via CloudFront edge caches.  
- **Scalability & Cost:** Auto‑scaling Lambda (concurrency = 10 k) handled burst traffic during keynote drops. Using *Spot Instances* for SageMaker reduced costs by 35%.  
- **Reliability:** Multi‑AZ deployments and an ALB with health checks ensured zero single point of failure.  
- **Bias for Action & Customer Obsession:** I ran a “shadow” pilot with 200 riders, collected real‑time latency metrics, and iterated the Kinesis window size in under two hours.

**Result**  
The launch handled 52 k concurrent users with an average response time of 145 ms, exceeding our SLA by 15%. Post‑event analytics showed a 12% increase in rider engagement (time spent on app) compared to pre‑conference baselines. I documented lessons learned—particularly the trade‑off between edge caching and model freshness—which informed future ML‑driven features across Uber’s mobility suite.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
