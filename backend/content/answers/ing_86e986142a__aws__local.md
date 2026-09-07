---
qid: ing_86e986142a__aws__local
question: Your judge model is being deprecated and you have to move to a new version.
  How do you keep your scores comparable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 442
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:29:13-05:00'
sources: []
---

**Situation & Task**  
When the production judge model (v1) was deprecated, our real‑time fraud‑score pipeline had to switch to a new model (v2) without losing the ability to compare scores across versions for audit and business metrics.

**Action**  
1. **Establish a common reference frame** – built an *anchor score* by running both models on the same 10 M historical batch, then computed a linear mapping (α·score_v2 + β = score_v1) using least‑squares regression in SageMaker Processing.  
2. **Deploy side‑by‑side inference** – launched v1 and v2 as two SageMaker endpoints behind an Application Load Balancer; traffic split 50/50 via Lambda routing, storing raw predictions in DynamoDB for A/B testing.  
3. **Automate drift checks** – every hour CloudWatch Alarms trigger a Lambda that compares mean absolute error between mapped v2 scores and v1; if MAE > 0.02, the team is alerted.  
4. **Document & communicate impact** – updated the scoring documentation, added a “score‑map” column in our data lake (Athena), and ran a quarterly report showing that after mapping, revenue‑impact KPIs differed by < 1.3% versus pre‑migration.

**Result**  
- Maintained 99.8% consistency in fraud‑detected transaction counts during the transition.  
- Reduced manual re‑calibration effort from days to minutes.  
- Achieved a 15% lower latency (from 120 ms to 102 ms) by leveraging the new model’s lighter inference graph.

**Leadership Principles**  
*Customer Obsession*: ensured stakeholders saw no disruption in fraud detection accuracy.  
*Ownership & Dive Deep*: engineered end‑to‑end validation, automated drift monitoring, and quantified every step with clear metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
