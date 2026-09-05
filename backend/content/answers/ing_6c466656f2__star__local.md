---
qid: ing_6c466656f2__star__local
question: 'Explain: Related patterns — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 342
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:03:38-05:00'
sources: []
---

**Situation:**  
At my last company we launched a new mobile banking app while still supporting an existing web portal. The legacy backend was monolithic, and each platform hit the same set of REST endpoints, causing performance bottlenecks and confusing API contracts for front‑end developers.

**Task:**  
I had to redesign the service layer so that each client could call only what it needed, reduce latency, and make the APIs easier to evolve without breaking either app.

**Action:**  
First I introduced an **API Gateway** (Kong) to act as a single entry point. It handled authentication, rate limiting, and TLS termination, then routed requests to microservices based on path and method. Next, I built separate **Backends‑for‑Frontends (BFFs)**—a lightweight Node.js service for the mobile app and another in Go for the web portal. Each BFF aggregated data from several downstream services, applied client‑specific transformations, and cached frequent lookups with Redis to cut round‑trips. I also defined OpenAPI contracts per platform and used Swagger UI for live documentation.

**Result:**  
The API Gateway reduced overall request latency by 35 % (average 120 ms → 78 ms) and the BFFs cut the mobile app’s data payload by 40 %. We eliminated the “one‑size‑fits‑all” endpoint drift, allowing backend teams to iterate independently. The exercise taught me how layering patterns can decouple concerns while keeping client experience optimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
