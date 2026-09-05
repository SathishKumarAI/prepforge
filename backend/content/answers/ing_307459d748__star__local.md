---
qid: ing_307459d748__star__local
question: 'Explain: It can now if it is the — Google Maps System Design Interview
  Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 443
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:05:27-05:00'
sources: []
---

**Situation:** In my last role I was tasked with redesigning the real‑time routing engine for a navigation app that serves 15 M daily active users. The old monolith had latency of 250 ms per request, and during peak hours the service hit 80 % CPU on our GPU nodes.

**Task:** My goal was to cut end‑to‑end latency by at least 30 % while keeping throughput high enough for a 10× user growth. I also needed to ensure that the new system could adapt to dynamic traffic and weather data in real time.

**Action:** I broke the problem into three microservices:  
1. **Data ingestion** – a Kafka stream ingested road‑segment updates, using Avro schemas; we applied schema evolution with Confluent Schema Registry so producers and consumers stayed compatible.  
2. **Route planner** – a graph‑based algorithm (Dijkstra + A*) implemented in Rust for speed, wrapped in a gRPC service. I added a caching layer with Redis that stored pre‑computed sub‑routes keyed by origin–destination pair and a time window; cache hits dropped latency from 250 ms to 90 ms.  
3. **Dynamic reweighting** – a TensorFlow model ran on the GPU cluster, predicting congestion scores for each edge. The predictions were served via a REST endpoint that the planner called asynchronously, so we never blocked routing on ML inference.

I also introduced canary deployments with Istio and used Prometheus + Grafana to monitor request latency, cache hit rate, and GPU utilization in real time.

**Result:** Latency fell from 250 ms to 75 ms (a 70 % reduction) under peak load. CPU usage on the GPU nodes dropped by 40 %, freeing capacity for new features. The system now scales linearly with user growth; we’ve seen a 12 M increase in daily active users without any service degradation. I learned that combining streaming data pipelines, efficient graph algorithms, and lightweight ML inference can deliver both performance and flexibility in a production routing engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
