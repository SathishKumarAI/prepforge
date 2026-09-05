---
qid: ing_7113481d72__star__local
question: 'Explain: Canva''s microservices and the media service'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 348
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:13:42-05:00'
sources: []
---

**Situation:**  
While working on a large-scale product launch for a design‑as‑a‑service platform, we noticed that user uploads were bottlenecking the entire pipeline—every image upload triggered multiple synchronous calls across services, causing latency spikes during peak traffic.

**Task:**  
I was tasked with re‑architecting the media handling flow so it could scale independently and reduce overall response time, while keeping the system loosely coupled and fault tolerant.

**Action:**  
We broke down Canva’s monolithic media layer into a set of microservices: an **Upload Service**, a **Processing Service**, and a **Storage Service**. The Upload Service accepted multipart uploads, streamed data directly to S3 via pre‑signed URLs, and emitted events on Kafka. The Processing Service consumed those events, applied transformations (auto‑crop, compression) using Dockerized OpenCV containers, and stored results back in S3. Finally, the Storage Service maintained metadata in DynamoDB and served signed URLs for client consumption. We introduced circuit breakers with Resilience4j and used Prometheus/Grafana dashboards to monitor queue depths.

**Result:**  
Latency dropped from 1.8 s to under 300 ms on average, even during a 30× traffic surge. The new architecture cut infrastructure costs by ~25% and improved developer velocity—new image formats could be added in isolated services without touching the core platform. I learned how careful event‑driven design and proper monitoring can turn a single point of failure into a resilient, scalable system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
