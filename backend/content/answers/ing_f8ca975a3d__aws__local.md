---
qid: ing_f8ca975a3d__aws__local
question: 'Explain: System Requirements — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 480
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:41:04-05:00'
sources: []
---

**Situation & Task**  
At my last company I led a sprint to build a web‑crawler that fed our recommendation engine with fresh product data. The requirement was to harvest 200 k URLs per day, deduplicate, and store the results in near‑real time for downstream ML pipelines.

**Action – System Design**  
I architected a **stateless crawler layer** on **AWS Fargate** (CPU‑optimized) orchestrated by **Step Functions**. Each task pulls a URL batch from an **SQS FIFO queue**, fetches the page via **Amazon CloudFront** (edge caching), parses it with a lightweight Go worker, and writes deduped JSON to **Amazon DynamoDB** (partition key = URL hash).  
To avoid over‑scraping, I implemented a **token bucket** in **ElastiCache Redis** that tracks request rates per domain. For high‑volume sites, the crawler scales horizontally by adding Fargate tasks; for bursty traffic we auto‑scale with **Application Auto Scaling** on the queue depth.  

**Result**  
Within two weeks of deployment, crawl throughput hit 250 k URLs/day (25% above target) while keeping per‑request cost <$0.0005. DynamoDB read/write capacity was provisioned at 10 k RCU/WCU, yielding <1 ms latency for 99th percentile lookups.  

**Leadership Principles & Bar‑raiser Focus**  
- **Ownership**: I drove the end‑to‑end design and took responsibility for cost/latency trade‑offs.  
- **Dive Deep**: Quantified traffic patterns to set token bucket limits; logged failures to root‑cause 0.5% error rate.  
- **Deliver Results**: Exceeded throughput goal with predictable costs, enabling downstream ML models to train on fresher data, boosting recommendation click‑through by 12%.  

By aligning architecture choices (Fargate, SQS, DynamoDB) with AWS best practices, the crawler scales elastically while remaining cost‑effective and highly available.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
