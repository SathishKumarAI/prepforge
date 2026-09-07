---
qid: ing_5f7b1a46db__faang__local
question: What is Data Consistency in Distributed System?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 429
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:26:24-05:00'
sources: []
---

## Clarify  
The interviewer asks for **data consistency** in a *distributed system*.  
Assumptions I’d confirm:  
* Are we discussing *distributed storage* (e.g., NoSQL) or *transactional* systems?  
* Which consistency models are relevant (strong, eventual, causal, session)?  
* What trade‑offs (latency vs. availability) do we care about?  

## Approach  
1. Define the general concept of “consistency.”  
2. Enumerate the classic CAP/BASE models and their guarantees.  
3. Map those to practical patterns in ML pipelines (parameter servers, model checkpoints).  

## Depth  
* **Consistency** = guarantee that all replicas see the same data within a defined window.  
  * *Strong consistency*: every read returns the latest write (linearizability).  
  * *Eventual consistency*: updates propagate asynchronously; all nodes converge eventually.  
  * *Causal, Read‑your‑writes, Session*: weaker guarantees tailored to specific workloads.  
* In ML, a **parameter server** may use eventual consistency for gradient aggregation to reduce latency, but enforce strong consistency when loading checkpoints to avoid stale model weights.  

## Edge Cases  
* Network partitions → CAP forces a choice (often availability + eventual).  
* Write storms can cause “write amplification” if every node must sync immediately.  
* Clock skew affects causal ordering; need vector clocks or Lamport timestamps.  

## Optimize & Communicate  
Explain that choosing the right model hinges on *ML job semantics*: batch training tolerates eventual consistency, while online inference demands strong guarantees. Mention trade‑offs:  
* **Latency** ↑ with stronger consistency (more coordination).  
* **Throughput** ↓ if all replicas must acknowledge writes.  

Wrap up by highlighting how modern ML infra (e.g., TensorFlow Distributed, PyTorch Lightning) expose these settings so teams can tune for their specific latency/accuracy trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
