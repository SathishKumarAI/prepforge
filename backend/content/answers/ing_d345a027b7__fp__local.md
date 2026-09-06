---
qid: ing_d345a027b7__fp__local
question: 'Explain: mind i guess we can dive right — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 487
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:30:12-05:00'
sources: []
---

## Designing a Parking‑Garage Management System

**Problem & Goal**  
We must accept vehicles, assign spaces, track occupancy, and bill drivers—all in real time—while scaling to thousands of cars per hour. The core challenge is *state management* under high concurrency with low latency.

**Why the Architecture Must Be Event‑Driven**  
Each car’s arrival or departure emits an event (`CAR_ENTER`, `CAR_EXIT`). By treating these as immutable messages, we decouple **state mutation** (updating space availability) from **query** (displaying free spots). This follows the *Command Query Responsibility Segregation* principle: writes do not block reads, ensuring responsiveness even under bursty traffic.

**Key Components**

| Layer | Responsibility | Deep Principle |
|-------|----------------|----------------|
| **API Gateway** | Exposes REST/WS endpoints. | *Interface abstraction*: shields clients from internal changes. |
| **Event Bus (Kafka)** | Publishes car events. | *Distributed commit log* → guarantees ordering and fault‑tolerance. |
| **Space Allocator Service** | Consumes events, updates a sharded in‑memory store (Redis) of free/occupied slots. | *Greedy allocation + backtracking*: minimal latency; uses local consistency to avoid global locks. |
| **Billing Service** | Reads final spot and time from the allocator, calculates fee. | *Stateless microservice* → horizontal scaling; adheres to *idempotent operations*. |
| **Query API** | Serves dashboards (free spots per level). | *Read‑side projection* built via Kafka Streams; ensures eventual consistency with minimal read latency. |

**Non‑obvious Insight**  
Instead of locking a global “garage” resource, partition the garage into *levels* or *zones*. Each zone owns its own allocator and can be scaled independently. This **geometric locality** reduces contention and aligns with real‑world parking layouts (e.g., different entry points). It also yields a natural fallback: if one zone goes down, drivers are simply redirected to another.

In sum, an event‑driven, sharded architecture satisfies the stringent latency, scalability, and fault‑tolerance requirements of a modern parking‑garage system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
