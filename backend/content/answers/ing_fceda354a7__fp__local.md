---
qid: ing_fceda354a7__fp__local
question: 'Explain: Shared Resources Dependency — Cloud Native Anti-Patterns'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 435
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:57:31-05:00'
sources: []
---

### Shared‑Resources Dependency – a Cloud‑Native Anti‑Pattern for Machine Learning

In a cloud environment the core promise is *elasticity*: each service should scale independently in response to load.  
When a machine‑learning (ML) pipeline (data ingestion → feature store → model training → inference) relies on a single, monolithic resource—say one database or a shared GPU cluster—the system violates this elasticity principle. The dependency becomes a bottleneck: every scaling decision for the training service forces a proportional scaling of the underlying resource, and any fault in that resource propagates to all downstream services.

From an **optimization** perspective, the objective is to minimize total cost \(C = \sum_i c_i(x_i)\) where \(x_i\) are independent allocation variables. A shared resource introduces a coupling constraint \(x_1 = x_2 = \dots = x_n\), turning the problem into a single‑variable optimization that can no longer exploit parallelism or differentiated pricing (spot vs on‑demand). The solution space collapses, leading to suboptimal cost and latency.

A deeper insight is that **information locality** is lost: data must travel across the network to reach every consumer of the shared resource. In distributed ML, communication overhead grows super‑linearly with the number of consumers, eroding throughput guarantees.

**Non‑obvious takeaway:** Even when a shared GPU pool seems cost‑effective at first glance, its *warm‑up latency* and *resource contention* create a hidden queuing delay that scales with user concurrency. Decoupling each inference microservice onto its own lightweight container (e.g., using model serving frameworks) often yields lower overall latency than sharing a bulk GPU resource.

Avoiding shared‑resources dependency forces the architecture to honor cloud elasticity, preserve local data processing, and keep the cost function separable—principles that are essential for scalable ML workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
