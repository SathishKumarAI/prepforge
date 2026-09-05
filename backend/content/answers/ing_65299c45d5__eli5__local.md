---
qid: ing_65299c45d5__eli5__local
question: 'Explain: Concepts ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 253
total_tokens: 412
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:16:21-05:00'
sources: []
---

**Paged Attention – a “library‑in‑memory” trick**

Imagine you’re reading a giant novel that can’t fit on your desk (the GPU memory). You keep only the pages you’re looking at, and you bring new pages from a shelf when needed. Paged attention does exactly that for AI models: it keeps only the parts of the huge “attention matrix” (the table that tells every word which other words to look at) that fit on the GPU, while the rest stays on slower storage. When the model needs a different part, it swaps in the required “page.”  

*Key terms:*  
- **Attention matrix** – a grid showing how each token attends to every other token.  
- **GPU memory** – fast but limited RAM inside the graphics card.  
- **Paged attention** – swapping small chunks of that matrix on‑and‑off so the model can run huge sequences without running out of space.  

This lets vLLM handle very long inputs with modest hardware, just like a librarian fetching only the needed pages from a shelf.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
