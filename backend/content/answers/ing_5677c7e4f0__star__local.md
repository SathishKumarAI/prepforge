---
qid: ing_5677c7e4f0__star__local
question: 'Explain: Just before you leave… — My favorite algorithm (and data structure):
  HyperLogLog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 414
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:20:57-05:00'
sources: []
---

**Situation**  
During a quarterly analytics sprint at my last company we were tasked with estimating the unique number of daily active users (DAUs) across our mobile app’s global traffic. The raw log stream was about 3 TB per day and our BI dashboard required an accurate count within a 1% error margin, but we had only a few hundred megabytes of RAM to spare on each edge server.

**Task**  
I needed to design a lightweight algorithm that could ingest the continuous click‑stream in real time, output a single cardinality estimate per day, and still allow us to drill down into user segments if necessary—all while staying well under our memory budget.

**Action**  
I chose HyperLogLog (HLL) because of its sublinear space complexity and proven error bounds. I implemented a custom HLL in Rust, using 16 KB registers per instance. Each incoming event hashed with Murmur3, the leading zeros counted to update the register array. To support segmentation, I maintained separate HLL instances for each country and merged them on demand via the union operation. I also added a small caching layer that persisted intermediate HLL sketches to disk every 5 minutes so we could recover from server restarts.

**Result**  
The production pipeline processed the full 3 TB stream in under 12 hours, using only ~200 MB of RAM per server. The daily DAU estimate had a ±0.8% error compared to a ground‑truth count obtained via a post‑mortem SQL aggregation (≈42 million users). The dashboard latency dropped from 2 minutes to 30 seconds, and we saved $1.5K/month in cloud storage costs by avoiding full data dumps. I learned that choosing the right probabilistic data structure can turn an otherwise infeasible real‑time task into a lean, scalable solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
