---
qid: ing_efcc2ee641__eli5__local
question: 'Explain: QK ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 212
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:54:13-05:00'
sources: []
---

**Paged Attention – a “library‑shelf” trick for huge AI models**

Imagine an enormous library (the model) that needs to read many books (past words) while writing a new chapter (generating the next word). Normally, every time you write, you’d scan the entire library—slow and memory‑heavy.  

Paged Attention in *vLLM* is like giving the writer a smart set of shelves: only the most relevant books are placed on the shelf for quick reference; the rest stay tucked away in storage that can be pulled out when needed. The model keeps “pages” (small, fixed‑size blocks) of past activations in fast memory and loads them on demand, instead of holding everything all at once. This lets it process long sequences quickly while using far less RAM—just like a writer who only carries the essential pages in their bag, not the whole library.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
