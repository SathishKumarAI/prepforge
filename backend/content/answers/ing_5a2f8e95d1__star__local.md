---
qid: ing_5a2f8e95d1__star__local
question: 'Explain: 1.5. Layered System — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 328
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:28:01-05:00'
sources: []
---

**Situation**  
At my previous role, our mobile app was lagging because the backend exposed a monolithic PHP service that returned full user objects on every request. The front‑end team complained about slow load times and unnecessary data transfer.

**Task**  
I needed to redesign the API so that it followed a layered architecture: presentation, business logic, and persistence layers—each clearly separated—and expose only the data the client actually required.

**Action**  
I introduced a RESTful service using Node.js with Express. Each endpoint represented a resource (e.g., `/users/{id}`) and used standard HTTP verbs (GET for read, POST for create). I added HATEOAS links to let clients discover related actions without hard‑coding URLs. The business logic lived in separate middleware modules, while data access was handled by a lightweight ORM that mapped to PostgreSQL tables. We also implemented content negotiation so the API could return JSON or XML based on `Accept` headers.

**Result**  
The new REST API cut payload size by 60 % and reduced page load time from 3.2 s to 1.1 s. It also made the codebase easier to maintain; adding a new feature required only changes in one layer, not a full rewrite of the monolith. I learned that designing with clear layers and RESTful principles not only improves performance but also future‑proofs the architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
