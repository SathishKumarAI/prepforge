---
qid: vq_dba5c3a938__think__local
question: WHAT HAPPENS WHEN A TRANSACTION IS ROLLED BACK?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 448
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:31:14-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *Assume* a relational database with ACID semantics, not an in‑memory data structure or a NoSQL store that behaves differently.  
- *Clarify* what “rolled back” means: the transaction has been aborted (by error or explicit `ROLLBACK`) and all its changes must be undone.

**2️⃣ Mental model / framework**  
Think of a transaction as a *buffered write set* plus an *undo log*.  
- **Write set**: new values that will be committed.  
- **Undo log**: the previous state for each modified row, written before the change is applied (write‑ahead logging).  

During rollback you read this undo log and restore each row to its prior value.

**3️⃣ Step‑by‑step reasoning**  
1. Transaction starts → locks acquired, write buffer created.  
2. Each update writes the old tuple into the undo log *before* modifying it in place (or logs a “delete” record).  
3. If an error or explicit `ROLLBACK` occurs:  
   - The engine reads the undo log entries in reverse order.  
   - For each entry, it restores the original data (overwrites the dirty pages) and releases locks.  
4. The transaction is marked aborted; no commit timestamp is issued.  

**4️⃣ Common traps to avoid**  
- Assuming the database “just forgets” changes – it actually rewrites them.  
- Forgetting that some systems use *redo* logs for durability, but rollback relies on undo.  
- Overlooking that locks must be released even if the data pages are still dirty until rollback completes.

**5️⃣ Sanity‑check & communicate**  
Ask: “Does every modified row have a corresponding undo record?” If yes, the engine can restore state. Explain to others by comparing it to an “undo stack” in a text editor – each change is pushed onto the stack and popped when you hit `Ctrl+Z`. This analogy helps internalize that rollback undoes all changes made during the transaction.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
