---
qid: ing_5bd2c43ab6__faang__local
question: 'Explain: to start with perfect um yeah so — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 574
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:16:49-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a *Parking‑Garage* service that supports:  

| Feature | Assumptions to confirm |
|---------|------------------------|
| Vehicle check‑in / exit | Does it support multiple vehicle types (cars, bikes, trucks)? |
| Space allocation | Is there a priority for handicapped or electric charging spots? |
| Real‑time availability | Clients need instant spot status; is latency < 50 ms? |
| Payment & billing | Pay‑on‑exit vs pre‑pay; integration with payment gateway? |

**2️⃣ Approach**  
1. **Data model** – `Garage(id) → Level(id) → Row(id) → Spot(id, type, status)`  
2. **API surface** – `/checkin`, `/checkout`, `/availability`, `/reserve`  
3. **State store** – Use a distributed in‑memory cache (Redis Cluster) for fast spot lookup; persist to a relational DB (PostgreSQL) for durability and analytics.  
4. **Event flow** – Check‑in → lock spot → emit `SpotOccupied`; Checkout → unlock + calculate fee → emit `SpotFreed`.  
5. **Scalability** – Partition by level; each level runs its own microservice instance behind a load balancer.  

**3️⃣ Depth**  
- **Consistency**: Optimistic locking on Redis keys (`SETNX`) to avoid double allocation.  
- **Latency**: 1‑2 round‑trips to Redis keeps < 20 ms response.  
- **Fault tolerance**: Spot status is replicated across the cluster; a failed node triggers automatic failover.  
- **Analytics**: Batch write to PostgreSQL nightly for revenue reports and occupancy trends.  

**4️⃣ Edge Cases**  
- Vehicle too large for any free spot → return “no space”.  
- Check‑in while payment gateway offline → queue transaction, retry later.  
- Simultaneous check‑ins for the same spot → Redis atomicity prevents race.  
- Power outage → rely on persisted DB to recover state; fallback UI shows “maintenance”.

**5️⃣ Optimize & Communicate**  
Future improvements:  
- **Spatial indexing** (e.g., GeoHash) for quick nearest‑spot search.  
- **AI‑based forecasting** to pre‑allocate spots during peak hours.  
- **Mobile SDK** for driver navigation to assigned spot.  

I’d explain the trade‑off between eventual consistency (Redis) and strong durability (PostgreSQL), justify latency targets, and show how the design scales horizontally while keeping data integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
