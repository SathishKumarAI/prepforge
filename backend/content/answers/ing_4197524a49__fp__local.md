---
qid: ing_4197524a49__fp__local
question: 'Explain: Retries — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 323
total_tokens: 496
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:24:03-05:00'
sources: []
---

In a distributed ML pipeline the *problem* is that a service (say a feature‑store or a model inference endpoint) may fail transiently—network hiccups, back‑pressure, temporary overloads—yet the overall workflow must finish with high reliability.  
To solve this we expose each operation as an **API**: a contract that says “give me X, I’ll return Y or an error code.” The API is not just a function call; it is a *semantic boundary* that turns local computations into observable messages.  

Why must the boundary exist? Because ML training jobs are long‑running and stateful; without a clear interface we cannot reason about retries, idempotency, or rollback. By formalising inputs and outputs as immutable data structures (often JSON/Protobuf), we gain *information isolation*: each call is self‑contained, allowing parallelism and graceful degradation.

A deeper principle is that an API turns a stochastic process into a deterministic control flow: the caller can model success probability, decide back‑off schedules, and bound resource consumption. The non‑obvious insight here is that **retry logic is itself an optimization problem**—the optimal policy balances latency against cost by treating each retry as a Bernoulli trial with known success probability, derived from historical metrics. Thus the API isn’t just a gateway; it’s the unit of analysis for the entire retry strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
