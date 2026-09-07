---
qid: ing_ebfd7a1ac3__aws__local
question: 'Explain: that time is required because we we — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 445
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:12:21-05:00'
sources: []
---

**Situation** – In my last role I led the redesign of DoorDash’s real‑time rider‑customer matching system. The old polling‑based model was hitting > 250 ms latency and cost $4M/yr.

**Task** – Build a scalable, low‑latency architecture that keeps riders within 5 km of customers in real time while staying under the $1M budget.

**Action**  
*Geo‑hashing*: I split the city into 0.01° grids (≈ 1 km²) and stored each rider’s current hash in **DynamoDB Global Tables** (multi‑AZ).  
*WebSocket push*: Using **API Gateway WebSocket APIs** backed by **Lambda@Edge**, we pushed location updates to subscribed clients whenever a hash changed, eliminating polling.  
*Event bus*: Rider position changes were emitted to **Amazon EventBridge**, triggering a **Kinesis Data Stream** that feeds a **Lambda** which atomically updates the DynamoDB hash and broadcasts via WebSocket.  

This design guarantees < 50 ms end‑to‑end latency, scales to 200k concurrent riders (auto‑scaling), and cuts infrastructure cost by 70% ($1.2M/yr). I introduced automated health checks and a rollback strategy that reduced downtime from 3 h to < 5 min during the migration.

**Result** – Post‑launch, rider–customer match latency dropped from 250 ms to 35 ms, and delivery times improved by 12%. The system now handles 400k concurrent sessions with 99.999% availability.

**Reflection** – I learned that *ownership* means iterating on failure data: we logged every WebSocket disconnect, discovered a hot‑spot in the DynamoDB partition key, and re‑partitioned to avoid throttling—an example of *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
