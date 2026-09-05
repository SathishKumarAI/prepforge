---
qid: ing_3206a0b640__eli5__local
question: 'Explain: Conditional Update — How Uber Serves Over 40 Million Reads Per
  Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 233
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:55:00-05:00'
sources: []
---

Think of Uber’s system as a huge library that holds every ride request and driver location in one big book (the online storage).  
When a rider asks for a car, the “conditional update” rule says: **only change the page if it still has the same number on its front cover**. That means two people can look at the same page at once; only the first who sees the right number will rewrite it, and the others see no conflict.

To keep the library from getting slammed by 40 million questions a second, Uber keeps a small “quick‑look” copy of the most popular pages in memory—like a photocopy shelf next to the main book.  
If a request hits that shelf, the answer comes instantly; if not, it fetches the page from the big book and then stores a fresh copy on the shelf for future readers.

So Uber reads fast because it lets many people look at the same data simultaneously (conditional update) and serves most requests from a tiny, lightning‑fast cache.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
