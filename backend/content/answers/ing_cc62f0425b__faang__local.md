---
qid: ing_cc62f0425b__faang__local
question: How do you detect overfitting and underfitting in practice, and what do
  you do about each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 406
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:34:29-05:00'
sources: []
---

**Clarify**  
You’re asked how to spot over‑/under‑fitting *in a production ML pipeline* and what actions you’d take. I’ll assume we have labeled data, a validation set, and the ability to log metrics during training.

---

### Approach
1. **Train‑validation gap** – track training vs. validation loss/accuracy per epoch.  
2. **Learning curves** – plot performance vs. dataset size or epochs.  
3. **Cross‑validation / bootstrap** – estimate variance of predictions.  
4. **Regularization diagnostics** – monitor weight norms, dropout rates, etc.

---

### Depth
- **Overfitting**: training loss drops while validation plateaus or rises.  
  *Fixes*: add L1/L2 regularization, increase dropout, prune features, gather more data, use early stopping.
- **Underfitting**: both losses high and close together; learning curve flat.  
  *Fixes*: increase model capacity (layers/units), reduce regularization, enrich feature engineering, or train longer.

Complexity: monitoring is O(n) per epoch; additional training for cross‑validation is O(k·n). Trade‑off between tighter diagnostics and compute budget.

---

### Edge Cases
- **Noisy labels** → high validation loss even with good model.  
  *Test*: label noise simulation, use robust loss functions.  
- **Small datasets** → validation variance spikes; use nested CV or data augmentation.

---

### Optimize & Communicate
Explain that we’ll automate the metric pipeline, set alerts on train‑val divergence thresholds, and iterate quickly: “When we hit a 5 % gap, we trigger early stopping; if both curves plateau below 90 %, we scale up capacity.” This keeps stakeholders informed while ensuring reproducible model health.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
