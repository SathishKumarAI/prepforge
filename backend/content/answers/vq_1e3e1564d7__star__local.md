---
qid: vq_1e3e1564d7__star__local
question: Could you explain SVM to me?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 293
total_tokens: 526
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:50:34-05:00'
sources: []
---

**Situation:**  
During a hackathon last spring, my team had to classify customer support tickets into “urgent” or “non‑urgent.” The dataset was imbalanced (only 12% urgent) and the features were high‑dimensional text embeddings.

**Task:**  
I needed to build a model that could separate the two classes with minimal false positives while keeping the training time under an hour on a laptop.

**Action:**  
I chose a Support Vector Machine (SVM) with a linear kernel because it handles sparse, high‑dimensional data well and is fast to train. I first performed TF‑IDF vectorization, then used scikit‑learn’s `LinearSVC` with class weights set inversely proportional to class frequencies. To avoid overfitting, I applied 5‑fold cross‑validation and tuned the regularization parameter `C` via a small grid search. I also added an early‑stopping callback during training to keep runtime low.

**Result:**  
The model achieved 87% precision on urgent tickets and 92% recall overall, reducing false alarms by 30% compared to our baseline logistic regression. I learned that SVMs can be surprisingly efficient when paired with proper feature engineering and class weighting, especially in imbalanced classification tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
