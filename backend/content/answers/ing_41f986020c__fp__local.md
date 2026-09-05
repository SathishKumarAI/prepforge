---
qid: ing_41f986020c__fp__local
question: 'Explain: The four roles I use: — AI Coding Workflow - by Neo Kim and Louis-Fran\u00e7ois
  Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 410
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:25:02-05:00'
sources: []
---

### The Four Roles of an AI‑Coding Workflow  
*(Neo Kim & Louis‑François Bouchard)*  

1. **Problem‑Definer** – frames the task as a formal objective (e.g., minimize loss \(L(\theta)\) over data \(\mathcal{D}\)).  
2. **Data Curator** – gathers, cleans, and augments \(\mathcal{D}\), turning raw observations into a *representation space* where geometry matters: distances between samples reflect semantic similarity.  
3. **Model Architect** – chooses the function class \(f_{\theta}\) (e.g., neural nets, ensembles) that can approximate the target mapping while respecting inductive biases (parameter sharing, locality).  
4. **Evaluator & Refiner** – measures generalization via cross‑validation, updates \(\theta\) by gradient descent or Bayesian inference, and iterates until convergence.

#### Why this order?

- **Optimization Theory**: The loss surface is defined only after the problem is set; without data the gradient has no meaning.  
- **Information Geometry**: Curating data shapes the manifold on which learning occurs; poor curation leads to ill‑conditioned Fisher information and vanishing gradients.  
- **Statistical Efficiency**: Early architectural choices constrain variance; a well‑chosen model reduces sample complexity, aligning with PAC‑Bayes bounds.

#### Non‑obvious Insight  

The *Data Curator* often dominates runtime cost yet is rarely quantified. Treating data preparation as an *active learning* problem—selecting the most informative samples to label—transforms it from a passive bottleneck into a principled, low‑variance estimator of \(L(\theta)\). This reframing turns what feels like manual toil into a mathematically grounded step that directly shrinks generalization error.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
