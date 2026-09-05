---
qid: ing_5b6d370998__star__local
question: 'Explain: ABAC — Designing an Authorization Model for an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 334
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:30:12-05:00'
sources: []
---

**Situation**  
In my last role at a fintech firm, we had to overhaul the API gateway that served over 10 k micro‑services. The legacy RBAC system was brittle; every new feature required manual policy updates, and compliance auditors flagged it as “high risk.”  

**Task**  
I was tasked with designing an attribute‑based access control (ABAC) model that could enforce fine‑grained policies across services while meeting ISO 27001 requirements and delivering 99.9% latency SLA.  

**Action**  
I evaluated open‑source ABAC engines and chose Cerbos for its policy‑as‑code format, lightweight runtime, and native support for JWT claims. I mapped out user attributes (role, tenant ID, subscription tier) and resource attributes (API endpoint, data sensitivity). Then I wrote Cerbos policies in YAML that combined these attributes with contextual rules (time of day, IP range). To integrate, I wrapped Cerbos as a sidecar beside each service, letting it intercept requests via gRPC. For performance, I cached policy decisions for 5 s and leveraged Cerbos’s built‑in metrics to monitor hit rates.  

**Result**  
The new ABAC system cut policy change time from days to minutes and reduced unauthorized access incidents by 92%. API latency increased only 0.3 ms on average, keeping the SLA intact. I learned that embedding a lightweight, declarative policy engine like Cerbos can dramatically improve agility without compromising security.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
