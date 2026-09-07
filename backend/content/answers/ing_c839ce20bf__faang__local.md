---
qid: ing_c839ce20bf__faang__local
question: 'Explain: Solution — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 427
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:25:56-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain how a *Saga* pattern can solve consistency problems in distributed machine‑learning pipelines (e.g., model training, hyper‑parameter tuning, and deployment). Confirm assumptions: we’re dealing with microservices that each perform a step, need eventual consistency, and failures may occur mid‑pipeline.

**Approach**  
1. Identify the long‑running transaction steps.  
2. For each step create a compensating action (undo).  
3. Orchestrate the saga either **orchestration‑based** (central coordinator) or **choreography‑based** (each service publishes/subscribes to events).

**Depth**  
A Saga turns a distributed transaction into a chain of idempotent operations. For ML:  

- *Training* → if it fails, trigger a compensating “delete model artifacts” action.  
- *Evaluation* → on failure, rollback by marking the experiment as aborted and deleting interim metrics.  
- *Deployment* → a rollback may involve rolling back to the previous model version.

Complexity is linear in the number of steps (O(n)). Each step only needs local commit or rollback logic; no global lock or two‑phase commit is required, so latency stays low and throughput high.

**Edge Cases**  
- Partial failures: ensure compensating actions are idempotent.  
- Clock drift between services can misorder events—use causal ordering guarantees.  
- Service restarts during compensation: design retry policies that avoid duplicate rollbacks.

**Optimize & Communicate**  
Explain trade‑offs: Sagas give eventual consistency but sacrifice immediate ACID guarantees; they’re ideal for ML pipelines where a stale model is acceptable until the next retraining cycle. Highlight monitoring—track saga states, timeouts, and failure rates to trigger alerts. Conclude by noting that in practice we combine sagas with event sourcing to reconstruct state after failures, ensuring resilience without sacrificing scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
