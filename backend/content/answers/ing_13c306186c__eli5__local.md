---
qid: ing_13c306186c__eli5__local
question: Design the smallest RAG system that could work for "chat with our docs."
  When do you need more - and when is RAG the wrong call?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 287
total_tokens: 465
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:06:43-05:00'
sources: []
---

Imagine you’re a librarian who can instantly pull the right page from any book and then answer questions in plain English. That’s the core of a Retrieval‑Augmented Generation (RAG) system:  
1. **Store** – put every paragraph of your documents into a searchable “index” (think of it as a giant, organized filing cabinet).  
2. **Retrieve** – when someone asks a question, quickly fetch the few most relevant pages from that index.  
3. **Generate** – feed those pages into a language model and let it weave them into a clear answer.

The smallest working RAG needs only these three parts: an indexing tool (e.g., ElasticSearch), a tiny retrieval step, and a lightweight generative model.  

Use more resources when your documents grow huge or the questions become highly specialized—then you might need smarter ranking or larger models.  
If the task is purely factual lookup or requires strict compliance with up‑to‑date data, pure retrieval (no generation) may be safer; RAG can hallucinate, so it’s a bad fit for safety‑critical answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
