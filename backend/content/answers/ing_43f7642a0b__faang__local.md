---
qid: ing_43f7642a0b__faang__local
question: 'Explain: Step 4: Scheduling (If Required) — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 491
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:22:34-05:00'
sources: []
---

**Clarify**

We’re asked to design a **notification service that schedules messages** (e.g., email/SMS/FCM) for future delivery.  
Assumptions:  
* High volume of users, millions of scheduled jobs per day.  
* Deliveries must be accurate within ±5 s.  
* Messages can be one‑time or recurring.  
* System needs fault‑tolerance and horizontal scalability.

**Approach**

1. **API layer** – REST/GRPC for create/update/delete schedules.  
2. **Event bus** – publish “schedule created” events to Kafka.  
3. **Scheduler service** – a worker pool that consumes the stream, calculates next fire time, and pushes job metadata into a *time‑bucketed* priority queue (e.g., Redis sorted set).  
4. **Worker pool** – polls the bucket for due jobs, invokes the appropriate channel provider (email/SMS/FCM).  
5. **State store** – persistent DB (Cassandra/Bigtable) to keep job metadata and delivery status.  
6. **Retry & dead‑letter queue** – on failure, re‑queue with exponential back‑off; after N attempts move to DLQ.

**Depth**

*Time‑bucketed queues*: use Redis sorted sets keyed by epoch minute → O(log N) insert/delete.  
*Scalability*: multiple scheduler instances share the same Kafka topic and Redis; workers are stateless, scaling horizontally.  
*Complexity*: write ≈ O(log N), read (poll) ≈ O(1).  
*Trade‑offs*: Redis gives low latency but is in‑memory; we back it up with a durable store for recovery.

**Edge Cases**

*Clock drift on workers → use NTP and logical clocks.*  
*Burst of schedules at the same time → Redis can handle millions of keys per second, but monitor memory. *  
*Deletion of scheduled job after enqueue → mark as cancelled in DB; worker checks before sending.*

**Optimize & Communicate**

Explain that we decouple scheduling from delivery to avoid latency spikes. Mention eventual consistency for status updates and how we would monitor SLA (latency, success rate). Conclude with a diagram sketch if time permits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
