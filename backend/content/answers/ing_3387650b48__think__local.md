---
qid: ing_3387650b48__think__local
question: 'Explain: Online Banking — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 433
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:28:29-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
   - Confirm whether the focus is on *designing* a client‑server architecture for online banking or merely explaining its components.  
   - Assume we’re targeting a high‑availability, secure system used by millions of users with strict regulatory constraints (PCI DSS, GDPR).  

**2. Adopt a layered mental model**  
   - **Client layer**: web/mobile UI + authentication tokens.  
   - **API gateway / load balancer**: traffic routing & rate limiting.  
   - **Business logic services**: account, transfer, fraud detection.  
   - **Data persistence**: relational DB for accounts, NoSQL for logs.  
   - **Security & compliance**: encryption, audit trails, MFA.  

**3. Step‑by‑step reasoning**  
   1. Identify core user actions (login, view balance, transfer).  
   2. Map each action to a microservice or function.  
   3. Determine data consistency needs—ACID for transactions, eventual consistency for analytics.  
   4. Plan scaling: stateless APIs behind load balancers, database sharding, caching with Redis.  
   5. Integrate security at every layer (TLS, OAuth2, HSM).  

**4. Common pitfalls to avoid**  
   - Treating the API gateway as a monolith; it should be thin.  
   - Ignoring cross‑service transaction boundaries—use Sagas or two‑phase commit only when necessary.  
   - Overlooking monitoring & alerting for latency spikes in payment flows.  

**5. Sanity check & verbalize**  
   - Re‑run the user journey mentally, ensuring each step hits a service and data store correctly.  
   - Summarize: “Our online banking system is a stateless client‑server architecture with layered services, secure communication, and robust data consistency guarantees.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
