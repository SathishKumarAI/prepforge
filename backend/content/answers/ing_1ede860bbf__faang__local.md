---
qid: ing_1ede860bbf__faang__local
question: About 10% of your training labels are wrong. What happens, and what do you
  do about it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 584
total_tokens: 828
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:56:42-05:00'
sources: []
---

**Clarify**  
The question asks how noisy (≈10 %) training labels affect a supervised AI model and what mitigation steps we’d take. I’ll assume the task is classification/regression with a deep neural net trained via stochastic gradient descent on a labeled dataset.

---

### 1️⃣ Approach
1. **Diagnose impact** – measure validation loss, accuracy, and monitor confusion matrix.  
2. **Quantify noise** – estimate label error rate (e.g., via cross‑validation or a small clean subset).  
3. **Mitigate** – apply robust training techniques: weighted loss, label smoothing, curriculum learning, or semi‑supervised methods.

---

### 2️⃣ Depth
- **Effect of 10 % noise**:  
  - *Overfitting*: model memorizes wrong labels → poor generalization.  
  - *Bias shift*: gradients from mislabeled samples pull parameters toward incorrect decision boundaries.  
  - *Increased variance*: noisy targets increase loss variance, slowing convergence.

- **Solutions**:
  1. **Label smoothing** (ε‑smooth): replace hard target `y` with `(1−ε)·y + ε/K`. Reduces confidence on wrong labels and regularizes logits.  
  2. **Robust loss functions**: e.g., mean absolute error or generalized cross‑entropy that down‑weights large residuals.  
  3. **Curriculum learning / Noise‑aware weighting**: start training with easy (high‑confidence) samples, gradually introduce harder ones; weight each sample inversely to its predicted probability of being mislabeled.  
  4. **Semi‑supervised refinement**: use pseudo‑labels from a pre‑trained model on unlabeled data to “clean” the noisy set.

- **Complexity**: These methods add negligible overhead (label smoothing is O(1) per sample; weighting requires an extra forward pass for confidence). Training time may increase slightly if we iterate label cleaning cycles.

---

### 3️⃣ Edge Cases
- Extremely class‑imbalanced data → weight adjustments could over‑compensate.  
- Label noise correlated with features (e.g., certain subgroups mislabeled) – mitigated by stratified sampling or group‑aware weighting.  
- Over‑smoothing may underfit if ε too large; tune via a validation set.

---

### 4️⃣ Optimize & Communicate
Explain that we’ll start with label smoothing as it’s simple and effective, then monitor validation metrics. If performance stalls, introduce weighted loss or a small clean verification loop. Summarize: noisy labels degrade generalization by biasing gradients; robust losses + curriculum learning are proven fixes that keep training efficient while improving resilience to 10 % noise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
