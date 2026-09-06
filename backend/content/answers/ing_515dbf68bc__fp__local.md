---
qid: ing_515dbf68bc__fp__local
question: How does dropout work - and what changes between training and inference?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 573
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:58:15-05:00'
sources: []
---

**Dropout from first principles**

At its core, a neural net learns a mapping \(f_{\theta}\) that generalises well.  
During training we minimise an empirical risk
\[
L(\theta)=\frac{1}{N}\sum_{i} \ell(y_i,f_{\theta}(x_i)).
\]
If the network is too expressive it can memorise idiosyncrasies of the training set, a form of *over‑parameterisation*.  
Dropout injects stochasticity into the forward pass: each hidden unit \(h_j\) is independently multiplied by a Bernoulli mask
\(m_j\sim \text{Bernoulli}(p)\), yielding \( \tilde h_j = m_j\,h_j\).
The loss becomes an expectation over masks:
\[
L(\theta)=\mathbb{E}_{m}\!\left[\frac{1}{N}\sum_i \ell(y_i,f_{\theta}^{(m)}(x_i))\right].
\]
Thus the optimiser is driven to find parameters that perform well *on average* across many thinned networks.  
This is equivalent to training an ensemble of \(2^H\) sub‑networks (with \(H\) hidden units), but with a shared set of weights. The ensemble effect reduces variance and encourages each unit to learn features useful in many contexts—precisely the bias–variance trade‑off that underpins generalisation.

**What changes at inference**

During test time we no longer sample masks; we use the full network.  
To keep the expected activation unchanged (since \(\mathbb{E}[m_j]=p\)), we scale each weight or activations by \(p\).  
Formally, if a layer’s pre‑activation is
\(a = W\,x + b\),
dropout training uses \(a^{(m)}=W(m\odot x)+b\).
At inference we compute
\(a_{\text{test}}=p\,W\,x+b\),
which equals \(\mathbb{E}_m[a^{(m)}]\).  
This deterministic “inference scaling” is equivalent to averaging the predictions of all thinned networks—a consequence of linearity in expectation.

**Non‑obvious insight**

Dropout can be viewed as a *data‑dependent regulariser* that adapts to the current activations: units with large activations are more likely to be dropped, forcing the network to redistribute importance. This implicit “feature reweighting” explains why dropout works even in convolutional nets where spatial correlations are strong; it compels feature maps to be robust across random occlusions, akin to data augmentation but applied internally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
