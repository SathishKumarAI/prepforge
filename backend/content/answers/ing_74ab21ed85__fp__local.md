---
qid: ing_74ab21ed85__fp__local
question: 'Explain: Problem — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 400
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:13:02-05:00'
sources: []
---

**Problem – Pattern: API Gateway / Backend‑for‑Frontend (BFF)**  
In modern web and mobile apps, a single *frontend* often needs data from dozens of microservices. Each service exposes its own REST/GraphQL contract; the frontend would have to stitch together requests, handle pagination, authentication, error mapping, and shape the payload for UI consumption. This leads to duplicated logic, fragile client code, and poor performance (multiple round‑trips).

**Why a BFF must exist**  
From an information‑theoretic view, the *effective bandwidth* between frontend and services is limited by latency and network cost. A dedicated gateway acts as a **lossy compressor**: it aggregates calls, filters fields, and performs domain‑specific transformations, reducing entropy sent over the wire. It also enforces *separation of concerns*: services stay pure (business logic only), while the BFF handles presentation‑centric concerns (UI shape, caching policies, auth tokens).

**Pattern mechanics**  
- **Gateway layer** exposes a single contract to the client (REST or GraphQL).  
- **BFF microservice(s)** implement that contract by composing calls to downstream services.  
- Each frontend type (web, iOS, Android) can have its own BFF, tuned to its UI’s data shape and interaction patterns.

**Non‑obvious insight**  
Many adopt a single monolithic BFF for all clients, but this *blends* distinct optimization needs. Treating each UI as a separate microservice preserves **orthogonality**: you can evolve the web API independently of the mobile one without risking breaking changes in another client’s contract. This mirrors the principle of *bounded contexts* in Domain‑Driven Design, ensuring that each boundary encapsulates exactly the data and behavior needed by its consumer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
