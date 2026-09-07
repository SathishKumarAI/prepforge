---
qid: ing_ea9b7c9b6e__faang__local
question: 'Explain: High-Level Design — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 553
total_tokens: 791
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:45:23-05:00'
sources: []
---

**Clarify**  
We’re asked for a *high‑level* design of an Airbnb‑style marketplace (hosts, guests, listings, bookings). Key assumptions:  
1. **Scale** – millions of users, thousands of hosts per city, billions of requests/day.  
2. **Latency requirement** – booking creation < 500 ms; search results < 200 ms.  
3. **Consistency** – a guest must see the most recent availability; double‑booking is unacceptable.  

**Approach**  
1. **Front‑end (mobile/web)** → stateless REST/GraphQL API gateway.  
2. **Core services**:  
   * *Listing Service* (CRUD, geo‑index).  
   * *Search Service* (vector search + filtering).  
   * *Booking Service* (transactional, locks on availability).  
   * *User & Auth Service*.  
3. **Data layer** – mix of SQL for ACID (bookings) and NoSQL (search indices, user prefs).  
4. **Caching** – Redis/Memcached for hot listings and search results.  
5. **Message bus** (Kafka) for eventual consistency: booking events → availability updates.  

**Depth**  
- Listings stored in a partitioned PostgreSQL cluster; each row has `availability_calendar` as JSONB, indexed by date ranges.  
- Search uses an inverted index (Elasticsearch) with geo‑bounding and price/amenities filters; results cached per query key.  
- Booking flow: client → API → acquire distributed lock on listing/date via Redlock → write to bookings table → publish event → release lock.  
- Consistency achieved by optimistic concurrency control + conflict resolution policy (“first come, first served”).  

**Edge Cases**  
- Simultaneous booking attempts → test with high contention load; ensure lock granularity (per‑listing) doesn’t become bottleneck.  
- Calendar gaps / daylight savings → normalize timestamps to UTC.  
- Search result staleness → set cache TTL ~30 s, invalidate on booking event.  

**Optimize & Communicate**  
- Use read replicas for search queries; shard bookings by date to reduce write contention.  
- Introduce a rate limiter per user/IP to mitigate abuse.  
- Explain trade‑offs: strict ACID guarantees vs. latency – we favor optimistic locking with eventual consistency in the UI, but guarantee booking finality at commit time.  

This design balances scalability, low latency, and strong consistency—core priorities for an Airbnb‑style platform.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
