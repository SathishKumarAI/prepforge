---
qid: ing_d96d3f094e__aws__local
question: 'Explain: Uh, if things look good, then roll — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 371
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:30:47-05:00'
sources: []
---

**Situation (S)** – I led a cross‑functional team at AWS to prototype an ML‑driven recommendation engine for the Marketplace. The goal was to shift from a static catalog to real‑time personalized suggestions while keeping latency < 50 ms and cost <$0.05 per request.

**Task (T)** – Build a production‑grade pipeline that could be “rolled” once confidence thresholds were met, mirroring Google’s *If things look good, then roll* mantra.

**Action (A)**  
1. **Design & Ownership** – I scoped the architecture: SageMaker for training, Lambda + API Gateway for inference, and DynamoDB for feature store. We set a “roll‑once” rule: only deploy after 3 consecutive A/B tests showing ≥10% lift in click‑through and no >2 ms increase in latency.  
2. **Dive Deep & Bias for Action** – I wrote automated metrics dashboards (CloudWatch + QuickSight) to surface drift, and triggered a Lambda “roll” when thresholds were hit.  
3. **Cost & Scalability** – Leveraged spot instances for training, reserved capacity for inference, and used DynamoDB auto‑scaling—cost dropped 30% vs the baseline.

**Result (R)** – The engine was rolled in under two weeks, delivering a 12% lift in sales revenue while keeping cost per recommendation at $0.04. Post‑deployment monitoring revealed no performance regressions for six months.

*Leadership Principles*: **Ownership**, **Dive Deep**, and **Deliver Results**—the bar‑raiser would focus on my data‑driven thresholds, rapid iteration, and clear ROI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
