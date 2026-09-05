---
qid: ing_dbcba4d580__eli5__local
question: 'Explain: State Strategy — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 214
total_tokens: 368
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:22:02-05:00'
sources: []
---

**State Strategy – the “Switch‑able Brain” of an AI system**

Imagine a robot that can play chess, answer trivia, and drive a car. Each job needs its own brain: one for thinking moves, another for looking up facts, and a third for steering wheels. A *state strategy* is like giving that robot a set of interchangeable “brain modules.” When the robot’s task changes, it simply swaps in the appropriate module without rewriting everything else.

In software, this pattern separates an AI system into distinct *states* (e.g., “searching,” “learning,” “predicting”). A small controller chooses which state is active based on what the user wants or what data arrives. The rest of the code stays the same; only the active module changes. This keeps the system modular, easier to maintain, and ready for new tasks—just like swapping a chess board for a car’s dashboard.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
