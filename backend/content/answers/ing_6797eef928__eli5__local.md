---
qid: ing_6797eef928__eli5__local
question: 'Explain: Tracing and Trajectories — Langsmith Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 210
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:20:28-05:00'
sources: []
---

Imagine your AI model is a delivery driver on a city map. **Tracing** is like leaving a GPS log of every turn the driver takes—start point, each waypoint, and final drop‑off. It shows the exact path the model followed to answer a prompt, helping you spot where it might have gone off course.

A **trajectory** is the whole story of that delivery: not just the route but also how long each segment took, what traffic (errors or delays) it encountered, and how the driver’s speed changed. In LangSmith, a trajectory bundles all the tracing data with performance metrics and contextual notes so you can see both the “what” and the “why” of your AI’s behavior.

*Tracing*: step‑by‑step record of calls and decisions.  
*Trajectory*: the complete, annotated journey that includes timing, errors, and context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
