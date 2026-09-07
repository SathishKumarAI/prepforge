---
qid: ing_38b68baa0c__aws__local
question: 'Explain: Endpoint: GET /analytics/{short_code} — Design URL Shortener |
  System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 405
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:33:06-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **S**ituation: My team was asked to expose a new analytics endpoint for our URL‑shortener service that would return click metrics in real time.  
> **T**ask: Design the API and underlying architecture so it can serve millions of requests per day with < 200 ms latency while keeping cost under $5k/month.  
> **A**ction: I chose a *serverless* stack on AWS to maximize elasticity and reduce ops overhead.  
> *API Gateway* handles throttling (10K RPS burst, 1M/day) and provides IAM auth for internal services.  
> *Lambda* (Python) pulls aggregated metrics from an **Amazon DynamoDB** table (`ShortCodeMetrics`) that is partitioned by `short_code` and updated via a *DynamoDB Streams → Lambda* pipeline that writes to an **Amazon Kinesis Data Analytics** job, which maintains a rolling window of click counts in **Redis‑ElastiCache** for ultra‑fast reads.  
> The Lambda function first checks the cache; on miss it queries DynamoDB (single‑item read). This two‑tier strategy keeps cost low while meeting latency goals.  
> **R**esult: We saw 98 % of requests served in <150 ms, and monthly spend dropped from $12k to $4.3k. The system handled a 300 % traffic spike during a marketing campaign without any manual scaling or outages.

*Bar‑raiser cues:* I owned the end‑to‑end design, *dove deep* into latency‑cost trade‑offs, quantified the impact with real numbers, and learned that caching is essential for sub‑200 ms responses in a write‑heavy analytics service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
