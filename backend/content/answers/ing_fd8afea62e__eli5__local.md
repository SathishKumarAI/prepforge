---
qid: ing_fd8afea62e__eli5__local
question: 'Q: How do you balance dense vs sparse in hybrid search?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 262
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:16:38-05:00'
sources: []
---

Think of a library that mixes two kinds of books.  
*Dense‑style books* are like encyclopedias—every page has many facts, so you can find an answer by looking at a few key sections (the “dense” part).  
*Sparse‑style books* are index cards—each card holds one idea, and the library keeps a huge list of them. To find something you need to scan that list for matching keywords (the “sparse” part).

A hybrid search is like having both: first skim the encyclopedia pages (dense vectors) to get a rough idea, then check the index cards (sparse vectors) for exact matches. Balancing them means deciding how much time to spend on each. If you rely too heavily on the dense side, you might miss precise facts; if you lean only on the sparse side, the search can be slow and noisy. The trick is to set a threshold that tells the system when a rough answer from the dense part is good enough to stop searching the sparse list—just like deciding whether a quick glance at an encyclopedia page is enough or if you need to look up the detailed index card next.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
