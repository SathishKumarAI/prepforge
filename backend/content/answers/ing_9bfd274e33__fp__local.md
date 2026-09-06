---
qid: ing_9bfd274e33__fp__local
question: 'Explain: Back of the Envelope Calculations — Airbnb System Design - by
  Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 450
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:36:59-05:00'
sources: []
---

**Back‑of‑the‑Envelope Calculations for an Airbnb‑style System**

The fundamental problem is to guarantee that a distributed booking platform can serve *N* users per second while keeping latency below *L* ms and avoiding overbooking of listings. We model the system as a set of *k* microservices (search, availability, payment) each with a service rate μ and an arrival rate λₙ≈N·pₙ, where pₙ is the probability that a request hits that service. Queueing theory tells us that stability requires λₙ < μ for every service; otherwise queues grow unboundedly.

A quick calculation: suppose 10 M daily active users (DAU) generate ≈1 M searches/day → ~12 s⁻¹ average. If 70 % hit search, λ_search≈8.4 s⁻¹. If we provision a single search node with μ=20 s⁻¹, the utilization is 42 %. To keep latency <200 ms (≈1/5 of a request cycle), we target 80 % utilization; thus we need ≈25 search nodes. Repeating for availability and payment gives an estimate of total compute cost.

**Why it works:** This uses *Little’s Law* (L = λW) to relate arrival rate, queue length, and response time. By bounding λ/μ we ensure the system remains in a stable regime where probability of delay decays exponentially.

**Non‑obvious insight:** The *probability of overbooking* is not just about capacity; it’s dominated by **variance** in booking patterns. A back‑of‑the‑envelope that only considers mean arrivals underestimates risk. One must include a safety margin proportional to √λ (Poisson variance) or, for bursty traffic, use a *confidence interval* on λ. This subtlety often gets overlooked but is critical when scaling to millions of concurrent users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
