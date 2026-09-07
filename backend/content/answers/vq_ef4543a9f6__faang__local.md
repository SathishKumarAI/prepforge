---
qid: vq_ef4543a9f6__faang__local
question: what is Cost Function?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 550
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:41:40-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a *cost function* in the context of machine learning. I’ll assume they mean a scalar loss that measures how far a model’s predictions are from ground truth, used to guide training via gradient descent.

---

### 1️⃣ Approach
- Define what a cost (loss) function is: an objective mapping parameters → real number.
- Explain its role in optimization and the typical properties it should have (continuity, differentiability).
- Give common examples (MSE, cross‑entropy, hinge loss) and when each is appropriate.

### 2️⃣ Depth
A cost function \(J(\theta)\) aggregates per‑sample errors:
\[
J(\theta)=\frac{1}{m}\sum_{i=1}^{m} \ell(f_\theta(x_i), y_i)
\]
where \(\ell\) is a pointwise loss.  
* **Mean Squared Error (MSE)**: \(\ell_{\text{MSE}} = (f_\theta(x)-y)^2\). Smooth, convex for linear models; penalizes large errors heavily.  
* **Cross‑Entropy**: \(-[y\log p + (1-y)\log(1-p)]\) for binary classification; derived from log‑likelihood of Bernoulli/Binomial outcomes; provides strong gradients even when predictions are confident but wrong.  
* **Hinge Loss**: \(\max(0, 1 - y f_\theta(x))\) used in SVMs; encourages a margin.

Key properties:
- **Differentiability** → enables back‑propagation.
- **Convexity** (when applicable) guarantees global optimum.
- **Scale invariance** (e.g., cross‑entropy works with logits).

### 3️⃣ Edge Cases
- *Vanishing gradients* in deep nets if the loss saturates (sigmoid + MSE).  
- *Imbalanced data*: MSE treats all errors equally; may need weighted or focal loss.  
- *Outliers*: MSE is sensitive; use Huber or MAE.

### 4️⃣ Optimize & Communicate
I’d highlight that choosing a cost function is problem‑driven: regression → MSE/MAE, classification → cross‑entropy, structured prediction → custom losses. I would also note that regularization terms (L1/L2) are often added to the cost to prevent overfitting. Finally, I’d explain how monitoring the loss curve informs learning rate tuning and early stopping.

*Word count: ~210.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
