---
qid: ing_9d8be15917__eli5__local
question: An enterprise customer on Azure wants the model to "know our business."
  Prompting, RAG, or fine-tuning - how do you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 270
total_tokens: 447
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:47:14-05:00'
sources: []
---

Think of your AI as a new employee who needs to understand your company’s “culture.”  
* **Prompting** is like giving the employee a short briefing each time they ask a question—quick but limited; it works well when you only need occasional answers and don’t want to change the employee’s training.  
* **Fine‑tuning** is similar to sending that employee to an intensive training program where they study your company’s manuals, policies, and past projects. They learn the specifics deeply, so future questions are answered with a deep understanding, but it takes time and resources to set up.  
* **Retrieval‑Augmented Generation (RAG)** is like giving the employee a searchable notebook of internal documents that they can consult on demand while answering. The employee still uses its general knowledge but pulls in fresh facts from your own files whenever needed.

Choose **prompting** for quick, low‑cost answers; pick **fine‑tuning** when you need consistent, deep expertise across many interactions; and use **RAG** when the model should stay up‑to‑date with evolving documents without retraining. Each method balances cost, speed, and how tightly the AI “knows” your business.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
