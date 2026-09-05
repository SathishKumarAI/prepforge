---
qid: ing_39772e6b1f__star__local
question: 'Explain: Web Crawler — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 337
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:23:58-05:00'
sources: []
---

**Situation:**  
At my previous startup we built a competitive intelligence platform that needed up-to-date pricing data from thousands of e‑commerce sites. The existing scraper was single‑threaded, crashed on anti‑bot measures, and had a lag of 48 hours.

**Task:**  
Design a scalable, fault‑tolerant web crawler that could fetch pages at a rate of ~200 k requests per day while respecting robots.txt, handling CAPTCHAs, and storing parsed data in near real‑time for downstream ML models.

**Action:**  
I architected a distributed system on Kubernetes using a message queue (Kafka) to decouple discovery from fetching. A scheduler service generated seed URLs and pushed them to Kafka; worker pods ran Scrapy with rotating proxies and user‑agents, plus headless Chrome for dynamic content. I added a rate‑limit middleware that honored per‑domain politeness and used Bloom filters to avoid duplicate fetches. Parsed JSON was streamed into a ClickHouse column store for low‑latency analytics, and a monitoring stack (Prometheus + Grafana) tracked latency, error rates, and compliance metrics.

**Result:**  
The crawler achieved 250 k requests/day with <5 % failure rate, reduced data lag to under 4 hours, and cut infrastructure costs by 30 %. I learned how to balance throughput with politeness, the importance of decoupling components for resilience, and that real‑time observability is critical when scaling web scraping workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
