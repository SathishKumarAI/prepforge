---
qid: ing_d5622e00cf__eli5__local
question: What are reasoning models, and how does test-time compute change the picture?
  When would you use one versus a standard model?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 205
total_tokens: 377
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:12:49-05:00'
sources: []
---

Think of an ordinary AI model as a quick‑fire calculator: it takes an input, looks up a pre‑trained table of answers, and spits out the result in one step. A **reasoning model** is more like a detective who can ask follow‑up questions before reaching a conclusion. It keeps a tiny “brain” alive during inference, using the input to decide what extra clues to seek and how to combine them. 

Because that detective thinks while answering, it needs more CPU at *test time*—the computer must run extra logic each query—so the model is slower but can handle trickier or unseen situations better. Use a reasoning model when you need flexibility (e.g., open‑ended questions, noisy data) and can afford the extra compute; stick with a standard model for fast, routine predictions where speed matters more than depth of thought.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
