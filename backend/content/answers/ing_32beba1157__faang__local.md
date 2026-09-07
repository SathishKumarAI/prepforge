---
qid: ing_32beba1157__faang__local
question: 'Explain: Some limitations of orchestration: — Orchestration vs. Choreography
  in Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 487
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:42:33-05:00'
sources: []
---

**Clarify**  
You’re asking why *orchestration* can be limiting when managing ML pipelines or micro‑service workflows, and how it compares to *choreography*. I’ll assume the context is a distributed system where services (e.g., data ingestion, model training, inference) must coordinate.  

**Approach**  
1. Define orchestration vs. choreography.  
2. List concrete limitations of an orchestrator‑centric design for ML pipelines.  
3. Contrast with a choreography style and when it shines.  

**Depth**  
- **Orchestration**: A central controller (e.g., Airflow DAG, Kubeflow Pipelines) dictates step order, passes data, and handles failures.  
  - *Limitation 1*: **Single point of failure & bottleneck** – the orchestrator must stay online for all tasks.  
  - *Limitation 2*: **Tight coupling** – services need to expose specific APIs the orchestrator calls; changes ripple through the whole system.  
  - *Limitation 3*: **Poor scalability under bursty workloads** – the controller queues many jobs, increasing latency and memory pressure.  
  - *Limitation 4*: **Limited observability of inter‑service dynamics** – logs are centralized but can miss fine‑grained interactions between services that happen independently.  

- **Choreography**: Each service emits events (e.g., Kafka topics) and reacts to others’ outputs. The flow emerges organically.  
  - *Benefit*: Decoupled, elastic scaling; failures localize.  
  - *Trade‑off*: Harder to reason about the global order; requires strong contract testing and observability tooling.

**Edge Cases**  
- Orchestrators struggle when a task produces variable output sizes (e.g., model training).  
- Choreography can deadlock if two services wait on each other’s events.  

**Optimize & Communicate**  
A hybrid approach often wins: use orchestration for high‑level job scheduling, but let heavy data flows (feature extraction, inference) be event‑driven. Explain this balance to interviewers, emphasizing that the choice hinges on latency tolerance, fault isolation needs, and operational complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
