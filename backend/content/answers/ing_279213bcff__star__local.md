---
qid: ing_279213bcff__star__local
question: 'Explain: Handling Intentional Duplicates — Web Crawler System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 351
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:47:39-05:00'
sources: []
---

**Situation:**  
While leading the backend team for a news aggregator, we noticed that our crawler was repeatedly fetching the same articles from syndicated feeds, inflating storage costs by 35% and delaying fresh content delivery to users.

**Task:**  
I had to design a lightweight duplicate‑handling mechanism that would flag intentional duplicates (e.g., re‑published stories) without blocking genuine new content, all while keeping crawl latency under 4 s per domain.

**Action:**  
I introduced a two‑stage deduplication pipeline. First, each URL was hashed with SHA‑256 and stored in a Redis sorted set keyed by hostname; if the hash existed within the last 24 h, the URL was marked “seen”. Second, for URLs flagged as seen, we fetched only the HTTP `Last-Modified` header and compared it to our cached timestamp. If unchanged, the crawler skipped download; if changed, it re‑fetched content but updated a separate “intentional duplicate” flag in Postgres. We also implemented a Bloom filter per domain to avoid unnecessary hash lookups for low‑frequency sites.

**Result:**  
Duplicate fetches dropped from 28% to 4%, cutting storage costs by $12k/month and reducing crawl queue size by 60%. The system maintained sub‑4 s latency, and we gained a reusable deduplication library adopted across three new projects. I learned that combining probabilistic data structures with lightweight metadata checks can efficiently solve large‑scale duplicate problems without compromising freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
