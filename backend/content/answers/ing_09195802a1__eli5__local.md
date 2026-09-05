---
qid: ing_09195802a1__eli5__local
question: Mistral 7B shipped with grouped-query attention and sliding-window attention.
  What does each buy you, and what does each cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 271
total_tokens: 446
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:50:14-05:00'
sources: []
---

Think of a huge library where every book is an “attention query” that wants to read other books (tokens).  
**Grouped‑query attention** is like putting the books into a few “reading circles.” All books in the same circle share one librarian who can answer them together, so the librarian’s work (computations) drops from *every pair* of books to *one per group*. You save time and memory, but if a book needs something that only another specific book knows, it may miss that detail—so you lose some fine‑grained precision.  

**Sliding‑window attention** is like giving each book a small “personal shelf” that holds only the nearest books (within a fixed window). The book can quickly consult its shelf without looking at the entire library, so it keeps most of the useful nearby context while cutting the cost dramatically. However, if you need information from far away in the library, that book can’t see it unless you enlarge the shelf—so you trade off long‑range awareness for speed and lower memory use.  

Both tricks cut computation (cost) but each sacrifices a different type of detail: grouped queries lose fine distinctions between distant books; sliding windows lose very distant context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
