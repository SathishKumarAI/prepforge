---
qid: ing_756d42ed5f__star__local
question: 'Explain: Web/API Layer — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 362
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:29:29-05:00'
sources: []
---

**Situation:**  
During my senior capstone I was tasked with building a lightweight music streaming prototype that mimicked Spotify’s architecture. Our team had to expose user playlists and tracks through a RESTful API while ensuring low latency for millions of concurrent users.

**Task:**  
I needed to design the Web/API layer: define endpoints, authentication flow, caching strategy, and rate limiting so that the service could handle 1 M requests per second with sub‑200 ms response times.

**Action:**  
I chose FastAPI (Python) for its async support and automatic OpenAPI docs. Endpoints were split into `/users`, `/playlists`, `/tracks`. For auth I implemented OAuth2 JWT tokens, using Redis to store short‑lived refresh tokens. To reduce DB load I added a CDN‑backed cache layer with Varnish; playlist data was stored in PostgreSQL and hot tracks in Redis. Rate limiting was enforced via an API gateway (NGINX + Lua), throttling each IP to 500 req/s and applying exponential backoff on burst traffic. I also integrated Prometheus metrics for latency, error rates, and used Grafana dashboards for real‑time monitoring.

**Result:**  
The prototype served 800 k concurrent users with an average latency of 145 ms; cache hit rate was 92%. The API maintained a 99.8% uptime during load testing. I learned how to balance async frameworks, caching, and observability to build a scalable music streaming backend that mirrors production‑grade systems like Spotify’s.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
