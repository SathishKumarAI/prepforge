---
qid: ing_797a36e07f__star__local
question: 'Explain: 1.1.3.2. Setting regularization parameter'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 385
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:36:33-05:00'
sources: []
---

**Situation:**  
I was leading a fraud‑detection model for a fintech client whose transaction volume had just doubled last quarter. The initial logistic regression was overfitting: training accuracy hit 99% but test precision dropped to 45%, causing false positives that annoyed merchants.

**Task:**  
My goal was to find the right regularization strength (C in scikit‑learn) so the model generalized better while keeping fraud recall above 90%.

**Action:**  
I set up a validation curve over log‑spaced C values from 0.01 to 10, using 5‑fold cross‑validation and the area under the precision–recall curve as the metric. I plotted training vs. validation scores to spot the bias–variance sweet spot. After spotting that C=1 balanced both curves, I performed a fine grid search around it (0.8–1.2) with 10‑fold CV. I also added ElasticNet regularization to mix L1 and L2 penalties, tuning the alpha parameter via Bayesian optimization in Optuna.

**Result:**  
The tuned model achieved 92% recall and 70% precision on hold‑out data—a 25 pp lift over the baseline—while reducing false positives by 35%. I learned that systematic validation curves expose regularization trade‑offs better than blind grid searches, and that combining L1/L2 can capture both sparsity and stability in high‑dimensional fraud features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
