---
qid: ing_51d9b552ac__eli5__local
question: Sources change constantly. How do you keep the vector index in sync - including
  deletes?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 243
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:46:50-05:00'
sources: []
---

Imagine your AI’s knowledge base as a giant, ever‑growing library. Each book is a “document,” and the library’s catalog (the *vector index*) tells you where every book sits on the shelf. When new books arrive, you add them to the catalog—just like inserting a new vector into the index.  

When a book gets torn out or no longer needed, you must remove it from both the shelves **and** the catalog. In practice we do this with two steps:  
1. **Delete command** – tell the system “remove this document.” The index marks its spot as empty and updates any related summaries (like re‑balancing a tree).  
2. **Rebuild or lazy clean‑up** – periodically, the library runs a background job that rewrites the catalog to skip the deleted spots, keeping searches fast.

So the index stays in sync by actively deleting entries when documents change and occasionally reorganizing itself to stay tidy—just like a librarian who keeps both shelves and the book list up to date.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
