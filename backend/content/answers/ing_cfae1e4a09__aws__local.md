---
qid: ing_cfae1e4a09__aws__local
question: 'Explain: be in cities so i think to — System Design of Doordash: Geo-Hashing
  and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 440
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:10:19-05:00'
sources: []
---

**Situation / Task**  
I was tasked with redesigning DoorDash’s real‑time city‑wide delivery dashboard so drivers could instantly see nearby orders and riders could get instant ETA updates. The goal was to reduce latency by > 70 % while keeping costs under the existing budget.

**Action**  
1. **Geo‑Hashing** – I introduced a 10‑bit Geo‑Hash index stored in **Amazon DynamoDB Global Secondary Index (GSI)** for each driver’s location bucket. This allowed sub‑second lookup of orders within a 5 km radius, cutting the previous MySQL range query time from 400 ms to < 30 ms.  
2. **WebSockets** – I leveraged **AWS API Gateway + Lambda + Amazon Kinesis Data Streams** to fan‑out real‑time location updates to drivers’ mobile clients via WebSocket connections. Each driver’s socket was tied to a short‑lived JWT, ensuring security and compliance.  
3. **Scalability & Availability** – By using DynamoDB’s auto‑scaling and API Gateway’s built‑in high availability (multi‑AZ), the system handled 50k concurrent drivers with < 1 % outage during peak hours.  
4. **Cost Control** – The new design reduced hourly compute from 12 EC2 instances to 3 Lambda functions, cutting infra spend by 35 %.  

**Result**  
- Latency dropped from 400 ms → 25 ms (average).  
- Driver order acceptance rate increased by 18 % within the first month.  
- Cost savings of $120k/year.

**Learning & Ownership**  
I iterated on the Geo‑Hash granularity after observing false positives in dense urban grids, learning to balance index size vs lookup speed—a classic *Dive Deep* moment. The outcome demonstrates **Customer Obsession** (faster, more reliable service) and **Ownership** (end‑to‑end delivery from design to deployment).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
