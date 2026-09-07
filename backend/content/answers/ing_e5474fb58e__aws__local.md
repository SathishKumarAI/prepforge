---
qid: ing_e5474fb58e__aws__local
question: 'Explain: Step 2 — How to Avoid Crawling Duplicate URLs at Google Scale?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 375
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:56:29-05:00'
sources: []
---

**Situation** – While building a crawler for an internal search‑engine product, I noticed that duplicate URLs caused 35 % of the crawl budget to waste bandwidth and storage.  
**Task** – Design a system that prevents crawling duplicates at scale (millions of pages per second).  
**Action** –  
1. **Deduplication Layer**: I introduced a *Bloom filter* in front of the URL queue, backed by an Amazon ElastiCache Redis cluster for fast membership checks.  
2. **URL Normalization Service**: A stateless Lambda function normalizes URLs (scheme, trailing slash, query param ordering) before hashing into the Bloom filter.  
3. **Scalable Queue**: Deduped URLs are pushed to an Amazon SQS FIFO queue; each consumer pulls from SQS and writes a unique hash to DynamoDB for audit.  
4. **Monitoring & Alerting** – CloudWatch metrics on “duplicate hits” trigger SNS alerts; if duplicates exceed 5 % of traffic, the system throttles new requests.

**Result** – After deployment, duplicate traffic dropped from 35 % to <2 %, saving $12k/month in EC2 bandwidth and reducing storage costs by 18 %. The crawler throughput rose to 4× without added cost.  

*Leadership Principles*: **Ownership** (I owned the end‑to‑end pipeline), **Dive Deep** (chose Bloom filters after profiling hash collisions), and **Deliver Results** (quantified savings).  
Bar‑raisers listen for a clear ownership narrative, deep technical justification, measurable impact, and reflection on how to improve resilience if the Bloom filter ever misfires.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
