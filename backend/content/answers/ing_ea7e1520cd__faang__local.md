---
qid: ing_ea7e1520cd__faang__local
question: 'Q74: A candidate claims their AI system achieves 95% accuracy. What questions
  do you ask to assess whether this is meaningful?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 384
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:45:04-05:00'
sources: []
---

**Clarify**  
> *Restate*: “Your model reports 95 % accuracy.”  
> *Assumptions to verify*: dataset size, class balance, how the split was done (train/val/test), whether metrics were computed on held‑out data or on the same set used for training, and what constitutes a correct prediction.

**Approach**  
1. Ask about the data pipeline: source, preprocessing, labeling quality.  
2. Probe evaluation protocol: cross‑validation? Random seed?  
3. Inquire about baseline models and why accuracy is chosen over precision/recall or AUC.  

**Depth**  
- **Data leakage** – if the test set leaked into training, accuracy inflates.  
- **Class imbalance** – 95 % can be trivial if 95 % of examples belong to one class; confusion matrix and per‑class metrics are essential.  
- **Statistical significance** – compute confidence intervals or bootstrap tests to see if performance is robust across splits.  
- **Model complexity vs. overfitting** – check validation loss, regularization, and whether the model generalizes.

**Edge Cases**  
- Small test set → high variance; need ≥ 1k examples per class.  
- Non‑stationary data: accuracy may drop in production if distribution shifts.  
- Adversarial inputs or noisy labels could hide overfitting.

**Optimize & Communicate**  
Explain that a meaningful claim requires transparent, reproducible evaluation: well‑shuffled splits, stratified sampling, multiple metrics, and statistical validation. Suggest presenting a ROC curve and confusion matrix to demonstrate real-world utility, and recommend continuous monitoring post‑deployment. This structured questioning signals rigorous assessment of the model’s claimed performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
