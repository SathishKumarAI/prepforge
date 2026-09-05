---
qid: ing_f5fea16ca4__eli5__local
question: 'Explain: Compute corrected rate — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 237
total_tokens: 400
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:04:18-05:00'
sources: []
---

Think of an AI test like a marathon where each runner (the model) gets points for every mile they finish on time. “Compute corrected rate” is the coach’s way of giving a fair score that adjusts for how many runners actually made it to the finish line and how well they paced themselves.

1. **Raw completion** – Count every runner who finished, ignoring how fast or slow they were.
2. **Weight by effort** – Multiply each finish by a factor that reflects the difficulty of that segment (longer miles get more weight).
3. **Normalize** – Divide the weighted sum by the total possible points so everyone gets a score between 0 and 1.

In AI evals, you replace “runners” with model predictions, “finish line” with correct answers, and the weighting factor is how many times that particular test case was evaluated (the more times, the more reliable it is). The final corrected rate tells you, on a standardized scale, how well the model performed across all tested scenarios.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
