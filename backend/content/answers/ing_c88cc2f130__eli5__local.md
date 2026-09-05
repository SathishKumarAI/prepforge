---
qid: ing_c88cc2f130__eli5__local
question: FP8 training at 671B scale is hard. What actually breaks in low precision,
  and how do you make it stable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 313
total_tokens: 486
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:53:14-05:00'
sources: []
---

Think of a huge choir (the 671‑billion‑parameter model) trying to sing in perfect harmony. Each singer’s voice is an *activation* or *weight*. In full‑precision training every voice can be tuned to many decimal places, so the choir can adjust gently and stay balanced.

When we switch to FP8 (only eight bits), each voice can only choose a few “steps” of volume. Two things break:

1. **Clipping** – if a singer’s volume is too high or low for the limited steps, it gets squashed into the nearest step, throwing off the harmony.
2. **Rounding noise** – tiny adjustments get lost in the coarse steps, so the choir can’t fine‑tune and drift apart.

To keep the choir stable we use a few tricks:

- **Scaling (norms)**: before sending voices to FP8, we scale them so they fit into the available range, then rescale back after training.
- **Gradient clipping**: we cap how much any voice can change in one step, preventing sudden jumps that would break harmony.
- **Mixed precision**: keep a backup of the choir’s scores in higher‑precision format (FP16 or FP32) while only using FP8 for fast computations.

With these measures, even at 671 B parameters, the low‑precision choir can sing in sync and learn effectively.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
