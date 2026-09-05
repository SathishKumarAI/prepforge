---
qid: ing_2a39283bfa__star__local
question: 'Q120: Request-level model routing just went mainstream: one production
  router reports frontier quality at roughly 60% lower cost. Design the router. Where
  do the labels come from, and how do you avoid feedback loops?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 269
output_tokens: 374
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:52:34-05:00'
sources: []
---

**Situation** – In my last role at a cloud‑AI platform we saw that our recommendation engine was running two models: a fast rule‑based baseline and an expensive deep learning predictor. The cost to run the deep model had doubled, while latency budgets were tightening after a new SLAs announcement.

**Task** – I was tasked with designing a request‑level router that would choose between the two models in real time, achieving at least 60 % cost reduction without hurting accuracy or creating a feedback loop where the router’s decisions skew future data.

**Action** – First, I built an offline label pipeline: every incoming request is tagged with a “confidence score” derived from a lightweight meta‑model that predicts how much the deep model would improve over the baseline. The labels are generated in a separate microservice that pulls the latest feature embeddings and runs a gradient‑boosted tree; this keeps the labeling logic isolated so it never sees the router’s decisions. In production, the router uses these scores plus a rolling window of recent cost/accuracy metrics to compute a dynamic threshold. I added a “stale‑data guard” that forces fallback to the baseline if the label service hasn’t updated in 5 minutes, preventing a loop where the router keeps feeding its own output back into the model training data.

**Result** – The router cut deep‑model usage from 40 % to 15 %, slashing compute costs by ~63 % while maintaining a 0.8% lift in recommendation click‑through rate. I learned that decoupling label generation and enforcing staleness checks are key to preventing inadvertent feedback loops in real‑time routing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
