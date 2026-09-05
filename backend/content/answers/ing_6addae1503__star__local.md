---
qid: ing_6addae1503__star__local
question: 'Explain: the risk of finding some points that — System Design of Doordash:
  Geo-Hashing and WebSockets for Location Based Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 364
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:01:04-05:00'
sources: []
---

**Situation:** While leading the location‑based service for a Doordash‑style delivery app, our team noticed that drivers near city borders were occasionally invisible to customers in real time.

**Task:** I had to identify why these edge points were missing from the live feed and design a fix that kept latency under 200 ms while scaling to millions of concurrent users.

**Action:** First, I mapped out the Geo‑Hash grid we used for spatial indexing. By simulating driver positions across hash boundaries, I discovered that the fixed‑length Geo‑Hashes truncated precision near borders, causing some points to fall into adjacent buckets and be omitted from a customer’s query window. To solve this, I implemented a dual‑hash lookup: each driver’s location was stored in both its primary bucket and any neighboring buckets within a 500 m radius. On the front end, I switched from polling HTTP endpoints to WebSocket streams that pushed updates whenever a driver entered or left any of these relevant buckets. To keep memory usage low, I added a TTL on cached entries and used Redis Streams for efficient publish/subscribe.

**Result:** After deployment, real‑time visibility improved by 99.7 % for edge drivers, and average latency stayed at 180 ms. The system now supports 2 million concurrent WebSocket connections with <5 % CPU overhead. I learned that careful attention to spatial hashing granularity and proactive bucket overlap is critical in high‑scale geolocation services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
