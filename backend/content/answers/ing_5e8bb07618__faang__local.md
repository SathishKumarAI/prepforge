---
qid: ing_5e8bb07618__faang__local
question: 'Explain: MAC (Mandatory Access Control) — Designing a Permission System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 472
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:23:37-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to design a *mandatory access control* (MAC) permission system for a cloud‑native platform.  
Assumptions:  
- Users are identified by an identity provider; roles are immutable and centrally managed.  
- Resources have labels (e.g., `env=prod`, `team=analytics`).  
- Policies can be expressed in a policy language (OPA/rego).  

**2️⃣ Approach**  
1. **Policy abstraction layer** – separate *policy definition* from *enforcement*.  
2. **Label‑based access control** – attach fine‑grained tags to resources; policies reference these tags.  
3. **Decision engine** – a stateless service (e.g., OPA) that evaluates `subject`, `action`, `resource` triples against the policy store.  
4. **Audit & replay** – every decision is logged for compliance and can be replayed offline.  

**3️⃣ Depth**  
- Policies: `allow if subject.role in ["admin"] or (subject.team == resource.team && action == "read")`.  
- Complexity: O(1) policy lookup + O(n) label match where *n* is number of tags per resource (typically <10).  
- Security: All writes to the policy store are signed; the enforcement point never stores secrets.  

**4️⃣ Edge Cases**  
- **Conflicting policies** – use a deterministic merge strategy (e.g., deny‑by‑default).  
- **Tag drift** – implement periodic consistency checks between resource tags and policy references.  
- **High latency** – cache decisions in the client or proxy; invalidate on policy change via webhook.  

**5️⃣ Optimize & Communicate**  
- Introduce *policy caching* at the API gateway to reduce OPA calls by 70 %.  
- Offer a “preview” mode where users can see potential denials before commit.  
- Present trade‑offs: tighter policies → more enforcement overhead; looser policies → higher risk.  

This design gives you a robust, auditable MAC system that scales with the number of identities and resources while keeping decision latency low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
