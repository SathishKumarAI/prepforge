---
qid: ing_1aa4c6f042__eli5__local
question: 'Explain: qk_max and logits ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 227
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:18:31-05:00'
sources: []
---

Imagine your brain is a librarian who wants to find the most relevant books (tokens) for a reader’s question.  
In *paged attention* the library first looks at a small “page” of books instead of the whole shelf, because the shelf can be huge.

**qk_max** is like a quick “shelf‑scan score.” For each book on that page we compute how well its title (the key) matches the reader’s question (the query). We keep only the highest match for each book.  
This tells us which books are worth keeping on the shelf while ignoring low‑matching ones.

**logits** are the final “interest scores” after we add a small bonus to every book that survived the scan. They’re used by the system to pick the best books to show next, just like a recommendation engine decides which titles to recommend.

So, qk_max trims the shelf; logits give the final ranking—both make finding the right answer faster and smarter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
