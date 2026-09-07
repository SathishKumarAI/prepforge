---
qid: ing_f3086e4890__aws__local
question: 'Explain: Web Crawler Components Coordination — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 494
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:26:12-05:00'
sources: []
---

**Situation / Task**  
I led the redesign of our global web‑crawling pipeline at a media startup that needed to index > 10 M URLs daily while keeping crawl latency < 30 s per domain. The goal was to replace a monolithic crawler with a scalable, fault‑tolerant micro‑service architecture.

**Action (Design)**  
1. **Coordination Layer** – A *Scheduler* service built on Amazon DynamoDB streams and Step Functions orchestrates URL batches. It enforces per‑domain politeness via distributed locks in Redis‑on‑ElastiCache.  
2. **Worker Fleet** – AWS Fargate containers run the fetcher (Python/asyncio). Each worker pulls a batch from SQS, uses *aws-lambda* for lightweight pre‑processing, and writes raw HTML to Amazon S3 with lifecycle policies.  
3. **Result Aggregator** – An EMR Spark job consumes S3 objects, extracts metadata, and pushes structured data into Amazon Neptune for graph queries.  
4. **Observability** – CloudWatch metrics + X-Ray trace per domain; alerts trigger auto‑scaling of workers.

**Result (Data)**  
- Crawl latency dropped from 45 s to **22 s** on average.  
- Throughput increased from 2 M to **12 M URLs/day** (+600%).  
- Cost fell by **35%** due to serverless components and spot‑instance usage.

**Leadership Principles**  
- *Ownership* – I owned the end‑to‑end system, wrote all unit tests, and drove cross‑team adoption.  
- *Dive Deep* – I profiled CPU/memory on Fargate tasks and discovered a 40 % bottleneck in the URL de‑duplication logic; refactored it to use Bloom filters.  

**Bar‑raiser cues**  
- Clear ownership of failure modes (e.g., retry logic, dead‑letter queues).  
- Quantified impact (latency, throughput, cost).  
- Demonstrated learning: after an initial 10 % error rate due to race conditions, I added idempotent writes and saw a 98 % success rate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
