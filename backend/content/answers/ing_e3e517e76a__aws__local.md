---
qid: ing_e3e517e76a__aws__local
question: 'Explain: Salary by City (Yes, Location Still Matters)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 419
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:54:13-05:00'
sources: []
---

**Situation & Task**  
I was hired to build a real‑time “Salary by City” feature for a global recruiting SaaS that promised location‑agnostic pricing. The business required accurate, city‑level salary benchmarks that could be queried in milliseconds while scaling to 100 M users.

**Action (Design)**  
- **Data ingestion**: Ingested public compensation datasets + partner APIs via **AWS Glue** nightly ETL into a partitioned **Redshift** cluster.  
- **Real‑time API**: Built an **API Gateway → Lambda** layer that reads from a **DynamoDB Global Table** (cached 10 k most common cities) and falls back to Redshift for rare cities, using **Amazon Athena** for ad‑hoc analytics.  
- **Caching & scaling**: Leveraged **ElastiCache Redis** for hot city buckets; auto‑scales on CloudWatch metrics.  
- **Cost control**: Spot instances for Glue jobs, reserved DB nodes for Redshift, and Lambda provisioned concurrency only during peak hours.

**Result (Metrics)**  
- 99.8 % of queries served in <50 ms.  
- Latency dropped from 300 ms to 35 ms within two weeks.  
- Monthly spend cut by 30 % ($120k/yr) while supporting a 4× user growth.

**Reflection (Learning)**  
I owned the failure mode where cache staleness caused out‑of‑date salaries; added a version tag and automated refresh pipeline, improving data freshness to <1 h.  

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered instant, accurate city benchmarks for recruiters worldwide.  
- **Ownership & Dive Deep**: Took end‑to‑end responsibility and engineered a scalable, cost‑effective solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
