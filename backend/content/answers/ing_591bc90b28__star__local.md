---
qid: ing_591bc90b28__star__local
question: 'Explain: a separate table exactly you have a — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 349
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:26:02-05:00'
sources: []
---

**Situation:**  
At my previous gig, we were building a real‑time delivery dashboard for a food‑delivery startup that needed to show restaurants, drivers, and customers on a live map with sub‑second updates. The user base was growing to 50k concurrent users in the U.S., so latency had to stay under 200 ms.

**Task:**  
I was tasked with designing the location subsystem: how to store billions of coordinates efficiently, and how to push real‑time movements to web clients without overloading the network or database.

**Action:**  
I introduced a Geo‑Hashing scheme that bucketed latitude/longitude into 12‑bit prefixes. This let us index driver locations in a single Redis sorted set per region, reducing lookup time from O(n) to near‑constant. For real‑time pushes I built a lightweight WebSocket layer on top of Node.js with Socket.io, using Redis Pub/Sub to fan out location updates only to the rooms (i.e., map tiles) that had active viewers. To keep data consistent, every 5 seconds we ran a background job that reconciled the in‑memory cache with PostgreSQL, ensuring durability without sacrificing speed.

**Result:**  
The dashboard’s average latency dropped from 1.2 s to 80 ms, and we handled peak traffic of 120k concurrent connections without any outages. The Geo‑Hash index cut storage costs by 35%, and the WebSocket fan‑out reduced network usage by ~40%. I learned that combining spatial indexing with event‑driven architecture can scale a location service while keeping user experience buttery smooth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
