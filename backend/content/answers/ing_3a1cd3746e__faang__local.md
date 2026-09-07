---
qid: ing_3a1cd3746e__faang__local
question: 'Explain: 113: System Design Interview — Airbnb System Design - by Neo Kim
  and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 536
total_tokens: 777
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:59:29-05:00'
sources: []
---

**Clarify**  
We’re asked to design a core component of Airbnb’s platform—specifically the *availability & booking* system that handles search, filtering, price calculation, and reservations across millions of listings worldwide. I’d confirm assumptions:  

- Scale (10⁶+ listings, 10⁵ active searches per second).  
- Latency target (<200 ms for a single search response).  
- ACID guarantees only needed for final booking commit; optimistic reads acceptable elsewhere.  

**Approach**  
1. **Data model** – split into *listing metadata* (static) and *availability windows* (dynamic).  
2. **Indexing** – geo‑spatial index (R‑tree or Google S2 cells) + price & rating indexes for filtering.  
3. **Search layer** – a distributed search engine (Elasticsearch/Opensearch) that serves the initial candidate set.  
4. **Availability resolver** – a separate service that queries an in‑memory cache (Redis) backed by a transactional DB (PostgreSQL + logical replication) to confirm free slots, applying locking only at booking time.  
5. **Booking commit** – two‑phase commit: reserve slot → payment → finalize; use optimistic concurrency control and event sourcing for auditability.

**Depth**  
- *Search*: shard by region, cache hot queries, use approximate nearest‑neighbor search for location.  
- *Availability*: store daily availability blocks to avoid per‑night scans; update via Kafka streams when hosts modify calendars.  
- *Consistency*: eventual consistency is fine for reads; strict ACID on booking to prevent double bookings.  
Complexity: Search O(log n) per shard, availability lookup O(1) cache hit, booking commit amortized O(log m).

**Edge Cases**  
- Sudden surge (e.g., Black Friday): auto‑scale search shards and increase Redis slots.  
- Host cancellations mid‑search: invalidate cached results via pub/sub.  
- Payment failure after reservation: rollback transaction.

**Optimize & Communicate**  
Highlight trade‑offs: using a cache speeds reads but introduces staleness; we mitigate with short TTLs and push invalidations. Explain that sharding by region keeps data locality, reducing latency. Conclude with metrics: hit rate >95 %, booking success rate >99.9 %. This structured walk‑through demonstrates problem understanding, design depth, and communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
