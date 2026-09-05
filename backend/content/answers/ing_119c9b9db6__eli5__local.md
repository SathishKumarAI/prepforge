---
qid: ing_119c9b9db6__eli5__local
question: 'Q: When would you use A2A for multi-agent orchestration versus keeping
  all agents in a single framework?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 224
total_tokens: 394
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:03:38-05:00'
sources: []
---

Imagine a school play where each actor (agent) has its own script and costume but they must follow the same director’s cue list.  
**A2A (Agent‑to‑Agent)** is like letting each actor speak directly to the others: they trade lines, hand props, and adjust timing on the fly. Use this when actors need real‑time collaboration, can change roles mid‑scene, or may leave/enter independently—think a team of robots sharing sensor data while walking through a maze.

Keeping all agents in **one framework** is like having a single stage manager who reads the cue sheet and tells every actor what to do. This works best when the play’s structure is fixed, actors rarely need to talk directly, and you want a predictable, easy‑to‑debug flow—like a simple calculator where each step follows the previous one without side conversations.

So choose A2A for flexible, dynamic teamwork; stick to a single framework when order and simplicity matter most.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
