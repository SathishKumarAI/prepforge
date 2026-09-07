---
qid: ing_e2590af154__aws__local
question: Is the training model too small in your experiment?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 391
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:51:10-05:00'
sources: []
---

**Situation & Task**  
I was leading a pilot to classify customer support tickets with an XGBoost model. After 48 hrs of training, accuracy plateaued at 78 %—below our target of 85 %. The question: *“Is the training model too small?”*  

**Action**  
1. **Dive Deep into Data & Feature Space** – I ran a feature importance analysis and found only 12 features were used; the remaining 38 had low cardinality but high predictive power.  
2. **Scale Model Capacity** – Switched from a shallow tree (max_depth = 5) to a deeper ensemble (depth = 10, n_estimators = 300).  
3. **AWS Services** – Deployed training on SageMaker’s `ml.m5.xlarge` instances with Spot‑Training for cost control, and used SageMaker Experiments to track hyperparameters.  
4. **Bias for Action & Deliver Results** – Within 2 hrs I retrained; accuracy jumped to 84.6 %. A second iteration with an `ml.c5.9xlarge` (larger CPU) hit 86.3 %—meeting the goal.

**Result**  
- **Impact:** 7.8 % lift in F1‑score, translating to ~12,000 fewer escalated tickets per month (≈$48k saved).  
- **Cost:** Spot‑Training cut GPU spend by 60 %, keeping total cost under $200/month.  

**Learning & Bar‑Raiser Insight**  
I took ownership of the data pipeline, validated assumptions, and quantified every tweak. The bar‑raiser would note my *deep dive* into feature importance, my use of AWS tooling to iterate quickly, and the clear ROI from scaling model capacity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
