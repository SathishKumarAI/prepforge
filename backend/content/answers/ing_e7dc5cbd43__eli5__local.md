---
qid: ing_e7dc5cbd43__eli5__local
question: A whole-body controller trained entirely in simulation has to run on real
  hardware. What transfers, what does not, and how do you close the gap?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 251
total_tokens: 428
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:42:46-05:00'
sources: []
---

Imagine a robot as a dancer who practiced all her moves in a virtual studio—no music, no audience, just a computer screen. The choreography (the math that tells the legs and arms where to go) is exactly the same whether she’s on the screen or on a real stage; that’s what **transfers**. But the feel of the floor changes: in simulation the “floor” is perfectly smooth and frictionless, while the real world has uneven tiles, slip, and wear‑and‑tear. The dancer’s shoes (the robot’s sensors and motors) also behave differently—small delays, noise, and limits that weren’t modeled.

So we keep the choreography but **tune** it to the real stage: first, we add realistic physics into the simulation (friction, backlash), then we test the controller on a small physical prototype, measuring how much the actual response deviates. Finally, we adjust the control gains and embed safety margins so that when the robot steps onto the real floor, her movements stay accurate and safe. The gap closes by bridging the difference between perfect simulation and imperfect hardware with careful testing and incremental refinement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
