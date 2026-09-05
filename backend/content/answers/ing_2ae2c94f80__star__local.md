---
qid: ing_2ae2c94f80__star__local
question: 'Explain: Task Success Rate (TSR) — Evaluating Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 326
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:53:48-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were rolling out an AI‑driven investment advisor that needed to meet regulatory compliance and user satisfaction thresholds before launch. The product team raised concerns that the agent’s recommendation accuracy might drop when handling edge cases like sudden market volatility.

**Task** – I was asked to design a robust evaluation framework for the agent, focusing on Task Success Rate (TSR) as the primary metric: the proportion of user interactions where the system delivered an appropriate, compliant investment suggestion without needing human intervention.

**Action** – I built a simulation pipeline that generated 50,000 synthetic market scenarios, including stress tests. For each scenario, the agent’s action was logged and compared against a curated “gold standard” set by domain experts. TSR = (successful actions / total actions) × 100. I also implemented a rolling‑window analysis to detect drifts in TSR over time, and added a confidence threshold that automatically escalated low‑confidence cases to a human advisor.

**Result** – The initial baseline TSR was 84 %. After iterating on the model’s reward function and retraining with an expanded dataset, we raised TSR to 92.5 % within three weeks, surpassing the regulatory target of 90 %. I learned that defining success in concrete, measurable terms—and automating its monitoring—turns abstract AI goals into tangible business outcomes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
