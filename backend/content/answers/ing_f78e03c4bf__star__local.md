---
qid: ing_f78e03c4bf__star__local
question: 'Explain: Search engine — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 296
total_tokens: 532
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:43:55-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a niche search product for academic papers, and the initial crawl depth was only two levels deep. This limited relevance; our click‑through rate dropped to 12% after the first month.

**Task:**  
I had to redesign the crawler architecture to support deeper, more efficient crawling while keeping bandwidth usage under 200 GB/day and respecting robots.txt.

**Action:**  
I introduced a distributed priority queue using Redis Streams where URLs were scored by PageRank‑like link weight plus domain freshness. A set of stateless worker nodes (Python + asyncio) pulled tasks, fetched pages with `aiohttp`, parsed HTML with BeautifulSoup, extracted metadata, and stored results in a PostgreSQL shard per domain. I added politeness throttling via per-domain semaphores and implemented a dynamic depth cap that reduced crawl depth for low‑authority domains. For scalability, I deployed the workers on Kubernetes with HPA based on queue length.

**Result:**  
Within two weeks, crawl coverage increased from 2 to 5 levels deep, improving search result relevance and raising click‑through rate to 27% (+115%). Bandwidth stayed below target, and we reduced duplicate fetches by 35%. I learned how careful task prioritization and horizontal scaling can dramatically improve crawler efficiency without sacrificing politeness or cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
