---
qid: ing_924a857303__fp__local
question: 'Explain: Example — Pattern: Database per service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 379
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:16:25-05:00'
sources: []
---

## Database‑per‑Service (Micro‑Database) Pattern

### Core Problem  
When multiple services share a single database, a change in one service’s schema can ripple through the entire system: migrations lock the whole table, read/write contention rises, and a fault in one service threatens data integrity for all. The goal is **service isolation**—each service owns its data lifecycle.

### Why It Works  
1. **Encapsulation (Information Hiding)** – Each service models only what it needs, avoiding accidental coupling through foreign keys or shared tables.
2. **Independent Scaling** – Write and read loads can be tuned per service; a hot user table does not throttle an inventory table.
3. **Fault Isolation** – A crash in Service A’s database (e.g., corruption) cannot corrupt Service B’s data.

### Underlying Principle  
This pattern is an application of *modular design* in distributed systems, analogous to object‑oriented encapsulation but at the persistence layer. It reduces the system’s **coupling** and increases its **cohesion**, making it easier to reason about consistency boundaries (CAP theorem).

### Non‑Obvious Insight  
Many adopt a “one database per microservice” mindset but still share transaction logs or use distributed locks. The true advantage emerges only when each service also **manages its own backup, recovery, and replication strategy**. If Service B keeps the same WAL format as Service A, you can swap their databases wholesale without downtime—an often overlooked benefit for continuous delivery pipelines.

In short, separate databases turn a global schema into a collection of bounded contexts, aligning data ownership with business logic and enabling true independent evolution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
