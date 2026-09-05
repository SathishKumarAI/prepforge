---
qid: ing_5d8bf1e8e0__star__local
question: 'Explain: How it works: — System Design: What is Service Discovery?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 319
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:35:07-05:00'
sources: []
---

**Situation:**  
At my last company we were launching a new recommendation engine that had to pull data from dozens of micro‑services—user profiles, product catalog, pricing, and inventory—across multiple regions. The team noticed that any static DNS entry caused latency spikes or failures when services scaled out.

**Task:**  
I was tasked with designing a lightweight discovery mechanism so the ML inference layer could locate each service reliably, scale dynamically, and handle failover without manual reconfiguration.

**Action:**  
I introduced a lightweight Consul‑based registry coupled with a sidecar proxy (Envoy). Each micro‑service registers its health checks and version tags at startup. The inference container queries Consul’s REST API to build an in‑memory routing table, then uses Envoy for TLS termination and load balancing. I added circuit‑breaker logic so that if a service was down, the system automatically switched to a cached fallback model. I also set up a Prometheus exporter on each sidecar to surface latency metrics, which fed into our alerting.

**Result:**  
Service discovery reduced cold‑start latency by 35 % and dropped 404 errors from 12 % to under 1 %. The ML pipeline scaled to 200+ concurrent inference requests per second with zero manual redeploys. I learned that coupling a robust registry with sidecar proxies not only simplifies orchestration but also gives the ML layer the resilience it needs in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
