---
qid: ing_fed81fcb21__eli5__local
question: 'Explain: Code-based evals (fast, cheap, deterministic)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 234
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:18:43-05:00'
sources: []
---

Think of an AI as a chef who learns recipes from books.  
A **code‑based evaluation** is like giving the chef a quick test kitchen: you hand them a single, simple recipe (the code), ask them to cook it in exactly five minutes, and then taste the dish. Because the recipe is fixed, the judge knows exactly what the outcome should be—there’s no guessing about flavor or texture—and the test can be run many times on any computer at almost no cost.

In this analogy:  
- **Fast** – The chef cooks in seconds; we don’t wait for a long banquet.  
- **Cheap** – We use a small pot, not a full kitchen, so resources are minimal.  
- **Deterministic** – The same recipe always yields the same dish, so every run gives the same result.

Thus code‑based evals let us quickly and reliably check whether an AI “knows” how to execute a specific instruction, without expensive or variable experiments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
