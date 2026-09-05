---
qid: ing_87e2d64e4c__star__local
question: 'Explain: Disadvantages : — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 322
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:04:23-05:00'
sources: []
---

**Situation**  
While leading the migration of our on‑prem microservices platform to a Kubernetes cluster for the ML inference pipeline, we discovered that the existing static endpoint configuration was causing frequent downtime during rolling updates.

**Task**  
I needed to replace the hardcoded URLs with a dynamic discovery mechanism so that new model versions could be rolled out without manual reconfiguration and while keeping latency below 50 ms per request.

**Action**  
I evaluated several service‑discovery options—Consul, Eureka, and Kubernetes’ native DNS—and chose CoreDNS because it integrated natively with our cluster. I defined a Service resource for each inference pod and enabled headless mode to expose the full set of endpoints. I also added a lightweight sidecar that refreshed local cache every 10 s and used gRPC load‑balancing policies to spread traffic across replicas. To mitigate the disadvantage of stale DNS entries, I introduced health checks that removed unhealthy pods from the pool within 2 seconds.

**Result**  
The new discovery layer cut manual re‑deployment time from 15 minutes to under 3 minutes and reduced request latency variance by 30 %. We also avoided a 12% increase in failure rate that had occurred during previous rollouts. I learned that while service discovery adds operational complexity, choosing the right tool and tuning cache policies can turn it into a performance advantage rather than a bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
