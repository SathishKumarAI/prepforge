---
qid: ing_fbae6d179a__eli5__local
question: 'Explain: Title: Back on Track: Aligning Rewards and States for Reasoning
  in Diffusion Large Language Models'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 235
total_tokens: 405
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:13:34-05:00'
sources: []
---

Imagine you’re training a robot to draw a picture by moving its arm step by step. Each tiny movement is a **state** – the arm’s current position and angle. After every few moves, we give the robot a quick **reward**: “Nice! That part looks good” or “Oops, that line is wrong.” The trick in diffusion large‑language models (like GPT) is to make sure those rewards match exactly what the model sees at each step.

Think of it as giving the robot feedback only when it actually holds a particular brush stroke. If we hand out praise for a finished picture but the robot doesn’t know which strokes led there, it can’t learn how to improve its next move. By aligning every reward with the precise state (the exact wording or token the model produced at that moment), the model learns to reason: “If I write this word here, I’ll get a good reward; if I choose another, I won’t.” This tight coupling keeps the learning process on track and avoids confusing feedback.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
