---
qid: ing_c0c3d30a10__eli5__local
question: 'Explain: Step 1 — How to Avoid Crawling Duplicate URLs at Google Scale?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 195
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:42:09-05:00'
sources: []
---

Imagine you’re a librarian who wants to catalog every book in the world. If you keep opening the same copy over and over, you’ll waste time and stack shelves of identical books. Google’s crawler is that librarian, but instead of books it reads web pages.  

**Step 1: Spot duplicates before reading them.**  
The crawler first checks a “list” (a hash table) of URLs it has already seen. When a new URL arrives, it quickly compares its address to this list. If the address is already there, the page is skipped—just like putting a duplicate book aside and moving on.  

So, by using a simple lookup of URLs before fetching content, Google avoids re‑reading the same pages, saving bandwidth and keeping its index lean. This early “duplicate check” keeps crawling efficient even at billions of sites.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
