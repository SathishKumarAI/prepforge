---
qid: ing_5131ecad19__aws__local
question: 'Explain: Current openings at Glean — Jobs at Glean'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 464
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:28:51-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *Customer Obsession* – I start by asking: **“What problem do the new ML roles solve for our customers?”**  
> *Dive Deep* – I analyze the current pipeline, identify gaps, and propose a scalable solution.

### Situation
Glean’s hiring team needed to expand its data science squad to accelerate product recommendations. The existing model lagged behind competitors, delivering only 12 % CTR on suggested content.

### Task
Design an end‑to‑end framework that can recruit, onboard, and evaluate new ML engineers while improving recommendation performance.

### Action
1. **Requirements** – Identify core competencies: feature engineering, model interpretability, deployment automation.
2. **Recruitment Engine** – Build a lightweight Lambda function that parses LinkedIn & GitHub profiles, scores candidates on past Kaggle/ML‑competence metrics, and feeds top 10% into an SQS queue for human review.
3. **Onboarding Pipeline** – Deploy a SageMaker Studio notebook template (Jupyter) pre‑loaded with data subsets and evaluation scripts; use Step Functions to orchestrate training, hyper‑parameter tuning, and model registry updates.
4. **Metrics Dashboard** – Use CloudWatch + QuickSight to track hiring velocity, time‑to‑deploy, and recommendation CTR improvements.

### Result
- Reduced time‑to‑hire from 45 days to **12 days** (≈73 % faster).  
- Onboarded 8 senior ML engineers in 3 months.  
- Recommendation CTR rose from 12 % to **18 %** within two release cycles, a 50 % lift.

### Learnings
I realized that automating the early screening step freed recruiters to focus on cultural fit, and that integrating model monitoring into the onboarding pipeline ensured continuous improvement.  

> *Deliver Results* – The end product was a repeatable, data‑driven hiring system that directly boosted customer engagement while keeping costs under 20 % of the previous manual process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
