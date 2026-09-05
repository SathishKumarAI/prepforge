---
qid: ing_d5c5583cb6__star__local
question: You join as a staff engineer. The team ships prompt changes on vibes, has
  no evals, and as far as they can tell is shipping fine. What do you do in your first
  90 days?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 333
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:36:24-05:00'
sources: []
---

**Situation**  
When I joined the AI product team, we were routinely pushing prompt tweaks to a live “vibes” feature without any formal evaluation pipeline. The metrics on user engagement were stagnant, and there was no systematic way to know if changes improved or degraded experience.

**Task**  
My goal in the first 90 days was to establish a robust experimentation framework that would let us ship confidently while measuring impact, and to surface hidden risks from unchecked prompt changes.

**Action**  
I started by mapping the entire prompt lifecycle—data ingestion, model inference, post‑processing, and A/B rollouts. I introduced lightweight unit tests for prompt syntax and a continuous integration hook that ran them on every commit. Then I built an automated experiment dashboard using Python + Plotly Dash, linking it to our internal metrics database so we could see real‑time lift or loss in engagement per variation. I also drafted a “prompt change request” template that required hypothesis, expected KPI shift, and rollback plan before any merge. Finally, I ran a pilot experiment on a high‑traffic sub‑feature, comparing the new prompt to baseline over 48 hrs.

**Result**  
Within three months we reduced untested prompt rollouts from 30% to <5%, cutting accidental user churn by 12%. The experimentation pipeline caught an early sign that a new tone variant would have lowered session duration by 18%, allowing us to abort the release. I learned that rigorous, lightweight testing and clear hypothesis‑driven experiments are essential even in fast‑moving AI teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
