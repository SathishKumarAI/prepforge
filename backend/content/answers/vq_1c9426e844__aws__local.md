---
qid: vq_1c9426e844__aws__local
question: WHAT IS THE DIFFERENCE BETWEEN COUNT(), SUM(), AND AVG()?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 459
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:41:21-05:00'
sources: []
---

**Situation & Technical Requirement**  
In a recent analytics pipeline for our ad‑tech platform, the data team needed to aggregate millions of click events per campaign. The requirement was to compute three metrics—`COUNT()`, `SUM()` and `AVG()`—in a single pass while ensuring low cost on Athena and high availability.

**Task**  
Design an efficient query that returns the total number of clicks (`COUNT`), the total spend (`SUM`) and the average spend per click (`AVG`). The solution had to run in under 30 s for 5 TB of data and stay within our $0.12‑per‑TB Athena cost budget.

**Action**  
I wrote a single SQL statement:

```sql
SELECT
    COUNT(*)          AS total_clicks,
    SUM(spend)        AS total_spend,
    AVG(spend)        AS avg_spend_per_click
FROM   ad_events;
```

*Why this works:*  
- **`COUNT()`** scans all rows, giving the exact number of click events.  
- **`SUM()`** aggregates the `spend` column across those rows.  
- **`AVG()`** is computed as `SUM(spend) / COUNT(*)`, so Athena can reuse the same scan for all three metrics.

I stored the table in partitioned Parquet on S3, used Glue to catalog it, and ran the query via Athena. The job finished in 18 s, reading only ~0.8 TB (due to pruning), costing $0.10—well below budget.

**Result**  
Delivered a cost‑effective, single‑pass aggregation that reduced nightly report latency from 45 min to <30 s and cut query costs by 30%. The metrics now feed our real‑time dashboard with up‑to‑date campaign performance data.

> **Leadership Principles:** *Ownership* – I took end‑to‑end responsibility for the solution; *Dive Deep* – I analyzed partitioning, compression, and query plans to optimize cost and speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
