---
qid: ing_57d3f8af3f__fp__local
question: 'Explain: When to A/B Test — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 367
total_tokens: 536
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:11:05-05:00'
sources: []
---

### When to A/B‑Test a New AI Capability  
*A first‑principles view*

**The core problem:** you want to know whether adding an AI feature (e.g., a recommendation engine) improves user value *without* harming other metrics. The only rigorous way to isolate the causal effect of that change is to randomise exposure and observe outcomes.

1. **Identify a clear, measurable goal** – revenue per session, conversion rate, or model‑specific latency.  
2. **Ensure statistical independence** – users must be randomly split so that any pre‑existing differences average out.  
3. **Check for temporal stability** – the metric should not drift wildly during the test window; otherwise you’ll attribute noise to the feature.

Only when all three hold can an A/B test give unbiased estimates. If the new capability changes the data distribution (e.g., a chatbot that generates user‑specific prompts), you must first run a *pre‑test* or *pilot* to confirm that the underlying assumptions of independence and stationarity still apply.

**Why it works:** In probability theory, randomisation guarantees that the expected outcome under treatment equals the true causal effect. A/B testing is simply an empirical implementation of this principle; without random assignment you fall into confounding.

> **Non‑obvious insight:** The *size* of the test group matters more than the duration. A well‑powered experiment with a few weeks can outperform a month‑long run that suffers from seasonality or model drift. Compute the required sample size from your minimal detectable effect (MDE) and stop when you hit it, not when time runs out.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
