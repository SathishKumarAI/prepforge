---
qid: ing_58dc96e543__eli5__local
question: 'Explain: Web Crawlers — Concurrency vs Parallelism - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 196
total_tokens: 362
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:57:05-05:00'
sources: []
---

Imagine a library where you want to read every book.  
**Concurrency** is like having one librarian who switches between different readers: she gives a bookmark, walks to the next desk, and returns later. The tasks (reading books) overlap in time but only one reader gets real attention at any instant.  

**Parallelism** is having several librarians each with their own desk. They all read different books at the same moment, so many pages are covered simultaneously.

In a web crawler, concurrency lets the program start fetching one page, pause while waiting for the server, and begin another without wasting time. Parallelism runs several fetches at once on separate CPU cores or machines, truly speeding up the crawl. Both help speed things up, but concurrency is about overlapping wait‑times, while parallelism is about doing many tasks literally together.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
