---
qid: ing_058c424071__fp__local
question: How can you detect overfitting? — What is Overfitting? - Overfitting in
  Machine Learning Explained - AWS
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 519
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:17:12-05:00'
sources: []
---

**Why overfitting matters**

A learning algorithm is a *function approximator*.  
Its goal is to minimise expected loss  

\[
L(\theta)=\mathbb{E}_{(x,y)\sim P_{\text{true}}}\!\bigl[\ell(f_\theta(x),y)\bigr].
\]

We only have a finite sample \(S=\{(x_i,y_i)\}_{i=1}^n\).  
When we fit \(\theta\) to minimise empirical loss  

\[
L_S(\theta)=\frac1n\sum_{i}\ell(f_\theta(x_i),y_i),
\]

the gap \(L(\theta)-L_S(\theta)\) is the **generalisation error**.  
Overfitting occurs when this gap becomes large: the model memorises idiosyncrasies of \(S\) that are not present in the true distribution.

---

### Detecting overfitting

1. **Training vs validation curves** – plot loss/accuracy on both sets as training proceeds.  
   *If* training continues to drop while validation plateaus or rises, the model is fitting noise.

2. **Cross‑validation** – estimate variance of performance across folds.  
   A large spread indicates sensitivity to particular samples → overfitting.

3. **Learning curves** – train with increasing \(n\).  
   If validation error stops improving when training error keeps decreasing, extra data would not help; the model is too complex for the signal level.

4. **Regularisation path** – vary a penalty (e.g., \(\lambda\) in Lasso/Ridge) and observe validation performance.  
   The optimum occurs where bias–variance trade‑off is minimised.

---

### Non‑obvious insight

*The curvature of the loss surface matters.*  
A sharp minimum on training data corresponds to a high Hessian eigenvalue spectrum, which amplifies sensitivity to perturbations in unseen inputs. Detecting such sharpness (e.g., via second‑order diagnostics) can preempt overfitting even before validation curves diverge.  

In short, overfitting is the empirical loss falling while expected loss rises; monitoring training/validation dynamics, cross‑validation variance, learning curves, and loss curvature gives a principled, quantitative detection framework.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
