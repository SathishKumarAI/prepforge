---
qid: ing_e7adfac7bb__think__local
question: 'Explain: Airbnb System Design — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 505
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:20:25-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Confirm that “Airbnb System Design” refers to high‑level architecture (catalog, search, booking, payments) rather than code details.  
- Assume we’re targeting a large‑scale, globally distributed service with millions of listings and users.  
- Note the audience: interviewers from FAANG—expect depth on scalability, consistency, fault tolerance.

**2️⃣ Adopt a layered mental model**  
1. *User‑Facing layers*: API gateway → load balancer → stateless web servers.  
2. *Core services*: Search, Recommendation, Booking, Payment, Notification.  
3. *Data plane*: relational DB for ACID ops, NoSQL for fast read/write, cache layer (Redis), search index (Elasticsearch).  
4. *Infrastructure*: container orchestration (K8s), CI/CD, observability stack.

**3️⃣ Step‑by‑step reasoning**  
- **Start with requirements**: availability > 99.999%, low latency (<200 ms), support millions of concurrent users.  
- **Identify bottlenecks**: search query throughput, booking race conditions, payment idempotency.  
- **Choose data stores** per pattern (e.g., relational for transactions, NoSQL for flexible schema).  
- **Design for consistency vs. latency**: use eventual consistency in catalog; strong consistency in bookings via distributed lock or two‑phase commit.  
- **Plan scaling**: sharding listings by geographic region, caching popular searches, auto‑scaling microservices.

**4️⃣ Avoid common pitfalls**  
- Don’t over‑optimize early—focus on clear trade‑offs.  
- Skip “perfect” consistency; explain when eventual is acceptable.  
- Ignore security: highlight authentication (JWT/OAuth), encryption at rest/transport.  
- Forget monitoring & alerting—essential for FAANG interviews.

**5️⃣ Sanity‑check & verbalize**  
- Run through a user story (“User searches Paris, books a room”) and trace each component.  
- Verify that latency targets are met at each hop.  
- Summarize key decisions (e.g., why use Redis cache, how to handle booking conflicts).  
- Conclude with future‑proofing: adding AI recommendations, multi‑tenant support, disaster recovery plans.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
