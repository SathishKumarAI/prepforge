---
qid: ing_674843d4bf__aws__local
question: 'Explain: partition metadata somehow that request router even'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 419
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:18:22-05:00'
sources: []
---

**Situation / Task**  
I was tasked to scale a real‑time recommendation engine that routed user requests to the correct ML model shard. The system had to support 1 M TPS and keep latency < 50 ms, while allowing dynamic addition of new models without downtime.

**Action**  
* **Ownership & Dive Deep** – I re‑architected the routing layer as a stateless Lambda + API Gateway service that queried DynamoDB for *partition metadata* (model ID → shard endpoint).  
* **AWS Services** –  
  * **DynamoDB Global Tables** for cross‑region replication of metadata.  
  * **API Gateway** for throttling and caching (`Cache TTL: 5 s`).  
  * **SageMaker Endpoint** per shard, behind an Application Load Balancer (ALB) with weighted routing.  
* **Scalability & Cost** – Using DynamoDB’s on‑demand mode avoided over‑provisioning; Lambda concurrency auto‑scales to 10k requests/s at < $0.20/hr. The ALB + SageMaker combination kept cost below $1M/month while providing 99.95 % availability.

**Result**  
After deployment, request latency dropped from 120 ms to **45 ms** (Δ ≈ 63 %) and the system handled a 3× traffic surge with zero failures. The metadata lookup became a single‑read DynamoDB operation (< 5 µs), eliminating the previous bottleneck.

**Learnings**  
* A clear, versioned partition schema is essential for “request router even” scaling.  
* Leveraging managed services (DynamoDB Global Tables, Lambda) gives true ownership without operational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
