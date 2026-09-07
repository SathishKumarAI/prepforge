---
qid: ing_ab2af326a8__aws__local
question: 'Explain: Start building real-time applications with simple SQL syntax'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 398
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:53:31-05:00'
sources: []
---

**Situation & Task**  
I was hired by a fintech startup to turn its batch‑trained fraud model into a real‑time scoring engine that could run on every transaction without latency spikes. The team had no ML ops experience and the only data query tool they trusted was SQL.

**Action (Design)**  
1. **Data ingestion** – Kinesis Data Streams for 10k TPS, with *Lambda* to enrich each event.  
2. **Model inference** – SageMaker Endpoint (Linear Learner) exposed via API Gateway; Lambda forwards enriched records and returns a probability score in <15 ms.  
3. **Real‑time SQL layer** – Glue Catalog + Athena on the same S3 bucket as Kinesis snapshots, enabling analysts to run `SELECT * FROM fraud_transactions WHERE score > 0.8` just like any nightly batch job.  
4. **Observability & rollback** – CloudWatch metrics + SageMaker Model Monitor; if latency > 20 ms or accuracy drops by >2%, the Lambda auto‑rolls back to a previous endpoint version.

**Result (Quantified)**  
- Reduced fraud loss from $3M/quarter to $0.7M in 6 months (77% reduction).  
- Latency stayed below 18 ms for 99.9% of transactions, keeping user experience unchanged.  
- SQL analysts saved ~8 hours/week by querying the live stream instead of waiting for nightly jobs.

**Reflection & Learning**  
I owned the whole pipeline and dove deep into latency profiling; discovering a Lambda memory bottleneck led to a cost‑effective 20 % performance lift. The bar‑raiser will note my ownership, data‑driven impact, and iterative learning from early failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
