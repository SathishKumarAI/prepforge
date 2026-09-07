---
qid: ing_a6c95067b6__faang__local
question: 'Explain: Designing an authorization model — Designing an Authorization
  Model for an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 506
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:12:39-05:00'
sources: []
---

**Clarify**  
We’re asked to design a fine‑grained authorization system for a large enterprise (e.g., Cerbos). Key assumptions:  
1. *Multiple services* (micro‑services, SaaS) expose APIs that must be protected.  
2. Users belong to *roles* and may have *attribute‑based constraints* (department, seniority).  
3. Policies need *central management*, *auditability*, and *low latency*.  

**Approach**  
1. **Policy definition layer** – Use a declarative policy language (e.g., Rego/OPA) where rules are expressed as `allow = true` based on user attributes, resource type, action, and context.  
2. **Policy distribution** – Store policies in a read‑only store (e.g., S3 + CloudFront cache or Redis) so every service can fetch the latest copy with TTL.  
3. **Enforcement point** – Implement an SDK/agent that intercepts API calls, resolves user identity, and evaluates the policy locally to avoid round‑trips.  
4. **Audit & monitoring** – Log decision context (user, action, resource, rule hit) to a central log store; expose metrics for compliance dashboards.  

**Depth**  
- *Evaluation engine*: Compile Rego policies into bytecode; evaluate in O(1) per check with memoization of attribute lookups.  
- *Scalability*: Policies cached at edge; only policy updates trigger invalidation broadcasts (e.g., via SNS).  
- *Security*: Use signed JWTs for user claims, enforce TLS for all traffic, and separate read/write roles on the policy store.  

**Edge Cases**  
- Circular dependencies in role hierarchies → detect with graph cycle check during policy load.  
- Missing attributes → default deny; provide fallback rules.  
- High‑volume services → batch evaluation to amortize cost.  

**Optimize & Communicate**  
Explain trade‑offs: local evaluation yields 5–10 µs latency vs. central decision service (≈50 µs). Highlight that policy versioning and atomic rollouts reduce risk. Conclude by emphasizing that this design satisfies enterprise needs for flexibility, auditability, and performance—exactly what FAANG teams expect in a production‑grade authorization system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
