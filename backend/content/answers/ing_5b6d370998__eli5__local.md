---
qid: ing_5b6d370998__eli5__local
question: 'Explain: ABAC — Designing an Authorization Model for an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 204
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:00:56-05:00'
sources: []
---

Imagine a library where every book is tagged with labels like “Science,” “History,” or “Children’s.” When someone wants a book, the librarian checks two things: who they are (their badge) and what tags match their request. That’s Attribute‑Based Access Control (ABAC).  

**Attributes** are just descriptive tags—about a person (“role = manager”), about a resource (“confidentiality = top‑secret”), or even the context (“time of day = 9 AM”).  
The **policy** is the rule that says, “Managers may read confidential reports after 8 AM.” The system looks at all attributes together and decides if access should be granted.  

ABAC lets large enterprises write flexible rules that adapt to many roles, projects, or locations without hard‑coding each combination, keeping security both powerful and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
