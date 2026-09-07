---
qid: ing_190386006f__faang__local
question: 'Explain: E-commerce Order Processing — Event-Driven Architecture (EDA):
  A Complete Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 519
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:43:04-05:00'
sources: []
---

**E‑Commerce Order Processing with Event‑Driven Architecture (EDA)**  
*FAANG‑style interview response – 200 words*

---

### 1️⃣ Clarify  
We need an architecture that processes a customer order—cart → payment → inventory → shipment—while keeping services loosely coupled and scalable.  
Assumptions to confirm:  
- Order volume is bursty (flash sales).  
- Services expose REST/GRPC APIs but also publish events.  
- Latency < 2 s for the end‑to‑end user flow.  

### 2️⃣ Approach  
1. **Domain Events**: `OrderCreated`, `PaymentSucceeded`, `InventoryAllocated`, `ShipmentInitiated`.  
2. **Event Bus** (Kafka/Redis Streams) to decouple producers and consumers.  
3. Each microservice subscribes to relevant events, updates its own store, and publishes the next event.  
4. Use idempotent handlers; store event IDs to avoid double processing.  
5. Provide a *Saga* orchestrator or compensating transactions for failure handling.

### 3️⃣ Depth  
- **Order Service** → publish `OrderCreated`.  
- **Payment Service** consumes, processes payment, publishes `PaymentSucceeded`/`Failed`.  
- **Inventory Service** listens to `PaymentSucceeded`, reserves stock, emits `InventoryAllocated`.  
- **Shipping Service** triggers after `InventoryAllocated`, sends shipment event.  

*Complexity*: Each service processes events in O(1) time; overall latency ≈ sum of individual processing times + network hops.  
*Trade‑offs*: Kafka gives persistence & replay but adds operational overhead; Redis Streams are lighter but less durable.

### 4️⃣ Edge Cases  
- Duplicate events → use event ID deduplication.  
- Service downtime → consumers pause, backlog grows; set retention limits.  
- Payment failure → trigger compensation: release inventory, cancel shipment.  

### 5️⃣ Optimize & Communicate  
- **Back‑pressure**: limit consumer throughput with `max.poll.records`.  
- **Monitoring**: expose lag metrics per topic to detect bottlenecks.  
- **Narration**: “By treating each state transition as an event, we decouple services, allow independent scaling, and can replay events for debugging or recovery.”  

This EDA model delivers resilience, scalability, and clear auditability—key for a high‑traffic e‑commerce platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
