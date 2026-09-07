---
qid: ing_e8c6e9c2e9__faang__local
question: 'Explain: Authorization — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 468
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:40:42-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to design a system that authorizes access to ML resources (datasets, models, compute). Confirm key assumptions:  

- Scale – millions of users, billions of data‑points.  
- Types of resources – raw data, model artifacts, training jobs.  
- Policies – role‑based, attribute‑based, or fine‑grained ACLs.  
- Security requirements – GDPR, HIPAA compliance, auditability.

**Approach**  
1. **Identity & Claims** – Use an OAuth2 / OpenID Connect provider to issue JWTs containing user roles and attributes.  
2. **Policy Store** – A relational DB (PostgreSQL) for static policies + a Redis cache for hot lookups.  
3. **Decision Engine** – A stateless microservice that receives the JWT, resource metadata, and returns allow/deny, with an audit log to Kafka.  
4. **Enforcement Point** – Each data‑store or compute service checks the decision engine before serving requests.

**Depth**  
- *JWT size*: keep claims < 2 KB; use reference tokens for heavy data.  
- *Performance*: cache decisions in Redis (latency <1 ms).  
- *Consistency*: use eventual consistency between policy DB and cache, refresh on change events.  
- *Scalability*: horizontal scaling of the decision service behind a load balancer; Kafka partitions allow linear growth.  
- *Security*: HSM‑protected signing keys, TLS everywhere, RBAC + ABAC mix for fine‑grained control.

**Edge Cases**  
- Revoked tokens: short TTLs + token revocation list in Redis.  
- Large attribute sets: paginate claims or use separate attribute service.  
- Multi‑tenant isolation: namespace resources and enforce tenant IDs in policies.

**Optimize & Communicate**  
Explain trade‑offs: tighter cache coherence vs. latency; JWT size vs. statelessness. Highlight that the design separates identity, policy, decision, and enforcement to meet FAANG standards of modularity, observability, and auditability. This narrative demonstrates structured thinking, technical depth, and awareness of production constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
