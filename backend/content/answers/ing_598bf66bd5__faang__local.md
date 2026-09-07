---
qid: ing_598bf66bd5__faang__local
question: 'Explain: When to use ABAC — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 441
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:12:01-05:00'
sources: []
---

**Clarify**  
You’re asked when Attribute‑Based Access Control (ABAC) is the right choice for enterprise authorization, specifically in a system like Cer Bos. I’ll assume we need fine‑grained control across many resources and users, with evolving policies that must be auditable.

**Approach**  
1. Identify policy complexity: many resource types, roles, and dynamic attributes.  
2. Evaluate governance needs: centralized, auditable rules vs decentralized ACLs.  
3. Consider scalability: can the system handle thousands of attributes per request?  
4. Check integration points: existing identity providers, service meshes, micro‑services.

**Depth**  
- **Use ABAC when**:  
  - Policies depend on *multiple* dynamic attributes (user department, clearance level, resource sensitivity, time, location).  
  - You need *single source of truth*: one policy engine that all services consult.  
  - Auditing and compliance are critical; ABAC policies can be versioned and logged.  
- **How it works**: a request is evaluated against an XACML‑style rule set; attributes come from identity, context, or resource metadata.  
- **Complexity**: O(n) per rule check, but caching and pre‑computed attribute sets keep latency low.  
- **Trade‑offs**: initial model design effort; performance hit if attribute lookup is slow.

**Edge Cases**  
- *Attribute sparsity*: missing values → deny by default.  
- *Circular references*: ensure policy evaluation order prevents loops.  
- *Performance spikes*: monitor request rates and cache hot attributes.

**Optimize & Communicate**  
Start with a minimal viable ABAC model (core attributes), then iterate: add attribute hierarchy, composite rules, and context‑aware conditions. Explain to stakeholders that while ACLs are simpler for small teams, ABAC scales to thousands of services without policy drift, aligning with enterprise security goals. This narrative shows structured thinking, technical depth, and clear communication—key signals in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
