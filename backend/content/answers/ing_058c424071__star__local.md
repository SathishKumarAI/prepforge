---
qid: ing_058c424071__star__local
question: How can you detect overfitting? — What is Overfitting? - Overfitting in
  Machine Learning Explained - AWS
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 354
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:39:52-05:00'
sources: []
---

**Situation**  
While leading a fraud‑detection model for a fintech client, the training accuracy hit 99% while live production flagged only 70% of real fraudulent transactions—a clear sign of overfitting.

**Task**  
I needed to identify the source of the mismatch and bring the model’s generalization back in line with real‑world performance without sacrificing too much precision.

**Action**  
First, I plotted learning curves for training vs. validation loss across epochs using TensorFlow’s `tf.keras.callbacks`. The gap widened after 12 epochs, confirming overfitting. I then switched to a 5‑fold cross‑validation strategy in scikit‑learn to get more robust validation metrics. To reduce variance, I added L2 regularization (λ=0.01) and early stopping with patience of 3 epochs. I also pruned the feature set by removing highly correlated columns (> 0.95 Pearson), which reduced dimensionality from 120 to 65. Finally, I experimented with a dropout layer (rate 0.5) in a neural network baseline.

**Result**  
The adjusted model achieved an AUC of 0.93 on hold‑out data versus 0.85 pre‑tuning, and live fraud detection increased from 70% to 88% precision while maintaining recall above 80%. I learned that visual diagnostics (learning curves) combined with systematic cross‑validation and regularization are the fastest path to spotting and correcting overfitting in production pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
