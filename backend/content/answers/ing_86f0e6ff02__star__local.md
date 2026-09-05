---
qid: ing_86f0e6ff02__star__local
question: 'Explain: Variation: Backends for frontends — Pattern: API Gateway / Backends
  for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 316
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:02:21-05:00'
sources: []
---

**Situation**  
In my last role, the mobile app team was hitting performance bottlenecks because every screen hit our monolithic REST service and pulled far more data than needed. Our product manager pushed us to reduce API latency by 30 % before the next release.

**Task**  
I had to redesign the backend so each frontend could request only what it needed, while keeping a single codebase for all clients and preserving security and caching strategies.

**Action**  
I introduced an API‑Gateway layer (Kong) that handled authentication, rate limiting, and routing. On top of that I built lightweight “Backends for Frontends” services in Node/Express—one per mobile and web app. Each BFF aggregates data from the core microservices via gRPC, performs domain‑specific transformations, and returns a tailored JSON payload. We used Redis for caching frequent queries and OpenTelemetry to trace latency across the stack. The BFFs also implemented client‑side pagination logic to avoid overfetching.

**Result**  
The mobile app’s average response time dropped from 1.2 s to 0.4 s, a 67 % improvement, and the number of API calls per screen fell by roughly 50 %. Users reported smoother scrolling and quicker load times. I learned that combining an API gateway with BFFs can dramatically reduce payload size and complexity while keeping the core services untouched.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
