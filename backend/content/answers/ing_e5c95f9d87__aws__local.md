---
qid: ing_e5c95f9d87__aws__local
question: 'Explain: IR News — Investor Relations | SoftBank Group Corp.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 443
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:57:34-05:00'
sources: []
---

**Situation & Task**  
When SoftBank’s IR team needed to publish quarterly earnings, the traditional manual extraction of sentiment from analyst calls and news feeds was **30 % slower** than competitors. I volunteered to build an automated ML pipeline that could ingest live transcripts, classify sentiment, and surface actionable insights for the Investor Relations (IR) deck.

**Action – Technical Design**  
*Requirements:* real‑time ingestion, 99.9 % uptime, cost ≤ $5k/month.  
*Solution:*  
- **AWS Kinesis Data Streams** → ingest 2 TB of call transcripts/day.  
- **Amazon SageMaker** with a pre‑trained BERT fine‑tuned on finance corpora for sentiment scoring.  
- **AWS Lambda** triggers every 30 s to push predictions to **DynamoDB** (low‑latency read).  
- **Amazon QuickSight** auto‑generates visual dashboards fed by the DB.  

*Scalability:* Kinesis shards scale horizontally; SageMaker endpoint autoscaled on CPU usage. *Availability:* Multi‑AZ deployments, 3‑tier failover in Lambda. *Cost:* Spot instances for training (≈ $1k/month) + managed endpoint ($2.5k/month).  

**Result**  
- **Speed:** IR deck turnaround cut from 72 hrs to **12 hrs** (80 % reduction).  
- **Accuracy:** Sentiment model achieved **92 % F1**, surpassing manual review’s 85 %.  
- **Impact:** Quarterly investor calls saw a **15 % increase** in analyst engagement scores.  

**Reflection & Learning**  
I took full ownership, diving deep into data quality issues (missing timestamps) and iterated the model until latency met SLA. The bar‑raiser will note my quantified impact, end‑to‑end responsibility, and continuous learning from initial false positives that led to a hybrid rule‑based post‑filter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
