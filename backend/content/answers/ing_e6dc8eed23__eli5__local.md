---
qid: ing_e6dc8eed23__eli5__local
question: 'Explain: Build an in-memory key-value store with SET/GET/DELETE, then add
  transactions with BEGIN/COMMIT/ROLLBACK - including nested transactions.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 296
total_tokens: 475
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:40:53-05:00'
sources: []
---

Imagine you’re writing in a notebook that can be copied and pasted, page by page.  
Each line is a **key** (a label) and the words on it are its **value**.  
The basic commands are:

* **SET key value** – write or rewrite a line.  
* **GET key** – read the current line’s words.  
* **DELETE key** – erase that line.

Now, think of a *transaction* as making a copy of the whole notebook before you start a new set of edits.  
When you **BEGIN**, you’re looking at a fresh page: all changes after this point are written to that copy, not the original.  

If you later **COMMIT**, you flip the copied page into the main notebook—its edits become permanent.  
If you **ROLLBACK**, you discard the copy and keep the original unchanged.

Nested transactions are like putting one notebook inside another: each BEGIN makes a new inner copy. A COMMIT only promotes changes to its immediate outer copy, while a ROLLBACK throws away just that layer. This way, every SET/GET/DELETE stays local until you decide to commit it upward or discard it with rollback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
