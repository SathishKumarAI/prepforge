---
qid: ing_de45fa2597__star__local
question: 'Explain: Latest System Design Questions for 2025-2026'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 413
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:53:13-05:00'
sources: []
---

**Situation** – In early 2025 I was leading the redesign of a recommendation engine for a large streaming platform that served 15 M daily active users. The existing monolith had become a bottleneck: latency spiked to 250 ms during peak hours, and we were missing new ML‑driven personalization features.

**Task** – My goal was to architect a distributed microservices pipeline that could ingest real‑time user events, train models on streaming data, and serve predictions with < 50 ms latency, all while staying within the 10 % cost budget increase for 2026.

**Action** – I broke the system into three layers:  
1. **Event Ingestion** – Switched from Kafka to Pulsar for multi‑tenant QoS, enabling per‑user priority queues and built a lightweight Rust consumer that pre‑aggregated sessions.  
2. **Model Training** – Implemented an online learning framework using TensorFlow Federated on GCP Vertex AI, leveraging edge devices for local updates and synchronizing only delta weights via gRPC to the central trainer. This cut training time from 12 hrs nightly to 3 hrs.  
3. **Serving Layer** – Deployed a vector‑search service with FAISS on GPU‑enabled Kubernetes nodes, wrapped in a Go microservice that used HTTP/2 multiplexing and request caching at the CDN edge. I also introduced feature flagging to roll out new models gradually.

**Result** – Latency dropped from 250 ms to 38 ms average during peak load, while throughput increased by 4×. Personalization accuracy (NDCG@10) improved by 18 %. We stayed within the 9.5 % cost increase target and learned that combining Pulsar’s QoS with federated learning dramatically reduces both latency and data transfer costs in a real‑time recommendation system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
