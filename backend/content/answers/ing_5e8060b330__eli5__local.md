---
qid: ing_5e8060b330__eli5__local
question: 'Explain: Durability Settings Matter — ACID Transactions | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 286
total_tokens: 447
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:06:09-05:00'
sources: []
---

Imagine a library that keeps books (your machine‑learning model parameters) on shelves.  
**Durability** is the promise that once a book is put back on the shelf, it will stay there even if the lights go out or the librarian gets distracted. In database terms, durability guarantees that committed data survives crashes.

Think of **ACID transactions** as a careful process for moving books:

- **Atomicity** – either all books are moved together or none are.
- **Consistency** – shelves always end up in a valid state (no missing titles).
- **Isolation** – one librarian’s moves don’t interfere with another’s.
- **Durability** – once the move is finished, the new arrangement is written to a hard‑copy ledger that survives power loss.

In a machine‑learning system, you may store weights or checkpoints in a database. If durability settings are lax (e.g., “write‑through” disabled), a sudden crash could erase a freshly trained checkpoint, forcing you to retrain from scratch. Tightening durability means the system writes every committed update to stable storage before acknowledging success, ensuring your model never loses its latest progress. This is vital when training takes hours or days—just as a library’s books must stay safe between visits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
