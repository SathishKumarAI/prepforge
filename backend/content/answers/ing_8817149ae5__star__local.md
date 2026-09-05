---
qid: ing_8817149ae5__star__local
question: 'Explain: Approach #3: Orchestration — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 350
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:04:52-05:00'
sources: []
---

**Situation**  
I was leading the data ingestion team at a fintech startup that needed real‑time market sentiment from thousands of financial blogs and forums. Our existing scraper stack hit rate limits and produced duplicate pages, so we lost about 25% of new content each day.

**Task**  
Design an orchestration layer to coordinate distributed crawlers, avoid IP bans, ensure freshness, and scale to 10 k requests per minute without overloading target sites.

**Action**  
I built a lightweight scheduler in Go using Redis Streams for task queuing. Each crawler instance pulls URLs from the stream, checks a Bloom filter (in-memory) to prevent revisits, and tags requests with rotating User‑Agent strings sourced from an external rotation service. I added a rate‑limit manager that dynamically adjusts per‑domain request windows based on HTTP 429 responses, storing counters in Redis TTL keys. For fault tolerance, each crawler writes a heartbeat to etcd; if a node dies, its pending URLs are requeued automatically. We also instrumented Prometheus metrics (queue depth, error rates) and set up Grafana alerts.

**Result**  
Within two weeks of deployment, crawl latency dropped from 15 min to under 3 min for fresh articles, duplicate hits fell by 92%, and we handled a 40% traffic spike during earnings season with zero downtime. The system also cut our infrastructure cost by 18% by reducing idle crawler instances. I learned that combining lightweight orchestration with adaptive rate‑limiting is key to building robust, scalable web crawlers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
