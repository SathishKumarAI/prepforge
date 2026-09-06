---
qid: ing_d797866a50__fp__local
question: 'Explain: Client-Server Architecture — 6 Software Architectural Patterns
  You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 695
total_tokens: 870
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:38:38-05:00'
sources: []
---

**Client‑Server Architecture – Six Core Patterns**

1. **Thin Client / Thick Server**  
   *Problem:* Users need a lightweight interface while the heavy lifting (business logic, data) stays centralized.  
   *Why it works:* Offloading computation reduces network traffic and ensures consistency; the server can enforce security policies globally.  
   *Insight:* The “thin” boundary is actually a *policy‑enforcement* layer: every request passes through a single gate that can mutate or audit data before any business logic runs.

2. **Remote Procedure Call (RPC)**  
   *Problem:* Distributed systems must expose local‑looking services across machines.  
   *Why it works:* By serializing arguments and return values, RPC turns inter‑process calls into network messages—an application of *function abstraction* over a communication channel.  
   *Insight:* The cost of serialization dominates; caching frequently used objects can dramatically reduce latency without changing the protocol.

3. **Publish/Subscribe (Pub/Sub)**  
   *Problem:* Decoupled components need to react to events without tight coupling.  
   *Why it works:* A broker stores event metadata and forwards messages based on subscriptions—this is an instance of *information diffusion* in a graph where edges are “subscription links.”  
   *Insight:* Backpressure handling (e.g., using message queues) turns the pattern into a *buffered pipeline*, preventing overload when producers outpace consumers.

4. **Load Balancing**  
   *Problem:* High‑traffic services must distribute requests across multiple servers to avoid bottlenecks.  
   *Why it works:* A load balancer uses routing algorithms (round‑robin, least‑connections) that approximate optimal resource utilization—an application of *load‑distribution* theory.  
   *Insight:* Health checks are not just failover; they also serve as *dynamic cost metrics*, enabling the balancer to prefer servers with lower current latency.

5. **Caching**  
   *Problem:* Repeated expensive reads hurt performance.  
   *Why it works:* By storing a subset of data in faster memory, caching trades space for time—an embodiment of the *time‑space trade‑off* principle.  
   *Insight:* Cache invalidation is often the real bottleneck; using *event‑driven eviction* (e.g., on write) yields far better consistency than periodic TTLs.

6. **Microservices**  
   *Problem:* Monoliths grow unwieldy and hard to evolve.  
   *Why it works:* Splitting functionality into independently deployable services isolates failures and allows each to scale according to its own workload—an application of *modular optimization*.  
   *Insight:* The true benefit lies in *bounded contexts*: by giving each service a clear domain, you eliminate ambiguous data ownership, which is the root cause of many integration bugs.

*Bottom line:* Each pattern solves a specific coordination problem; together they form a hierarchy where lower‑level primitives (RPC, caching) enable higher‑level abstractions (load balancing, microservices). Understanding their mathematical roots—optimization, diffusion, trade‑offs—reveals why seemingly simple design choices actually govern system scalability and reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
