---
qid: ing_35c91d8e87__eli5__local
question: What are they used for? — Database Isolation Levels
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 205
total_tokens: 363
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:00:53-05:00'
sources: []
---

Think of a database as a busy kitchen where many chefs (transactions) cook dishes at once.  
An **isolation level** is the rule book that tells each chef how much of the other chefs’ work they can see while cooking.

* **Read Uncommitted** – A chef can taste another’s unfinished sauce, so their dish may change unexpectedly.  
* **Read Committed** – A chef only sees sauces that are finished and plated; no half‑cooked surprises.  
* **Repeatable Read** – Once a chef picks up a sauce, they keep the same one for the whole meal; it won’t shift even if another chef finishes a new batch.  
* **Serializable** – The kitchen turns into a single‑chef line: chefs take turns completely, so no dish ever interferes with another.

These levels let database users balance speed (looser rules) against safety and consistency (tighter rules).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
