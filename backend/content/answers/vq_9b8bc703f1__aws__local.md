---
qid: vq_9b8bc703f1__aws__local
question: What are the SET Operators?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 427
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:05:26-05:00'
sources: []
---

**Answer – Data Engineering: SET Operators**

> **Leadership Principles:** *Customer Obsession* & *Ownership*  
> I always treat the data as our customer’s voice and own the entire pipeline from ingestion to query.

**Situation / Task**  
While redesigning a nightly ETL for a retail analytics team, we needed to combine three daily fact tables (sales, returns, inventory) into a single “business‑health” view. The goal was to keep latency < 5 min and cost <$2/day on AWS.

**Action**  
I leveraged **SQL set operators** in Amazon Athena (serverless, pay‑per‑query).  
- `UNION ALL` combined rows across tables without de‑duplication for performance.  
- `INTERSECT` identified products present in all three sources to flag “consistent” items.  
- `EXCEPT` surfaced anomalies where sales existed but no inventory record did.

I wrote a Glue job that partitions each source by date, then scheduled Athena queries via EventBridge. The design ensured:

| Metric | Value |
|--------|-------|
| Query cost per run | $0.03 |
| Latency (end‑to‑end) | 4 min |
| Data processed | 3 GB/day |

**Result**  
The new pipeline cut manual reconciliation time from **2 hrs to 30 min**, increased data freshness, and reduced costs by **70%**.

**Learnings**  
- *Dive Deep:* I profiled query plans to identify the `INTERSECT` cost spike and added an additional partition key.  
- *Bar‑raiser check:* I documented failure scenarios (missing partitions) and automated alerts via CloudWatch alarms, ensuring ownership of downstream consumers’ trust in the data.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
