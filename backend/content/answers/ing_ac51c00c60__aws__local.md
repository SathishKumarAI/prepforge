---
qid: ing_ac51c00c60__aws__local
question: 'Explain: Use case: User enters a paste''s url and views the contents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 417
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:55:42-05:00'
sources: []
---

**Customer Obsession & Ownership**

> **Situation:** A media company wanted a feature where users paste a URL and instantly see the article’s key points, saving time for busy readers.

> **Task:** Build an end‑to‑end ML pipeline that fetches arbitrary webpages, extracts clean text, summarizes it, and serves results with sub‑second latency.

> **Action:**
> 1. **Data ingestion** – Lambda + API Gateway pulls the page; S3 stores raw HTML (cost ~ $0.023/GB).  
> 2. **Text extraction & cleaning** – AWS Glue crawls the bucket, runs a custom Spark job that removes ads and scripts, writes plain text to DynamoDB.  
> 3. **Summarization model** – Deploy a fine‑tuned T5 (≈200M params) on SageMaker’s `ml.g4dn.xlarge` spot instances; inference is served via SageMaker endpoint with an autoscaling policy that keeps 2 warm copies, ensuring <300 ms latency.  
> 4. **Caching & CDN** – CloudFront caches summaries for 24 h, reducing compute by ~70%.  
> 5. **Monitoring** – CloudWatch metrics (latency, error rate) trigger an SNS alert; automated rollback via Lambda on model drift.

> **Result:** In production, we handled 1M requests/day with a 99.8% success rate while keeping cost under $4k/month—30 % cheaper than a monolithic architecture. Users reported a 45 % reduction in time spent reading headlines (A/B test).  

**Bar‑raiser cues:** Demonstrated ownership of the full lifecycle, deep dive into data quality and model choice, quantified performance gains, and iterative learning from latency spikes by adding an edge‑cache layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
