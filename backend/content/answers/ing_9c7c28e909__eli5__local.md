---
qid: ing_9c7c28e909__eli5__local
question: 'Explain: Result Pagination: — Top 5 Common Ways to Improve API Performance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 291
total_tokens: 454
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:45:28-05:00'
sources: []
---

Think of a library that only shows you five books at a time when you ask for “the best science fiction.” That’s **pagination**—splitting a big list into bite‑sized pages so the server and your app don’t choke on too much data.

Here are the five most common tricks to make an API that returns machine‑learning results run faster:

1. **Limit the size** – ask for only as many items as you really need (e.g., `limit=5`).  
2. **Offset or page number** – jump straight to the part of the list you want (`page=3` or `offset=20`).  
3. **Cursor paging** – use a marker that tells the server where you left off, so it can keep sending the next chunk without recomputing everything.  
4. **Caching** – store recent pages in memory or on disk; the next request for the same page is served instantly.  
5. **Streaming or async responses** – send data as soon as each piece is ready instead of waiting to build the whole list.

With these, your ML API feels quick and snappy, just like flipping through a well‑organized bookshelf.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
