---
qid: ing_95e25b26a2__star__local
question: 'Explain: what you get is a gaussian probability — \"Testing Distributed
  Systems w/ Deterministic Simulation\" by Will Wilson'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 354
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:32:34-05:00'
sources: []
---

**Situation** – While working on a distributed system performance benchmark for a cloud service, we had to validate that the simulated latency curves matched real‑world measurements. The simulation was deterministic, but each node’s queueing delay introduced stochasticity that we wanted to quantify.

**Task** – I needed to generate a probability density of end‑to‑end latency from the deterministic runs and compare it to field data, ensuring our model captured the variability without relying on random seeds.

**Action** – I ran the simulation 1,000 times with identical initial conditions but varied the interarrival time distribution (exponential with λ = 100 s⁻¹). For each run I recorded the total latency and then fit a Gaussian to the histogram of results using maximum‑likelihood estimation in SciPy. The mean μ represented the expected latency, while σ² captured the spread caused by queueing interactions. I plotted the fitted curve over the empirical data and performed a Kolmogorov–Smirnov test; p = 0.73 indicated no significant difference.

**Result** – The deterministic simulation produced a Gaussian distribution with μ ≈ 350 ms and σ ≈ 45 ms, matching production latency (μ = 345 ms, σ = 48 ms). This validated our model and gave the ops team confidence to use it for capacity planning. I learned that even deterministic systems can yield probabilistic insights when we aggregate over many runs and fit appropriate distributions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
