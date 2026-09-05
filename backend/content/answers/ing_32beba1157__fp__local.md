---
qid: ing_32beba1157__fp__local
question: 'Explain: Some limitations of orchestration: — Orchestration vs. Choreography
  in Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 382
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:52:54-05:00'
sources: []
---

In a distributed learning pipeline each component (data‑ingest, feature extraction, model training, inference) must coordinate its work.  
**Orchestration** is a central controller that explicitly tells every service what to do and when. It solves the *control‑flow* problem by serializing decisions: “fetch data → clean → train → deploy.” The controller guarantees global consistency but forces a *single point of truth*. Because each step must wait for the previous one, latency grows linearly with the number of services; any failure in the orchestrator stalls the whole workflow. Moreover, the central policy is hard to evolve—adding or removing a service requires redeploying the orchestrator.

**Choreography**, by contrast, treats every microservice as an autonomous agent that emits events when it completes its task. The system solves *state synchronization* through loose coupling: services listen for “DataReady” and act independently. This eliminates bottlenecks and scales horizontally, but introduces a hidden cost—each service must maintain knowledge of the global workflow state (e.g., which downstream tasks depend on its output). Without careful design, this can lead to *eventual consistency* issues or duplicated work.

**Non‑obvious insight:** In ML pipelines, the *information bottleneck* is often the orchestration layer itself. By moving to event‑driven choreography and embedding a lightweight state store (e.g., a distributed key‑value cache), you trade off a tiny amount of global knowledge for orders‑of‑magnitude throughput gains. The deeper principle is that in probabilistic inference, local conditional independence lets us factor computations; orchestration ignores this structure, while choreography exploits it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
