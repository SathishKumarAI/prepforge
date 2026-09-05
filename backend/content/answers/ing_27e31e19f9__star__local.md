---
qid: ing_27e31e19f9__star__local
question: You are swapping the model behind a live feature. Walk me through shadow,
  canary and A/B. When do you use each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 357
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:48:16-05:00'
sources: []
---

**Situation** – I was leading the rollout of a new recommendation engine for our e‑commerce app. The previous model had a 4 % click‑through rate and we needed to lift it by at least 15 % without disrupting user experience.  

**Task** – Deploy the new model safely, validate its performance against production traffic, and decide when to fully replace the old one.

**Action** – I started with **shadow testing**: the live request stream was duplicated to the new model in a separate environment. No user data came back from it; we logged predictions and compared them to the existing engine’s scores, gathering latency, error rates, and feature‑level differences. After confirming stability, we moved to a **canary release**: 5 % of real traffic was routed to the new model while the rest stayed on the old version. We monitored key metrics (CTR, conversion, CPU usage) in real time; if any threshold was breached, the canary was rolled back automatically. Once the canary passed with a 17 % CTR lift and acceptable latency, we executed an **A/B test** across all users for two weeks to gather statistical confidence and measure long‑term retention impact.

**Result** – The new model achieved a 19 % CTR increase and reduced server load by 12 %. We completed the rollout in 10 days, avoided downtime, and learned that shadow testing is essential for catching subtle bugs before any live traffic hits the new code.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
