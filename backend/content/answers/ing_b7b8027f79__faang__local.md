---
qid: ing_b7b8027f79__faang__local
question: 'Explain: id as usual and then uh yeah — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 651
total_tokens: 892
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:50:29-05:00'
sources: []
---

**Clarify**  
You’re asked to design a *parking‑garage* system that could be used by a company like Amazon (e.g., for employee or delivery vehicles).  Key requirements I’d confirm upfront:  

- **Capacity & scale** – how many cars per level, number of levels.  
- **Performance** – max latency for check‑in/check‑out and spot lookup.  
- **Features** – reservations, real‑time availability, payment, security, integration with mobile app/parking sensors.  
- **Fault tolerance** – what happens if a server or sensor fails?  

---

**Approach**  
1. **High‑level architecture** – client apps → API gateway → load balancer → stateless service layer → data store + cache.  
2. **Data model** – `ParkingSpot(id, level, spotNumber, status)` and `Reservation(id, userId, spotId, start, end)`.  
3. **Algorithms** – nearest‑spot search (BFS on a graph of spots), reservation conflict check (interval tree).  
4. **Storage** – NoSQL (Cassandra/Redis) for fast reads/writes; relational DB for transactions.  
5. **Observability & scaling** – metrics, logs, auto‑scaling groups, circuit breakers.

---

**Depth**  

```python
def find_nearest_available(user_loc):
    # 1. fetch all free spots in the same level
    spots = db.query("SELECT id FROM ParkingSpot WHERE status='free' AND level=:lvl")
    # 2. compute distances (pre‑cached Euclidean or map‑based)
    nearest = min(spots, key=lambda s: distance(user_loc, s.location))
    return nearest.id
```

*Complexity*: O(n) per level; we reduce `n` with spatial indexing (k‑d tree) → O(log n).  
Reservation check uses an interval tree: O(log m) where *m* is active reservations.

---

**Edge Cases**  

- **Simultaneous check‑ins** – use optimistic locking or Redis `SETNX`.  
- **Sensor failure** – fall back to manual override and mark spot as “unknown”.  
- **Full garage** – redirect to nearest open facility (geo‑service).  
- **Security breach** – audit logs, two‑factor auth for admin actions.

---

**Optimize & Communicate**  

1. **Cache hotspots** – frequently accessed spots per level in Redis; invalidate on status change.  
2. **Batch updates** – send bulk spot status changes to avoid thrashing the DB.  
3. **Event‑driven architecture** – publish spot‑status events to Kafka for downstream analytics (e.g., peak times).  

When presenting, I’d walk through a user story (“Alice checks in”), show API calls, data flow diagram, and discuss trade‑offs: eventual consistency vs strict ACID for reservations; choice of NoSQL for speed versus relational for payment. This demonstrates structured thinking, clear communication, and depth expected by FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
