---
qid: ing_2d35a52b4e__star__local
question: 'Explain: Caching Strategies Summary | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 425
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:58:29-05:00'
sources: []
---

**Situation** – While leading the deployment of a real‑time recommendation engine for a video streaming service, we noticed that model inference latency spiked from 20 ms to over 200 ms during peak traffic (8 am–11 pm). The back‑end served millions of users per day and our SLA required sub‑100 ms responses.

**Task** – Reduce inference latency by 70% without increasing GPU usage, while keeping model accuracy intact and ensuring cache consistency as content updated daily.

**Action** – I designed a tiered caching strategy:  
1. **Local in‑process LRU cache** for the top 10K most frequently requested items (≈80 % hit rate), using a bounded size with time‑based eviction to keep stale data out.  
2. A **Redis cluster** (sharded, replication) holding pre‑computed feature vectors for the next 1M items; we set TTLs based on content popularity trends and used key prefixes per model version.  
3. Implemented a **cache invalidation hook** that triggers on content uploads or algorithm retraining, pushing updates to Redis via pub/sub so downstream services refresh in under 50 ms.  
4. Added monitoring (Prometheus) to track hit rates and latency; automated alerts triggered when hit rate fell below 75%.

**Result** – Latency dropped to an average of 35 ms during peak hours (a 83% reduction), hitting the SLA. Cache hit ratio climbed from 30% to 88%. The system now scales to 5× traffic with no GPU bottlenecks, and I learned how fine‑grained eviction policies combined with real‑time invalidation can keep ML inference both fast and fresh.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
