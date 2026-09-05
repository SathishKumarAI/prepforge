---
qid: ing_e8f1115012__eli5__local
question: 'Explain: exp_sum ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 261
total_tokens: 421
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:44:02-05:00'
sources: []
---

Imagine a huge library where each book is a chunk of text and the reader (the AI) wants to find the most relevant page quickly.  
In *paged attention*, the reader looks at one “page” at a time, remembers how interesting it was, then moves on—just like a student flipping through pages in a textbook instead of reading the whole book all at once.

The **exp_sum** is the tally sheet that keeps track of how many times each page’s content was deemed important.  
When the reader checks a new page, it adds an “interest score” (a soft‑max weight) to that page’s entry in exp_sum.  
Later, when the reader needs to decide which pages to revisit, it divides each page’s current interest by its accumulated total from exp_sum—just as a student would give more attention to pages that have been repeatedly highlighted.

So, exp_sum is simply a running sum of “interest counts” for every page (or token block) in paged attention.  
It lets the model know how often it has considered each part important, enabling efficient and accurate focus on the most relevant text.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
