---
qid: ing_adc1c39c0c__faang__local
question: 'Explain: schema side of things how we''re going — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 733
total_tokens: 974
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:27:27-05:00'
sources: []
---

**Clarify**  
> *Goal:* Build a scalable, real‑time parking‑garage platform (entry/exit gates, spot allocation, payments, analytics).  
> *Assumptions to confirm:*  
> 1. Number of cars per day (≈10k–100k).  
> 2. Peak concurrency at entry/exit.  
> 3. Need for reservations and multi‑tenant support.  
> 4. Data retention policy (logs, usage metrics).  

**Approach**  
1. **Entities & Relationships** – Cars, Spots, Gates, Sessions, Payments, Users, Facilities.  
2. **Schema layers** – Transactional OLTP store (spatial index on spots) + read‑optimized OLAP store for analytics.  
3. **Data flow** – Event‑driven: Gate → Session start → Spot assignment → Payment → Session end.  

**Depth**  
| Table | Key Columns | Indexes | Notes |
|-------|-------------|---------|-------|
| `Spot` | `spot_id PK`, `level`, `type`, `status (free/occupied)`, `latitude/longitude` | B‑tree on `status`; R‑tree for spatial queries | Enables nearest‑free lookup. |
| `Session` | `session_id PK`, `car_plate`, `gate_in_id`, `spot_id FK`, `start_ts`, `end_ts`, `payment_status` | Composite index `(gate_in_id, start_ts)` | For quick audit of gate traffic. |
| `Gate` | `gate_id PK`, `location`, `type (entry/exit)` | B‑tree on `type` | Separate for load balancing. |
| `User` | `user_id PK`, `name`, `email`, `role` | Email unique | For reservations & loyalty. |
| `Payment` | `payment_id PK`, `session_id FK`, `amount`, `method`, `status`, `paid_ts` | Composite on `(session_id, status)` | Idempotent processing. |

*Data model*:  
- **Normalized** for OLTP: separate spot and session tables to avoid write contention.  
- **Denormalized** read replicas (e.g., materialized view `SpotAvailability(level, type)`) for dashboards.

*Schema evolution:* use feature toggles to add new columns without downtime; employ CDC pipelines to sync changes to analytics DB.

**Edge Cases**  
- Spot already marked occupied due to stale data → reconcile via periodic scan.  
- Gate failure → fallback queue with FIFO ordering.  
- Payment gateway timeout → retry logic, mark session as “pending”.  

**Optimize & Communicate**  
1. **Sharding** by level or geographic region to keep spot lookups local.  
2. **Cache** hot spots in Redis (TTL 10 s) to reduce DB hits during peak entry bursts.  
3. **Batch writes** for analytics: stream session data to Kafka → Spark → Parquet store.  
4. Communicate trade‑offs: ACID vs performance; eventual consistency acceptable for spot availability if we guarantee reconciliation windows.

*Result:* A robust, horizontally scalable schema that supports real‑time parking operations and rich analytics while keeping write paths fast and read paths efficient.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
