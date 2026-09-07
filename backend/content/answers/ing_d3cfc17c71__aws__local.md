---
qid: ing_d3cfc17c71__aws__local
question: 'Explain: and then you also said about 500 — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 418
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:19:33-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
I was tasked to redesign DoorDash’s real‑time rider‑restaurant matching system so that a 1 % increase in match accuracy would cut delivery times by 15 %. The existing polling mechanism caused latency spikes during peak hours.

**Action (Dive Deep + Bias for Action)**  
I introduced **geo‑hashing** on the backend and switched from REST to **WebSocket** connections.  

- *Geo‑hashing*: Each location is mapped to a 12‑character H3 hash; we store rider/restaurant hashes in an **Amazon DynamoDB Global Secondary Index (GSI)**, partitioned by region.  
- *WebSockets*: Clients maintain a persistent **API Gateway WebSocket** connection, receiving push updates when nearby restaurants are available.  
- *Scalability*: The GSI scales horizontally; Lambda functions triggered by DynamoDB Streams recompute candidate lists in <10 ms.  
- *Availability*: API Gateway provides 99.999% uptime; fallback to HTTP polling for legacy clients.  
- *Cost*: Estimated $0.07 per GB of data transfer and ~$2,000/month for DynamoDB + Lambda compute, a 40 % reduction vs the old polling model.

**Result (Deliver Results)**  
Within two weeks of rollout, match accuracy improved from 92 % to **94 %**, delivery time dropped by **18 %**, and rider churn fell by 12 %.  

**Bar‑raiser note**: I own the metric definition, dive into DynamoDB stream logs to debug latency, quantify impact with A/B testing, and iterate on failure modes (e.g., hash collisions). This showcases ownership, depth, and data‑driven learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
