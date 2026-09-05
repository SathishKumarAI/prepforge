---
qid: ing_c1da5708d6__eli5__local
question: 'Explain: Illustration — On-Policy Distillation - Thinking Machines Lab'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 203
total_tokens: 364
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:43:26-05:00'
sources: []
---

Imagine you’re teaching a new driver (the “student” car) how to navigate a busy city. The experienced driver (the “teacher” car) is already cruising the streets, making split‑second decisions about turns, stops, and speed. Instead of just giving the student a manual, you let them sit in the passenger seat while the teacher drives. Every time the teacher makes a move—say, swerving to avoid a cyclist—the student observes exactly that action and records it.

In on‑policy distillation, the student learns from the teacher’s *actual* behavior on the same routes (the “on‑policy” part). The student’s goal is to mimic the teacher’s decisions so closely that, over time, they can drive independently while still following the same smooth, safe patterns. This continuous, real‑time imitation lets the student internalize complex driving strategies without having to invent them from scratch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
