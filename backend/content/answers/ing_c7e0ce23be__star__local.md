---
qid: ing_c7e0ce23be__star__local
question: Evals are nondeterministic - temperature, sampling, flaky agents. How do
  you get trustworthy numbers?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 299
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:09:25-05:00'
sources: []
---

**Situation** – In my last role I was tasked with benchmarking a new language‑model agent for automated customer support. The initial evals were wildly inconsistent: the same prompt sometimes yielded a perfect response, other times it failed catastrophically because of temperature noise and sampling variance.

**Task** – My goal was to produce reliable, reproducible performance numbers that stakeholders could trust, despite the inherent nondeterminism in the model’s outputs.

**Action** – I first wrapped each evaluation run in a deterministic seed context for the tokenizer, sampler, and random number generator. Then I ran every prompt 200 times with different seeds and aggregated results using median scores rather than means to mitigate outliers. To account for temperature effects, I performed stratified runs at fixed temperatures (0.2, 0.5, 0.8) and compared variance across them. Finally, I used a bootstrap confidence interval on the aggregated metrics so we could report a 95% CI instead of a single point estimate.

**Result** – The new protocol reduced score variance from ±12 points to ±3 points, and our confidence intervals shrank by 60%. Stakeholders approved the release with full confidence in the numbers, and I documented the process for future model rollouts. I learned that systematic seeding, robust statistics, and transparent reporting are key to turning noisy AI evals into trustworthy metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
