---
qid: ing_6a86d3b079__eli5__local
question: When do you fine-tune versus prompt-engineer versus use RAG?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 263
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:24:53-05:00'
sources: []
---

Think of building an AI assistant like baking a cake.

* **Prompt‑engineering** is the frosting. You’re just adding flavor on top—telling the model exactly what you want in plain language so it gives the right answer without changing its recipe. Use this when the basic model already knows the topic and you only need small tweaks, like “Explain this to a 5‑year‑old.”

* **Fine‑tuning** is rewriting the whole recipe book. You give the model lots of examples from your own domain (legal contracts, medical notes) so it learns new words and styles. Do this when the task is very specific or the data are proprietary and you want consistent, high‑quality responses.

* **RAG (Retrieval‑Augmented Generation)** is like having a pantry that pulls in fresh ingredients while baking. The model stays unchanged but can fetch up‑to‑date documents or facts on demand, then weave them into its answer. Use RAG when the information changes often—news articles, product specs—or when you need precise citations.

So: prompt for quick tweaks, fine‑tune for deep specialization, and RAG for real‑time knowledge updates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
