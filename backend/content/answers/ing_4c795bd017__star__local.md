---
qid: ing_4c795bd017__star__local
question: 'Explain: Related patterns — Pattern: Server-side service discovery'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 363
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:01:13-05:00'
sources: []
---

**Situation**  
During the rollout of our recommendation engine at a streaming platform, we had dozens of micro‑services (user profiling, content ranking, feature extraction) spread across two data centers. The new model version required real‑time access to user embeddings from the embedding service, but our load balancer was hard‑wired to a single endpoint, causing 15 % latency spikes during peak hours.

**Task**  
I needed to implement a robust server‑side discovery mechanism so that each request could dynamically locate the healthiest instance of the embedding service without manual DNS updates, while keeping the overall latency below 200 ms.

**Action**  
I introduced Consul for service registration and health checks. Each micro‑service registered itself with a TTL heartbeat; failed instances were automatically removed. On the client side I wrapped gRPC calls in a custom resolver that queried Consul’s catalog at startup, then refreshed every 30 s. To avoid DNS cache issues, I used the `grpc-resolver-consul` library and added jittered retries. I also exposed a `/healthz` endpoint for external monitoring and integrated Prometheus metrics to track request counts per instance.

**Result**  
After deployment, average round‑trip time dropped from 280 ms to 165 ms during peak traffic, and the system’s error rate fell by 40 %. The discovery layer also reduced ops effort: we no longer needed manual load balancer reconfigurations when scaling services. I learned that coupling lightweight service registries with client‑side resolvers can deliver both resilience and performance in real‑time ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
