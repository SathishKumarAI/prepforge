---
qid: ing_c8ce5010a0__fp__local
question: 'Explain: Workflow — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 530
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:07:55-05:00'
sources: []
---

## Why a *system‑design* workflow matters

When you’re asked to sketch an architecture in an interview, the interviewer isn’t just checking that you know “load balancer → database.”  
They want evidence of **optimization under constraints**: trade‑offs between latency, throughput, cost and fault tolerance.  
If you treat the problem as a black‑box optimization, every design choice is a variable; the objective function is *user‑experience* (latency + availability) subject to resource budgets. A disciplined workflow guarantees that no variable is forgotten.

## The canonical workflow

| Step | Why it’s needed | Core principle |
|------|-----------------|----------------|
| **1️⃣ Problem scoping** | Clarify goals, metrics and assumptions. | *Objective framing* – the function you’ll optimize. |
| **2️⃣ Functional decomposition** | Identify core services (API, cache, DB). | *Modularity* – independent sub‑problems reduce coupling. |
| **3️⃣ Non‑functional constraints** | List SLAs, budget, compliance. | *Pareto frontier* – every trade‑off lies on this curve. |
| **4️⃣ Rough sketch & data flow** | Visualize interactions; spot bottlenecks early. | *Graph theory* – shortest paths = lowest latency. |
| **5️⃣ Scalability & resilience** | Add horizontal scaling, replication, sharding. | *Redundancy vs. consistency* (CAP theorem). |
| **6️⃣ Cost estimation** | Rough cost per component. | *Cost‑efficiency metric*: dollars per transaction. |
| **7️⃣ Iterate & refine** | Re‑evaluate with new constraints or data insights. | *Dynamic programming* – incremental improvement. |

## One non‑obvious insight

Most candidates focus on *where* to put load balancers or replicas, but forget that **the choice of data partitioning strategy (range vs. hash) is the real lever for both latency and cost**. A poorly chosen key skews traffic, forcing hot shards to become bottlenecks while other shards sit idle—an invisible waste that inflates cloud bills without improving user experience.

> *Bottom line:* Treat the interview as a constrained optimization problem; follow the workflow to expose every variable, then use data‑partitioning and cost‑efficiency as your final “elevator pitch” to the interviewer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
