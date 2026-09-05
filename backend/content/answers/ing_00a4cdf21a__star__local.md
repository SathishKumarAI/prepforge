---
qid: ing_00a4cdf21a__star__local
question: 'Explain: API Gateway — Design Spotify | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 371
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:29:51-05:00'
sources: []
---

**Situation** – While leading the backend revamp for a music streaming startup that was scaling from 10 k to 1 M daily active users, we discovered our monolith was choking on request latency and couldn’t handle new features like personalized playlists or live radio.

**Task** – I had to design an API gateway layer that would route traffic to microservices, enforce security, rate‑limit, and cache responses, all while keeping the developer experience smooth for the front‑end teams.

**Action** – I chose AWS API Gateway + Lambda authorizers for authentication. For routing I built a custom reverse proxy in Go using the fasthttp library, wiring it to our Kubernetes cluster via an Ingress controller (NGINX). I added JWT validation, OAuth scopes, and per‑client rate limits stored in Redis. To reduce latency I introduced edge caching with CloudFront for static assets and an in‑memory cache for playlist metadata, evicting stale entries after 5 min. I also implemented a circuit‑breaker pattern that falls back to a “maintenance” microservice when downstream services spike.

**Result** – Post‑deployment we cut API latency from 350 ms to 90 ms, reduced server costs by 30 % thanks to smarter caching, and handled 200 k concurrent users during peak without any outages. I learned that a well‑architected gateway is the single most effective way to decouple services while preserving scalability and developer agility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
