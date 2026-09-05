---
qid: ing_0fbd8b8978__star__local
question: 'Explain: Stateless vs Stateful Services — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 308
total_tokens: 546
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:59:45-05:00'
sources: []
---

**Situation:**  
At my last role, our recommendation engine had to serve millions of users per day. The existing monolith stored session data in memory, causing hot‑spot contention and making horizontal scaling impossible during traffic spikes.

**Task:**  
I was tasked with redesigning the service so it could scale out on Kubernetes while maintaining real‑time personalization without sacrificing latency or accuracy.

**Action:**  
I split the monolith into two microservices: a stateless inference API that loads a pre‑trained model from S3 and serves predictions, and a stateful user‑profile store backed by Redis Cluster for session caching. The inference service used containerized TensorFlow Serving with autoscaling rules based on CPU usage. For stateful data I implemented sharding across Redis nodes and added a fallback to DynamoDB for persistence. We introduced a lightweight gRPC gateway that cached predictions per request to reduce load.

**Result:**  
After deployment, the system handled 5× traffic during peak hours without any increase in latency (kept under 120 ms). The stateless design allowed us to spin up 20+ replicas on demand, cutting cost by ~30% compared to the previous monolith. I learned that separating concerns—stateless compute for heavy ML inference and stateful storage for per‑user data—enables true elastic scalability while preserving user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
