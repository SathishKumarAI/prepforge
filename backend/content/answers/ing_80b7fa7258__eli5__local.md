---
qid: ing_80b7fa7258__eli5__local
question: How does serving a large sparse mixture-of-experts model differ from serving
  a dense model, and what does expert parallelism change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 243
total_tokens: 416
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:00:44-05:00'
sources: []
---

Imagine you’re in a big library that can answer any question.  
A **dense** AI is like one giant librarian who knows everything: every time someone asks a question, she has to read through all her notes (the whole model) to give an answer. It’s reliable but slow because she always processes the same huge stack of books.

A **sparse mixture‑of‑experts** model is different. Think of it as many specialized librarians—one for math, one for cooking, one for history, etc.—but only a few of them are called upon for any particular question. The system first picks which experts (librarians) to consult and sends the query only to those chosen ones. Thus most of the model’s parameters stay idle most of the time, making inference faster.

**Expert parallelism** is like assigning each librarian to a separate desk in different rooms. When many questions arrive, all librarians can work simultaneously on their own tasks instead of waiting for one by one. This lets the system serve many users at once and keeps latency low even when the model contains thousands of experts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
