---
qid: ing_475407d9af__star__local
question: 'Explain: pass@k — Evaluation And Observability'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 378
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:51:23-05:00'
sources: []
---

**Situation** – In my last role as a research engineer at a conversational‑AI startup, we were launching a new intent‑classification model for our virtual assistant. The product team had set a target that the system’s top‑k predictions should include the correct intent in 95 % of user queries by end of Q3.

**Task** – I was tasked with designing an evaluation pipeline that could reliably measure *pass@k* (the proportion of times the ground truth label appears within the top‑k ranked outputs) and provide real‑time observability so we could detect drift or performance regressions as soon as they happened.

**Action** – First, I implemented a microservice that wrapped our inference engine and logged each request’s probability distribution. Using Apache Kafka for event streaming, I built a downstream analytics job in Spark that computed pass@k for k = 1, 3, 5 on a rolling 24‑hour window. I visualized the metrics in Grafana dashboards with alerting thresholds set at ±2 % from the baseline. To make the system robust, I added an A/B testing harness that automatically rolled out new model versions only after their pass@k exceeded the target for two consecutive days.

**Result** – Within a month of deployment, our pass@k@3 rose from 87 % to 94 %, meeting the business goal. The observability stack caught a sudden drop in pass@k caused by an upstream data‑quality issue, allowing us to roll back and fix it before customers noticed any degradation. I learned that coupling precise metric definitions with real‑time dashboards turns abstract performance goals into actionable engineering insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
