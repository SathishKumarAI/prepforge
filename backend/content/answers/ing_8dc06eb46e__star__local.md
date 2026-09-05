---
qid: ing_8dc06eb46e__star__local
question: 'Explain: High-Level System Design — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 334
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:16:11-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a competitor‑tracking dashboard that required daily updates on product listings from over 500 e‑commerce sites. The existing scraper was brittle, ran overnight, and missed time‑sensitive deals, leading to stale data and customer complaints.

**Task:**  
I had to architect a scalable, fault‑tolerant web crawler that could fetch up to 10 000 pages per hour, respect robots.txt, cache results, and deliver fresh content within 12 hours of publication while keeping costs under $2k/month on AWS.

**Action:**  
I chose a distributed system built on Kubernetes with a Celery queue for task scheduling. Each worker spun up a headless Chrome instance (Puppeteer) wrapped in Docker to render JavaScript‑heavy pages, and we used Redis for deduplication and rate‑limiting per domain. I implemented a politeness layer that parsed robots.txt and enforced crawl-delay headers. For storage, we leveraged DynamoDB with TTLs for stale entries and S3 for raw HTML snapshots. Monitoring was handled via Prometheus/Alertmanager to auto‑scale workers based on queue depth.

**Result:**  
The new crawler achieved 12 k pages/hour throughput, reduced data lag from 24 hours to under 8 hours, and cut infrastructure costs by 30% through efficient autoscaling. I learned how to balance speed, politeness, and cost in a production‑grade crawling pipeline while ensuring reliability at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
