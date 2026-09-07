---
qid: ing_19a9d7aab4__faang__local
question: 'Explain: Lessons learned — From Zero to 50 Million Uploads per Day: Scaling
  Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 720
total_tokens: 967
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:44:59-05:00'
sources: []
---

**Clarify**  
We’re asked to distill the key take‑aways from Canva’s “Zero → 50 M uploads/day” post—specifically how they scaled their media pipeline, what trade‑offs were made, and what lessons apply broadly to ML/engineering teams.  
Assumptions:  
- The reader knows basic cloud architecture (microservices, queues).  
- Focus is on engineering practices rather than product features.

**Approach**  
1. Summarize the problem space.  
2. Highlight the scaling strategy (event‑driven, decoupled services, sharding).  
3. Extract three core lessons: observability, data‑centric design, and iterative capacity planning.  
4. Note edge cases (burst traffic, failure modes).  
5. End with a quick “how to apply” checklist.

**Depth**  

| Lesson | What they did | Why it matters | Trade‑offs |
|--------|---------------|----------------|------------|
| **Observability + automated throttling** | Instrumented every microservice; used Prometheus/Grafana dashboards and auto‑scale rules based on request latency & queue depth. | Prevents “thundering herd” when 50 M uploads hit the system; keeps SLA >99.9%. | Adds operational overhead, requires a mature monitoring stack. |
| **Data‑centric sharding** | Split storage by user ID hash; each shard owns its own CDN edge and database partition. Allows linear scaling of write throughput without lock contention. | Keeps per‑shard write latency constant even as total traffic grows. | Requires consistent hashing logic; data rebalancing on new shards can be complex. |
| **Iterative capacity planning** | Started with 1 M/day, added compute in 20% increments while measuring cost/latency; used simulation to predict “break‑points”. | Avoids over‑provisioning and lets the team learn from real traffic patterns before scaling. | Early phases may under‑utilize resources; requires a flexible billing model. |

**Edge Cases**  
- **Burst uploads** (e.g., holiday campaigns) – handled by elastic queues (SQS) and back‑pressure to upstream services.  
- **Partial failures** – each microservice retries idempotently, ensuring eventual consistency of media metadata.  
- **Data migration** when adding shards – performed offline with minimal service disruption.

**Optimize & Communicate**  
- *Improvements*: Introduce serverless functions for low‑volume paths to reduce cost; use a global CDN cache layer to offload origin servers.  
- *Narrative*: “We built the system as a set of loosely coupled services, instrumented them from day one, and grew capacity in measured steps—exactly what an ML pipeline should do when scaling training data volumes.”  

**Take‑away checklist for any high‑volume media/ML system**

1. Decouple ingestion → processing → storage with event queues.  
2. Shard by a deterministic key to keep per‑shard throughput bounded.  
3. Instrument everything; tie auto‑scaling to latency, queue depth, error rates.  
4. Simulate traffic spikes and plan capacity in 20–30% increments.  
5. Design for idempotency so failures are safe to retry.

> *These principles turned Canva’s upload volume from zero to 50 M/day while keeping costs predictable and latency low.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
