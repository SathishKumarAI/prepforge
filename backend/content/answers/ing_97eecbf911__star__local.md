---
qid: ing_97eecbf911__star__local
question: 'Explain: Examples — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 353
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:36:29-05:00'
sources: []
---

**Situation:**  
While leading a data‑science team at a fintech startup, we built a recommendation engine that served personalized offers through several mobile and web apps. The model was deployed behind a monolithic API layer, which caused latency spikes during peak traffic and made it hard to roll out new features.

**Task:**  
Redesign the service architecture so each front‑end could request only the data it needed, reduce response times, and allow independent deployment of the recommendation logic without impacting the UI teams.

**Action:**  
I introduced an API Gateway + Backends for Frontends (BFF) pattern. The gateway handled authentication, rate limiting, and routing to three BFF services: one for mobile, one for web, and one for partner integrations. Each BFF aggregated data from the ML model, a user‑profile microservice, and a caching layer using Redis. I used Node.js with Express for the BFFs, OpenAPI specs for contract definition, and Docker Compose for local dev. We also added an event‑driven cache invalidation system via Kafka so updates to the recommendation model propagated instantly.

**Result:**  
Response times dropped from 350 ms to 120 ms on average, and we saw a 25 % lift in user engagement metrics within two weeks of rollout. The BFFs also cut deployment time for new features by 40 %, and each front‑end team gained autonomy over its API contract. This exercise reinforced the value of tailoring APIs to consumer needs and decoupling model logic from UI concerns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
