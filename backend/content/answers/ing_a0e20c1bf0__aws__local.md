---
qid: ing_a0e20c1bf0__aws__local
question: 'Explain: 1.11. Ensembles: Gradient boosting, random forests, bagging, voting,
  stacking'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 474
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:28:57-05:00'
sources: []
---

**Situation / Task**  
In my last role I was asked to improve a fraud‑prediction model that delivered only 78 % precision. The data were highly imbalanced (1 % fraud) and the business required a drop in false positives by 30 %.  

**Action** – *Dive Deep* & *Ownership*  
I built an ensemble pipeline in **Amazon SageMaker**:

| Ensemble | How it works | Why I chose it |
|----------|--------------|----------------|
| **Gradient Boosting (XGBoost)** | Sequential trees that correct previous errors. | Handles missing values and captures complex interactions. |
| **Random Forests** | Parallel bagged trees with feature subsampling. | Provides robust variance reduction; quick baseline. |
| **Bagging + Voting** | Train multiple base learners on bootstrap samples, aggregate via majority vote. | Simple, fast to train; good for noisy data. |
| **Stacking** | Meta‑learner (logistic regression) trained on out‑of‑fold predictions of base models. | Combines strengths of different algorithms into a single prediction surface. |

I used **SageMaker Pipelines** to automate data preprocessing, hyper‑parameter tuning (via SageMaker Hyper‑Parameter Optimization), and model evaluation. The stack was deployed in an **ECR container** behind an **Application Load Balancer**, ensuring 99.9 % availability.

**Result** – *Deliver Results*  
The stacked ensemble lifted precision from **78 % to 92 %** while maintaining recall at **87 %**, a **30 %** reduction in false positives. Cost per inference dropped by 15 % thanks to the lightweight XGBoost model and auto‑scaling batch transform jobs.  

**Bar‑raiser takeaway**  
I demonstrated ownership (owning the end‑to‑end ML flow), deep technical dive (understanding each ensemble’s bias–variance trade‑off), quantified impact, and a lesson: always validate that added complexity truly improves business KPIs before deploying.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
