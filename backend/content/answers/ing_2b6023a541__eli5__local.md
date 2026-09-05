---
qid: ing_2b6023a541__eli5__local
question: 'Explain: Agent-as-Judge: Trajectory Grading — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 205
total_tokens: 367
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:44:00-05:00'
sources: []
---

Imagine you’re watching a student play a game of hopscotch, but instead of just counting the hops, you’re also judging how smoothly each hop lands and how well they stay on the lines. In AI, an **Agent-as-Judge** works like that teacher‑judge.

The “agent” is a small program that looks at the whole sequence of moves (the *trajectory*) a big language model makes while answering a question. It doesn’t just give a thumbs‑up or thumbs‑down; it grades each step—does it stay on topic? Is it clear? Does it avoid mistakes? The agent then sums up these micro‑grades into one overall score, just like the teacher gives a final grade for the whole hopscotch run.

So instead of a single yes/no verdict, the language model gets detailed feedback on its entire performance, helping it learn to play better next time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
