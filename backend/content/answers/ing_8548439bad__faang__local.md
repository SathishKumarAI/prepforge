---
qid: ing_8548439bad__faang__local
question: 'Explain: Endpoint: POST /backends — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 480
total_tokens: 724
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:54:29-05:00'
sources: []
---

**Clarify**  
We’re designing a load‑balancer for an ML inference service exposed via `POST /backends`. The client posts a request (model ID + payload) and the balancer routes it to an appropriate backend worker that hosts the requested model. Key assumptions:  
- Requests are stateless except for routing by model ID.  
- Backends can be spun up/down on demand.  
- Latency is critical; throughput may spike.

**Approach**  
1. **Front‑end LB (HTTP/HTTPS)** – TLS termination, basic health checks.  
2. **Model‑aware routing layer** – a lightweight service that maps model IDs to backend pools.  
3. **Backend pool manager** – auto‑scales workers per model; uses Kubernetes/HPA or cloud autoscaler.  
4. **Session stickiness optional** – for models requiring warm state, use consistent hashing on model ID.

**Depth**  
- The routing layer holds a cache (e.g., Redis) of `model_id → backend_address` with TTL to reflect scaling events.  
- Health checks ping `/healthz`; unhealthy backends are removed from the map.  
- Use gRPC/HTTP2 for low‑latency communication; implement circuit breaker and retries.  
- Complexity: O(1) lookup per request, O(n) for health checks where n = #backends.

**Edge Cases**  
- **Cold start**: new model requests trigger a backend spin‑up; return 202 with a “queued” header until ready.  
- **Model eviction**: if memory is tight, evict least‑recently used models and gracefully drain connections.  
- **Burst traffic**: rate limit per IP to protect the LB from DoS.

**Optimize & Communicate**  
Future improvements:  
- Replace cache with a publish/subscribe bus (e.g., Kafka) for real‑time scaling events.  
- Add a global request queue for backends that are temporarily saturated, ensuring fairness.  
Explain trade‑offs: tighter TTL reduces stale routing but increases cache misses; longer health‑check intervals reduce churn but delay failure detection. This structured plan balances low latency, high availability, and scalability for ML inference traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
