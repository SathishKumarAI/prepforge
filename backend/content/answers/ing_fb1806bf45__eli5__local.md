---
qid: ing_fb1806bf45__eli5__local
question: 'Explain: The interview loop — Waymo'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 216
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:12:39-05:00'
sources: []
---

Imagine you’re trying to build a super‑smart robot that can drive itself safely through a city. Waymo’s “interview loop” is like a rehearsal for that robot, but instead of a human actor, the interviewers ask questions and then let the robot answer in real life.

First, the interviewer gives the robot a scenario—“A pedestrian steps onto the crosswalk.” The robot must decide what to do (stop, slow down, etc.) and explain its reasoning. Next, the interviewer lets the robot actually perform that action on a test track or in simulation, watching whether it behaves as predicted. If the robot’s real‑world move matches the answer, it passes; if not, the loop repeats with new questions and scenarios.

This cycle—ask, answer, act, observe, refine—is repeated many times so the robot learns to think and drive reliably, just like a student who practices before a big exam.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
