---
qid: ing_a83fd7e47e__fp__local
question: We set temperature to 0. The outputs are deterministic now, right?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 482
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:03:24-05:00'
sources: []
---

When a language model produces logits \(z_i\) for each token, the **soft‑max** turns them into probabilities

\[
p_i = \frac{\exp(z_i/T)}{\sum_j \exp(z_j/T)},
\]

where \(T>0\) is the *temperature*.  
The temperature rescales the logit differences:  

* \(T<1\) sharpens the distribution (high‑logit tokens get a disproportionately larger share).  
* \(T>1\) smooths it, giving weaker tokens more chance.

Setting \(T=0\) is equivalent to letting \(T \to 0^+\). In that limit the exponentials blow up for the maximum logit and collapse to zero for all others:

\[
p_i = 
\begin{cases}
1 & z_i = \max_j z_j,\\
0 & \text{otherwise}.
\end{cases}
\]

Thus the model *always* chooses the token with the highest log‑odds; stochasticity disappears.  

**Why this is optimal for a deterministic policy**

The soft‑max is the maximum‑entropy distribution constrained to match the logits’ mean reward. As \(T\) decreases, entropy diminishes, biasing the policy toward the single best action. At \(T=0\), entropy is zero—no exploration—and the model follows the *argmax* rule that maximizes expected log‑likelihood given the learned weights.

**Non‑obvious insight**

Even though temperature controls sampling randomness, it also governs **gradient flow during training**. When decoding at inference time with \(T=0\), backpropagation through the soft‑max would be undefined because the derivative of a hard argmax is zero almost everywhere. Hence, models are trained with a small but non‑zero temperature (or with *straight‑through* estimators) to preserve gradient signals, even if they will be used deterministically at inference.

So yes—temperature = 0 yields deterministic outputs, derived from the limit of the soft‑max entropy minimization principle, and it also highlights why training cannot literally use a hard argmax.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
