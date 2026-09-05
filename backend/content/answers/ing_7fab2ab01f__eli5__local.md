---
qid: ing_7fab2ab01f__eli5__local
question: 'Explain: Adaptive Timeouts — How Uber Serves Over 40 Million Reads Per
  Second from Online Storage Using an Integrated Cache'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 233
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:59:13-05:00'
sources: []
---

Think of Uber’s data system like a huge library that can’t keep every book on the shelf because there are so many books (data) and readers (requests). Instead, it keeps a “quick‑look” desk (the cache) with the most popular books ready to hand out.

When someone asks for a page, the library first checks the quick‑look desk. If the book is there, it’s handed over in milliseconds—just like a cached read. If not, the system fetches it from the full library on disk, but it does so with a *timeout* that adapts to how busy things are: when traffic spikes, the timeout shortens so the user gets a prompt “sorry, we’re busy” instead of hanging forever; during quiet times it can wait longer for the best copy.

By constantly tuning these timeouts and keeping the most‑needed pages in the quick‑look desk, Uber can hand out over 40 million reads every second without overwhelming its storage.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
