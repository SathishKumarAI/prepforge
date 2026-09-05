---
qid: ing_1fa14693a6__eli5__local
question: 'Explain: Week 2: Code-Based Evals — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 277
total_tokens: 445
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:26:16-05:00'
sources: []
---

Imagine you’re teaching a robot how to bake a cake, and every time it tries, you give it a score: “Great, the frosting is smooth” or “Oops, the batter’s too runny.”  
In Week 2 of our AI class we learn how to build those scores automatically. **Code‑Based Evals** are scripts that let us hand‑judge a model’s answers without writing them by hand each time. We write simple rules—like “the answer must mention at least three ingredients” or “the text should be under 50 words”—and the system runs the model, checks every response against those rules, and records a pass/fail score.

**Langwatch** is a tool that watches the language the model uses in real time. Think of it as a kitchen timer that also notes how long the robot takes to say each ingredient; it flags any weird phrasing or repeated words.

**Langfuse** collects all those timed notes and scores, then shows you charts so you can see which recipes (model prompts) work best and where the model needs more practice.  

So, we’re turning raw AI chatter into a tidy report card—exactly how a teacher grades homework but faster and with zero bias.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
