---
qid: ing_b7866d7245__eli5__local
question: Your product is moving from a standard chat model to a reasoning model with
  extended thinking. What changes for capacity, SLOs, and design?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 310
total_tokens: 486
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:27:26-05:00'
sources: []
---

Imagine your chatbot as a quick‑reply kitchen where chefs (the model) serve simple dishes at speed—just enough to satisfy the usual order volume. Switching to a reasoning model is like turning that kitchen into a gourmet restaurant: the same chefs now have to cook multi‑course meals, plan ingredients, and adjust flavors while keeping diners happy.

**Capacity:** The kitchen needs more space (compute power) because each “dish” takes longer to prepare. You’ll need bigger ovens (larger models or more GPUs) and more staff (parallel workers) to keep up with the same number of customers.

**SLOs (Service Level Objectives):** Response time will naturally increase, so you set new targets—e.g., “30 % of answers arrive within 5 seconds, 70 % within 15 seconds.” You also track accuracy: “95 % of complex queries must be correct.”

**Design:** The software architecture changes from a single‑pass pipeline to a multi‑step workflow. Input goes through a *plan* stage (what to think about), then a *reason* stage (doing the reasoning), and finally an *output* stage (presenting the answer). Each step can have its own timeout, error handling, and logging, so you know exactly where delays or mistakes occur.

In short: more compute, new timing goals, and a layered design that breaks thinking into clear, manageable stages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
