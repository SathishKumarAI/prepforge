---
qid: ing_42fc2b3dc6__eli5__local
question: How do you keep a RAG index fresh as documents change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 206
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:22:40-05:00'
sources: []
---

Think of your RAG index like a giant library shelf that only shows the books you need right now. When a book (document) is updated, the shelf must decide whether to replace its old copy or add a new one.

**The trick is “watch‑and‑replace.”**  
1. **Watch:** Every document gets a tiny “last‑updated” stamp. The system scans for any stamps that are newer than the version it already has on the shelf.  
2. **Replace or Add:** If the new stamp is newer, the old book is taken off and swapped for the fresh copy; if nothing changed, the shelf stays as it was.

Just like a librarian who checks each book’s cover date before re‑shelving, this keeps the RAG index up‑to‑date without rebuilding everything from scratch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
