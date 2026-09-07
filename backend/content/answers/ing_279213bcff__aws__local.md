---
qid: ing_279213bcff__aws__local
question: 'Explain: Handling Intentional Duplicates — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 644
total_tokens: 878
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:55:22-05:00'
sources: []
---

**Leadership Principles Anchored:**  
- **Customer Obsession** – our crawlers must deliver fresh, accurate data for downstream ML models that drive search relevance.  
- **Ownership & Dive Deep** – I own the duplicate‑handling pipeline and dig into every failure mode.

---

### Situation / Task
In 2023 we launched a new web‑crawler to feed an NLP model that powers product recommendations. The crawler was ingesting > 2 M URLs per day, but downstream ML metrics dropped by 12 % because duplicate pages were polluting training data. I had to design a system that **identifies intentional duplicates** (e.g., “/product/123‑red” vs. “/product/123‑blue”) while preserving legitimate variations.

### Approach / Action
1. **Canonicalization Engine**  
   * Parse URLs, strip query params, normalize case & trailing slashes.  
   * Use a deterministic hash of the canonical path as a de‑dup key.  

2. **Deduplication Store** – **Amazon DynamoDB** with 1 GB per partition; TTL of 30 days to keep the table lean.  
   * `PutItem` with `ConditionExpression: attribute_not_exists(hash)` → writes only new URLs.  
   * `BatchGetItem` for bulk checks during crawling.

3. **Intentional‑Duplicate Detection** – a Lambda layer runs a lightweight ML model (scikit‑learn) that scores URL similarity based on path tokens and query keys. If the score > 0.8, we flag as intentional duplicate and route to a separate “variant” bucket in S3 for downstream processing.

4. **Scalability & Availability**  
   * DynamoDB auto‑scale with `Read/Write Capacity Auto Scaling`.  
   * Lambda concurrency throttling protects the table during traffic spikes.  
   * S3 buckets are multi‑region (us-east-1, eu-central-1) for geo‑redundancy.

5. **Cost Optimization**  
   * Use DynamoDB on‑demand pricing; the write throughput peaks at 20 k WCU/day, costing ~$0.25/month.  
   * Lambda invocations are < 10 µs per URL, <$0.05/month.

### Result
* Duplicate ingestion dropped from **18 % to 2 %** of total crawled pages.  
* ML model precision increased by **7 pp**, boosting recommendation CTR by **4 %**.  
* System latency added < 5 ms per URL, well within the crawler’s SLA.

### Learning & Bar‑raiser Signals
- **Ownership:** I drove the full cycle from problem definition to production rollout.  
- **Dive Deep:** Built a custom similarity model and profiled DynamoDB throughput.  
- **Quantified Impact:** Clear metrics on duplicate reduction and downstream KPI lift.  
- **Learning from Failure:** Early trials with a naive hash caused false positives; iterating on the similarity score prevented that.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
