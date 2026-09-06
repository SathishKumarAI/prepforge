---
qid: ing_d1d716e8cd__fp__local
question: 'Explain: How do you train a reward model? Explain the preference data and
  the Bradley - Terry loss.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 559
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:26:39-05:00'
sources: []
---

**Training a reward model from human preferences**

1. **The core problem** – We want a scalar function \(R_\theta(x)\) that ranks generated text so that higher scores correspond to better outputs. Directly collecting absolute ratings is noisy and expensive; instead we ask humans to *compare* two samples: given a prompt, which of the two completions do you prefer?  

2. **Preference data** – Each comparison yields an ordered pair \((x_i,x_j)\) with label \(y_{ij}=1\) if the human chose \(x_i\), and \(0\) otherwise. The dataset is thus a set of *relative judgments*, not absolute scores.

3. **Bradley–Terry model** – For any two samples, Bradley–Terry posits that the probability the human prefers \(x_i\) over \(x_j\) equals  
   \[
   P(y_{ij}=1)=\frac{\exp(R_\theta(x_i))}{\exp(R_\theta(x_i))+\exp(R_\theta(x_j))}.
   \]
   This is exactly a *softmax* over the reward scores.  

4. **Loss function** – The likelihood of all comparisons gives the cross‑entropy loss  
   \[
   L(\theta)=-\sum_{(i,j)}\bigl[y_{ij}\log p_{ij}+(1-y_{ij})\log(1-p_{ij})\bigr],
   \]
   where \(p_{ij}\) is the Bradley–Terry probability. Minimizing this loss forces the reward model to assign higher values to human‑preferred outputs, respecting the *pairwise* structure of the data.

5. **Why it works** – The softmax ensures that any change in \(R_\theta\) preserves relative orderings (monotonicity), a necessary property for a ranking function. Moreover, the loss is convex in \(\exp(R)\) but not in \(\theta\); still, gradient‑based training converges because each comparison provides a direct signal about how to shift scores.

**Non‑obvious insight:**  
The Bradley–Terry loss implicitly *normalizes* across the entire dataset: each pairwise comparison compares only two samples, yet the softmax denominator couples all pairs through shared exponentials. This coupling causes gradients for a given sample to be influenced by *all* other samples it has been compared with, effectively smoothing the reward landscape and reducing overfitting to idiosyncratic human judgments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
