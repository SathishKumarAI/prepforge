---
qid: ing_a312492d9a__eli5__local
question: 'Explain: LLM-as-Judge — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 260
total_tokens: 418
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:56:17-05:00'
sources: []
---

Think of an essay contest where a student’s paper is judged by two people: a human teacher and a smart robot that reads the same essay. The robot (the “LLM‑as‑Judge”) looks at the words, checks for spelling, counts how well arguments flow, and even compares it to thousands of other essays it has read before. It then gives a score and a brief comment, just like the teacher would.

In AI evaluation, that smart robot is actually a large language model (LLM). We feed it the same prompt or problem we give a human evaluator, let it generate an answer, and then ask it to judge its own output—or to judge another LLM’s answer—using the rules we set up. The “judge” looks at criteria such as correctness, relevance, clarity, and style, and assigns a rating.

So, LLM‑as‑Judge is simply using one language model to play the role of an evaluator for other models’ responses, turning the model into a self‑checking or peer‑reviewing tool. It’s like having a super‑fast, consistent referee that can review thousands of essays in seconds while still following human‑style guidelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
