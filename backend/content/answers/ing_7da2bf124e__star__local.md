---
qid: ing_7da2bf124e__star__local
question: 'Explain: Writes (URL Shortening) — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 315
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:45:07-05:00'
sources: []
---

**Situation:**  
At my last startup we were launching a marketing campaign that required sharing millions of unique links on social media and printed materials. Our existing URL format was long, hard to read, and caused a 15% drop in click‑through rates.

**Task:**  
I needed to design a scalable, fault‑tolerant URL shortener that could handle 10 M requests per day, guarantee uniqueness, support custom aliases, and provide analytics for each link within the first week of launch.

**Action:**  
I chose a sharded NoSQL backend (Cassandra) for high write throughput and used a consistent hash ring to distribute keys. For ID generation I implemented a base‑62 encoder on auto‑incremented sequence numbers stored in Redis with Lua scripts to avoid race conditions. Custom aliases were validated against a Bloom filter to quickly reject collisions before querying the DB. I added an HTTP/2 microservice in Go, exposing a REST API, and built a lightweight front‑end that embedded tracking pixels for click analytics. Load testing with k6 simulated 5 k RPS per shard; latency stayed under 20 ms.

**Result:**  
The shortener handled 12 M daily hits without errors, custom alias usage rose to 35% of traffic, and the campaign’s CTR improved by 22%. I learned how sharding, probabilistic data structures, and careful API design can keep a simple service robust at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
