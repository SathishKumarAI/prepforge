---
qid: vq_2523e392db__eli5__local
question: WHAT ARE THE DIFFERENT TYPES OF SQL STATEMENTS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 271
total_tokens: 430
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:05:57-05:00'
sources: []
---

Think of a kitchen where you’re preparing a meal.  
* **Data Definition Language (DDL)** – the chef’s recipe book. It tells the kitchen what dishes exist and how they’re made: `CREATE TABLE` builds a new dish, `ALTER TABLE` changes its ingredients, and `DROP TABLE` removes it entirely.  
* **Data Manipulation Language (DML)** – the daily cooking routine. You *add* food with `INSERT`, *change* it using `UPDATE`, *remove* portions via `DELETE`, and *look at* the current plate with `SELECT`.  
* **Data Control Language (DCL)** – the kitchen manager’s permissions list. With `GRANT` you give a cook the right to serve a dish, while `REVOKE` takes that permission away.  
* **Transaction Control Language (TCL)** – the safety net. `BEGIN TRANSACTION` starts a batch of steps; if everything goes well you `COMMIT` to keep them, but if something breaks you `ROLLBACK` and undo all changes.  

Together these statements let you build, change, protect, and reliably manage your data kitchen.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
