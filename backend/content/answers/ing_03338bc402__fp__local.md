---
qid: ing_03338bc402__fp__local
question: 'Explain: Ryan Drapeau — How we built it: Stripe Radar | Stripe Dot Dev
  Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 423
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:11:48-05:00'
sources: []
---

**From the problem of fraud to a scalable ML system**

Stripe’s core business is payments, but each transaction carries an *unknown* risk that it might be fraudulent or charge‑backed.  
The fundamental optimisation problem is: **minimise total loss = (false positives) × cost + (false negatives) × loss** while keeping the system fast enough for millions of requests per second.

1. **Feature design as geometry** – Every transaction is a point in a high‑dimensional space defined by card, device, velocity, geolocation, etc.  
2. **Probabilistic scoring** – A supervised model learns \(P(\text{fraud}|\mathbf{x})\) via gradient‑boosted trees (XGBoost). The output is calibrated to represent true risk; this aligns with Bayesian decision theory where the expected loss is minimized by thresholding on posterior odds.
3. **Online learning as continual optimisation** – New fraud patterns arrive every day. Stripe trains a nightly batch model and then applies *online* gradient updates (via stochastic gradient descent) to a lightweight “rule‑based” layer that can react in milliseconds, keeping the system near–real‑time optimality.
4. **Deployment as a pipeline of ensembles** – The final score is an ensemble of static models, online updates, and a hand‑crafted rule engine, all combined with weighted voting. This mirrors the bias‑variance trade‑off: static models reduce variance; online rules reduce bias on new patterns.

### Non‑obvious insight  
Most people treat fraud detection as a black‑box ML problem. The real breakthrough is treating the *model itself* as an *optimisation problem*: by continuously re‑scoring transactions with lightweight updates, Stripe turns a static classifier into a dynamic policy that adapts to concept drift without retraining from scratch. This keeps the system both accurate and performant at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
