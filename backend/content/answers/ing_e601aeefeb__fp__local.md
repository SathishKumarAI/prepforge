---
qid: ing_e601aeefeb__fp__local
question: 'Explain: And then use that historical data to — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 494
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:07:48-05:00'
sources: []
---

**Why historical traffic data matters for a map‑service**

The core objective of a routing engine is to *minimise expected travel time*.  
Let \(T_e\) be the random travel time on edge \(e\). The routing problem becomes
\[
\min_{\pi}\; \mathbb{E}\!\left[\sum_{e\in\pi} T_e\right]
  = \min_{\pi}\;\sum_{e\in\pi} \mu_e ,
\]
where \(\mu_e=\mathbb{E}[T_e]\) is the *expected* travel time.  
In practice we only observe discrete samples of \(T_e\) at different times
of day, days of week, and weather conditions.  

**From data to expectation**

1. **Collect observations** \(\{t_{e,i}\}_{i=1}^{n_e}\).  
2. **Model the distribution** (often Gaussian or log‑normal) conditioned on
   time slot \(s\): \(T_e|s \sim \mathcal N(\mu_{e,s},\sigma^2_{e,s})\).
3. **Update estimates online** using Bayesian inference; prior knowledge
   (e.g., a baseline speed limit) is refined as new samples arrive.

The *expected* travel time for edge \(e\) at slot \(s\) is simply the posterior mean \(\hat{\mu}_{e,s}\).  
This value feeds directly into Dijkstra or A*, yielding routes that adapt to
real‑world congestion patterns rather than static maps.

**Non‑obvious insight**

Most designers stop at “use average speed.”  
The true power comes from *predictive uncertainty*:
\[
\text{CVaR}_\alpha(T_e|s)=\mu_{e,s}+\Phi^{-1}(1-\alpha)\sigma_{e,s},
\]
which guards against rare but severe delays.  
Incorporating the variance turns a deterministic planner into a risk‑aware
system, essential for services like Google Maps where “best guess” can still
miss traffic jams that are statistically unlikely but highly costly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
