---
qid: ing_b1cb049612__fp__local
question: 'Explain: You''re running an A/B test on a new model. Walk me through designing
  it, and tell me what you''d refuse to do once it''s live.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 695
total_tokens: 885
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:22:09-05:00'
sources: []
---

**Why an A/B test is the minimal “science” for a new AI model**

An AI model is a black‑box function *f(x)* that maps inputs to predictions.  
What we want to know is whether *f* improves an objective *O* (e.g., click‑through rate, revenue, user satisfaction) compared to the baseline *b*. The fundamental problem is causal inference: can we attribute any change in *O* to the new model rather than external noise?

1. **Randomized assignment** – split traffic into two arms, A (baseline) and B (new), with equal probability or a pre‑determined ratio. Randomization guarantees that covariates (time of day, device type, user segment) are balanced, so observed differences in *O* can be causally linked to the model.

2. **Statistical power** – compute the minimum detectable effect (MDE) given expected variance and desired confidence (e.g., 95 % with α=0.05). This tells you how long the test must run and whether the experiment is feasible.

3. **Metric selection** – choose *O* that aligns with business goals, not just surrogate signals. If revenue is the ultimate metric, use per‑user revenue; if model latency matters, include a latency KPI.

4. **Early stopping rules** – pre‑define “stopping for benefit” or “stopping for harm” thresholds based on sequential testing (e.g., Bayesian bandits) to avoid over‑running and wasting traffic.

5. **Safety nets** – set hard limits: if latency exceeds X ms or error rate > Y %, automatically roll back B.

---

### What *not* to do once the test is live

| ❌ Practice | Why it breaks the experiment |
|-------------|------------------------------|
| **Changing traffic split after seeing early results** | Introduces bias; you’re no longer comparing the same populations. |
| **Snooping on un‑planned metrics** | Data dredging inflates Type I error; you’ll see “significant” effects that are artifacts. |
| **Rolling out B to a new demographic without re‑randomizing** | Violates balance; confounds with demographic shifts. |
| **Ignoring drift or concept shift during the test** | The model’s performance may degrade, masking true effects. |
| **Deploying B as “production” before the test concludes** | You lose the ability to attribute outcomes and risk exposing users to a sub‑optimal system. |

---

### Non‑obvious insight

The *variance* of your metric is often dominated by **user heterogeneity**, not model noise. A/B tests that stratify or weight by user segments (e.g., high‑value vs low‑value customers) can dramatically reduce required sample size, turning a multi‑month test into a few weeks while preserving causal validity. This stratified randomization is rarely mentioned but is essential when the baseline model already serves a heterogeneous audience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
