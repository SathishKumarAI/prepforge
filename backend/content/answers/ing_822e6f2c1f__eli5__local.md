---
qid: ing_822e6f2c1f__eli5__local
question: 'Explain: Title: The Missing Memory Hierarchy: Demand Paging for LLM Context
  Windows'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 229
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:03:07-05:00'
sources: []
---

Imagine your brain is a huge library, but you can only keep a few books in your hands at once. Every time you need a page from a book you’re not holding, you call the librarian to bring it out—this is *demand paging*. In large language models (LLMs), the “books” are chunks of text that the model needs to understand its context window (the part of the conversation or document it can see at one time). The “memory hierarchy” would be like having a set of shelves: quick‑access micro‑shelves for the most recent words, slower shelves for older ones, and a huge basement for everything else. But many LLMs skip those middle shelves; they pull needed text directly from slow storage whenever it’s missing, just like calling the librarian each time. This “missing memory hierarchy” means the model must fetch context on demand, which can slow down responses and waste bandwidth—just as pulling a book from the basement is slower than flipping to a page in your hand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
