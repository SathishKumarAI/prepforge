---
qid: ing_cd2fef78d6__aws__local
question: 'Explain: thing that you again mentioned here is — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 611
total_tokens: 859
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:04:51-05:00'
sources: []
---

**Situation / Task** – While leading the ML‑ops team for DoorDash’s real‑time delivery dashboard, I was asked to redesign the location‑based service that powers rider tracking and ETA predictions. The goal was to reduce latency from ~2 s to <200 ms at 1M concurrent users while keeping costs below $0.03 per request.

**Action – System Design**  
*Geo‑hashing*: I introduced a hierarchical H3 geohash (resolution = 9) stored in DynamoDB with a Global Secondary Index keyed by hash. This gives O(1) lookup for nearby riders and shrinks the query set from 10k to ~50 items per request.  
*WebSockets*: Using **Amazon API Gateway WebSocket** + **AWS Lambda** (proxy integration) I implemented a publish‑subscribe model where each rider’s device sends its geohash every second. Lambda streams updates into an **Elasticache Redis cluster** (cluster mode, read replicas) that serves the real‑time subscriber feed with <50 ms round‑trip.

*Scalability*: Auto‑scaling on DynamoDB reads/writes and API Gateway throttling ensures we handle 2× peak traffic without provisioning over‑capacity.  
*Availability*: Multi‑AZ deployments for Redis, DynamoDB’s built‑in replication, and a fallback HTTP endpoint guarantee <0.5 % outage during maintenance.  
*Cost*: The new architecture cuts per‑request cost from $0.12 to $0.025, yielding ~70 % savings on the location service.

**Result** – After rollout, we achieved 200 ms latency for 99.9 % of requests, reduced infrastructure spend by **$1.2M annually**, and increased rider satisfaction scores by **15 points** (from 78 to 93).  

---

### Leadership Principles Anchored
- **Customer Obsession** – Delivering sub‑200 ms real‑time updates dramatically improved the rider experience.  
- **Ownership & Dive Deep** – I drove the entire redesign, from data modeling to cost analysis, and iterated on metrics until performance met SLA.

### What a Bar‑Raiser Looks For
1. **Quantified Impact** – Clear KPI improvements (latency, cost, satisfaction).  
2. **Depth of Technical Insight** – Choice of H3, DynamoDB indexing, Redis clustering, and trade‑offs between latency vs. consistency.  
3. **Learning from Failure** – Early prototype with polling caused 5 s delays; pivoted to WebSockets after A/B testing showed lower latency and cost.  

This answer demonstrates ownership, measurable results, and a deep technical grasp—all essential for an Amazon interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
