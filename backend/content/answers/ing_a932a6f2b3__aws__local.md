---
qid: ing_a932a6f2b3__aws__local
question: 'Explain: Additional talking points — system-design-primer/solutions/system_design/pastebin/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 445
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:49:05-05:00'
sources: []
---

**Situation / Task**

When I joined the data‑science team at a SaaS startup, we were asked to build an end‑to‑end machine‑learning pipeline that could ingest user logs from our Pastebin‑style service, train models for content moderation, and serve predictions with <200 ms latency. The business required 99.9% uptime and cost below $1k/month.

**Action**

- **Ownership & Customer Obsession:** I scoped the solution as a single, serverless stack:  
  - *AWS Lambda* + *API Gateway* for ingestion (event‑driven).  
  - *S3* to stage raw logs; *Glue* to catalog and clean.  
  - *Amazon SageMaker* for training (AutoML) and hosting endpoints.  
  - *DynamoDB* caches predictions, backed by *ElastiCache* Redis for hot data.  
- **Dive Deep & Bias for Action:** I wrote a cost‑model in Python that projected $0.75/month for storage + $0.20/month for inference when throttled to 10k requests/day. I also implemented CI/CD with *CloudFormation* and *CodePipeline*, adding automated rollback on failure.  
- **Invent & Simplify:** Replaced the monolithic batch job with a streaming pipeline (Kinesis → Lambda → SageMaker Endpoint), cutting training time from 12 hrs to 2 hrs.

**Result**

Within three months, latency dropped to 120 ms, cost stayed at $0.68/month, and our moderation accuracy improved from 78% to 92%. The system handled a peak of 45k requests/day without any outages—meeting the 99.9% SLA.

*What a bar‑raiser looks for:* clear ownership, deep technical choices backed by metrics, rapid iteration with measurable impact, and learning from early failures (e.g., switching from batch to streaming).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
