---
qid: ing_6177b1b13d__eli5__local
question: 'Q: ColBERT stores one vector per token. How does it scale, and what are
  the storage tradeoffs?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 211
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:10:54-05:00'
sources: []
---

Imagine a library where every book is split into individual pages, and each page gets its own “summary card” that tells you exactly what that page contains. ColBERT does something similar for text: it turns every token (a word or punctuation mark) into a tiny vector—a short list of numbers—that captures its meaning in context. Because the vectors are very small (just dozens of numbers), storing one per token is still manageable even for large documents; it’s like having a card for each page instead of one for the whole book.

The trade‑off is that you need more cards: the total storage grows linearly with the number of tokens. But this gives ColBERT fine‑grained control, letting it compare parts of sentences directly and speed up searches. So, while memory usage increases compared to methods that keep only one vector per sentence, the extra cost is worth the sharper, faster matching it provides.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
