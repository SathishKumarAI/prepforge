---
qid: ing_046f05c357__star__local
question: 'Explain: System Workflow — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 331
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:37:43-05:00'
sources: []
---

**Situation:**  
During my senior capstone, we were asked to architect a streaming service prototype for an internal hackathon. The team had to present a scalable design that could handle millions of concurrent users and deliver personalized playlists in real time.

**Task:**  
I needed to explain the end‑to‑end workflow of Spotify’s system as described by Neo Kim and Hayk, focusing on data ingestion, recommendation pipelines, and low‑latency delivery, so our judges understood how we’d achieve similar performance.

**Action:**  
I mapped their architecture onto a diagram: user requests hit an API gateway that forwards to a stateless microservice cluster. We used Kafka for event streaming of play logs, which feed into a Spark batch job that updates user embeddings in Cassandra. For real‑time recommendations, we built a lightweight inference service on TensorFlow Serving, pulling vectors from Redis. The media server uses HLS with CDN edge caching. I highlighted trade‑offs: choosing Cassandra over PostgreSQL for write throughput, and the benefit of stateless services for horizontal scaling.

**Result:**  
Our prototype handled 3 M concurrent sessions in a test environment, achieving <200 ms end‑to‑end latency on average. The judges praised our clear walk‑through of Spotify’s workflow, noting that we had captured their key principles: decoupled pipelines, real‑time inference, and edge caching. I learned how to translate high‑level design papers into actionable system blueprints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
