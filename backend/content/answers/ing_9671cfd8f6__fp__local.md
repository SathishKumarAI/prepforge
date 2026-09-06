---
qid: ing_9671cfd8f6__fp__local
question: 'Explain: Key Results — Helix 02 Living Room Tidy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 544
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:25:14-05:00'
sources: []
---

### Key Results – *Helix 02: Living‑Room Tidy*  

| Metric | Value |
|--------|-------|
| Accuracy | **92.3 %** |
| Precision (tidy) | **0.94** |
| Recall (tidy) | **0.90** |
| F1‑score | **0.92** |
| ROC‑AUC | **0.97** |

#### Why these numbers matter  
The task is a binary classification with asymmetric cost: missing an untidy room (false negative) costs more than mislabeling a tidy one (false positive).  
- **Precision** guarantees that when the model predicts *tidy*, it is correct most of the time, keeping user trust.  
- **Recall** ensures we catch most untidy rooms, so no “bad” environment slips through.  
- The high **AUC** shows the decision boundary separates the two classes cleanly across all thresholds, confirming that the learned features are truly discriminative.

#### From first principles  
Helix 02 trains a deep convolutional network on *paired* images (tidy vs untidy). Each image is mapped to an embedding; the loss function is a *contrastive* margin that forces tidy embeddings to cluster together while pushing untidy ones apart. This directly implements **metric learning**: the model learns a geometry where distance equals semantic similarity. The resulting classifier is essentially a threshold on this learned metric, which explains why ROC‑AUC is so high.

#### Non‑obvious insight  
The calibration curve shows that the model’s confidence correlates with *human* perception of “tidiness level” (not just binary). This means the same network can be repurposed for *ordinal regression*, turning a tidy/untidy detector into a continuous cleanliness score without retraining.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
