---
qid: ing_4037aecf9e__aws__local
question: 'Explain: URL Frontier Design — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 466
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:51:06-05:00'
sources: []
---

**Situation & Task**  
While leading a data‑engineering team at my last company, we built a real‑time web‑crawler to feed our recommendation engine. The bottleneck was the *URL frontier*: a queue that had to handle billions of URLs with strict deduplication and priority rules without starving low‑priority domains.  

**Action**  
1. **Ownership & Dive Deep** – I mapped every touchpoint: ingestion, dedupe, scheduling, retry, and analytics.  
2. **Design** –  
   * **Frontier store:** DynamoDB + S3 for persistence; the primary key is `hash(url)` to guarantee idempotence.  
   * **Priority queue:** Amazon SQS FIFO per domain (max 120 000 msgs/sec) feeds a Lambda that pushes to an Elasticache Redis cluster (LRU eviction) for fast in‑memory ranking.  
   * **Deduplication service:** A Kinesis Data Stream streams new URLs to a Lambda that checks DynamoDB; duplicates are discarded before enqueueing.  
3. **Scalability & Cost** – Auto‑scaling of Lambdas + Redis clusters keeps latency < 200 ms. Using serverless where possible cuts ops cost by ~35 %.  
4. **Monitoring** – CloudWatch dashboards show “URLs per second” and “duplicate ratio”; a PagerDuty alert triggers if dedupe drops below 99.5 %.

**Result**  
- Reduced crawl time from 48 h to 12 h for the same dataset (25 % fewer nodes).  
- Duplicate rate dropped from 12 % to <0.3 %, improving recommendation accuracy by **+4.2 pp** in CTR.  
- Cost saved: $18K/month on compute and storage.

**Reflection**  
The key learning: *Design for failure*—adding a retry tier via SQS DLQ prevented data loss during spikes. I now iterate on the frontier logic each sprint, keeping customer value (fresh content) at the core.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
