---
qid: ing_591bc90b28__aws__local
question: 'Explain: a separate table exactly you have a — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 534
total_tokens: 782
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:47:17-05:00'
sources: []
---

**Situation** – At a food‑delivery startup I was tasked with building a real‑time location service that could push driver and restaurant positions to millions of users while keeping latency under 200 ms during peak hours.

**Task** – Design an architecture that scales horizontally, guarantees high availability, and keeps the cost per event below $0.0001.

**Action** –  
* **Geo‑Hashing**: Each location update is converted into a geohash (precision 7). The hash becomes a partition key in a **DynamoDB** table (`LocationUpdates[hash]`). This allows O(1) reads for all points within a radius and reduces hot‑partition pressure.  
* **WebSockets via API Gateway + Lambda**: Clients subscribe to a channel per geohash. A *Lambda* (10 ms cold start with provisioned concurrency 50) receives the DynamoDB stream, publishes changes to an **SNS topic** that triggers an **AppSync WebSocket** subscription.  
* **Caching & Rate‑Limiting**: An **ElastiCache Redis** cluster stores recent geohash→client lists to avoid repeated lookups and to enforce per‑user rate limits (5 updates/sec).  
* **Monitoring**: CloudWatch metrics + X-Ray trace the 200 ms SLA; Auto Scaling on Lambda concurrency keeps cost low during traffic spikes.

**Result** – In production, we handled 3 M events/second with a 99.9 % success rate and kept the per‑event cost at $0.00008. Latency averaged 140 ms during lunch peaks.  

---

### Leadership Principles  
* **Ownership** – I drove end‑to‑end delivery, from schema design to deployment scripts.  
* **Dive Deep** – Chose geohash precision after profiling hotspot queries; tuned Lambda concurrency based on real traffic traces.  

### Bar‑raiser cues  
* Quantified impact (3 M events/s, $0.00008/event).  
* Depth of technical trade‑offs (DynamoDB vs. RDS, Lambda cold start mitigation).  
* Learning loop: after a 30 % spike failure, I added Redis caching and adjusted geohash length to improve throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
