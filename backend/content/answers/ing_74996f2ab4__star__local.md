---
qid: ing_74996f2ab4__star__local
question: 'Explain: Approach #1: Synchronous communication — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 371
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:27:32-05:00'
sources: []
---

**Situation** – At my previous company we were building a real‑time news aggregator for a financial client. The data pipeline required fetching article metadata from 3,000 RSS feeds every minute to keep the search index fresh.

**Task** – I had to design a crawler that could pull all feeds within that one‑minute window while guaranteeing at least 95 % uptime and respecting each publisher’s rate limits.

**Action** – I chose a synchronous request model backed by a thread pool of 200 workers. Each worker performed an HTTP GET, parsed the XML, extracted title/URL/timestamp, and pushed the result into a Redis queue for downstream indexing. To avoid hitting any single host too hard, I built a per‑domain throttler that cached the last fetch time and dynamically adjusted sleep intervals based on the `Retry-After` header or a default 10 s backoff. The workers also used HTTP/2 multiplexing to keep a small number of persistent connections open, reducing TLS overhead. I added circuit‑breaker logic: if a domain returned three consecutive failures, it was temporarily blacklisted for 5 minutes.

**Result** – The crawler consistently fetched all feeds in under 45 seconds, achieving a 97 % success rate and keeping the index latency below 30 s. After deployment we saw a 12 % reduction in stale content alerts from the client, and the system scaled to 10,000 feeds with only a modest increase in CPU usage. I learned that carefully tuned synchronous pipelines can outperform asynchronous ones when throughput is bounded by external API limits and deterministic latency is required.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
