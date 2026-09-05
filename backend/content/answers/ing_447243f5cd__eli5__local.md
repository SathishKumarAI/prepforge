---
qid: ing_447243f5cd__eli5__local
question: 'Explain: A customer 10x''d their indexed documents and reports answer quality
  "got noticeably worse." Drive the investigation.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 348
total_tokens: 519
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:25:10-05:00'
sources: []
---

Imagine your AI is a librarian who answers questions by looking up books (the indexed documents). You told the librarian to read ten times as many books, hoping for better answers. Instead, the answers got fuzzier and wrong more often—like the librarian now has too many shelves and can’t find the right book quickly.

**Why might this happen?**

1. **Too much noise:** Adding lots of documents can drown out the useful ones, just like a crowded shelf makes it hard to spot the right title.
2. **Index overload:** The system’s search engine (the librarian’s memory) may not scale well; more books mean slower, less precise lookup.
3. **Quality vs quantity:** If many new docs are poorly written or irrelevant, they can mislead the AI, similar to having a shelf full of junk books.

**How to investigate:**

1. **Check the index health:** Look for errors or corrupted entries that might have crept in when you bulk‑added documents.
2. **Sample recent queries:** Compare old answers with new ones on the same questions; see if the AI is pulling from wrong sections.
3. **Profile search speed and hit rates:** If searches are slower or return many low‑confidence results, the index may be overloaded.
4. **Review document relevance:** Randomly inspect newly added docs to confirm they actually help answer typical queries.

Fixing it often means cleaning up the extra “junk” shelves, tuning the search algorithm for larger volumes, and ensuring each new book truly adds value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
