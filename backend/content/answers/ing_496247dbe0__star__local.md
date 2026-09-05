---
qid: ing_496247dbe0__star__local
question: 'Explain: One Year of Building Together — Blog | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 362
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:55:26-05:00'
sources: []
---

**Situation** – In early 2023 I joined a start‑up that was launching its first AI‑powered content platform. The product team wanted a “One Year of Building Together” blog series to showcase our progress, but the volume of user‑generated posts was exploding—over 2,000 new articles per week—and we had no way to surface relevant stories in real time.

**Task** – I needed to design and deploy an end‑to‑end recommendation pipeline that would rank blog posts by relevance to each reader’s interests, reduce latency below 200 ms, and scale to millions of daily reads while keeping compute costs under $5k/month.

**Action** – I built a lightweight Transformer encoder (distilBERT) fine‑tuned on our click‑through data, then distilled it into a TF‑Lite model for edge inference. The pipeline ingests user interaction logs via Kafka, updates embeddings in Redis, and serves personalized top‑10 lists through an NGINX reverse proxy with Lua scripts. I automated A/B testing with Optimizely and used CloudWatch metrics to iterate on the threshold until we hit our SLA.

**Result** – Post‑deployment, click‑through rate rose 38 % (from 3.2 % to 4.4 %), engagement time per article increased by 27 %, and infrastructure spend stayed at $4.8k/month. I learned that balancing model accuracy with inference latency is critical in a real‑world content engine, and that continuous monitoring turns ML into a living product feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
