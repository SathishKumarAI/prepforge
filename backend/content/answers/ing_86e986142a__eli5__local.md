---
qid: ing_86e986142a__eli5__local
question: Your judge model is being deprecated and you have to move to a new version.
  How do you keep your scores comparable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 315
total_tokens: 486
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:09:55-05:00'
sources: []
---

Imagine two different scales for measuring weight—one uses pounds, the other kilograms. If you switch from the pound scale to the kilogram scale, a person’s “score” (weight) will look smaller because each unit is bigger, even though the actual body hasn’t changed. To keep the scores comparable when you replace your old AI judge with a new version, you do something similar: you **re‑calibrate** the new model so its outputs line up with the old ones.

Think of the AI as a recipe that tastes slightly different after a new chef takes over. You give both chefs the same set of reference foods (a fixed test set). Each time they taste the food, you record how much “salt” (score) they add. Then you adjust the new chef’s seasoning—maybe adding a little extra salt or reducing it—until the average amount of salt added by the new chef matches what the old chef used.

In practice:

1. **Run both models on the same benchmark data** and compare their raw scores.
2. **Compute a simple linear adjustment** (a multiplier and an offset) that makes the new model’s average score equal to the old model’s average score.
3. **Apply this adjustment every time you evaluate** so that anyone comparing results sees numbers that are on the same footing.

Just like converting pounds to kilograms, this calibration lets you keep the scores meaningful and comparable across versions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
