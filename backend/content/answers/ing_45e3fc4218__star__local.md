---
qid: ing_45e3fc4218__star__local
question: 'Explain: Authorization “spaghetti code” — The five laws of cloud-native
  authorization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 346
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:48:18-05:00'
sources: []
---

**Situation:**  
During a migration of our on‑prem recommendation engine to Kubernetes, the devops team added dozens of tiny IAM policies for each microservice. Every request hit a chain of nested if‑statements in code that checked user groups, roles, and environment variables—essentially “spaghetti” authorization logic.

**Task:**  
I had to refactor the auth layer into a clean, declarative system that still honored our five cloud‑native authorization laws: *least privilege*, *separation of duties*, *defense in depth*, *policy as code*, and *auditability*.

**Action:**  
1. Introduced OPA (Open Policy Agent) as a sidecar, moving all policy checks out of application binaries into a single Rego file.  
2. Defined granular permissions per service with Kubernetes RBAC annotations, ensuring least privilege.  
3. Created separate “admin” and “service‑account” roles to enforce separation of duties.  
4. Configured OPA to log every decision to Cloud Logging for audit trails, satisfying defense in depth and auditability.  
5. Automated policy tests with unit and integration suites that run on every PR, enforcing policy as code.

**Result:**  
The new architecture cut auth‑related bugs by 78 %, reduced latency from 45 ms to 12 ms per request, and eliminated the need for manual code reviews of authorization logic. I learned that centralizing policy with OPA not only cleans up “spaghetti” code but also scales security governance across a cloud‑native stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
