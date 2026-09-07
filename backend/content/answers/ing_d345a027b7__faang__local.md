---
qid: ing_d345a027b7__faang__local
question: 'Explain: mind i guess we can dive right — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 627
total_tokens: 868
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:51:32-05:00'
sources: []
---

## 1️⃣ Clarify  
**Problem restated:** Build a scalable, fault‑tolerant parking‑garage system that can handle real‑time vehicle entry/exit, space allocation, payment, and reporting (occupancy, revenue).  
**Assumptions to confirm:**
- Multi‑level garage with ~10k spots.  
- Peak traffic ~500 cars/hour.  
- Real‑time occupancy updates needed for a mobile app.  
- Payment via credit card or digital wallet; receipts emailed.  
- Security cameras & sensors on each spot.  

## 2️⃣ Approach  
1. **Front‑end** – Mobile/web UI + REST/GraphQL API.  
2. **Back‑end services** –  
   - *Entry/Exit Service* (auth, ticketing).  
   - *Spot Allocation Service* (greedy or weighted algorithm).  
   - *Payment Service* (tokenization, gateway integration).  
   - *Analytics Service* (occupancy stats, revenue).  
3. **Data layer** –  
   - *Spots DB* (Postgres + Redis cache).  
   - *Events stream* (Kafka) for audit & real‑time updates.  
4. **Infrastructure** – Docker/K8s, autoscaling, CDN for static assets.  

## 3️⃣ Depth  
- **Spot allocation:** Use a priority queue per level; on entry pop the nearest available spot. Complexity O(log N).  
- **Real‑time occupancy:** Each sensor publishes to Kafka → Redis pub/sub pushes to web sockets. Latency <100 ms.  
- **Payment flow:** Ticket ID → payment intent (Stripe/PayPal) → webhook confirmation → mark ticket paid. Idempotent design with UUIDs.  
- **Fault tolerance:** Spot DB replicated; Kafka ensures message durability; fallback to local cache if network fails.  

## 4️⃣ Edge Cases  
- **Sensor failure:** Mark spot unavailable until manual override.  
- **Simultaneous entry:** Two cars requesting same spot → lock in Redis (SETNX).  
- **Payment timeout:** Auto‑cancel ticket after 5 min.  
- **Capacity overflow:** Queue system or “no parking” message with ETA.

## 5️⃣ Optimize & Communicate  
- **Performance:** Batch sensor reads, use CDN for static assets, cache occupancy per level.  
- **Cost:** Spot DB sharded by level; only critical data in Postgres, rest in Redis.  
- **Security:** OAuth2 for API, TLS everywhere, PCI‑DSS compliance for payments.  

**Narrative tip:** Walk the interviewer through a car’s journey (entry → spot allocation → payment → exit) while highlighting how each microservice interacts and where you’d add monitoring or scaling knobs. This demonstrates clear architecture thinking, system robustness, and attention to real‑world constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
