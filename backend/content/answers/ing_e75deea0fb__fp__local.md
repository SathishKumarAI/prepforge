---
qid: ing_e75deea0fb__fp__local
question: 'Explain: Week 2: Core Patterns (18 Problems) — Blind 75'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 688
total_tokens: 864
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:11:18-05:00'
sources: []
---

### Why the “Blind 75” Core Patterns Exist  

When a model receives data it must **discover structure**—a mapping \(f:\mathcal X\to \mathcal Y\)—by optimizing a loss that measures how far its predictions are from the truth.  
The *core patterns* in Week 2 formalise exactly the ways this optimization problem can become ill‑posed or unstable:

| Pattern | Why it breaks learning |
|---------|------------------------|
| **Imbalanced classes** | The empirical risk is dominated by majority labels; gradients point toward trivial solutions (predicting the majority). |
| **Class overlap** | Bayes error becomes non‑zero; no classifier can separate perfectly, so any algorithm must learn a *probabilistic* boundary. |
| **Noise in labels** | The objective contains irreducible variance; overfitting to noise harms generalisation. |
| **High dimensionality / curse of dimensionality** | Distance metrics become meaningless; variance explodes, requiring regularisation or feature reduction. |
| **Non‑stationarity (concept drift)** | The underlying distribution \(P(\mathcal X,\mathcal Y)\) changes over time; a fixed model becomes obsolete. |

### Deeper Principle: *Regularised Empirical Risk Minimisation*  

All these patterns can be seen as violations of the assumptions behind ERM:

\[
\hat f = \arg\min_{f\in\mathcal H}\frac{1}{n}\sum_{i=1}^n L(f(x_i),y_i)+\lambda R(f).
\]

* When classes are imbalanced, the empirical loss is biased; re‑weighting or focal loss acts as a *prior* that restores balance.  
* Overlap introduces unavoidable Bayes error \( \epsilon_{\text{Bayes}} \); regularisation (\(\lambda>0\)) prevents the model from chasing this unattainable zero loss.  
* Label noise effectively adds random perturbations to \(y_i\); smoothing (e.g., label‑denoising or robust losses) reduces variance in gradients.  
* High dimensionality inflates the capacity of \(\mathcal H\); dimensionality reduction is equivalent to a strong regulariser that limits expressiveness.  
* Concept drift demands an *adaptive prior*: online learning or meta‑learning treats new data as evidence that updates the posterior over \(f\).

### Non‑Obvious Insight  

Most practitioners treat each pattern in isolation, tuning hyperparameters separately. The unifying view is that **every problem is a mis‑specification of the loss’s implicit prior**. By re‑examining the loss function itself—how it weights classes, how it penalises uncertainty, how it tolerates noise—we can design *single* adaptive objective (e.g., a Bayesian‑inspired risk with learned class‑weights and noise parameters) that automatically handles all 18 core patterns without hand‑crafted tricks. This shift from post‑hoc fixes to principled loss redesign is what turns the Blind 75 into a truly robust learning pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
