---
qid: ing_57d3f8af3f__faang__local
question: 'Explain: When to A/B Test — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 380
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:07:57-05:00'
sources: []
---

## When to A/B‑Test for an AI Feature?  
**1️⃣ Clarify**  
*Problem*: Decide whether a new AI capability (e.g., recommendation engine, NLU model) should be rolled out.  
*Assumptions*: We have user data, metrics, a testable hypothesis, and the ability to isolate traffic.

**2️⃣ Approach**  
- Define the business goal (↑ CTR, ↓ churn).  
- Identify a measurable KPI linked to that goal.  
- Design an experiment with **two arms**: control (current system) vs treatment (AI feature).  
- Ensure statistical power: compute required sample size based on expected lift and variance.  
- Randomize users evenly; keep traffic independent of external events.

**3️⃣ Depth**  
- *Metrics*: primary KPI + secondary signals (latency, model confidence).  
- *Statistical test*: t‑test or Bayesian A/B if prior knowledge exists.  
- *Duration*: run until 95% confidence or a minimum number of conversions is reached.  
- *Analysis*: check for interaction effects (e.g., by segment) and monitor drift.

**4️⃣ Edge Cases**  
- Cold‑start users: may see biased results.  
- Non‑stationary data: model performance can change during the test.  
- Safety concerns: A/B should be a fallback if the AI harms user experience.

**5️⃣ Optimize & Communicate**  
- If lift is significant, roll out gradually (canary → full).  
- Document assumptions and results; share with stakeholders.  
- Iterate: use insights to refine the model before next experiment.  

*Result*: A data‑driven, low‑risk decision on whether the AI capability delivers real business value.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
