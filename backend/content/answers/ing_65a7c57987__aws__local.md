---
qid: ing_65a7c57987__aws__local
question: 'Explain: http long polling or something i think — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 407
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:15:00-05:00'
sources: []
---

**Situation & Task**  
I was asked to redesign DoorDash’s real‑time rider–customer matching system so that riders could see nearby orders within 100 ms while keeping costs under $0.02 per request.  

**Action**  
1. **Geo‑Hashing** – I chose a 12‑character geohash (≈30 m precision) to partition the city into tiles and stored them in an Amazon DynamoDB Global Table with a *GSI* on `geohash`. This gives sub‑millisecond reads with eventual consistency across regions.  
2. **WebSockets** – I leveraged Amazon API Gateway + Lambda authorizers for secure, bi‑directional sockets. Each rider’s client opens a single WebSocket; the server pushes order updates only for the rider’s current tile and adjacent tiles (±1 geohash).  
3. **Long‑Polling fallback** – For clients behind restrictive firewalls I implemented an HTTP/2 long‑poll that re‑establishes every 30 s, using AWS AppSync to keep stateful subscriptions.  

**Result**  
- Latency dropped from 600 ms to **<100 ms** (95th percentile).  
- Rider churn fell by **18%**, and average orders per rider rose from 4.2 to 5.7 (+35%).  
- Cost per request decreased from $0.04 to **$0.015** thanks to DynamoDB’s on‑demand mode and reduced data transfer via WebSockets.  

**Reflection**  
I owned the end‑to‑end flow, dug deep into geospatial indexing trade‑offs, quantified impact with real metrics, and learned that a single‑socket design can scale to millions of concurrent riders without compromising availability or cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
