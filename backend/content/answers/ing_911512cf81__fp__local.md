---
qid: ing_911512cf81__fp__local
question: 'Explain: Characteristic #5: It’s a single source of truth'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 377
total_tokens: 551
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:13:45-05:00'
sources: []
---

### Why a *single source of truth* is essential for Machine‑Learning systems

When an algorithm learns, it implicitly **optimises** over the statistical relationship between inputs and outputs that exist in the training data.  
If that data come from multiple, independently curated sources, each may encode slightly different distributions—different labeling conventions, missing values, or systematic biases. The learner will then minimise a *composite* loss that mixes these inconsistencies, leading to **model drift**: predictions become unreliable once any source changes.

The single‑source principle forces the model to optimise over one coherent joint distribution \(p(x,y)\).  
Mathematically, this means we solve

\[
\min_{\theta} \; \mathbb{E}_{(x,y)\sim p_\text{truth}}\!\big[\,L(f_\theta(x),y)\,\big]
\]

where \(p_\text{truth}\) is a *unique* empirical distribution derived from the master dataset.  
Because all downstream pipelines (feature engineering, evaluation, deployment) consume this same dataset, every component shares the same statistical assumptions—**information consistency**.

#### Non‑obvious insight
Even when you use sophisticated ensembling or federated learning, the *effective* training distribution is still a weighted mixture of sources. Unless you explicitly align those weights (e.g., via domain adaptation), the ensemble will inherit the same drift problem. Thus, enforcing a single source isn’t just about data hygiene; it’s a prerequisite for any principled guarantee that your model’s loss truly reflects the real‑world distribution you care about.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
