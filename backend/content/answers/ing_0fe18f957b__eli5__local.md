---
qid: ing_0fe18f957b__eli5__local
question: 'Explain: Agentic RAG (Loop-based) — Rag Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 247
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:00:34-05:00'
sources: []
---

Imagine you’re cooking a stew and keep tasting it to decide what’s missing—more salt, a splash of lemon, or an extra herb. **Agentic Retrieval‑Augmented Generation (RAG)** works like that: the AI (the “chef”) first looks up fresh facts from a database (“taste the broth”), then uses those facts to rewrite its answer (“add the right seasoning”).  

In a *loop‑based* RAG, the chef doesn’t stop after one taste. The AI asks for new information, writes an updated response, checks it again, and repeats until the answer feels complete. Think of it as a dialogue with itself: “What do I still need to know?” → “Let’s fetch that.” → “Now can I finish the dish?” This iterative process ensures the final reply is both informed by up‑to‑date data and polished for clarity.  

**Retrieval** = looking up facts; **Generation** = writing text; **Agentic** = the AI decides what to retrieve next, just like a chef deciding what seasoning to add.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
