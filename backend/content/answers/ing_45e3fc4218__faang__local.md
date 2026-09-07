---
qid: ing_45e3fc4218__faang__local
question: 'Explain: Authorization “spaghetti code” — The five laws of cloud-native
  authorization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 565
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:26:17-05:00'
sources: []
---

**Authorization “Spaghetti Code” – The Five Laws of Cloud‑Native Authorization**

| # | Law | What it means |
|---|-----|---------------|
| **1** | *Principle of Least Privilege* | Every service or user gets only the permissions they need, nothing more. |
| **2** | *Separation of Concerns* | Authentication, authorization, and policy evaluation live in distinct modules; avoid monolithic checks scattered across codebases. |
| **3** | *Policy-as-Code* | Store policies in a version‑controlled, declarative format (e.g., Rego/OPA) so they’re auditable and reusable. |
| **4** | *Centralized Policy Decision Point (PDP)* | A single PDP evaluates all requests; services forward decisions to it instead of embedding logic locally. |
| **5** | *Observability & Auditing* | Every authorization decision is logged with context, enabling post‑hoc analysis and compliance checks. |

### Clarify
We’re asked to explain why “spaghetti” (interwoven, ad‑hoc) auth code is problematic in cloud‑native apps and how these five laws form a disciplined alternative.

### Approach
1. Define the pain points of spaghetti code.  
2. Map each law to a concrete design pattern or tool.  
3. Illustrate with a microservice example.

### Depth
- **Least Privilege**: Use fine‑grained IAM roles; deny by default, grant explicitly.  
- **Separation**: Split auth into an Auth Service (token issuance), Policy Engine (OPA), and Resource Service.  
- **Policy-as-Code**: Write rules in Rego; version them via Git; run static analysis.  
- **Centralized PDP**: All services call OPA’s `/v1/data/authz/allow`; reduces duplication and sync issues.  
- **Observability**: Emit structured logs (JSON) with request ID, subject, action, resource, outcome; ingest into ELK or CloudWatch.

### Edge Cases
- Network latency to PDP can throttle requests—use local caching of policies.  
- Policy changes must be rolled out atomically to avoid inconsistent enforcement.  

### Optimize & Communicate
Explain that this architecture cuts duplicated code, eases compliance audits, and scales with the number of services. Emphasize trade‑offs: added network hop vs. maintainability; cache staleness vs. performance. Conclude by highlighting how each law turns chaotic auth into a measurable, auditable policy system—exactly what FAANG teams expect in production-grade cloud-native systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
