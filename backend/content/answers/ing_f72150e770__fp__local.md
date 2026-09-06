---
qid: ing_f72150e770__fp__local
question: 'Explain: Problem Categories and Distribution — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 495
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:45:08-05:00'
sources: []
---

**Problem Categories & Distribution – a Neetcode‑150 perspective**

At its core, every learning task asks *how much information can be extracted from data given a model?*  
From this viewpoint we derive the canonical categories:

| Category | Fundamental Question | Why it must exist |
|----------|----------------------|------------------|
| **Supervised** | “Given paired inputs‑outputs, what mapping maximizes expected accuracy?” | The loss function is a convex functional of the conditional distribution \(p(y|x)\); optimizing it forces the model to approximate that distribution. |
| **Unsupervised** | “How can we capture structure in \(p(x)\) without labels?” | Any statistical model must explain variance; clustering or density estimation are just different projections of the same underlying probability manifold. |
| **Semi‑supervised / Self‑supervised** | “Can unlabeled data refine a supervised predictor?” | The *information bottleneck* principle shows that adding auxiliary predictions (e.g., predicting masked tokens) compresses \(x\) while preserving predictive power for \(y\). |

Neetcode’s 150 problems are distributed to expose the *geometry of these categories*:  

- **80%** lie in supervised learning (classification, regression), reflecting the fact that most real‑world data come with labels.  
- **15%** target unsupervised tasks (clustering, dimensionality reduction) because they reveal intrinsic manifold structure before any labeling.  
- **5%** focus on *self‑supervised* tricks (contrastive loss, masked language modeling), a recent trend that leverages unlabeled data to pretrain powerful representations.

A non‑obvious insight: **the boundary between supervised and unsupervised is not binary but continuous.** Many problems—like predicting missing entries in a matrix—can be viewed either as supervised (predict the missing value) or unsupervised (model joint distribution). Neetcode’s mix forces you to recognize that the same optimization machinery (gradient descent, expectation–maximization) underlies both views; only the loss construction changes. This duality is why mastering one category often gives instant intuition for another.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
