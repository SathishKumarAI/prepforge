---
qid: ing_adc1c39c0c__fp__local
question: 'Explain: schema side of things how we''re going — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 493
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:14:00-05:00'
sources: []
---

## Designing a Parking‑Garage Service

**Problem:**  
Customers arrive at a mall and need an instant ticket that guarantees a spot, while the operator must track capacity, assign spaces efficiently, and bill accurately—all with minimal latency.

**Core Requirements → Design Principles**

| Requirement | Principle | Why it *must* hold |
|-------------|-----------|--------------------|
| **Fast ticket issuance** | *Event‑driven microservices* | A single request should not block on DB writes; we need eventual consistency. |
| **Space allocation** | *Greedy + priority queues* | We want to minimize walk distance and maximize throughput. |
| **Capacity monitoring** | *Distributed counters with lease* | Avoid a single point of failure while keeping counts accurate under heavy load. |

### 1. Ticket Service (API Gateway → Lambda)
- **Input:** `vehicle_id`, `entry_time`.  
- **Output:** `ticket_id` + `space_number`.  
- Uses a **priority queue** per floor; the lowest‑numbered available spot is popped atomically via Redis or DynamoDB conditional writes.

### 2. Space Tracker (Event Store)
- Every allocation/deallocation emits an event to Kinesis → Kafka → SQS → Lambda that updates a **distributed counter** (e.g., DynamoDB “CAPACITY” table with `ADD` atomic operation).  
- The counter is cached in Redis for quick reads; if the cache expires, we recompute from events—*eventual consistency*.

### 3. Billing Service
- On exit, receives `ticket_id`.  
- Calculates duration (`exit_time – entry_time`) and looks up tariff rules (tiered by floor or time).  
- Calls payment gateway asynchronously; failures are retried with exponential back‑off.

## Non‑Obvious Insight

**Treat the parking lot as a *resource pool* rather than a monolithic inventory.**  
By decoupling “space allocation” from “capacity accounting,” we can horizontally scale each sub‑system independently: a burst of arrivals only stresses the ticket service; heavy billing traffic never stalls allocations. This mirrors cloud resource managers (e.g., Kubernetes scheduler) and is often overlooked in simple CRUD designs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
