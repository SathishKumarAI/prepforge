---
qid: ing_567780f7d5__fp__local
question: 'Explain: Availability patterns — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 392
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:08:48-05:00'
sources: []
---

**Availability Patterns – a principled view**

At its core, *availability* is the probability that a system can serve a request when needed. In distributed design we model this as a stochastic process on components: each component fails independently with probability *p* and recovers with rate λ. The *steady‑state availability* of a single component is  
\[
A = \frac{λ}{λ + μ},
\]
where μ=1/τ (τ is mean time to failure).  

For larger systems we compose these probabilities according to the **fault‑tolerance pattern** in use:

| Pattern | Reliability function |
|---------|---------------------|
| *Single point of failure* | \(A_{\text{sys}} = A\) |
| *Active‑passive redundancy* | \(A_{\text{sys}} = 1-(1-A)^2\) |
| *Active‑active (N‑way)* | \(A_{\text{sys}} = 1-(1-A)^N\) |

These formulas arise from the *inclusion–exclusion principle*: we count all combinations where at least one component is alive. The deeper insight is that *availability is a convex function of component reliability*. Therefore, adding redundancy improves availability **sub‑linearly**: each extra replica yields diminishing returns unless failures are highly correlated.

**Non‑obvious point:**  
Most designers equate “more replicas” with “better availability,” but the marginal benefit collapses once \(A\) approaches 1. In practice, investing in *self‑healing* (automatic failover and rapid recovery) often yields higher system‑level availability than simply adding more nodes. This trade‑off is a direct consequence of the convexity property above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
