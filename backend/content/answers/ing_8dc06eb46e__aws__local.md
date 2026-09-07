---
qid: ing_8dc06eb46e__aws__local
question: 'Explain: High-Level System Design — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 417
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:46:17-05:00'
sources: []
---

**Situation & Task**  
I was tasked with designing a web‑crawler for a startup that wanted to index ~5 M pages daily for its recommendation engine. The goal: 99.9% crawl success, <10 min latency from request to storage, and cost ≤$1k/month.

**Action – Architecture**  
- **Front‑end**: API Gateway + Lambda (Python) receives URLs → queues in SQS.  
- **Crawl workers**: EC2 Spot Fleet (t3.large) behind an Application Load Balancer; each worker pulls a batch from SQS, uses `scrapy` with polite headers, and writes results to **Amazon S3** (object per domain).  
- **State & dedup**: DynamoDB table (`url_hash → status`) stores crawl state; TTL keeps stale entries.  
- **Scheduler**: CloudWatch Events triggers a Lambda that seeds new URLs from the DB and publishes to SQS.  
- **Observability**: CloudWatch metrics + X-Ray traces; alerts on >5 % failure.

**Result**  
Within 3 weeks, we achieved 99.6% success rate (≈4.9 M pages) with average latency 8 min. Cost stayed at $850/month. After a spike of malformed URLs, I added regex validation in Lambda → reduced errors by 30%.

**Leadership Principles**  
- **Customer Obsession**: Built a system that reliably feeds our recommendation engine.  
- **Ownership & Dive Deep**: Own the entire pipeline, debugged SQS back‑pressure issues, and tuned EC2 instance mix.

**Bar‑raiser notes**  
They’ll expect you to quantify impact (pages/day, cost), show ownership of failure modes, and explain trade‑offs between Spot vs. On‑Demand and DynamoDB throughput limits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
