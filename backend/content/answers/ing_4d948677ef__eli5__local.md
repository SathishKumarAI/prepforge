---
qid: ing_4d948677ef__eli5__local
question: 'Explain: URL Deduplication — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 215
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:40:12-05:00'
sources: []
---

Imagine a librarian who scans every book in a library, but the library has many copies of the same title. The librarian’s job is to keep only one copy for each unique book while still knowing where all the others are.  
In web crawling, a **URL** (Uniform Resource Locator) is like the title of a book—it tells the crawler where a page lives on the internet. **Deduplication** means checking new URLs against a list of ones already seen so the crawler does not fetch the same page twice. The system keeps a fast “index” (a set or hash table) that stores each URL once; before downloading, it looks up the URL in this index. If it’s there, the crawler skips it; if not, it downloads and adds the URL to the index. This way, resources are saved, bandwidth is used wisely, and every unique page is still captured.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
