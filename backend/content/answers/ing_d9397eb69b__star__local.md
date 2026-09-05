---
qid: ing_d9397eb69b__star__local
question: 'Explain: 401k — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 363
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:43:05-05:00'
sources: []
---

**Situation**  
When I joined Glean’s Finance Ops team, our legacy 401(k) dashboard was built on an old SQL reporting layer that refreshed every 24 hours and produced a static Excel file for advisors. Clients were complaining about delayed contribution updates and the lack of real‑time risk analytics.

**Task**  
I was tasked with redesigning the 401(k) insight engine so that it could ingest live transaction streams, apply AI‑driven portfolio rebalancing recommendations, and deliver instant dashboards to both employees and external partners—all within a single microservice architecture.

**Action**  
First, I set up an Apache Kafka topic for real‑time contribution events and used Spark Structured Streaming to process the data in 5‑second windows. For risk scoring, I trained a gradient‑boosted tree model on historical turnover and volatility data, deploying it with TensorFlow Serving behind a gRPC endpoint. The microservice then exposed a REST API that fed into Glean’s front‑end React app, using D3.js for dynamic visualizations. I also implemented automated unit tests with PyTest and CI/CD pipelines in GitHub Actions to ensure zero downtime during model updates.

**Result**  
The new AI‑powered 401(k) dashboard reduced data latency from 24 hours to under 10 seconds, increased advisor satisfaction scores by 32%, and cut manual reconciliation errors by 18%. I learned how to blend streaming data pipelines with ML inference in a production setting while keeping the system maintainable and scalable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
