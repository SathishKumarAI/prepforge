---
qid: ing_286eaa239e__eli5__local
question: 'Q: What is the "Over-Reliance" risk in HITL, and how do you mitigate it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 249
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:39:46-05:00'
sources: []
---

**Imagine a smart robot driving a car that can see the road but still needs a driver to keep an eye on traffic signs and pedestrians.**  
In Human‑in‑the‑Loop (HITL) AI this “driver” is a person who checks, corrects, or approves the system’s decisions. The *over‑reliance risk* happens when people trust the robot too much and stop paying attention—like a driver leaning back while the autopilot takes over, missing a sudden obstacle.

**How to mitigate it**

1. **Keep the human alert:** Design interfaces that require a quick check before a final action (e.g., a brief “Are you sure?” prompt).  
2. **Teach when to step in:** Train users on common failure modes so they know when the system might err.  
3. **Balance autonomy and supervision:** Let the AI handle routine tasks, but give humans clear control over critical decisions.

By treating the AI as a helpful assistant rather than a replacement, we avoid complacency and keep safety first.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
