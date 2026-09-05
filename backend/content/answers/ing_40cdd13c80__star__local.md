---
qid: ing_40cdd13c80__star__local
question: 'Explain: System Design Mock Interview: Design a Vending Machine'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 364
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:38:09-05:00'
sources: []
---

**Situation** – In my last internship I was asked to prototype an “intelligent” vending machine for a campus cafe. The current units were paper‑based, had no inventory visibility and customers complained about out‑of‑stock items during peak hours.

**Task** – My goal was to design a scalable system that could: (1) predict demand per SKU, (2) trigger restock alerts, and (3) personalize promotions—all while keeping latency under 200 ms for the point‑of‑sale interface.

**Action** – I started with an event‑driven architecture on AWS. Each dispenser emitted a `StockLevel` event to Kinesis; Lambda functions aggregated counts into DynamoDB. For demand forecasting I trained an LSTM model on historical sales (Python + TensorFlow) and deployed it via SageMaker endpoints, polling every 30 minutes. Restock logic was encoded in another Lambda that compared live inventory against the forecasted 24‑hour buffer and sent Slack alerts to the supply team. On the front‑end I used React Native for the touchscreen UI, fetching personalized offers from a small Redis cache warmed by the same forecasting Lambda.

**Result** – After three months of deployment we saw a 25 % reduction in out‑of‑stock incidents, a 15 % bump in average transaction value due to targeted upsells, and the supply chain team cut manual restock calls by 40 %. I learned how real‑time data pipelines and predictive models can be stitched together with low‑latency services to deliver tangible business gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
