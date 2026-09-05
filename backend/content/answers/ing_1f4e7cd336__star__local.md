---
qid: ing_1f4e7cd336__star__local
question: 'Explain: Redis Pub/Sub — The Ultimate Redis 101'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 345
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:31:55-05:00'
sources: []
---

**Situation:**  
In a fintech app we had a dashboard that needed live stock price feeds for hundreds of users. The existing polling approach hit the API rate limits and caused lag.

**Task:**  
Implement a low‑latency, scalable push system so each user received updates within 200 ms while keeping Redis memory usage under 2 GB.

**Action:**  
I set up a dedicated Redis server with 4 CPU cores. Using `PUBLISH` from the price‑feed microservice and `SUBSCRIBE` in each websocket handler, I leveraged Redis Pub/Sub’s fan‑out pattern. To avoid blocking, I used Lua scripts to atomically update a hash of current prices before publishing. On the client side, I multiplexed subscriptions by topic (e.g., `stock:APPL`) and buffered messages with a small back‑pressure queue. I monitored memory with `MEMORY STATS` and tuned eviction policies to `volatile-lru`. I also added a fallback Redis Sentinel for HA.

**Result:**  
Latency dropped from 1 s polling to ~150 ms real‑time updates. The system handled 10,000 concurrent subscriptions using only 1.8 GB RAM, a 30% cost saving over the previous setup. I learned how Redis Pub/Sub’s simple API can be combined with Lua and proper memory tuning to build robust, low‑latency messaging pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
