---
qid: ing_e6f3b0c70d__star__local
question: 'Explain: Scaling Different Components — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 315
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:10:05-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with launching a recommendation engine for an e‑commerce platform that had just hit 1 million monthly active users. The existing architecture could only handle about 10,000 concurrent recommendations per day before latency spiked.

**Task:**  
I needed to scale the system so it could support 200,000 concurrent requests daily while keeping average response time under 150 ms and maintaining a 99.9% uptime SLA.

**Action:**  
First, I split the monolithic inference service into three micro‑components: data ingestion, model serving, and post‑processing. For ingestion, I moved to Kafka with partitioning by user segment, which cut throughput by 3×. Model serving was re‑implemented in TensorFlow Serving behind a Kubernetes autoscaler; I added a lightweight caching layer (Redis) for the top 10% of items. Finally, I used asynchronous gRPC calls and circuit breakers to prevent cascading failures. We monitored latency with Prometheus and set up horizontal pod auto‑scaling based on CPU and request queue depth.

**Result:**  
After deployment, the system handled 250,000 concurrent requests per day with a mean latency of 110 ms, exceeding the SLA by 30%. The cost per inference dropped from $0.02 to $0.008 thanks to better resource utilization. I learned that decoupling components and applying right caching strategies are key to scalable ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
