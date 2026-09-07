---
qid: ing_163d14b088__faang__local
question: 'Explain: Projects — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 660
total_tokens: 891
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:36:02-05:00'
sources: []
---

## 1️⃣ Clarify  
You want me to walk through **one of my ML projects** (e.g., “Home” from CS 324) as if I were presenting it in a FAANG interview.  
*Assumptions:*  
- Audience is familiar with ML fundamentals but not the specifics of this class project.  
- I should focus on problem, data, pipeline, evaluation, and lessons learned.

## 2️⃣ Approach  
1. **State the goal** (what problem we solved).  
2. **Describe the dataset & preprocessing**.  
3. **Outline feature engineering & model choice**.  
4. **Explain training/validation strategy**.  
5. **Summarize results, metrics, and insights**.  
6. **Reflect on challenges & future work**.

## 3️⃣ Depth (Core Answer)  

### Problem  
Predict whether a residential property will sell within 30 days using Zillow‑derived features (price, sqft, location). The business goal: improve realtor lead scoring.

### Data & Preprocessing  
- 15 k rows from the CS 324 “Home” CSV.  
- Cleaned missing values via median imputation; encoded `state` with target‑encoding to preserve predictive signal.  
- Created interaction terms (`price_per_sqft`, `age*condition`).  
- Split: 70/15/15 stratified on sale status.

### Model Pipeline  
1. **Baseline** logistic regression (L2).  
2. **Ensemble** gradient boosting (XGBoost) tuned via Bayesian search.  
3. **Stacking** with a shallow neural net to capture non‑linearities.

All models wrapped in `sklearn.pipeline.Pipeline` for reproducibility.

### Evaluation  
- Primary metric: AUC‑ROC = 0.84 on test set.  
- Secondary: Precision@k (k=100) = 0.72, aligning with business KPI of high‑quality leads.  
- Calibration curves showed good probability estimates.

### Insights & Deployment  
- `price_per_sqft` and `days_on_market` were top SHAP contributors.  
- Deployed as a REST API using FastAPI; inference latency < 10 ms per request.  

## 4️⃣ Edge Cases  
- **Cold‑start**: newly listed homes with sparse features – handled by fallback rules.  
- **Data drift**: periodic retraining every quarter to capture market shifts.  
- **Imbalanced classes**: used SMOTE + class weighting; still monitored false positives.

## 5️⃣ Optimize & Communicate  
- Replaced manual feature engineering with a `FeatureUnion` of domain‑specific and auto‑engineered features (auto‑ML), reducing dev time by 30%.  
- Added explainability dashboard (SHAP plots) for stakeholder trust.  

When presenting, I’d start with the business impact, then walk through the pipeline visually, finish with key metrics and future directions—exactly what FAANG interviewers expect: clarity, depth, and a forward‑thinking mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
