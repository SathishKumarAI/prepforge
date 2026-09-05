---
qid: ing_ade7e0c2dc__star__local
question: 'Explain: Bandwidth — Leaderboard System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 343
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:19:57-05:00'
sources: []
---

**Situation** – At my last company we launched a mobile gaming app that had over 2 million daily active users. The real‑time leaderboard was pulling data from our analytics stream every minute, and during peak hours the API hit 50 k requests per second. This caused latency spikes; players saw outdated scores and many were logged out due to timeouts.

**Task** – I needed to redesign the leaderboard service so it could serve global rankings in under 200 ms while keeping bandwidth usage below our CDN budget, without compromising data freshness (≤5 s lag).

**Action** – First, I introduced a sharded Redis cluster with read‑replicas; each shard held a subset of players keyed by region. I implemented a publish/subscribe pipeline that pushed score updates to the shards in real time, limiting write traffic to ~10 k ops/s per replica. For bandwidth control, I switched from JSON to MessagePack for inter‑service communication and added gzip compression on outbound leaderboard pages. I also built an incremental aggregation layer: only deltas were transmitted to the CDN edge nodes, which cached full leaderboard slices for 30 s.

**Result** – The new system cut average response time from 1.2 s to 140 ms, dropped API bandwidth by 70%, and reduced error rates to <0.01%. User retention during peak hours rose by 12 %, proving that careful sharding and data serialization can dramatically improve real‑time leaderboard performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
