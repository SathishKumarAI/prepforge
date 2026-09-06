---
qid: ing_c90038a807__fp__local
question: 'Explain: Hexagonal Architecture — 6 Software Architectural Patterns You
  Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 415
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:08:18-05:00'
sources: []
---

**Hexagonal (Ports‑and‑Adapters) Architecture – a principled view**

The core problem in any application is *decoupling the business logic from its surroundings*.  
When the domain model talks directly to databases, UI frameworks or external services it becomes brittle: a change in an adapter forces changes inside the model.  
A hexagon solves this by treating the **domain** as the centre and exposing only **ports** (interfaces).  The six canonical patterns are the concrete shapes that fill those ports:

| Pattern | What it supplies | Why it is needed |
|---------|------------------|-----------------|
| **Domain services** | Stateless operations that span entities | Keeps business rules in one place, avoiding duplication. |
| **Repositories** | CRUD abstractions for aggregates | Isolates persistence details; lets tests inject mocks. |
| **Application services** | Orchestrators of use‑cases | Separates orchestration from domain logic. |
| **DTOs/Value objects** | Data carriers across ports | Guarantees immutability and clear intent. |
| **Event bus** | Publish‑subscribe mechanism | Enables eventual consistency without tight coupling. |
| **Gateway adapters** | External systems (APIs, queues) | Keeps integration concerns outside the hexagon. |

Each pattern is an *interface* that any concrete implementation can satisfy; thus the inner domain never knows about the outer world.  
A non‑obvious insight: **the hexagon’s geometry enforces a symmetry of responsibilities**—every side is a port, every corner a boundary. This mirrors the mathematical concept of a *dual graph*: changing one adapter changes only its adjacent ports, preserving overall structure. In practice this means that adding a new database or replacing a UI framework can be done by swapping adapters without touching the core logic—a property that emerges naturally from the hexagon’s design rather than being an after‑thought.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
