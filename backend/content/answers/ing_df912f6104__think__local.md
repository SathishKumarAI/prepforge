---
qid: ing_df912f6104__think__local
question: 'Explain: Durability: — ACID Properties in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 420
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:43:55-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   • Confirm that the audience knows basic DBMS concepts (transactions, logs).  
   • State that *Durability* is one of the four ACID properties and it guarantees persistence after commit.

**2️⃣ Adopt a mental model**  
   • Treat a transaction as a “commit” event.  
   • Think in terms of “before‑image” → “after‑image” + *write‑ahead logging*.  
   • Map durability to real‑world guarantees: “once you see the result, it will stay even after crashes”.

**3️⃣ Step‑by‑step reasoning**  
   1. **Write‑Ahead Log (WAL)** – changes are first recorded in a log on stable storage.  
   2. **Commit Point** – when a commit record is flushed to disk, the transaction is considered durable.  
   3. **Recovery Phase** – upon restart, replay the WAL up to the last committed record; undo any incomplete ones.  
   4. **Hardware failure** – because logs are on non‑volatile media, re‑application restores all committed changes.

**4️⃣ Common pitfalls to avoid**  
   • Mixing *Atomicity* (all-or-nothing) with Durability—durability only matters after a successful commit.  
   • Assuming durability means “data never disappears”; it actually means “once committed, data will survive crashes”.  
   • Forgetting that the log itself must be written to stable storage before acknowledging commit.

**5️⃣ Sanity‑check & verbalize**  
   • Ask: “If I crash now, will my committed rows still exist?” → Yes.  
   • Summarize: *Durability* = “commit ↔ persistent on disk; recovery replays log to reach that state”. This keeps the explanation concise yet complete.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
