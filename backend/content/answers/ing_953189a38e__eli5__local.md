---
qid: ing_953189a38e__eli5__local
question: 'Explain: illegal with those fixed it''s now passing'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 206
total_tokens: 363
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:34:20-05:00'
sources: []
---

Imagine a robot that learns to sort coins by looking at them. At first, it’s told “don’t pick up any coin that is too big or too small” – that rule is *illegal* because the machine can’t check size accurately; it just sees a picture and guesses. When we change the instruction so the robot says “pick up any coin that looks like a coin,” we’ve *fixed* the rule: now it’s legal, because the robot only relies on what it can actually see. Once the rule is fixed, the robot starts passing every test – it successfully sorts all coins without breaking the new rule. In machine‑learning terms, “illegal with those fixed it's now passing” means we corrected a rule that was impossible to enforce, and after that correction, our model behaves correctly on all inputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
