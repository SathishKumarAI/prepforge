---
qid: ing_e436b05b20__eli5__local
question: 'Explain: Output ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 216
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:36:43-05:00'
sources: []
---

Imagine a huge library where each book is a page of text your model has seen. When the model wants to answer a question, it doesn’t read every single page; instead it looks only at the few pages that are most relevant—just like a librarian quickly skimming the right chapters.  

**Paged attention** in vLLM works exactly like that: the model keeps its knowledge split into “pages” (small chunks of memory). When you ask something, it pulls only the necessary pages into view and pays attention to them, ignoring the rest. This saves a lot of memory and speeds up computation because the system never has to load the whole library at once. The term *attention* means the model decides which words or phrases on those pages matter most for answering your question.  

So, paged attention is a smart shortcut that lets large‑scale AI models stay fast and efficient while still giving accurate answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
