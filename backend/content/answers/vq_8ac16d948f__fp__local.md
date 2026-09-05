---
qid: vq_8ac16d948f__fp__local
question: What are the different events in Triggers ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 429
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:45:03-05:00'
sources: []
---

In a relational DBMS a **trigger** is an implicit stored procedure that the engine fires automatically when a DML event occurs on a table (or view).  
The *events* are derived from the set of operations that can alter data:

| Event | What it signifies |
|-------|-------------------|
| `INSERT` | A new row is added. |
| `UPDATE` | One or more columns of an existing row change. |
| `DELETE` | An existing row is removed. |

Each event can be classified by *when* the trigger runs:

* **BEFORE** – before the DML statement actually executes; useful for validation or defaulting.
* **AFTER** – after the statement has succeeded; good for auditing, cascading actions, or updating dependent tables.
* **INSTEAD OF** (view only) – replaces the original operation entirely.

And by *scope*:

* **FOR EACH ROW** – invoked once per affected row; gives access to `OLD` and `NEW` values.
* **STATEMENT** – invoked once per statement regardless of how many rows it touches.

Thus, a full trigger specification is `<when> <event> [FOR EACH ROW | STATEMENT]`.

### Non‑obvious insight  
The order of execution matters: *BEFORE* triggers fire before any row-level constraints, so they can suppress an insert by raising an error; *AFTER* triggers run after all constraint checks. When a trigger itself issues DML on the same table, it creates a **cascading chain** that follows the same rule set, which can lead to recursion or deadlocks if not carefully controlled. Understanding this hierarchy is key to designing safe, deterministic triggers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
