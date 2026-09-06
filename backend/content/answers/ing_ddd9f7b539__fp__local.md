---
qid: ing_ddd9f7b539__fp__local
question: 'Explain: Functional Requirements — Airbnb System Design - by Neo Kim and
  Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 576
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:51:18-05:00'
sources: []
---

**Functional Requirements – Airbnb System Design**  
*Neo Kim & Hayk (2023)*

At its core, an online marketplace must *connect heterogeneous agents*—hosts offering inventory and guests seeking it—while guaranteeing **availability, consistency, and scalability**. The functional requirements arise from the fundamental problem: *how to match two dynamic sides in real time without compromising reliability*.  

1. **Search & Discovery**  
   - **Query‑to‑Response Latency < 200 ms**: Users expect instant results; this forces a read‑optimized index (geospatial + price + amenities).  
   - **Filtering & Ranking**: The system must support combinatorial predicates and learnable relevance scores, implying an *elastic search* layer that can ingest new features without downtime.  

2. **Booking & Reservation Flow**  
   - **Atomic Transaction**: A booking is a *single‑source truth* operation; it must be ACID to avoid double‑booking. Hence the design uses a distributed lock or two‑phase commit over the inventory store.  
   - **Availability Window Management**: Hosts can set blackout dates; the system must merge these intervals on demand, leading to an interval tree per listing.

3. **Payment & Payout**  
   - **Two‑Phase Settlement**: Payments are captured immediately but payouts to hosts are delayed (e.g., 24 h). This requires a *deferred execution* queue and reconciliation against tax rules—effectively a state machine per transaction.  

4. **Reviews & Trust Signals**  
   - **Immutable Append‑Only Log**: Reviews must never be altered; an append‑only stream guarantees tamper‑evidence, while a secondary cache provides quick read‑through for reputation scores.

5. **Scalability & Availability**  
   - **Geo‑sharding of Listings**: To keep latency low and data local, listings are partitioned by region.  
   - **Event‑driven Replication**: Inventory changes propagate via Kafka topics to all shards, ensuring eventual consistency without blocking writes.

---

### Non‑obvious Insight
Most designs treat *search* and *booking* as separate pipelines. Neo Kim & Hayk argue that the *search index must be a live view of the reservation state*. If a room is booked mid‑search, stale results would violate user expectations. Thus they propose an *optimistic search layer* that tags listings with a “reservation lock” timestamp and periodically reconciles with the transactional store—balancing freshness against throughput without locking the entire index. This subtle coupling between read‑side performance and write‑side consistency is what turns a simple marketplace into a robust system at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
