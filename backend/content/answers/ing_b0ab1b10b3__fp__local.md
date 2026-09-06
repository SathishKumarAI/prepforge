---
qid: ing_b0ab1b10b3__fp__local
question: 'Explain: Sales Support — What is TPS, what is QPS, and what is the difference?
  _ Internet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 394
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:19:54-05:00'
sources: []
---

### From first principles

A **sales‑support system** is a queueing network that must keep customer requests flowing while guaranteeing a low waiting time.  
Two performance knobs are routinely monitored:

| Metric | What it counts | Why it matters |
|--------|----------------|----------------|
| **TPS (Transactions Per Second)** | The rate at which *complete sales transactions* (order, payment, fulfillment) finish in the system. | It reflects the *throughput* of the business process: how many orders can be handled each second. |
| **QPS (Queries Per Second)** | The rate at which *individual queries* (price lookup, inventory check, status request) hit the backend. | It captures the *load* on the database or service layer; a high QPS can choke the system even if TPS is low.

#### Why they differ

1. **Granularity** – A single transaction may involve dozens of micro‑queries.  
2. **Bottleneck location** – TPS tells you how many orders finish, but QPS shows where latency spikes (e.g., a slow inventory lookup).  
3. **Optimization focus** – Improving TPS often means scaling write paths or caching writes; improving QPS targets read replicas, query optimization, or connection pooling.

#### Non‑obvious insight

In many systems, *TPS is limited by the slowest query* in the transaction chain (the “critical path”). Thus, a modest spike in QPS on a single microservice can collapse overall TPS. Monitoring both metrics lets you spot that bottleneck early and focus capacity upgrades where they truly matter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
