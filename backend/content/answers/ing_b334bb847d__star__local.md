---
qid: ing_b334bb847d__star__local
question: 'Explain: Cut costs — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 296
total_tokens: 531
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:30:09-05:00'
sources: []
---

**Situation:**  
At my previous company we were running a nightly batch pipeline that processed user‑interaction logs to train recommendation models. The cluster cost was $12k/month and the latency between data ingestion and model refresh was 48 hours.

**Task:**  
I needed to slash infrastructure spend by at least 30% while cutting end‑to‑end latency below 6 hours so the models could react to trending content in near real time.

**Action:**  
I rewrote the pipeline as an event‑driven architecture using Kafka for log streaming, AWS Lambda for stateless feature extraction, and SageMaker endpoints for incremental model updates. I introduced a stateful Spark job that only ran when a batch of 10k new events accumulated, reducing unnecessary compute cycles. For cost control, I enabled spot instances for the Spark workers and set auto‑scaling on Lambda based on event rate.

**Result:**  
Monthly spend dropped to $7.8k—a 35% reduction—and model refresh latency fell from 48 h to under 4 h. The real‑time updates boosted click‑through rates by 12%, proving that an event‑driven approach can deliver both cost efficiency and business value.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
