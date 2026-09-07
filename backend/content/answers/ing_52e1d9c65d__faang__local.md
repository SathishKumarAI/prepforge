---
qid: ing_52e1d9c65d__faang__local
question: 'Explain: Related patterns — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 421
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:56:52-05:00'
sources: []
---

**Clarify**  
The question asks for an explanation of the *Saga* pattern as a “related pattern” in distributed systems (often used with micro‑services and data consistency). I’ll assume we’re talking about **long‑running transactions** that span multiple services or databases.

**Approach**  
1. Define what a saga is.  
2. Distinguish between *choreography* vs. *orchestration*.  
3. Explain the role of compensating actions.  
4. Outline typical use‑cases (e.g., booking flights + hotels).  

**Depth**  
A Saga decomposes a global transaction into a sequence of local, atomic steps. Each step performs its work and emits an event or calls the next service. If any step fails, *compensating transactions* roll back earlier steps to preserve consistency.  
- **Choreography:** services publish/subscribe events; no central coordinator.  
- **Orchestration:** a Saga manager sends commands and tracks state.  
Saga guarantees eventual consistency, not immediate ACID compliance. Complexity grows with the number of steps; failure handling must be idempotent.

**Edge Cases**  
- *Non‑idempotent operations* (e.g., sending an email) can’t be safely compensated.  
- *Deadlocks* if compensations depend on each other.  
- *Network partitions* may delay events, causing inconsistent state until reconciliation.

**Optimize & Communicate**  
To improve reliability: use a **Saga state machine** with persistent checkpoints; implement retry/back‑off for failures; audit logs for debugging. When explaining, emphasize that sagas trade strict consistency for scalability and fault tolerance—exactly the kind of design decision interviewers probe in FAANG settings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
