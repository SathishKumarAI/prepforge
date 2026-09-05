---
qid: ing_dfd82520c5__star__local
question: 'Explain: Idempotent APIs — Stateful vs. Stateless Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 333
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:56:25-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were rolling out a new payment gateway API that had to process millions of transactions daily while guaranteeing no duplicate charges.

**Task:**  
I was tasked with designing the API endpoints so they could safely be retried by clients or load balancers without risking double‑billing, all while keeping the system horizontally scalable and resilient.

**Action:**  
I introduced idempotency keys: each request carried a UUID that the server stored in Redis. The gateway used a stateless microservice pattern—each instance received the key, checked Redis for an existing transaction ID, and either returned the cached result or proceeded to create a new charge. To keep state minimal, we persisted only the mapping of idempotency key → transaction status, not the full payload. We also added circuit breakers in Spring Cloud Gateway and switched from traditional monolithic JDBC calls to async Kafka streams for downstream processing.

**Result:**  
After deployment, duplicate‑charge incidents dropped from 3.7% to <0.01%, even during a 200% traffic spike. The system maintained sub‑200 ms latency per call, and we gained the ability to spin up new service instances on demand without re‑synchronizing state. I learned that true idempotence is achieved by externalizing minimal state (the key mapping) rather than trying to keep everything in a single monolith.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
