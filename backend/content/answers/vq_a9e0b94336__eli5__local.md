---
qid: vq_a9e0b94336__eli5__local
question: WHAT ARE SQL TRIGGERS, AND WHEN SHOULD THEY BE USED?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 193
total_tokens: 356
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:23:34-05:00'
sources: []
---

Imagine your database as a busy kitchen. Every time someone adds or changes an ingredient (a row), you want the chef to automatically stir the soup or log the change without anyone asking.  
A **SQL trigger** is that invisible helper: it’s a piece of code that runs automatically *before* or *after* an INSERT, UPDATE, or DELETE on a table.  

Use a trigger when you need something guaranteed to happen whenever data changes—like updating a “last‑modified” timestamp, enforcing business rules across tables, or keeping audit logs.  
Don’t overuse them for simple checks that can be done in application code; triggers run inside the database engine and can slow performance if misused.  

So, think of triggers as kitchen assistants that keep recipes (data) consistent every time a new ingredient is added.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
