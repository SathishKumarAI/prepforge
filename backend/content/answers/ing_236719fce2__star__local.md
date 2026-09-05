---
qid: ing_236719fce2__star__local
question: 'Explain: Endpoint: PUT /config/algorithm — Design Load Balancer | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 386
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:39:44-05:00'
sources: []
---

**Situation:**  
At my last startup we exposed a REST API for tuning ML pipelines: `PUT /config/algorithm`. The service handled thousands of concurrent updates while guaranteeing consistency across distributed workers. After a sudden spike during a model rollout, latency jumped from 30 ms to over 2 s and some requests timed out.

**Task:**  
I was tasked with redesigning the load‑balancing layer so that the endpoint could sustain >10k RPS, keep update propagation within 200 ms, and avoid stale configurations in any worker.

**Action:**  
1. Implemented a **consistent hashing ring** (using Ketama) to map algorithm IDs to dedicated config shards on an etcd cluster, reducing cross‑node traffic.  
2. Added a **read‑through cache** (Redis with TTL 30 s) behind the balancer; workers pull from the cache first and subscribe to Pub/Sub events for invalidation.  
3. Deployed an **HTTP/2 reverse proxy (Envoy)** with per‑route circuit breakers and dynamic weight adjustments based on real‑time latency metrics collected via Prometheus.  
4. Introduced a **staged rollout mechanism**: updates are first written to a “pending” namespace; once all workers acknowledge, the config is promoted atomically.

**Result:**  
Post‑deployment, average latency dropped to 35 ms under 12k RPS, and zero timeouts were observed during a subsequent large model update. The system now supports live reconfiguration with <200 ms propagation, and I learned that combining consistent hashing with cache invalidation is key for high‑throughput config services in ML pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
