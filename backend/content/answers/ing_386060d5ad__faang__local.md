---
qid: ing_386060d5ad__faang__local
question: 'Explain: Amazon Prime Video Monolith — Prime Video Microservices - by Neo
  Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 640
total_tokens: 879
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:55:15-05:00'
sources: []
---

**1️⃣ Clarify**  
*What are we comparing?* The **Prime Video monolith**—a single deployable that serves catalog, playback, recommendations, billing, etc.—vs a **micro‑service architecture** where each domain (catalog, streaming, recommendation, user profile, payment) runs as an isolated service.  
Assumptions: same feature set, similar traffic (~10 M concurrent users), and we care about scalability, fault isolation, deployment velocity, and observability.

**2️⃣ Approach**  
- List key trade‑offs: *Simplicity vs. Scalability*, *Deployment speed vs. Operational complexity*.  
- Identify metrics: latency, MTTR, release frequency, cost per request.  
- Map each service’s bounded context to domain logic.

**3️⃣ Depth**  
| Aspect | Monolith | Microservices |
|--------|----------|---------------|
| **Scalability** | Single‑node scaling (CPU/Memory); bottlenecks hard to isolate. | Horizontal scaling per service; can spin up catalog nodes while streaming stays constant. |
| **Fault Isolation** | Failure in one module crashes entire app. | Faults are contained; e.g., recommendation outage doesn’t affect playback. |
| **Deployment Velocity** | One big deploy; any change triggers full regression test. | Independent CI/CD pipelines → 2–3 hr deployments per service. |
| **Observability** | Single log stream; hard to trace cross‑cutting concerns. | Distributed tracing (e.g., OpenTelemetry), per‑service metrics, central dashboard. |
| **Cost** | Economical at small scale; expensive when over‑provisioned for hot services. | Pay‑as‑you‑go; can shut down unused services during low traffic. |

Complexity:  
- **Monolith**: O(N) codebase, single database schema → simpler ACID guarantees but hard to evolve.  
- **Microservices**: O(S) services, each with its own data store (polyglot persistence), leading to eventual consistency challenges and higher network latency (~10–20 ms per hop).

**4️⃣ Edge Cases**  
- *Data consistency*: cross‑service writes need sagas or two‑phase commits.  
- *Latency spikes*: service mesh misconfigurations cause cascading delays.  
- *Deployment rollback*: monolith is easier to revert; microservices require orchestrated rollbacks.

**5️⃣ Optimize & Communicate**  
Start with a **bounded‑context decomposition** (catalog, playback, recommendation). Use **service discovery + circuit breakers** to mitigate failures. Adopt **canary releases** and **feature toggles** for safe rollouts. Narrate the trade‑offs: “We choose microservices because it gives us per‑domain scalability and resilience, at the cost of added operational overhead.” This structured narrative aligns with FAANG interview expectations—clear assumptions, systematic comparison, depth, edge‑case awareness, and a concise recommendation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
