---
qid: ing_6a96a13e53__star__local
question: 'Explain: corresponding lat long and that way you — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 322
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:00:40-05:00'
sources: []
---

**Situation**  
At my last role, we were building a real‑time rider‑to‑restaurant matching feature for our food delivery app. The latency was higher than acceptable because every request required an expensive reverse geocoding lookup against a third‑party API.

**Task**  
I needed to design a system that could map any latitude/longitude pair to the nearest restaurant in under 50 ms, while keeping costs low and scaling to millions of concurrent users.

**Action**  
I introduced Geo‑Hashing: each restaurant’s coordinates were encoded into a 10‑character hash (≈100 m resolution). I stored these hashes in a Redis sorted set keyed by region. When a rider pinged their location via WebSocket, the server computed the same Geo‑Hash and performed a range query on Redis to fetch nearby candidates in O(log n). To keep the data fresh, we ran an hourly batch job that refreshed the hash table from our master database. For real‑time updates (e.g., new restaurants opening), we pushed a small message over the same WebSocket channel so clients could update their local cache instantly.

**Result**  
Query latency dropped from 350 ms to 35 ms, and we reduced reverse‑geocode API calls by 90%, cutting monthly costs by $15k. The system comfortably handled 1M concurrent connections during peak hours. I learned that combining spatial indexing with event‑driven communication can dramatically improve performance in location‑centric services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
