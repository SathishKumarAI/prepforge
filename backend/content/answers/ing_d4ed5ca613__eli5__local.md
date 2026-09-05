---
qid: ing_d4ed5ca613__eli5__local
question: 'Explain: Distillation for reasoning — On-Policy Distillation - Thinking
  Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 235
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:12:06-05:00'
sources: []
---

Imagine a seasoned chess player (the **teacher**) who has spent years learning from grandmasters and thousands of games. She wants to train a young apprentice (the **student**) quickly, so she shows the apprentice only the moves she *would actually play* in a real game, not just any possible move.  

In machine‑learning terms, that teacher is an expert policy that decides which action to take given a state. **On‑policy distillation** means we let the student learn from the teacher’s *own* future actions as they happen—just like the apprentice watching the teacher’s live game. The student records each state and the corresponding action chosen by the teacher, then trains itself to imitate that behavior.  

The key idea: instead of learning from a static dataset of past moves (off‑policy), the student learns from what the teacher *actually does* while playing. This keeps the training aligned with the real environment the agent will face, making the student’s decisions more reliable when it later plays on its own.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
