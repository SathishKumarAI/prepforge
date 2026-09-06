---
qid: ing_b5d913c36e__fp__local
question: 'Explain: Week 2: Modeling Challenges and Strategies'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 507
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:30:50-05:00'
sources: []
---

### Week 2 – **Modeling Challenges & Strategies**

In supervised learning we wish to approximate an unknown conditional distribution  
\(p(y\mid x)\) with a parametric family \(q_\theta(y\mid x)\). The *fundamental problem* is that the data set \(\{(x_i,y_i)\}_{i=1}^n\) is only a finite, noisy sample of this distribution. Consequently:

| Challenge | Why it arises from first principles | Core strategy |
|-----------|--------------------------------------|---------------|
| **Over‑/under‑fitting** | The empirical risk minimiser \(\hat{\theta}\) converges to the true minimiser only if the model class can capture \(p(y\mid x)\) but not be too expressive relative to sample size. | Regularisation (weight decay, dropout), cross‑validation, Bayesian priors. |
| **Bias–variance trade‑off** | Expected test error decomposes into irreducible noise + squared bias + variance. Minimising one inflates the other. | Ensemble learning, model averaging, pruning. |
| **Distribution shift** | Training and test data may come from different \(p_{\text{train}}(x,y)\neq p_{\text{test}}(x,y)\). The empirical loss no longer estimates true risk. | Domain adaptation, importance weighting, robust optimisation. |
| **Non‑identifiability & multimodality** | Many parameter vectors yield the same likelihood; local minima trap gradient methods. | Advanced optimisers (Adam, stochastic second‑order), careful initialization, curriculum learning. |
| **Scalability vs expressivity** | High‑capacity models (deep nets) require massive data and computation; low‑capacity models are tractable but may underfit. | Hierarchical architectures, transfer learning, distributed training. |

A *non‑obvious insight*: the variance term in the bias–variance decomposition is not merely a consequence of randomness—it can be viewed as an **information bottleneck**: constraining the representation \(z=f_\phi(x)\) forces the model to discard irrelevant features, thereby reducing overfitting. This perspective unifies regularisation with information theory and explains why techniques like dropout or batch‑norm, which inject noise during training, often improve generalisation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
