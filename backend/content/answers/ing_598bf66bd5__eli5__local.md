---
qid: ing_598bf66bd5__eli5__local
question: 'Explain: When to use ABAC — Designing an Authorization Model for an Enterprise
  | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 219
total_tokens: 385
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:58:27-05:00'
sources: []
---

Think of your enterprise as a big library that has many rooms (applications) and books (data). In most libraries, you give people a single key that opens every door they need—this is the “role‑based” approach. ABAC (Attribute‑Based Access Control) is like having a smart lock on each door that reads a guest’s ID card and checks not only their role but also other attributes: the room’s purpose, the time of day, the person’s clearance level, even the weather outside.

When you need fine‑grained security—such as allowing a marketing analyst to see sales data for her region during business hours but blocking her from accessing executive reports or from working after midnight—you use ABAC. It lets policies be written in terms like “user.department = marketing AND data.region = user.region AND time BETWEEN 8 am AND 6 pm.” Thus, ABAC is ideal when access decisions depend on multiple dynamic attributes rather than a single static role.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
