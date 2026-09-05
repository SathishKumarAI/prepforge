---
qid: ing_4329b85feb__eli5__local
question: 'Explain: ABAC (Attribute-based access control) — Designing a Permission
  System'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 268
total_tokens: 431
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:22:57-05:00'
sources: []
---

Imagine a library that only lets people read certain books if they have the right “tags” on their library card—like *student*, *faculty*, or *researcher*—and also if the book itself is tagged with topics such as *physics*, *history*, or *fiction*.  
In Attribute‑Based Access Control (ABAC), the system checks every user’s attributes (their tags) against the attributes required by each resource (the book). If the user’s set of tags satisfies the rule “student and physics or faculty and any topic,” they are granted permission; otherwise, access is denied.  

**Unavoidable terms explained simply:**
- **Attribute:** a descriptive label about someone or something (e.g., “role=student”).  
- **Resource:** anything you want to protect, like a file or webpage.  
- **Policy:** the rule that says which attribute combinations are allowed.

ABAC lets you write flexible rules that adapt to many users and resources without hard‑coding each one—just like a smart librarian who checks tags on both card and book before handing out a copy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
