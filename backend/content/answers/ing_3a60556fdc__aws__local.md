---
qid: ing_3a60556fdc__aws__local
question: How many nines of happiness are your customers?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 429
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:38:22-05:00'
sources: []
---

**Situation (Customer Obsession & Ownership)**  
When I joined the AI Ops team, our ML‑driven incident‑response model was only 94 % accurate—customers reported a “happy” score of **3.7/5**, below the target of 4.5.  

**Task**  
I owned the end‑to‑end improvement: increase accuracy to ≥ 99 % and lift customer happiness to > 4.8/5 within six months.

**Action (Dive Deep & Bias for Action)**  
1. **Data audit** – built a pipeline in **AWS Glue + Athena** to surface mislabelled events; discovered 12 % of training data had stale labels.  
2. **Model retraining** – switched from single‑model inference on **EC2 Spot Instances** to an ensemble on **Amazon SageMaker Endpoint (multi‑instance)**, adding a lightweight rule‑based fallback.  
3. **Real‑time monitoring** – deployed **CloudWatch Dashboards + Lambda** alerts; set up A/B testing via **Feature Store**.  
4. **Cost control** – leveraged **SageMaker Neo** to compile models for **AWS Inferentia**, cutting inference cost by 35 %.  

**Result (Deliver Results)**  
Accuracy jumped from 94 % → **99.2 %**; customer happiness rose from **3.7/5** → **4.86/5** in Q4, surpassing the target by 0.36 points. Annual savings of $1.8M were realized through Inferentia and spot usage.

**Learnings (Invent & Simplify)**  
The key was treating data quality as a product feature—continuous validation turned a once‑static model into a self‑healing system, proving that ownership + deep dive yields measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
