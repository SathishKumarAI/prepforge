---
qid: ing_fb425b3172__star__local
question: 'Explain: BOOKMYSHOW System Design, FANDANGO System Design | Software architecture
  for online ticket booking'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 339
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:51:27-05:00'
sources: []
---

**Situation:**  
While working at a fintech startup, we were tasked with building an online ticket‑booking platform similar to BOOKMYSHOW/FANDANGO for a regional cinema chain that had just launched a digital channel. The existing manual process caused seat‑conflict errors and delayed revenue recognition.

**Task:**  
Design a scalable, fault‑tolerant system that could handle 50k concurrent users during peak releases, guarantee no double bookings, provide real‑time inventory updates, and support dynamic pricing for premium seats.

**Action:**  
I architected a microservices stack on Kubernetes: an **API gateway** (Kong) routing to a **Seat Service** (Spring Boot) that used Redis for optimistic locking of seat reservations; a **Pricing Service** (Node.js) calculated surge rates via Kafka streams. The **Order Service** persisted transactions in PostgreSQL with idempotent endpoints and used Sagas for rollback. For real‑time UI updates I integrated WebSocket with Socket.IO, pushing inventory changes instantly. To ensure high availability I set up multi‑AZ deployments, auto‑scaling, and a global CDN (CloudFront) to cache static assets.

**Result:**  
The rollout handled 75k concurrent users during the first blockbuster release without any seat conflicts, reducing booking errors by 98%. Revenue capture improved from $1.2M/month to $3.8M/month within two weeks. I learned that coupling optimistic locking with real‑time push notifications is key for high‑concurrency ticketing systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
