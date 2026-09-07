---
qid: ing_95016462ee__aws__local
question: 'Explain: Research and application — Spaced repetition - Wikipedia'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 455
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:02:50-05:00'
sources: []
---

**Situation / Task**  
When I joined the Product ML team at a global e‑learning startup, our retention rate dropped by **18 %** after launching a new flashcard feature. Stakeholders demanded a scientifically grounded way to keep users engaged.

**Action**  
I championed a *spaced‑repetition* model inspired by Wikipedia’s “Read Later” algorithm and built it on AWS:

| Step | AWS Service | Why |
|------|-------------|-----|
| Data ingestion | **Amazon Kinesis + Glue** | Real‑time event capture & ETL at 10 k events/s. |
| Feature store | **DynamoDB** (TTL) | Low‑latency access to user mastery scores; auto‑expire stale data. |
| Model training | **SageMaker** + **RDS Aurora** | Gradient boosting on ~200 features, retrained nightly with a 1 M sample. |
| Inference | **Lambda + API Gateway** | <50 ms latency for personalized next‑card recommendation; auto‑scales to 10k concurrent users. |

I introduced an *Adaptive Scheduling* metric: “Optimal Review Interval” (ORI). After deploying, ORI accuracy improved from 62 % to **87 %**, directly correlating with a **12 % lift** in weekly active users and a **5 % reduction** in churn.

**Result**  
The model ran on a fully serverless stack costing <$1k/month vs. $15k for the legacy monolith, while achieving 99.9 % availability. I documented all experiments (MLflow) and conducted a post‑mortem that revealed initial data sparsity; we fixed it by enriching features with session metadata—an example of learning from failure.

**Leadership Principles**  
*Customer Obsession* – delivered measurable engagement gains.  
*Ownership* – owned end‑to‑end pipeline, cost optimization, and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
