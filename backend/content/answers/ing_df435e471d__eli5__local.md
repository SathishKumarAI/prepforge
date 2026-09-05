---
qid: ing_df435e471d__eli5__local
question: 'Explain: Solutions — Cache Miss Attack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 266
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:29:08-05:00'
sources: []
---

**Cache‑miss attacks are a stealthy way to peek at what a machine‑learning model is doing, even though you can’t see the model’s inner workings.**

Imagine a library where books (data) are stored on shelves that are too high for quick reach. The librarian (the computer) pulls a book from a shelf and reads it; if the book was already on a lower “quick‑access” shelf, she does it in one smooth motion—this is a *cache hit*. If the book isn’t there, she must climb up to fetch it—this is a *cache miss*, which takes noticeably longer. An attacker watches how long each request takes. By timing these delays, they can infer whether the model accessed certain pieces of information (e.g., specific weights or inputs). Over many queries, this reveals patterns that let the attacker reconstruct or guess parts of the model—much like a thief learning where valuable books are kept by noting which shelves take longer to reach.

*Cache miss*: a memory access that isn’t found in the fast “cache” and must be fetched from slower main memory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
