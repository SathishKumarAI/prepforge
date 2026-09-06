---
qid: ing_781a5b799a__fp__local
question: 'Explain: Diagnostic Questions Interviewers Actually Ask'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 416
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:20:12-05:00'
sources: []
---

**Why interviewers pose “diagnostic” questions**

When a candidate presents a model, the interviewer is not merely checking for the correct algorithm; they are probing *why* the model behaves as it does.  
From an optimization viewpoint, every supervised learner seeks to minimize a loss function \(L(\theta)\) over parameters \(\theta\). The training dynamics (learning rate, batch size) and the test performance depend on the curvature of \(L\), which is reflected in the Hessian and variance of stochastic gradients. A diagnostic question—“Why did your accuracy drop after adding more layers?”—forces the candidate to reason about how added capacity changes the loss landscape: larger models increase expressive power but also enlarge the hypothesis space, raising variance unless regularization or data augmentation is applied.

**Core principle**

The bias‑variance trade‑off is the mathematical backbone. A diagnostic question implicitly asks the interviewee to map observed metrics (training loss, validation gap, over‑fitting patterns) back to that trade‑off and justify design choices. It tests their understanding of *generalization* as a geometric property: how a model’s decision boundary must lie in a region where training data are dense yet still distant from unseen samples.

**Non‑obvious insight**

Many candidates conflate “more data” with “better performance.” A true diagnostic answer recognizes that adding unlabeled data without careful semi‑supervised or self‑training can actually *degrade* performance by shifting the empirical distribution and confusing the model’s learned manifold. Thus, a good diagnostic response will discuss how to maintain the balance between sample complexity (the number of examples needed for a given error) and representation capacity—an insight often overlooked but crucial for robust ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
