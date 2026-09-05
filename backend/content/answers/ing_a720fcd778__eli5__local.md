---
qid: ing_a720fcd778__eli5__local
question: 'Q83: Llama 4 Scout claims a 10M-token context window, but Fiction.LiveBench
  scores it at 15.6% at 128K tokens. How would you advise a team that wants to "just
  dump everything into Scout''s context"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 218
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:02:44-05:00'
sources: []
---

Imagine the model’s memory like a giant library shelf. The Llama 4 Scout says it can hold **10 million books** (tokens) on that shelf, but when you actually try to put 128 k books on it, only about **16 % of them** stay readable – the rest are lost or garbled.  

Think of a real shelf: if you stack too many books, they topple or get compressed and you can’t find what you need. The model behaves similarly—its architecture can *theoretically* handle more tokens than it’s trained to keep in working memory. When you “dump everything” into Scout’s context, most of that extra text will be ignored or mis‑interpreted.

Advice: feed only the most essential 10–20 k tokens (or less), maybe split longer passages into separate prompts and stitch the answers back together. This keeps the model’s focus sharp and avoids drowning it in noise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
