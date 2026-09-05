---
qid: ing_1eb365f7d3__eli5__local
question: 'Q2: When would you choose RAG over fine-tuning, and vice versa?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 251
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:24:57-05:00'
sources: []
---

Think of a chatbot as a chef who can either learn to cook from scratch or borrow recipes on the fly.

**Fine‑tuning is like teaching the chef to make dishes from a fixed cookbook.**  
You train it once, so it remembers all the ingredients and steps for that specific menu. It’s great when you want consistent style, high quality, and no extra cost during serving—like answering legal questions with a narrow, well‑known set of facts.

**Retrieval‑Augmented Generation (RAG) is like giving the chef a smart kitchen assistant that can fetch fresh recipes whenever needed.**  
The model still learns general cooking skills, but when it faces a new topic, it pulls in up‑to‑date documents or PDFs to base its answer on. Use RAG when the subject matter keeps changing (news, product specs) or you need to incorporate huge external knowledge without retraining.

So: fine‑tune for stable, high‑performance domains; choose RAG when flexibility and up‑to‑date data are more important.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
