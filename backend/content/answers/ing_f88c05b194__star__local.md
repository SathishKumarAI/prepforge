---
qid: ing_f88c05b194__star__local
question: 'Explain: Introduction — Redis'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 307
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:45:45-05:00'
sources: []
---

**Situation:**  
During a data‑science sprint at my last company, we were building a recommendation engine that had to serve personalized product suggestions in real time. Our batch model ran every night, but the live API kept stalling because it had to pull millions of user vectors from PostgreSQL on each request.

**Task:**  
I was tasked with reducing query latency and ensuring high throughput for the inference service without redesigning the entire data pipeline.

**Action:**  
I introduced Redis as an in‑memory cache for hot user embeddings. I serialized the 512‑dimensional float32 vectors using MessagePack, stored them with a TTL of 24 hours, and set up a Pub/Sub channel to invalidate entries when the nightly model update finished. The inference microservice was refactored to first check Redis; on miss it fetched from PostgreSQL, cached the result, and returned the vector. I also added a simple LRU eviction policy for memory control.

**Result:**  
Latency dropped from 350 ms to under 15 ms per request, and throughput increased by ~4× (from 120 QPS to 480 QPS). The cache hit rate reached 92 % during peak hours. I learned how a lightweight key‑value store can bridge batch ML models and real‑time inference, and the importance of balancing memory usage with eviction policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
