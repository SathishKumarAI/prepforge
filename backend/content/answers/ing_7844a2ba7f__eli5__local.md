---
qid: ing_7844a2ba7f__eli5__local
question: 'Q: How do you handle reranking for extremely long queries (e.g., a whole
  paragraph)?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 197
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:47:16-05:00'
sources: []
---

Imagine you’re at a huge library and you hand the librarian a full novel as a “search request.” The librarian can’t read the entire book in one go, so she first pulls out a handful of books that look promising based on the title or a few keywords—this is your **initial ranking**.  
Now she needs to decide which of those books actually answers your question best. She goes back and reads the relevant chapters of each candidate book (the “reranking” step). By comparing how well each chapter matches your exact query, she reorders them so that the most useful one appears first.  

So, for extremely long queries, systems first do a quick pass to gather likely hits, then perform a deeper, focused review—just like the librarian’s rereading—to reorder results so the best match leads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
