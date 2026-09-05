---
qid: ing_dd175bf637__star__local
question: 'Explain: Approach #2: Choreography — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 314
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:50:06-05:00'
sources: []
---

**Situation** – At my previous company we needed to build a real‑time news aggregator for a media partner. The existing monolithic scraper was slow, single‑point of failure, and couldn’t scale beyond a handful of sites.  
**Task** – Design an independent, fault‑tolerant crawler that could discover new URLs, fetch pages, parse content, and feed the indexer without central coordination.  
**Action** – I chose a choreography pattern: each microservice (URL distributor, fetcher, parser, storage) communicated via Kafka topics. The URL distributor published seed URLs; fetchers subscribed, pulled messages, fetched HTML, and emitted “page_fetched” events. Parsers listened to those events, extracted links, metadata, and pushed new URLs back into the distributor topic—creating a self‑propagating pipeline. I used Docker Compose for local dev, Kubernetes with horizontal pod autoscaling in production, and implemented idempotent processing via message keys to avoid duplicates. We also added a retry/backoff strategy per consumer group to handle transient network errors.  
**Result** – Crawl latency dropped from 30 minutes to under 5 minutes for top sites, throughput increased by 4×, and the system handled a 200% spike in traffic with zero downtime. I learned that decoupling services through event streams not only improves scalability but also makes failure isolation trivial.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
