---
qid: ing_edaf530475__star__local
question: 'Explain: Networking and Communication — Must Know System Design Building
  Blocks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 370
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:24:08-05:00'
sources: []
---

**Situation**  
At my previous company we were launching a real‑time recommendation engine for a streaming service that had to push personalized ads to millions of users with sub‑second latency. The existing batch pipeline could not handle the volume, and our front‑end logs were arriving on a single Kafka topic that saturated in 15 ms bursts.

**Task**  
I needed to design a low‑latency, fault‑tolerant data ingestion layer that would feed the ML inference microservice while guaranteeing at least 99.9% availability and sub‑10 ms delivery per request.

**Action**  
I restructured the architecture into three building blocks: (1) *Edge sharding* – split user sessions across multiple Kafka partitions keyed by a consistent hash of the user ID, reducing contention; (2) *gRPC microservices* – replaced REST with lightweight gRPC for model inference, using protobufs and HTTP/2 multiplexing to cut overhead; (3) *Service Mesh* – introduced Istio to provide traffic mirroring, retries, and circuit breakers. I also implemented a back‑pressure mechanism that throttles producers when consumer lag exceeded 500 ms, and set up Prometheus alerts on end‑to‑end latency.

**Result**  
Latency dropped from an average of 75 ms to 8 ms, throughput increased by 4×, and the system sustained 3.2 million requests per minute with a 99.94% success rate. I learned that proper partitioning, lightweight protocols, and observability are critical when scaling ML pipelines for real‑time user experiences.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
