---
qid: ing_3508bc9220__eli5__local
question: 'Explain: Comparison — Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 228
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:59:47-05:00'
sources: []
---

Think of a library that’s always busy. Every time someone asks for a book, the librarian can either (1) fetch it from the back shelf every single time or (2) keep a few popular titles on a small “quick‑access” shelf near the desk.  
In computer systems this quick‑access shelf is called **caching**. Different caching strategies decide how that shelf is filled and when books are removed:

* **Least Recently Used (LRU)** – keep the books people have read most recently; drop the one nobody touched in a while.  
* **Most Frequently Used (MFU)** – keep the books that were requested many times, regardless of how long ago.  
* **First‑In, First‑Out (FIFO)** – simply throw away the oldest book when space runs out, no matter its popularity.

Choosing the right strategy is like deciding which books stay on the desk so patrons get what they need quickly while keeping the shelf from getting overcrowded.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
