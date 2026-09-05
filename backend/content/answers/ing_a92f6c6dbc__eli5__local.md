---
qid: ing_a92f6c6dbc__eli5__local
question: 'Explain: Softmax ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 210
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:06:07-05:00'
sources: []
---

Imagine you’re at a giant library where every book (a word) wants to know how much it should “listen” to every other book when writing a sentence.  
Soft‑max is the polite way the books give each other a score: they first compare their “interest” values, then turn those raw numbers into probabilities that add up to 1—so each book knows exactly how much attention to pay.

In **paged attention** (used in vLLM), the library has many floors. Instead of all books talking at once, each floor only talks to the books on its own floor and a few neighboring floors. This limits the conversation to a “page” of books, saving memory while still letting every book understand most others.

So soft‑max turns raw interest into fair attention weights, and paged attention keeps that process efficient by confining conversations to nearby groups of books.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
