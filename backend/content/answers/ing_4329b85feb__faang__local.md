---
qid: ing_4329b85feb__faang__local
question: 'Explain: ABAC (Attribute-based access control) — Designing a Permission
  System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 467
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:20:22-05:00'
sources: []
---

**ABAC — Designing an Attribute‑Based Access Control System**

| Phase | What I’d do |
|-------|-------------|
| **Clarify** | Restate: “Build a permission system that grants or denies actions based on user, resource, and environmental attributes.” Ask:<br>• Which entities exist (users, roles, resources)?<br>• Are attributes static or dynamic?<br>• What policy language is required (XACML‑style, JSON‑based)?<br>• Expected scale & latency? |
| **Approach** | 1. Model *policy store* (JSON/DB). 2. Create an *evaluation engine* that: <br>a) fetches relevant attributes from identity provider and resource metadata.<br>b) applies policy rules via a rule‑engine (e.g., Drools or custom JIT compiler).<br>c) returns allow/deny with audit trail. |
| **Depth** | • **Policy syntax:** `{subject: {role:'doctor', dept:'cardio'}, action:'read', resource:{type:'record', id:123}, env:{time:'09:00'}}`.<br>• **Evaluation complexity:** O(n × m) where *n* = number of rules, *m* = attributes; optimize with indexing and short‑circuiting.<br>• **Security:** Use signed tokens for attributes to prevent tampering. |
| **Edge Cases** | • Missing attributes → default deny.<br>• Conflicting rules → precedence hierarchy or “deny‑by‑default”.<br>• Attribute drift (e.g., user changes department) → event‑driven cache invalidation. |
| **Optimize & Communicate** | • Cache policy evaluations per request; invalidate on attribute change.<br>• Parallelize rule evaluation for high‑throughput services.<br>Explain trade‑offs: stricter security vs. latency, and how I’d measure with A/B testing and SLA monitoring. |

*Result:* A scalable, auditable ABAC system that flexibly adapts to evolving attributes while meeting strict performance SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
