---
qid: ing_c2832ca9bd__eli5__local
question: 'Explain: Working of Reinforcement Learning — Reinforcement Learning - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 201
total_tokens: 366
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:44:20-05:00'
sources: []
---

Imagine you’re teaching a dog to fetch a ball. The dog (your “agent”) runs around, grabs the ball, and brings it back. Every time it succeeds, you clap and give a treat; if it fails, you ignore it or gently discourage it. Over time the dog learns that fetching earns rewards, so it tries harder and faster.

In reinforcement learning the agent is a computer program that takes actions in an environment (the world). After each action it receives feedback called a *reward*—positive for good moves, negative for bad ones. The goal is to learn a policy: a mapping from situations (“states”) to actions that maximizes the total reward over time. Like the dog, the agent explores, gets rewarded or penalized, and gradually improves its strategy without being told exactly what to do. The process repeats until the agent behaves optimally for that task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
