---
qid: ing_b6f4053fd7__faang__local
question: 'Explain: Example: Choreography-based saga — Pattern: Saga'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 442
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:48:26-05:00'
sources: []
---

**Clarify**  
You’re asking for an explanation of how a *choreography‑based saga* fits into the broader **Saga pattern** used in distributed transactions.  
Assumptions I’d confirm:  
1. The system is microservice‑oriented and uses eventual consistency.  
2. Each service owns its own data; no global lock or two‑phase commit.  

**Approach**  
1. Define the Saga pattern and its two flavors (choreography vs choreography).  
2. Explain how each step emits events instead of calling a coordinator.  
3. Illustrate compensating actions for rollback.  

**Depth**  
A **Saga** decomposes a long‑running business process into a series of local transactions, each committed independently. In the *choreography* variant, services communicate solely via **domain events**; there is no central orchestrator. When Service A completes its step it publishes an event (e.g., `OrderCreated`). Any service interested in that event reacts—Service B creates a shipment, Service C reserves inventory, etc. If any step fails, the preceding services publish compensating events (`InventoryRelease`, `ShipmentCancel`) to undo their work. This keeps the flow **decentralized** and scales naturally, but requires careful event design and idempotency handling.  

**Edge Cases**  
- *Lost or duplicated events*: use event IDs and state checks.  
- *Compensation failure*: retry logic or manual intervention.  
- *Partial failures*: services must be able to resume from the last committed event.  

**Optimize & Communicate**  
To improve reliability, add **saga status tracking** (e.g., a Saga Coordinator service) that aggregates events and triggers compensations automatically. When explaining this in an interview, emphasize the trade‑off: choreography gives scalability at the cost of increased complexity in ensuring idempotent, eventual consistency across services. This structured narrative showcases problem understanding, design choices, and practical concerns—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
