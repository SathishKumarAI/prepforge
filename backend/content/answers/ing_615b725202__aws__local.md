---
qid: ing_615b725202__aws__local
question: 'Explain: Choosing a Shard Key — Sharding | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 452
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:05:42-05:00'
sources: []
---

**Situation / Task**  
At my last role I led the migration of a legacy e‑commerce catalog from a monolithic RDS instance to a horizontally scalable DynamoDB cluster. The catalog had 12 M SKUs and served ~200 k requests/sec during peak sales, but read latency spiked to 250 ms after the first 2 M items were loaded.

**Action**  
I owned the shard‑key decision by diving deep into query patterns: 95 % of reads were “product‑by‑category” and 5 % “price‑range” scans. I chose a composite key `(CategoryId, SKU)` because it:

| Metric | Before (RDS) | After (DynamoDB with shard key) |
|--------|--------------|---------------------------------|
| Avg read latency | 250 ms | **45 ms** |
| Provisioned throughput cost | $1.20/hr | $0.48/hr |
| Hot‑partition incidents | 12 per day | 0 |

I implemented Global Secondary Indexes for price scans and used DynamoDB’s auto‑scaling to keep utilization ~70 %. The design ensured high availability (multi‑AZ) and low cost by aligning partitions with natural category boundaries.

**Result**  
The new schema cut read latency by **82 %**, reduced daily hot‑partition incidents from 12 to zero, and lowered hourly operational cost by **60 %**. I documented the migration process in a living design doc and trained two teammates on shard‑key selection best practices.

---

### Leadership Principles Highlighted
- **Ownership** – Took full responsibility for performance and cost.
- **Dive Deep** – Analyzed query logs, partition usage, and cost data to inform the key choice.  
- **Deliver Results** – Quantified improvements in latency, reliability, and spend.  

Bar‑raisers listen for clear ownership, deep technical insight, measurable impact, and evidence of learning from earlier failures (e.g., initial RDS scaling attempts).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
