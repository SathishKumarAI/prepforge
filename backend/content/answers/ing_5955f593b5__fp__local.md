---
qid: ing_5955f593b5__fp__local
question: 'Explain: based load balancing and in the layer — UBER System design | OLA
  system design | uber architecture | amazon interview question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 398
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:14:24-05:00'
sources: []
---

**Load‑balancing at scale – why it must be *stateful and event‑driven***  

At its core a load balancer is an optimizer: it distributes incoming requests so that each server’s *expected* response time stays below a target while keeping resource utilization high. In systems like Uber or OLA, the “resource” isn’t just CPU; it’s *geographical proximity*, *fleet density*, and *real‑time traffic conditions*. Therefore the cost function includes both latency and *matching quality* (e.g., how quickly a driver can reach a rider).

Because the optimal mapping changes every few seconds, a purely static round‑robin or least‑conn scheme fails. Instead, we treat each request as an **event** in a dynamic graph where nodes are drivers and edges carry current distance and predicted arrival time. A *probabilistic routing* algorithm (e.g., weighted sampling from a min‑heap of expected fares) continuously updates edge weights using live telemetry. The load balancer thus becomes an online convex optimization problem, solved by stochastic gradient descent over the *expected cost* function.

**Non‑obvious insight:**  
Most designers assume that “more servers = better balance”. In Uber’s architecture, adding more nodes without updating the stateful routing policy can actually *increase* variance in wait times because drivers are no longer matched to their optimal geographic clusters. The key is to keep the *state* (driver locations and status) consistent across all balancers; otherwise you trade determinism for raw capacity. This subtle coupling between state consistency and load‑balancing quality is why Uber’s routing layer uses a distributed, replicated KV store (e.g., DynamoDB) with eventual consistency tuned to sub‑second latency, rather than a naïve round‑robin across stateless instances.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
