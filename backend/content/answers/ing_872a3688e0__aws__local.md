---
qid: ing_872a3688e0__aws__local
question: 'Explain: Simplicity — Careers | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 417
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:29:45-05:00'
sources: []
---

**Simplicity – Careers | Harvey**

*Leadership Principles:* **Customer Obsession** & **Dive Deep**

> *Situation*: A new hiring platform “Careers | Harvey” was built to recommend roles to candidates using ML, but users complained the interface was cluttered and recommendations were opaque.  
> *Task*: Reduce friction so that 90 % of users could find a suitable role within two clicks while keeping model accuracy above 80 %.  
> *Action*:  
> 1. **Customer‑first data audit** – collected click‑stream logs, ran a cohort analysis to identify the “sweet spot” in the recommendation funnel (2nd click).  
> 2. **Model simplification** – pruned features from 350 to 45 using SHAP importance and L1 regularization; replaced heavy XGBoost ensemble with a single CatBoost tree (50 % inference time, 10 % cost).  
> 3. **UI redesign** – collapsed the role cards into a collapsible “Top Picks” section and added an interactive “Why this?” tooltip powered by a lightweight Lambda that queries SageMaker hosting endpoint for explanation text.  
> 4. **Deployment & monitoring** – used CloudWatch metrics (CTR, dwell time) to A/B test; rolled out to 70 % traffic after seeing a 35 % lift in conversion and a 12 % drop in page load time.  
> *Result*: User satisfaction rose from 68 % to 91 %, recommendation accuracy stayed at 82 %, and compute cost dropped by 22 %.  

*What the bar‑raiser looks for:* ownership of both product and ML pipeline, deep dive into feature importance, quantified impact on UX & cost, and learning loop (we iterated from XGBoost to CatBoost after failure).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
