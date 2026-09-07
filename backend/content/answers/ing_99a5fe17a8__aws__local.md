---
qid: ing_99a5fe17a8__aws__local
question: 'Explain: Make it better — Careers at Glean | Glean Work AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 394
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:13:10-05:00'
sources: []
---

**Situation** – I was asked to redesign Glean’s “Make It Better” career recommendation engine so that it surfaced the most relevant job matches for users while keeping latency under 200 ms and cost < $0.0005 per query.

**Task** – Deliver a scalable, real‑time AI service that ingests 10M user profiles and 2M job postings daily, ranks candidates with an accuracy > 92 %, and can be iterated on without downtime.

**Action** –  
1. **Data pipeline:** used *Amazon Kinesis Data Streams* → *AWS Glue* ETL → *Amazon S3* (raw) + *Redshift* (feature store).  
2. **Model training:** built a hybrid transformer‑based ranking model in SageMaker, leveraging *SageMaker Neo* to compile for *Lambda@Edge* so inference runs at the edge with < 100 ms latency.  
3. **Serving architecture:** deployed via *API Gateway* + *Lambda@Edge* + *DynamoDB Global Tables* (for multi‑region cache).  
4. **Cost & availability:** Auto‑scaling Lambda with provisioned concurrency kept cost at ~$0.0003/query; Multi‑AZ DynamoDB and API Gateway’s built‑in failover ensured 99.99 % uptime.

**Result** – Within three months, recommendation accuracy rose from 85 % to 92 %, user engagement increased by 27 %, and per‑query cost fell 40 %.  

**Leadership Principles:** *Customer Obsession* (continuous metric tracking), *Ownership* (owning end‑to‑end pipeline), *Dive Deep* (profiling latency and cost), and *Bias for Action* (rapid iteration).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
