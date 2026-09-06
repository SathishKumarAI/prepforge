---
qid: ing_8629d0d2d2__fp__local
question: 'Explain: Rishi Bommasani — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 390
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:50:06-05:00'
sources: []
---

**Rishi Bommasani (CS 324 – “Foundations of Machine Learning”)**

In the CS 324 course, Professor Bommasani treats machine learning as an *information‑theoretic* search for structure in data: given a finite sample set \(\mathcal{X}\) and a target function \(f\), we wish to infer the underlying probability distribution \(P(x)\) that maximizes predictive utility while respecting constraints (computational budget, data scarcity).  

1. **Problem formulation** – The learner chooses a hypothesis class \(\mathcal{H}\) and a learning algorithm \(\mathcal{A}\).  
2. **Why it must work this way** – By the *bias‑variance tradeoff*, \(\mathcal{H}\)’s capacity controls variance; regularization (e.g., sparsity, weight decay) injects bias to curb overfitting.  
3. **Deeper principle** – The *PAC* framework shows that a learner’s error probability decays exponentially with sample size \(m\), provided \(\mathcal{H}\)’s VC‑dimension is finite. This links geometry (shattering) to information gain.  
4. **Non‑obvious insight** – Many practitioners treat hyperparameters as knobs; Bommasani emphasizes that *hyperparameter search itself* can be cast as a Bayesian optimization problem over a *meta‑distribution*. This reveals that tuning is an *online learning* task, and explains why “grid search” often performs poorly on high‑dimensional hyperspaces.

Thus, CS 324 frames ML not merely as fitting curves but as solving a constrained inference problem governed by statistical guarantees, geometry of hypothesis spaces, and adaptive exploration of hyperparameters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
