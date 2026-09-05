---
qid: ing_9cebcc316f__star__local
question: 'Explain: Different Loss Functions in Machine Learning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 280
total_tokens: 514
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:45:51-05:00'
sources: []
---

**Situation**  
During a capstone project for my MSc, we built a sentiment‑analysis model to predict movie reviews as positive or negative. The initial accuracy plateaued at 78%, and the confusion matrix showed many false positives.

**Task**  
I needed to improve classification performance by selecting an appropriate loss function that better handled class imbalance and penalized misclassifications differently.

**Action**  
First, I compared binary cross‑entropy (the default) with focal loss and weighted BCE. I implemented each in PyTorch, assigning a higher weight to the minority class based on its 30% prevalence. For focal loss, I tuned γ=2 to reduce easy examples’ influence. I monitored training with TensorBoard, observing that focal loss reduced false positives more than cross‑entropy. After hyperparameter sweeps (learning rate, batch size), I settled on weighted BCE with a weight of 1.5 for negatives.

**Result**  
Accuracy rose from 78% to 85%, precision improved from 0.74 to 0.82, and the F1‑score climbed to 0.80. The exercise taught me that loss functions are not one‑size‑fits‑all; choosing or customizing them based on data characteristics can yield significant performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
