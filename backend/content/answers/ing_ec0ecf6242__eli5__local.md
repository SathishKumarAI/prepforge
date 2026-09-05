---
qid: ing_ec0ecf6242__eli5__local
question: 'Explain: Helix: A "System 1, System 2" VLA for Whole Upper Body Control'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 253
total_tokens: 423
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:49:18-05:00'
sources: []
---

**Helix** is a smart way to let a robot (or a human) move its whole upper body—arms, shoulders, torso—using two “thinking modes” that work together.

* **System 1** = fast, automatic control. Think of it like a seasoned pianist who can play a familiar song without thinking about each finger move. In Helix, System 1 is a *variable‑length array (VLA)* of quick reflexes that keep the body balanced and respond instantly to small disturbances.

* **System 2** = slow, deliberate planning. It’s like a conductor who watches the whole orchestra and decides which section should play next. Helix uses System 2 to calculate a smooth plan for big motions—reaching for an object or turning the torso—then hands that plan back to System 1.

Together they act like a pair of hands: one hand keeps the robot steady (System 1), while the other hand charts the route ahead (System 2). This harmony lets the upper body move fluidly, just as a dancer balances immediate reactions with choreographed moves.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
