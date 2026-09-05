---
qid: ing_9ff2440d1d__eli5__local
question: 'Explain: Calibration and Predictive Uncertainty — 10 Probability Concepts
  for Machine Learning Explained Simply'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 245
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:51:04-05:00'
sources: []
---

Think of a weather‑app that predicts tomorrow’s chance of rain.  
**Calibration** is how well its “rain probability” matches reality: if the app says “50 % chance,” it should actually rain about half the time on those days. A *well‑calibrated* model’s predictions line up with real outcomes, like a compass that points true north.

**Predictive uncertainty** tells you how confident the app is in each forecast. If it says “70 % chance of rain” but also gives a wide confidence band (e.g., 60–80 %), it acknowledges that the data are noisy or incomplete—just as a meteorologist might say, “I’m fairly sure it’ll be wet, but I’m not 100 % certain.”

So calibration checks if the percentages are accurate on average; predictive uncertainty shows how tight or loose those estimates are for each individual prediction. Together they let you trust and understand a model’s answers, just like trusting a weather report that is both honest about its accuracy and clear about its confidence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
