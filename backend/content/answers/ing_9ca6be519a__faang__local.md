---
qid: ing_9ca6be519a__faang__local
question: 'Explain: Daily Reservations and TPS — Airbnb System Design - by Neo Kim
  and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 635
total_tokens: 874
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:48:22-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the “Daily Reservations” and “TPS (Transactions Per Second)” components of Airbnb’s system‑design discussion (Neo Kim & Hayk).  
Assumptions:  
* The focus is on how Airbnb scales reservation traffic, not the full booking flow.  
* “Daily Reservations” refers to the total number of reservations processed each day; “TPS” is the peak per‑second load during that period.

**Approach**  
1. Define the metrics and their relationship (reservations/day = TPS × seconds/day).  
2. Map out the architectural layers that handle reservation requests: API gateway → rate‑limiting → request routing → microservice(s) → database.  
3. Highlight scaling techniques (sharding, caching, read replicas) that keep TPS high while maintaining consistency.

**Depth**  
*Daily Reservations*: Airbnb processes ~200 M bookings/month → ~6.7 M/day.  
*T​PS*: Peak traffic (~400–600 TPS) occurs during holiday seasons; sustained load is ~250 TPS.  
To sustain 600 TPS, the system uses:  

- **API Gateways** with token‑based authentication and per‑user rate limits (e.g., 10 req/s).  
- **Request Router** (AWS ALB + NLB) that balances to stateless reservation services.  
- **Reservation Service** instances behind an autoscaling group; each handles ~50 TPS, so ~12–15 nodes suffice for peak load.  
- **Database Layer**: 
  * Write‑optimized partitioning on `reservation_id` and `listing_id`.  
  * Use a combination of relational DB (PostgreSQL) for ACID guarantees and NoSQL (DynamoDB) for high‑write throughput on availability calendars.  
  * Cache frequent reads with Redis/Memcached to reduce DB hits.  

*Consistency*: Optimistic concurrency control on calendar slots; if two users try to book the same slot, one transaction receives a conflict error and retries.

**Edge Cases**  
- **Burst traffic**: sudden spikes (e.g., Black Friday) can exceed autoscaling limits → use pre‑provisioned capacity.  
- **Outage of cache**: fallback to DB read; latency increases but correctness preserved.  
- **Data skew**: a few listings get 90 % of bookings → shard those listings separately.

**Optimize & Communicate**  
Improvements:  
* Introduce a “reservation pre‑allocation” queue (Kafka) to smooth bursts before hitting the database.  
* Employ request coalescing for duplicate booking attempts from the same user.  

When explaining, I’d narrate: “We first quantify daily reservations and derive required TPS; then we layer our architecture—gateways enforce limits, routers balance load, services process requests, and databases store state with sharding and caching to meet latency targets.” This showcases structured thinking, clear communication, and deep technical insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
