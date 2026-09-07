---
qid: ing_d94ddeb822__aws__local
question: 'Explain: Canary rollout and shadow traffic — Customer Distillation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 401
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:30:31-05:00'
sources: []
---

**Situation / Task**  
I was tasked to launch a new *Customer Distillation* model that predicts churn from live interaction logs. The risk of a buggy model could cost us millions in lost revenue, so I had to roll it out safely while gathering real‑world data for future tuning.

**Action**  
1. **Canary rollout** – I deployed the model to 5 % of traffic using **AWS Lambda@Edge** and **Amazon CloudFront**. Traffic was split via a weighted rule in API Gateway, giving us instant A/B metrics.  
2. **Shadow traffic** – The same 95 % of requests were forwarded (without affecting user experience) to the new model in a *shadow* environment on **AWS SageMaker Inference Endpoint**. I used **Amazon Kinesis Data Streams** to capture predictions and sent them to **Amazon Redshift** for downstream analysis.  
3. Integrated **CloudWatch Alarms** that triggered automatic rollback if latency > 200 ms or error rate > 0.5 %.  

**Result**  
Within 48 h I validated the model’s precision‑recall at 92/88% against production, reduced churn by 12 % in a pilot cohort, and cut inference cost by 18 % using spot instances for shadow traffic.

**Learning & Bar‑Raiser Focus**  
I demonstrated **Ownership** (full lifecycle control), **Dive Deep** (monitoring every metric), quantified impact (12 % churn lift), and learned that early rollback rules can be fine‑tuned to avoid false positives. This approach is scalable: add more canary slices or shift traffic gradually, keeping cost low and availability high.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
