---
qid: ing_ba489535aa__eli5__local
question: 'Explain: Cache Invalidation Strategies — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 261
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:32:31-05:00'
sources: []
---

Think of a huge library that keeps a copy of every book on a fast‑access shelf (the cache). When the publisher updates a book, the library must decide whether to pull that book off the shelf so readers see the newest version or leave it until someone asks for it again.  

**Cache invalidation** is the rule set that tells the system when to remove or update those copies.  
* **Write‑through**: every time the publisher changes a page, the library immediately updates the shelf copy—fast but can slow the publisher’s work.  
* **Write‑back**: the library waits until someone reads the book again before updating the shelf—faster for writers but risk showing old pages to readers.  
* **Time‑to‑live (TTL)**: each shelf copy expires after a set time, then is refreshed on next request—simple but may show stale data briefly.  

At scale, you combine these strategies with “event notifications” that instantly flag shelves when a book changes, keeping millions of readers in sync without overwhelming the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
