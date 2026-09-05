---
qid: ing_b95882ea17__eli5__local
question: 'Explain: Attribute-based access control — Designing an Authorization Model
  for an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 310
total_tokens: 475
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:31:07-05:00'
sources: []
---

Imagine a busy office where every employee has a different badge that lets them enter only the rooms they need for their job. **Attribute‑based access control (ABAC)** is like those badges, but instead of just a single ID card it checks many attributes—like your department, clearance level, project role, or even the time of day—to decide if you’re allowed to see a file or use an application.

In an enterprise, ABAC lets the IT team write one set of rules that say, for example: “A *marketing* employee can view campaign data only during business hours,” and the system automatically applies it everywhere. This is more flexible than older models (where you give everyone a blanket permission) because each request is evaluated on its own attributes at the moment it arrives.

Key terms:
- **Attribute** – any piece of information about a user, resource, or environment (e.g., role = “manager”, department = “HR”).
- **Policy** – a rule that says whether an attribute combination should be allowed or denied.
- **Authorization model** – the overall framework that ties attributes to policies and enforces them.

Cerbos is a tool that helps enterprises build, test, and deploy these ABAC rules so every action—whether opening a spreadsheet or launching a server—is automatically checked against the right attributes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
