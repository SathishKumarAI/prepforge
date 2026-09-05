---
qid: ing_024ab4dde8__eli5__local
question: 'Explain: Summary — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 254
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:38:38-05:00'
sources: []
---

**Sharding in machine‑learning systems**

Think of a huge library that holds millions of books (your training data). If one librarian had to read every book, it would take forever. Instead, the library is split into *shards*—small, self‑contained sections each handled by its own librarian.  
In ML, sharding means dividing your dataset or model parameters into independent chunks that live on different machines. Each shard can be processed in parallel: one server trains on its slice of data, another on a different slice, and so on. Once all servers finish, their results are combined (like librarians returning books to the main shelf).  

**Key terms**

- **Shard:** A self‑contained piece of data or model that is stored and processed separately.
- **Horizontal sharding:** Splitting by rows (e.g., different subsets of samples).
- **Vertical sharding:** Splitting by columns (e.g., different feature groups).

Sharding speeds up training, scales to massive datasets, and keeps memory usage manageable—just as a library with many librarians can serve readers much faster than one with only one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
