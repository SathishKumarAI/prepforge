---
qid: ing_9d90bda7aa__aws__local
question: 'Explain: Life, AD&D, and LTD — Join Us'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 397
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:21:17-05:00'
sources: []
---

**Situation / Task**  
When I joined the Benefits Analytics team at a mid‑size insurer, we were launching a new “Join Us” bundle that combined **Life**, **Accidental Death & Dismemberment (AD&D)**, and **Long‑Term Disability (LTD)**. The goal was to increase cross‑sell rates by 25 % while keeping premium volatility below 5 %.  

**Action**  
1. *Customer Obsession / Dive Deep* – I interviewed 120 policyholders, mapped their decision triggers, and discovered that 68 % cited “one‑stop coverage” as a key motivator.  
2. *Technical Design* – Built an ML pipeline in **Amazon SageMaker** to predict bundle uptake. Features: demographic data (S3), claim history (DynamoDB), and behavioral signals from the web portal (Kinesis). Trained an XGBoost model, achieving 0.82 AUC on a hold‑out set.  
3. *AWS Services* – **Lambda** for real‑time scoring at checkout, **API Gateway** to expose the model, **CloudWatch** for monitoring drift, and **Cost Explorer** to keep spend under $1 k/month.  

**Result**  
- Bundle adoption rose 27 % within three months, exceeding the target.  
- Premium volatility dropped from 7 % to 3.8 %.  
- Cost per new bundle was $18, a 30 % reduction versus legacy manual underwriting.  

**Bar‑raiser notes** – I owned the end‑to‑end solution, demonstrated depth by explaining feature importance and model retraining cadence, quantified impact with concrete numbers, and iterated after an initial false positive spike by adding a rule‑based override.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
