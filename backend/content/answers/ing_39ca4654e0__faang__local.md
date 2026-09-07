---
qid: ing_39ca4654e0__faang__local
question: 'Explain: Designing an Authorization Model for an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 469
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:58:55-05:00'
sources: []
---

**Clarify**  
We need a policy‑driven authorization system that works at scale inside a large enterprise (users, roles, resources, actions). I’ll assume: * fine‑grained access control is required; * policies are declarative and can change without redeploying code; * performance must stay sub‑ms per request; * audit logs and compliance are mandatory.  

**Approach**  
1. **Policy Definition Layer** – use a JSON/YAML DSL (e.g., Cerbos’ policy format) to express rules: `allow if user.role == "admin" && resource.type == "doc"`.  
2. **Attribute Store** – centralize attributes (user, group, device, time) in a fast key‑value store or in‑memory cache.  
3. **Evaluation Engine** – stateless microservice that fetches relevant policies and attributes, then evaluates via a rule engine (e.g., CEL or Rego).  
4. **Decision Cache & Invalidation** – cache decisions per `(user, action, resource)` tuple; invalidate on policy change or attribute update.  

**Depth**  
- Policies are versioned; the engine reads the latest from S3/DB and validates syntax at load time.  
- Evaluation is O(1) with cached attributes, O(n) over applicable rules (n ≈ 10‑20).  
- Use deterministic JSON Web Tokens for attribute proof to avoid repeated DB lookups.  
- Audit logs capture policy version, decision, and evaluation trace.  

**Edge Cases**  
- Circular role references → detect during policy load.  
- Missing attributes → deny by default; log warning.  
- High churn policies → throttle reloads to prevent cache stampedes.  

**Optimize & Communicate**  
We can shard the attribute store by tenant, use Bloom filters for quick denial checks, and expose a GraphQL endpoint so clients see “why” a decision was made. In interviews I’d highlight how this decouples policy from code, scales horizontally, and satisfies compliance with tamper‑evident logs—exactly what Meta/Google/Netflix expect in an authorization model.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
