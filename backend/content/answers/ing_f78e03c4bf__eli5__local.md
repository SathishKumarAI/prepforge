---
qid: ing_f78e03c4bf__eli5__local
question: 'Explain: Search engine — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 210
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:06:56-05:00'
sources: []
---

Imagine a giant library that never closes, where every book is a web page and the librarian’s job is to keep an up‑to‑date catalogue of all the books and their contents. The **web crawler** is like that librarian: it starts at a handful of known pages (the “seed” books), reads them, and follows every link inside—just as a reader would flip to the next book referenced on a page.

As it visits each page, it records key details (title, text, links) into an index, which is what the search engine uses later. If a new book appears in the library, the crawler eventually finds it by following a chain of references, just as a librarian would discover a newly added book through citations or a sitemap.

Thus, a web crawler systematically “crawls” the internet, collecting pages and their links, so the search engine can quickly locate information when you type a query.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
