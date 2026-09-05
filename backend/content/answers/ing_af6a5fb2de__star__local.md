---
qid: ing_af6a5fb2de__star__local
question: 'Explain: Inbox Search Feature at Facebook using HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 348
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:23:00-05:00'
sources: []
---

**Situation** – At Facebook I worked on the Messenger team during a period when the inbox search latency was hovering around 350 ms, causing users to feel sluggish while searching for old conversations. The search index lived in HBase clusters that had grown to over 10 TB across multiple regions.

**Task** – My goal was to reduce average query time to below 120 ms without increasing storage costs or compromising consistency for read‑heavy traffic (~15M queries per day).

**Action** – I redesigned the indexing strategy:  
1. Introduced a composite key schema (userID|timestamp|keyword) that allowed range scans to fetch only relevant rows, cutting row lookups by 70 %.  
2. Leveraged HBase’s coprocessors to pre‑aggregate keyword counts per conversation on write, so search results could be served from a single scan instead of multiple joins.  
3. Tuned region splits and cache settings (HRegionServer heap size, block cache percentage) based on workload profiling with YARN metrics.  
4. Added a lightweight Bloom filter per row to quickly reject non‑matching keys, reducing disk I/O.

**Result** – The average search latency dropped from 350 ms to 95 ms, a 73 % improvement. Traffic handling capacity increased by ~30 %, and storage overhead grew only 5 %. I learned how careful key design and HBase’s native features can turn a bottleneck into a high‑performance feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
