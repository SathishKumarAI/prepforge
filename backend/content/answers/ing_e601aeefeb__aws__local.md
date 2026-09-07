---
qid: ing_e601aeefeb__aws__local
question: 'Explain: And then use that historical data to — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 416
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:58:07-05:00'
sources: []
---

**Situation & Task**  
When I joined the Data Science team at a fintech startup, we had 2 years of user‑location logs but no predictive routing engine. The goal was to build a real‑time “next‑stop” model that would reduce average trip time by 15 % for high‑volume corridors.

**Action**  
I owned the end‑to‑end pipeline:  
1. **Feature Engineering** – aggregated hourly traffic, weather, and event data (Spark on EMR).  
2. **Modeling** – trained a Gradient Boosted Trees model in SageMaker; tuned with Bayesian Optimization to hit 0.82 AUC.  
3. **Deployment** – wrapped the predictor as a Lambda function behind API Gateway, scaling via DynamoDB read‑through cache for low latency (<50 ms).  
4. **Observability** – set up CloudWatch dashboards and automated retraining triggers every 24 h.

I also instituted an A/B test on 10 % of traffic, showing a 17 % reduction in average journey time (from 12.3 min to 10.2 min) and a 4 % lift in user retention.

**Result**  
The model was rolled out company‑wide, saving ~$200k/month in operational costs by optimizing routing for delivery fleets. It also drove an increase of 5 % in overall app usage.

> **Leadership Principles:** *Ownership* – I led all phases; *Dive Deep* – I scrutinized every data point and latency metric; *Deliver Results* – the quantified lift proved impact.  

**Bar‑raiser notes**: Look for ownership, depth of technical detail, measurable ROI, and lessons learned (e.g., we later switched to a neural net when traffic patterns became more chaotic).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
