---
qid: ing_89a142f4cc__fp__local
question: 'Explain: Model Taxonomy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 521
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:57:44-05:00'
sources: []
---

### Why a Model Taxonomy Exists

In AI we seek *functions* \(f:\mathcal{X}\rightarrow\mathcal{Y}\) that map data \(\mathcal{X}\) (images, text, states) to predictions or actions \(\mathcal{Y}\).  
The learning signal available to shape \(f\) dictates how the model can be trained.  From this single observation we derive a minimal set of categories:

| Learning Signal | Core Objective | Typical Use |
|-----------------|----------------|-------------|
| **Supervised** | Minimize loss \(\mathcal{L}(y,f(x))\) on labeled pairs \((x,y)\). | Classification, regression. |
| **Unsupervised** | Maximize data likelihood or compressibility (e.g., autoencoders). | Clustering, density estimation. |
| **Reinforcement** | Optimize expected return \(E_\pi[\sum r_t]\) over trajectories. | Robotics, games. |
| **Self‑Supervised / Contrastive** | Create auxiliary labels from the data itself; minimize contrastive loss. | Representation learning on large unlabeled corpora. |

These four *axes* emerge because they are the only ways to formulate a well‑posed optimization problem given the available feedback.

### Deep Principle

All AI models ultimately solve an **information‑theoretic** trade‑off: maximize predictive power while respecting constraints (data, computation).  
- Supervised learning maximizes mutual information \(I(Y;f(X))\) under labeled data.  
- Unsupervised learning maximizes entropy of representations or likelihoods.  
- Reinforcement balances reward and exploration, akin to maximizing expected utility.

### Non‑Obvious Insight

Most practitioners treat these categories as disjoint “boxes.” In reality, the *boundary is porous*: a transformer can simultaneously be supervised (language modeling), self‑supervised (masked token prediction), and even reinforcement‑learned (RLHF).  Recognizing taxonomy as a **continuum of learning signals** rather than fixed labels unlocks hybrid architectures that inherit strengths from multiple paradigms—an insight often overlooked in introductory texts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
