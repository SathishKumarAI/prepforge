---
qid: ing_b170bfb5c6__aws__local
question: 'Explain: The other thing that''s pretty important is'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 380
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:06:07-05:00'
sources: []
---

**Situation / Task**  
In my last role I was asked to add a real‑time recommendation engine for an e‑commerce site that served ~30 M page views/day. The goal was to increase conversion by at least 5 % without hurting latency.

**Action**  
I built the solution on **Amazon SageMaker** (for training) and **AWS Lambda + Amazon API Gateway** (for inference). I used a **feature store in DynamoDB** with TTL for freshness, and an **S3 data lake** for historical logs. The model was a LightGBM boosted tree trained nightly; I packaged it as a container and deployed to SageMaker Real‑Time Endpoint with autoscaling.  
To reduce cost, I set the endpoint’s *warm pool* to 1 instance (p2.xlarge) and used **GPU Spot** instances for training, cutting GPU hours from $0.30 → $0.07 per hour.  

**Result**  
The recommendation service added an average of 4.8 % lift in conversion and a 12 % bump in AOV within the first month, translating to ~$2.1M incremental revenue yearly. The end‑to‑end latency stayed < 50 ms for 99th percentile requests.  

**Learning & Ownership**  
I iterated on feature engineering after observing drift, added automated retraining via CloudWatch Events, and documented failure modes in a post‑mortem wiki—showing *Ownership* and *Dive Deep*. The bar‑raiser will note my data‑driven impact, AWS service trade‑offs (cost vs. latency), and proactive learning loop.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
