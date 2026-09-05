---
qid: ing_580ffa64ac__star__local
question: 'Explain: 124: System Design Interview — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 354
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:23:49-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching an internal knowledge‑base that required up‑to‑date web content from hundreds of news sites. The existing scraper was a single script that stalled under heavy load and missed pages due to rate limits, so the content lagged by days.

**Task:**  
I needed to design a scalable, fault‑tolerant crawler that could fetch, parse, deduplicate, and store 200 k URLs per day while respecting robots.txt and API limits, all within our cloud budget.

**Action:**  
I architected a distributed system using Kubernetes for orchestration. A scheduler service fed URL “work items” into a Redis queue; worker pods pulled items, performed HTTP requests with exponential back‑off, and parsed HTML with BeautifulSoup. Results were sent to a Kafka topic where a deduplication microservice hashed URLs (using Murmur3) and wrote unique pages to an S3 bucket; metadata was indexed in Elasticsearch for quick search. I added a rate‑limit controller that tracked per‑domain request counts via Redis TTLs, preventing over‑requesting. For resilience, workers were stateless and re‑queued failed items after 5 min.

**Result:**  
The new crawler processed 250 k URLs daily with <1 % duplicate rate, reducing content lag to under 12 hours. Cost stayed below $2 K/month, and the system scaled automatically during traffic spikes. I learned how to balance throughput, politeness policies, and cost while keeping the pipeline maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
