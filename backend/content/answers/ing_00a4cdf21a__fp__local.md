---
qid: ing_00a4cdf21a__fp__local
question: 'Explain: API Gateway — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 431
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:06:47-05:00'
sources: []
---

**Why an API Gateway is essential**

A music streaming service exposes dozens of micro‑services: catalog, recommendation, playback, billing, user profile, analytics, etc. Clients (mobile, web, TV) must discover and call the right endpoint without knowing each service’s address or contract. The gateway solves *routing*, *authentication*, *rate‑limiting* and *protocol translation* in one place, turning a chaotic mesh into a single entry point.

**Fundamental design steps**

1. **Route table + reverse proxy** – Map logical paths (e.g., `/v1/playlists/{id}`) to service URLs. Use consistent hashing or weighted round‑robin for load balancing.
2. **Gateway filters** –  
   *Auth*: validate JWT, refresh tokens.  
   *Quota*: enforce per‑user limits via token bucket.  
   *Circuit breaker*: fall back to cached data if a downstream fails.  
3. **Service discovery integration** – Subscribe to the service registry; update routes automatically when instances scale up or down.
4. **Observability** – Log request IDs, latency metrics, and error rates; expose Prometheus metrics for alerting.

**Deep principle: Information‑theoretic efficiency**

The gateway compresses repetitive metadata (auth headers, user context) into a single hop, reducing entropy of network traffic. By caching popular responses locally (e.g., playlist manifests), it minimizes downstream bandwidth—an application of Shannon’s source coding theorem to latency reduction.

**Non‑obvious insight**

Treat the gateway as *stateful* for short‑lived sessions: maintain a per‑user session cache (e.g., last 10 tracks) in memory. This amortizes authentication costs and speeds up personalized recommendations, which would otherwise require a round‑trip to an auth service for every request. In practice, this small stateful layer can cut average response time by 20–30 % without sacrificing scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
