---
qid: ing_f575b7c6aa__eli5__local
question: 'Explain: ​ Examples — Evaluation concepts - Docs by LangChain'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 252
total_tokens: 411
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:03:24-05:00'
sources: []
---

Imagine you’re teaching a robot how to write recipes, and you want to make sure it’s doing a good job. **Evaluation** is the way we check that the robot’s answers are tasty, clear, and useful—just like taste‑tests for food.

In LangChain, evaluation concepts let you set up “recipe tests” automatically:

1. **Metric** – A rule that says how to score an answer (e.g., “did it include all required ingredients?”).  
2. **Prompt** – The exact question we ask the robot (“Give me a 5‑ingredient recipe for vegan lasagna.”).  
3. **Ground truth** – A trusted example answer we compare against.  
4. **Evaluator function** – A small program that takes the robot’s reply, the prompt, and the ground truth, then outputs a score or flag.

You can chain many of these together so every time LangChain generates text it gets checked, just like a kitchen monitor ensures each dish meets standards before it reaches the table. This keeps the AI reliable without having to read every single line yourself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
