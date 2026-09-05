---
qid: ing_2d6e2fcd65__eli5__local
question: 'Explain: Run LLM-based evals separately — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 222
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:47:30-05:00'
sources: []
---

Imagine your AI model is a student taking a test, but instead of one big exam you split it into several mini‑tests that cover different subjects—math, science, history, etc. Running “LLM‑based evals separately” means letting the model answer each mini‑test on its own, then collecting all those answers to see how well it did overall.

**Why do this?**  
- **Clarity:** You can see which subject the model struggles with without other subjects muddying the results.  
- **Fairness:** Each mini‑test is graded by a separate evaluator (like Langwatch or Langfuse), so no single piece of feedback biases another.  
- **Efficiency:** If one mini‑test takes too long, you can pause it and finish the rest.

After all mini‑tests finish, the platform aggregates them into a final score—just like a teacher compiling a report card from each subject grade. This way, you get detailed insight while keeping the overall evaluation organized and transparent.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
