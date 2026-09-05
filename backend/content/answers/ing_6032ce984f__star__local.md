---
qid: ing_6032ce984f__star__local
question: 'Explain: Summary — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 387
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:40:36-05:00'
sources: []
---

**Situation** – In early 2024 I was tasked with building a real‑time recommendation engine for an e‑commerce startup that had just hit $5 M in annual revenue. Their existing monolith couldn’t handle the spike during flash sales, and latency was creeping above 300 ms.

**Task** – I needed to design a scalable client‑server architecture that could serve personalized recommendations with sub‑200 ms response times while keeping operational costs below 20% of revenue.

**Action** – I split the system into three layers:  
1. **Client** – a lightweight React SPA using GraphQL queries, caching results locally via Apollo.  
2. **API Gateway** – deployed on AWS API Gateway with Lambda authorizers; it routes requests to the recommendation microservice and enforces rate limiting (10 k QPS).  
3. **Recommendation Service** – a containerized FastAPI app running on ECS Fargate, backed by a Redis cache for feature vectors and an SQS queue that feeds a batch inference worker powered by TensorFlow Serving. I introduced event‑driven scaling: the service scales out to 8 containers during peak hours, using Spot Instances to cut costs. Metrics were collected with Prometheus/Grafana; we set alerts on latency >200 ms.

**Result** – After launch, average response time dropped from 280 ms to 145 ms, and throughput increased by 4× during flash sales. The architecture kept infrastructure spend at $12k/month versus the projected $18k, delivering a 33% cost saving while supporting a 120% revenue growth in Q3. I learned that decoupling data ingestion from inference, coupled with intelligent caching, is key to meeting strict latency targets in production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
