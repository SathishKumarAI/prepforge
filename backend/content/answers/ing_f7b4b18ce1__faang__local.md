---
qid: ing_f7b4b18ce1__faang__local
question: 'Explain: Commuter Allowance — Join Us'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 543
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:15:55-05:00'
sources: []
---

## Clarify  
The interviewer wants a data‑science framing of the **“Commuter Allowance – Join Us”** problem: given employee commuting data, predict which employees will enroll in a commuter‑benefit program and estimate their expected benefit usage. We assume we have historical enrollment, commute mode, distance, salary, tenure, and demographic features.

## Approach  
1. **Feature engineering**: encode commute mode (one‑hot), calculate *commute cost* vs. *salary*, add interaction terms for tenure × distance.  
2. **Model selection**: start with a logistic regression for interpretability; then try tree‑based models (XGBoost) to capture non‑linearities.  
3. **Evaluation**: use AUC‑ROC for classification, mean absolute error for usage prediction.  
4. **Business metric**: compute incremental cost vs. expected savings from reduced parking or carbon credits.

## Depth  
- Logistic regression gives odds ratios (e.g., “each 5 km increase raises enrollment odds by 12%”).  
- XGBoost captures threshold effects (e.g., “commute > 30 km → 70% enrollment”).  
- Feature importance reveals key levers: distance, salary band, and tenure.  
- For usage, a linear regression on logged mileage predicts monthly allowance spend.

Complexity: training is O(n·log n) for XGBoost; inference is sub‑millisecond per employee—perfect for real‑time eligibility checks.

## Edge Cases  
- Sparse data for rare commute modes (e.g., cycling).  
- Missing salary or tenure values—impute with median or use a model that handles missingness.  
- Outliers: employees commuting > 200 km; cap or flag for manual review.

## Optimize & Communicate  
1. **Feature selection** via SHAP to reduce dimensionality without loss of predictive power.  
2. Deploy as an online service behind an API, with A/B testing on the enrollment funnel.  
3. Present findings: “By targeting employees > 25 km away and in lower salary bands, we can increase program uptake by 15% while keeping costs within budget.”  

This structured solution showcases problem‑solving, clear communication, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
