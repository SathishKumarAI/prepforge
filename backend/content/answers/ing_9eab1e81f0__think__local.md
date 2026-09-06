---
qid: ing_9eab1e81f0__think__local
question: 'Explain: The patterns — Pattern: API Gateway / Backends for Frontends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 389
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:35:10-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Ask whether the explanation should focus on architectural benefits, implementation details, or common pitfalls.  
   - Assume the audience knows basic API concepts but may be unfamiliar with BFF (Backends‑for‑Frontends) patterns.  

**2. Adopt a mental model**  
   - Treat the system as a layered stack: *Client → API Gateway → BFFs → Domain Services*.  
   - Use the “single responsibility” principle to separate concerns of routing, aggregation, and view‑specific logic.  

**3. Reason step‑by‑step**  
   1. Define the API Gateway role (authentication, request routing, rate limiting).  
   2. Explain why a BFF is introduced: tailoring data shape, reducing round‑trips, hiding domain complexity.  
   3. Illustrate how multiple BFFs can coexist for different front‑end platforms (mobile vs web).  
   4. Show typical communication patterns (sync REST/GraphQL calls to microservices).  

**4. Avoid common traps**  
   - Don’t conflate the gateway with business logic; keep it thin.  
   - Beware of “BFF bloat” where each client adds a new service that duplicates effort.  
   - Remember to version BFF endpoints independently from underlying services.  

**5. Sanity‑check and verbalize**  
   - Verify that the explanation covers purpose, structure, benefits, and risks.  
   - Use concrete examples (e.g., “mobile BFF returns only fields needed for a list view”).  
   - End with a quick recap: gateway → routing/auth; BFF → client‑specific aggregation → domain services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
