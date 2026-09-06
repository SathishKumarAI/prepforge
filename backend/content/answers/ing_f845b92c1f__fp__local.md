---
qid: ing_f845b92c1f__fp__local
question: 'Explain: something that people aren''t super confident about'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 388
total_tokens: 557
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:47:27-05:00'
sources: []
---

**Why Deep Nets Generalize Despite Over‑Parameterization**

The fundamental problem is *learning a mapping* \(f:\mathcal X\to\mathcal Y\) from limited data while avoiding overfitting. Classical theory says a model with more parameters than training points should memorize the sample and generalize poorly. Yet deep nets routinely achieve low test error.

From a **statistical mechanics** viewpoint, each parameter configuration corresponds to an energy state of a high‑dimensional landscape. Training by stochastic gradient descent (SGD) is a *dynamical* process that explores this landscape but is biased toward wide, flat minima because SGD’s noise injects entropy into the trajectory. Flatness correlates with **generalization**: small perturbations in parameters leave the loss unchanged, implying robustness to unseen data.

A deeper principle emerges from **information theory**: a model’s *effective capacity* is not its parameter count but its ability to compress the training distribution. SGD implicitly regularizes by favoring solutions that encode fewer bits of the empirical risk—this is the *Minimum Description Length* (MDL) principle in action. Thus, even an over‑parameterized network can have low effective capacity if it converges to a simple description of the data.

**Non‑obvious insight:**  
The *noise scale* of SGD matters more than the batch size. Higher noise (smaller batches or larger learning rates) encourages exploration of flatter basins, yielding better generalization. Consequently, deliberately injecting noise can be a practical strategy for training robust deep models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
