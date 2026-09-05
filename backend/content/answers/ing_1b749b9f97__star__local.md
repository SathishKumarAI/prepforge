---
qid: ing_1b749b9f97__star__local
question: 'Explain: Web Crawler System Components — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 415
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:24:10-05:00'
sources: []
---

**Situation** – I was hired as the lead engineer on a startup that wanted to build a real‑time search engine for niche e‑commerce sites. Our data pipeline had to ingest and index millions of product pages daily while staying under an $80k monthly cloud bill.

**Task** – Design a scalable, fault‑tolerant web crawler that could discover new URLs, fetch pages, parse product info, deduplicate content, and feed the search index—all within 24 hours of publication.

**Action** – I broke the system into four microservices:  
1. **Scheduler/Politeness Queue** (Redis Streams) to enforce per‑domain rate limits and prioritize fresh sites.  
2. **Fetcher** (Python + aiohttp) that ran in a Kubernetes cluster, using async streams and TLS session reuse for speed.  
3. **Parser & Dedup** (Node.js with Cheerio) which extracted JSON‑LD data, hashed URLs via Murmur3, and stored unique docs in PostgreSQL.  
4. **Storage Layer** – ElasticSearch for full‑text search and a DynamoDB table for crawl metadata. I added a lightweight circuit breaker to drop stalled domains and used SQS for back‑pressure.

**Result** – The crawler processed 3 million pages per day, with a page‑fetch latency of 120 ms on average, while keeping costs at $68k/month. We saw search result freshness improve from 48 hours to under 4 hours, and the system handled a 5× traffic spike during a flash sale without downtime. I learned that decoupling components with async queues and careful rate‑limiting is key to balancing speed and cost in large‑scale crawling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
