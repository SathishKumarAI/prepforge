---
qid: ing_948f69c294__star__local
question: 'Explain: Removing a Node — Consistent Hashing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 369
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:30:02-05:00'
sources: []
---

**Situation** – In my last role I was redesigning the CDN caching layer for a video streaming service that served over 50 M unique assets daily. The existing round‑robin sharding scheme caused hot‑spot traffic and frequent cache misses when we added or removed edge servers.

**Task** – I needed to implement a scaling strategy that allowed us to add or retire edge nodes with minimal data movement, while keeping lookup latency under 5 ms and ensuring even distribution of content across the cluster.

**Action** – I chose consistent hashing. First, I mapped each physical node to 200 virtual tokens on a 64‑bit ring using Murmur3. For each asset key (a SHA‑256 hash of its URL), I performed a binary search over the token array to find the successor node. When a server was removed, only the assets whose hash fell between its predecessor and itself needed reassigning—about 0.5 % of the total cache. I also added a “replica factor” of three, so every key had two backup nodes on the ring, ensuring high availability. To keep lookups fast, I cached the token list in memory and used a read‑only lock during node removal to avoid race conditions.

**Result** – After deploying this scheme, we could spin up or retire edge nodes in under 30 seconds with less than 1 % cache eviction rate. Overall cache hit ratio improved from 72 % to 87 %, cutting downstream bandwidth costs by ~18 %. I learned that careful token sizing and replica management are critical for balancing load and minimizing churn in large distributed caches.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
