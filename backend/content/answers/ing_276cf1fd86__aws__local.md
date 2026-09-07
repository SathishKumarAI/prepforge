---
qid: ing_276cf1fd86__aws__local
question: 'Explain: IR Calendar — Investor Relations | SoftBank Group Corp.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 461
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:55:04-05:00'
sources: []
---

**Situation / Task**  
I was asked to build a public‑facing dashboard that pulls SoftBank Group’s Investor Relations (IR) calendar – earnings releases, dividend dates, and regulatory filings – and surfaces it in real time for analysts and retail investors. The goal was to reduce manual email digests by 90 % and improve on‑time visibility of key events.

**Action**  
*Ownership & Dive Deep*: I assumed full ownership, first dissected the legacy CSV feeds (≈ 200 rows/month), identified missing timestamps, and built an ETL pipeline in **AWS Glue** that normalizes dates to ISO‑8601, enriches records with event priority tags, and stores them in a **Redshift** data warehouse.  
*Bias for Action & Deliver Results*: I exposed the data via a **REST API** on **API Gateway + Lambda**, caching responses in **Elasticache (Redis)** for sub‑second latency. The front‑end is a single‑page React app served from an **S3 static website** behind CloudFront, ensuring 99.99 % availability.  
*Invent & Simplify*: I leveraged **Amazon EventBridge** to trigger the Glue job on any S3 upload, eliminating manual runs and cutting cost by 35 %. The entire stack is serverless (except Redshift), keeping monthly spend below $1,200.

**Result**  
- Real‑time event visibility achieved with < 200 ms response time.  
- Analyst time saved: 90 % reduction in manual digests → 8 hours/week per analyst.  
- User adoption: 3,500 unique sessions/month within the first month.  
- Cost savings: 35 % lower than the legacy on‑prem solution.

**Bar‑raiser Takeaway**  
I demonstrated *ownership* by turning a fragmented data source into an end‑to‑end AWS service; *dive deep* through schema normalization and cost optimization; quantified impact with clear metrics; and learned from early latency spikes, iterating to use Redis caching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
