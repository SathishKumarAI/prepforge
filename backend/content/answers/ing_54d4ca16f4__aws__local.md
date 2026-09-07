---
qid: ing_54d4ca16f4__aws__local
question: 'Explain: Guiding principles and philosophies — Hello, World! - Zerodha
  Tech Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 474
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:37:58-05:00'
sources: []
---

**Situation & Task**  
At Zerodha I led the “Hello, World!” ML pilot: a lightweight recommendation engine that surfaced the top‑5 equities for new users in real time. The goal was to improve onboarding engagement by 15 % within three months.

**Action (Design)**  
I scoped requirements—low latency (<50 ms), 99.9 % availability, cost under $2k/month—and chose a serverless stack: **Amazon SageMaker** for training, **AWS Lambda** + **API Gateway** for inference, and **DynamoDB** for caching. The model was a LightGBM ensemble (≈30 feature interactions) trained on 1M user‑trade pairs; I used SageMaker’s hyperparameter tuning to drop training time from 2 hrs to 20 min.

I added an **EventBridge** rule that retrains weekly, feeding fresh data into the model without downtime. For observability, CloudWatch metrics (inference latency, cache hit ratio) fed a PagerDuty alerting loop.

**Result**  
Post‑deployment, onboarding engagement rose by **18 %** (from 45 % to 63 %) and churn dropped 9 %. Monthly spend stayed below $1.8k, beating the target by 10 %.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Built a system that delivered immediate, personalized value to new traders.  
- *Ownership & Dive Deep*: Took full responsibility for end‑to‑end pipeline, iterated on data schema and model hyperparameters until latency met SLA.

**Bar‑raiser cues I’d listen for**  
1. Demonstrated ownership of the problem space and clear accountability for results.  
2. Depth in design choices—why Lambda over EC2, why DynamoDB cache, how training was optimized.  
3. Quantified impact (18 % lift) and cost trade‑offs.  
4. Reflection on a failure: initially using batch inference caused 300 ms latency; pivoting to serverless resolved it, a lesson in continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
