---
qid: vq_17a4f02437__eli5__local
question: WHAT IS AN EXPLICIT TRANSACTION?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 212
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:03:58-05:00'
sources: []
---

Think of an explicit transaction like a “cook‑by‑recipe” order at a restaurant.  
You tell the kitchen **exactly** when to start cooking (BEGIN), what dishes you want (the SQL statements), and then say **“please finish and serve everything together”** (COMMIT). If something goes wrong—say the sauce is too salty—you can shout “STOP!” and ask the kitchen to discard all the work done so far (ROLLBACK) as if it never happened.

In database terms, an explicit transaction is a block of commands that you control with three clear signals:  
1. **BEGIN** – start the transaction; 2. **COMMIT** – make all changes permanent together; 3. **ROLLBACK** – undo every change if anything goes wrong.  

This guarantees that either everything inside the block succeeds as one unit, or nothing at all is saved, keeping data consistent and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
