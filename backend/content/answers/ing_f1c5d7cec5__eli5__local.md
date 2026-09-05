---
qid: ing_f1c5d7cec5__eli5__local
question: R1-Zero was trained with reinforcement learning and essentially no supervised
  fine-tuning first. What did that show, and why did the full R1 add SFT back?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 201
total_tokens: 383
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:57:26-05:00'
sources: []
---

Imagine a self‑driving car that learns only by trial and error: it pushes pedals, turns wheels, and receives feedback (e.g., “you hit a curb” or “you stayed in lane”). That’s like reinforcement learning (RL). R1‑Zero was trained this way—no human‑written instructions first. It showed that the model could acquire useful language skills just from rewards: it learned to answer questions, follow simple commands, and avoid bad responses, all by maximizing a reward signal.

But trial‑and‑error can be slow and noisy. Adding supervised fine‑tuning (SFT) is like giving the car a GPS map after the initial drive—human examples tell it exactly how to behave in many situations. The full R1 combined both: RL for exploration, then SFT to polish its performance, yielding faster learning and more reliable answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
