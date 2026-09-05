---
qid: ing_5f5083b7b8__star__local
question: 'Explain: Week 9-10: Final Topics & Review — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 379
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:39:01-05:00'
sources: []
---

**Situation:**  
During my last semester I had a capstone project where the team needed to build a recommendation engine for an e‑commerce startup. We were on a tight deadline: two weeks before the final demo, and our accuracy metric (Hit@10) was hovering at 0.32—well below the target of 0.45.

**Task:**  
I had to boost the model’s performance quickly while keeping the codebase clean and explainable for stakeholders who weren’t ML‑savvy.

**Action:**  
I pulled from my Week 9–10 review of Neetcode 150, specifically the “Model Ensemble” and “Feature Engineering” modules. First, I engineered a new user‑behavior feature by aggregating click‑through rates over the past week and normalizing with z‑scores. Then I built two lightweight models: a LightGBM ranker (using histogram-based splits for speed) and an XGBoost pairwise ranking model. Using the Neetcode `Ensemble` pattern, I blended their predictions via weighted averaging (70% LightGBM, 30% XGBoost), which leveraged each algorithm’s strengths without inflating inference time. I also added a simple post‑processing step to re‑rank top‑5 items based on business priority tags.

**Result:**  
The Hit@10 jumped from 0.32 to **0.48** in just three days, surpassing the target by 7%. The ensemble ran under 200 ms per request, meeting latency constraints. I learned that a disciplined review of core ML patterns—like ensembling and feature scaling—can deliver rapid, measurable gains even when time is scarce.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
