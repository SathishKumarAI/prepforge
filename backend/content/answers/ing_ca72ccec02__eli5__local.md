---
qid: ing_ca72ccec02__eli5__local
question: 'Explain: Metadata Storage — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 229
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:56:07-05:00'
sources: []
---

Think of a web crawler as a curious explorer with a notebook that records every trail it walks.  
The **metadata storage** is that notebook’s back‑up library: a place where the crawler keeps quick facts about each webpage it visits—its address (URL), size, type of content, when it was last seen, and what other pages link to it.  

When the explorer finds a new path, instead of writing every word from the page into the notebook, it writes just the essential tags: “Page A – 12 KB, PDF, visited 2024‑09‑01, linked by Page B.” Later, if the explorer needs to decide which trail to follow next or whether a page has changed, it can read these tags instantly without re‑scanning the whole document.  

So, metadata storage is like a quick‑reference index that lets the crawler know *what* and *where* each piece of information lives, saving time and memory—just as a traveler uses a map to navigate efficiently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
