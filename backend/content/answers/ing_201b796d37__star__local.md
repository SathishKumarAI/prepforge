---
qid: ing_201b796d37__star__local
question: 'Explain: Move Slow Work Out of the Request Path — Client-Server Architecture
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 337
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:33:39-05:00'
sources: []
---

**Situation** – While leading the backend team for our e‑commerce platform, we noticed that every product detail page hit a heavy recommendation engine. Page load times spiked to 3 s during peak traffic, and our A/B test showed a 12 % drop in conversion when users waited longer than 2 s.

**Task** – Reduce the latency of the product detail request by offloading the recommendation calculation from the synchronous request path without sacrificing personalization quality.

**Action** – I introduced an asynchronous microservice that runs the recommendation model on a message queue. When a user requests a product, the API returns the static data instantly and pushes the product ID to Kafka. A dedicated worker pulls the ID, queries our pre‑trained XGBoost model, caches the result in Redis with a 5 min TTL, and sends a WebSocket push to the client. Meanwhile, we added a “recommended items” placeholder that loads lazily after the initial page render. We also refactored the recommendation pipeline to batch predictions every 500 ms, cutting GPU utilization from 90 % to 30 %.

**Result** – Page load times dropped from 3 s to under 800 ms on average; conversion rates rose by 9 %, and server CPU usage fell by 40 %. I learned that decoupling compute‑heavy tasks via event streams not only improves UX but also scales cost‑effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
