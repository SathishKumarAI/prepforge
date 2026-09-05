---
qid: ing_74ab21ed85__star__local
question: 'Explain: Problem — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 354
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:27:48-05:00'
sources: []
---

**Situation**  
At my previous company we built a recommendation engine that served personalized content to three different mobile apps and a web portal. Each client had its own authentication, data format, and latency requirements. The raw model output was a flat list of product IDs, but each front‑end expected a nested JSON with images, prices, and localized text.

**Task**  
I needed to design an interface that would expose the ML service to all clients without duplicating logic, reduce round‑trip latency, and allow us to evolve the backend independently from the consumers.

**Action**  
We adopted an API Gateway + Backends‑for‑Frontends (BFF) pattern. The gateway (NGINX with Lua scripts) handled authentication, rate limiting, and routing to the appropriate BFF service. Each BFF (Node.js/Express) fetched raw predictions from our TensorFlow Serving cluster via gRPC, then performed client‑specific data enrichment: looked up prices in Redis, translated titles using a lightweight translation microservice, and assembled the final JSON. We also introduced circuit breakers with Hystrix to fall back to cached recommendations if any downstream service failed.

**Result**  
The end‑to‑end response time dropped from 650 ms to 280 ms for mobile clients, while CPU usage on the ML server fell by 35% because only a single prediction call was made per request. The BFFs allowed us to roll out new formatting rules in just two days without touching the core model code, and we now have a single source of truth for recommendation logic that scales across all platforms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
