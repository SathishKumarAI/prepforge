---
qid: ing_80184898b0__aws__local
question: 'Explain: Option 3: Bloom Filter — How to Avoid Crawling Duplicate URLs
  at Google Scale?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 523
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:14:54-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the crawler‑optimization team for a global search engine. We were ingesting ~10⁹ URLs per day and had a 5 % hit‑rate of duplicate crawls that wasted bandwidth and slowed freshness. My goal was to drop duplicate hits by >90 % while keeping latency <200 ms.

**Action (Design)**  
I introduced a *Bloom filter* as the first‑pass dedup layer:

1. **Requirements** –  
   * False‑positive rate ≤ 0.5 % (to avoid missing real pages).  
   * Write‑through throughput ≥ 10⁹ ops/day.  
   * Memory footprint < 30 GB per shard.

2. **Implementation** –  
   * Partition the URL space by hash prefix → 1024 shards.  
   * Each shard runs on an **Amazon ElastiCache for Redis** cluster (cluster mode enabled).  
   * Store a probabilistic bitmap in Redis using `BITFIELD` commands; update via a lightweight Lambda that processes incoming URLs from Kinesis Data Streams.  

3. **Scalability & Cost** –  
   * 1024 shards × 30 GB = ~30 TB total, fully distributed across Redis nodes (~$12k/month).  
   * Read latency < 5 ms; writes are batched (batch size 10 K) to keep CPU usage low.  

4. **Trade‑offs** –  
   * Acceptable false positives were mitigated by a secondary hash check on the few URLs that pass the Bloom filter.  
   * Redis memory overhead is higher than pure disk, but we value real‑time dedup over storage cost.

**Result**  
After deployment, duplicate crawl attempts dropped from 5 % to 0.3 % (≈90 % reduction). Crawl bandwidth fell by 4 TB/day, translating to ~$48k/month savings. The system handled peak loads of 50 M ops/hour with no outages.

**Leadership Principles**  
*Customer Obsession* – We eliminated wasted resources that degraded crawl freshness for users.  
*Ownership & Dive Deep* – I owned the end‑to‑end solution, dissected performance metrics, and iterated until we hit our SLA targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
