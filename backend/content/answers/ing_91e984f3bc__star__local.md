---
qid: ing_91e984f3bc__star__local
question: 'Explain: Web crawler — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 338
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:24:42-05:00'
sources: []
---

**Situation** – At my last company we built a recommendation engine that required fresh product data from e‑commerce sites. The existing API was rate‑limited and many stores only exposed HTML pages, so we needed a crawler to harvest listings in real time.

**Task** – Design a scalable, fault‑tolerant web crawler that could fetch millions of pages per day, respect robots.txt, avoid IP bans, and feed structured data into our ingestion pipeline without overwhelming target sites.

**Action** – I architected a distributed system using Kafka for task queuing, Redis for URL deduplication, and a pool of headless Chrome workers behind an Nginx reverse proxy. Each worker fetched pages, parsed with BeautifulSoup, extracted JSON‑LD metadata, and emitted structured records to a ClickHouse analytics store. I implemented politeness policies (dynamic delay per domain), retry logic with exponential backoff, and IP rotation via a pool of residential proxies. Monitoring was built into Grafana dashboards that tracked fetch latency, error rates, and throughput.

**Result** – The crawler scaled from 5 k to 200 k pages/day within three weeks, reduced duplicate fetches by 92%, and cut average page‑to‑data latency from 15 min to under 3 min. The engine’s fresh data boosted recommendation accuracy by 12% year‑over‑year. I learned how to balance speed with politeness and the importance of observability in large‑scale crawling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
