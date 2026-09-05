---
qid: ing_f609702b22__eli5__local
question: 'Explain: Attention cost and FlashAttention — Llm Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 191
total_tokens: 349
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:04:22-05:00'
sources: []
---

Imagine a huge library where every book (token) can look at every other book to decide what’s most important for the next page you’re writing. That “looking around” is **self‑attention**. The more books you have, the longer it takes—just like the time and memory needed grow with the square of the number of tokens.  

**FlashAttention** is a clever librarian who first groups books into small piles (blocks), reads each pile quickly, and only then mixes the most relevant pieces from different piles. By re‑ordering the work and using fast, low‑memory operations, it keeps the same quality but cuts the cost by about ten‑fold. Think of it as reorganizing the library so you can find what matters faster without losing any information.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
