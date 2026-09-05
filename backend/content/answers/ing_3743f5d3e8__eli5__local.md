---
qid: ing_3743f5d3e8__eli5__local
question: 'Explain: Token efficiency — DeepSeek-R1 incentivizes reasoning in LLMs
  through reinforcement learning | Nature'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 254
total_tokens: 422
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:03:22-05:00'
sources: []
---

Imagine a student who must answer a long exam but only has a limited number of pencil strokes (tokens). A “token” is just one word the model writes; every extra word costs time and memory, so we want it to be as concise yet accurate as possible—this is **token efficiency**.

DeepSeek‑R1 tackles this by treating the language model like a game player. Instead of only rewarding correct answers (like giving a gold star), it also rewards *good reasoning* that uses fewer strokes. The system gives extra points when the model explains its steps in a short, clear way—think of a teacher praising a student who can solve a problem quickly but still shows the logic behind it.

Reinforcement learning is the method that lets the model “practice” this game: it tries different ways to answer, gets feedback on how many tokens were used and how well it reasoned, and learns over time to choose the most efficient path. In short, DeepSeek‑R1 trains models to think fast and write less, so they can handle more tasks with the same resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
