---
qid: ing_e891eea5f8__eli5__local
question: 'Explain: Web Crawlers — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 217
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:43:25-05:00'
sources: []
---

Think of a web crawler as a curious librarian who visits every book in the library (web pages) and writes down which books it has already read so it never wastes time re‑reading the same one again.  
A **Bloom filter** is like a quick “yes/no” checklist that the librarian keeps on a clipboard. It uses a handful of tiny ink stamps (hash functions). For each book title, the librarian presses a few pens, leaving marks in different spots on the page. When the librarian sees a new title, she checks those spots: if any are blank, it’s definitely new; if all are already marked, it might be a repeat (but there is a small chance of a false “yes”).  
Thus the Bloom filter lets the crawler remember millions of URLs with only a few bytes per URL and a tiny chance of misidentifying a fresh page as old.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
