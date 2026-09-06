---
qid: ing_bc18a87ea9__fp__local
question: 'Explain: Testing in production — From Zero to 50 Million Uploads per Day:
  Scaling Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 349
total_tokens: 534
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:43:47-05:00'
sources: []
---

**Why “testing in production” is a necessity, not a luxury**

At its core, the problem Canva faced was *prediction reliability under extreme load*.  
Every day the system had to decide which media upload would be cached, transcoded or rejected—an optimisation of latency, cost and user satisfaction. In a conventional pipeline you would build a staging environment that mimics production, run unit tests, integration tests, then deploy. The assumption is that the staging copy is statistically identical to live traffic.

In practice, the distribution of uploads in production drifts: new file formats appear, user behaviour changes, network conditions fluctuate. Any test that relies on a static dataset will mis‑estimate error rates. From a statistical perspective, we need *online estimation* of model performance with minimal bias and variance. That is an online learning problem: update the estimate as each request arrives, without storing all past data.

The solution Canva implemented was a **real‑time monitoring layer** that treated every upload as a test case, logged its outcome (success/failure, latency), and fed these metrics into a Bayesian estimator of the model’s true error rate. The estimator updated in *O(1)* per request, so even at 50 M uploads/day it stayed lightweight.

The non‑obvious insight: **testing is itself an optimization problem**. By turning every production hit into data, you convert “error” into a utility function and optimise the system continuously. This eliminates the need for costly offline test suites that become stale, ensuring that scalability (50 M uploads/day) does not come at the cost of degraded service quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
