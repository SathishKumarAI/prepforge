---
qid: ing_05c1a534f3__eli5__local
question: 'Explain: Design an answer engine: a user types a question and gets a cited,
  streamed answer. Your end-to-end budget is 3 seconds to a complete short answer.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 239
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:44:31-05:00'
sources: []
---

Think of the system as a very fast librarian who can fetch a book, read the right paragraph, and hand it to you before you finish your coffee.

1. **Ask** – The user’s question is sent to a tiny “index” that has already looked at every page in the library and stored where useful sentences live (a keyword map).  
2. **Find** – The index tells the librarian which books and pages likely contain the answer, and gives a short list of those exact locations.  
3. **Read & Cite** – A lightweight reader opens only those pages, pulls out the relevant sentence, and tags it with its book title and page number (the citation).  
4. **Stream** – The sentence is sent immediately to the user’s screen while the rest of the answer is still being fetched in parallel; if more detail is needed, the next chunk streams right after.  

All this happens in under three seconds because we avoid full‑text searches and heavy math—just a quick lookup, a tiny read, and a prompt send.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
