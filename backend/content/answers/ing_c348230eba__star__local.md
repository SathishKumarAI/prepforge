---
qid: ing_c348230eba__star__local
question: 'Explain: finding a person who is near enough — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 390
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:00:21-05:00'
sources: []
---

**Situation**  
At my last gig we were tasked with building a real‑time “nearby rider” feed for the delivery app. Users would see riders within a 5 km radius, but our existing location service was hitting 3 ms latency and overloading the DB with thousands of geo‑queries per minute.

**Task**  
I had to design an architecture that could serve live proximity updates in sub‑100 ms while keeping cost low and scaling to millions of concurrent users.

**Action**  
First, I introduced **geo‑hashing**: each rider’s latitude/longitude was converted into a 12‑character GeoHash. We stored these hashes in Redis as sorted sets keyed by the hash prefix (e.g., first 6 characters for ~1 km granularity). When a user opened the map, we calculated their own hash prefixes and performed a single range query to pull all nearby riders—this cut DB hits from thousands to a handful of keys.  

Next, I set up **WebSocket** connections using Socket.io on our Node backend. Every time a rider’s GPS packet arrived (every 3 seconds), the server updated their Redis hash and pushed an event to all subscribed clients whose hashed prefixes matched. Clients only processed updates for their current viewport, so bandwidth stayed low.

**Result**  
Latency dropped from ~250 ms to <80 ms average; the number of DB queries per minute fell by 85 %. The system comfortably handled 2 M concurrent users during peak lunch hours. I learned that combining spatial indexing (geo‑hashes) with event‑driven transport (WebSockets) can turn a heavy query problem into a lightweight publish/subscribe pattern.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
