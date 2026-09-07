---
qid: ing_61c406beaf__aws__local
question: 'Explain: Variants — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 459
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:06:27-05:00'
sources: []
---

**Situation & Task (S)**  
While leading the data‑engineering team for our recommendation engine, we needed a fast way to de‑duplicate user interactions at scale. The existing solution was a 1 TB HBase table that caused latency spikes during peak traffic.

**Action (A)**  
I proposed replacing the lookup with a *Bloom filter* backed by Amazon ElastiCache Redis and AWS Lambda for updates.  
- **Requirements**: ≤0.01 % false‑positive rate, <5 ms query time, 99.9 % availability, <$1 k/month.  
- **Design**:  
  - Store the Bloom filter bit array in an S3 object; load it into Redis at startup and refresh every hour via Lambda.  
  - Use a *counting Bloom filter* to support deletions (user unsubscriptions).  
  - Partition the filter by user cohort to keep each shard <10 MB, enabling horizontal scaling across multiple cache nodes.  
- **Trade‑offs**: Sacrifices exactness for speed; mitigated with periodic re‑sync from HBase.

**Result (R)**  
The new system cut duplicate‑check latency from 120 ms to 3 ms (×40x), reduced HBase load by 70 %, and saved ~$2.5k/month in compute costs. Accuracy remained >99.99 % false positives, meeting SLA.  

**Leadership Principles Highlighted**  
- **Customer Obsession & Deliver Results**: Faster recommendations improved user satisfaction scores by 12%.  
- **Ownership & Dive Deep**: I drove the end‑to‑end redesign, quantified trade‑offs, and iterated based on real metrics.

Bar‑raisers look for ownership (I owned the entire migration), depth (detailed cost/latency analysis), quantified impact (40× speedup, 70 % cost reduction), and learning from failure (initial prototype hit >5 % false positives; I debugged hash functions to fix it).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
