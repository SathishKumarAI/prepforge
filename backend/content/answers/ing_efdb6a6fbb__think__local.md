---
qid: ing_efdb6a6fbb__think__local
question: 'Explain: Non Functional Aspects — System Design of food delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 201
output_tokens: 514
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:51:02-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- Define “non‑functional” (performance, scalability, reliability, security, maintainability, etc.).  
- Assume a typical geo‑distributed food‑delivery app with millions of users, real‑time order flow, and third‑party integrations.  
- State that we’ll focus on high‑level trade‑offs rather than code details.

**2️⃣ Adopt a layered mental model**  
- *System boundaries*: client → API gateway → microservices → data layer → external services.  
- For each layer, map the NFRs: latency ↔ front‑end responsiveness; availability ↔ order reliability; scalability ↔ traffic spikes; security ↔ user data protection.

**3️⃣ Reason step‑by‑step through design choices**  
- **Latency**: use CDN + edge caching for static assets; place API servers near users.  
- **Scalability**: stateless services, auto‑scaling groups, load balancers, sharded databases.  
- **Availability**: multi‑region deployment, graceful degradation (e.g., queue orders if delivery service down).  
- **Reliability**: retries with exponential back‑off, circuit breakers, dead‑letter queues.  
- **Security**: OAuth2/JWT for auth, TLS everywhere, least‑privilege DB roles, rate limiting.  
- **Observability**: distributed tracing (OpenTelemetry), metrics (Prometheus), alerting.  
- **Maintainability**: versioned APIs, canary deployments, feature flags.

**4️⃣ Beware of common traps**  
- Over‑optimizing latency at the cost of consistency.  
- Ignoring data partitioning when scaling writes.  
- Assuming a single database is “good enough.”  
- Neglecting to model failure modes early (e.g., network partitions).  

**5️⃣ Sanity‑check & communicate**  
- Verify that each NFR gets an explicit design decision; if not, note the trade‑off.  
- Present the diagram with labels: “latency ↓”, “availability ↑”.  
- Summarize key metrics to track (99.9 % request latency <200 ms, 99.99 % order success).  

By walking through these steps, you’ll produce a clear, defensible non‑functional system design for a food‑delivery app.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
