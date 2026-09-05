---
qid: ing_7b15f54898__star__local
question: How Does the User Receive the Response? — ChatGPT System Design - by Neo
  Kim and Hayk
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 310
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:40:08-05:00'
sources: []
---

**Situation:**  
At my last company we built a real‑time recommendation engine for an e‑commerce platform that had to serve personalized product suggestions within 100 ms of a user’s click. The existing system delivered predictions via a REST endpoint, but latency was ballooning during peak traffic.

**Task:**  
I needed to redesign the response delivery pipeline so that users received recommendations instantly while keeping infrastructure costs in check.

**Action:**  
I introduced an event‑driven architecture using Kafka for user action ingestion and Spark Structured Streaming for model inference. Predictions were cached in Redis with a TTL of 30 s, keyed by user session ID. The front‑end subscribed to a WebSocket channel that pushed updates as soon as the cache hit; if it missed, the UI fell back to a lightweight “last known” suggestion from local storage. I also added an async fallback job that persisted heavy‑weight inference results into S3 for later batch analysis.

**Result:**  
Latency dropped from 350 ms to under 80 ms on average during peak hours, and cache hit rates climbed to 92%. User engagement metrics rose by 18%, and we cut the real‑time compute cost by 25% thanks to the caching layer. I learned that coupling event streams with opportunistic caching and a graceful degradation path can dramatically improve perceived performance in ML‑driven products.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
