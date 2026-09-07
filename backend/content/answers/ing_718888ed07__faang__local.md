---
qid: ing_718888ed07__faang__local
question: 'Explain: Create indices that cover longer time periods'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 527
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:07:42-05:00'
sources: []
---

**Clarify**  
The interviewer wants a strategy for building index tables (or materialized views) that aggregate data over long horizons—e.g., daily, weekly, monthly summaries—so queries can read from these pre‑aggregated sources instead of scanning raw logs. I’ll assume we’re dealing with time‑series event data in a relational store or data lake, and the goal is to support fast analytical reads while keeping writes efficient.

**Approach**  
1. Define granularity levels (day → week → month).  
2. Create one table per level with columns: `period_start`, `period_end`, `metric1_sum`, `metric2_count`, etc.  
3. Use incremental ETL or stream processing to update the next‑level index whenever a raw record arrives.  
4. Partition each index table by period (e.g., month) to keep hot data small and enable pruning.  
5. Add covering indexes on key columns (`period_start`, `metric_type`) so queries hit only the index.

**Depth**  
- **Write path**: For each incoming event, update the daily row via UPSERT; a scheduled job aggregates the daily table into weekly/monthly tables.  
- **Read path**: Queries specify a date range; the planner picks the coarsest index that fully covers the range (e.g., monthly) and sums the pre‑computed metrics.  
- **Complexity**: Updates are O(1) per event; aggregation jobs run in O(N) over the previous period. Storage overhead is minimal—just a few columns per period.  
- **Trade‑offs**: More granularity means more tables but faster reads for short ranges.

**Edge Cases**  
- Late‑arriving data: implement a “window” for reprocessing or use a materialized view that refreshes nightly.  
- Schema changes: add nullable columns and backfill with defaults.  
- Deletion of raw data: maintain a tombstone flag in indices to avoid orphaned aggregates.

**Optimize & Communicate**  
Explain that this tiered index strategy mirrors column‑store analytics engines (e.g., Snowflake’s micro‑partitions). It reduces scan time from O(total rows) to O(number of periods), yielding 10×–100× speedups for long queries while keeping write latency low. Highlight the importance of monitoring drift between raw and indexed data, and how automated alerts can trigger re‑aggregation if divergence exceeds a threshold.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
