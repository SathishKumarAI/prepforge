---
qid: ing_f66a1cc67e__fp__local
question: 'Explain: Train/dev/test split for the judge — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 378
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:43:38-05:00'
sources: []
---

### Why a *train / dev / test* split is mandatory for the judge

In any supervised learning system the **objective** is to minimise expected loss on *unseen* data.  
The training set supplies the samples from which we learn parameters; the development (dev) set estimates how well those parameters generalise; and the test set gives an unbiased final verdict.  

1. **Statistical independence** – If dev or test examples were drawn from the same distribution as training, the judge would be evaluating a model that has already “seen” the evidence.  
2. **Hyper‑parameter optimisation** – The dev split is where we tune regularisation, architecture depth, learning rate, etc.  Optimising on the same data that will later be used for final evaluation leads to *overfitting* in the form of a “tuned‑on‑test” bias.  
3. **Pipeline integrity (CI/CD)** – In an automated evaluation pipeline each commit triggers a fresh training run; the dev split is used for quick feedback, while the test split is only evaluated on merge or release. This guarantees that every new model truly generalises.

**Non‑obvious insight:** The *ratio* of splits matters as much as their existence. A too‑small dev set gives noisy hyper‑parameter estimates, causing the judge to reject good models; a too‑large dev set leaves little data for training, hurting performance. In practice, a 60/20/20 or 70/15/15 split balances bias–variance trade‑off and keeps CI/CD fast enough for continuous deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
