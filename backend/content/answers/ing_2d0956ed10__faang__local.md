---
qid: ing_2d0956ed10__faang__local
question: 'Explain: a garage you''re going to be end — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 500
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:27:34-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *parking‑garage* system (think of Amazon’s “ParkingLot” service). The goal is to support vehicle entry/exit, space allocation, and real‑time availability queries at scale. I’ll assume:  

- Multiple floors with many spots per floor.  
- Spot types: compact, regular, large, handicapped, electric charging.  
- Vehicles arrive continuously; we need O(log n) operations.  
- The system must be fault‑tolerant and horizontally scalable.

**Approach**  
1. **Data model** – each spot has a unique ID, floor, type, status (free/occupied).  
2. **Storage** – use a distributed key‑value store (e.g., DynamoDB) for persistence; an in‑memory cache (Redis) for hot spots.  
3. **Allocation algorithm** – maintain per‑type priority queues sorted by distance to exit; when a vehicle arrives, pop the best spot from the queue.  
4. **Updates** – on entry/exit, atomically update status in DB and adjust the queue via a lightweight service (e.g., Lambda).  
5. **API layer** – REST/GraphQL gateway with throttling; metrics collected to auto‑scale.

**Depth**  
- Allocation: O(log m) where *m* is spots of that type, thanks to heap or skip list.  
- Consistency: use optimistic locking (version field) in DB to avoid race conditions.  
- Fault tolerance: replicate cache shards and use eventual consistency for status; fallback to DB reads if cache misses.

**Edge Cases**  
- Over‑capacity: return “full” response.  
- Spot type mismatch (e.g., electric vehicle without charger): reject or offer nearest non‑electric spot.  
- Simultaneous exits/entries on same spot: version conflict retries.

**Optimize & Communicate**  
We can batch updates during peak times to reduce write amplification, and use a CDN‑backed front‑end for static parking maps. I’d explain the trade‑off between eventual consistency (speed) and strong consistency (accuracy), and how we’ll monitor latency via CloudWatch dashboards. This structured plan aligns with FAANG’s focus on clear problem framing, scalable architecture, and thoughtful edge‑case handling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
