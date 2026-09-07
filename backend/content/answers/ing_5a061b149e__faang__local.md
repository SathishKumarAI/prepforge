---
qid: ing_5a061b149e__faang__local
question: 'Explain: Date-Tiered Compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 559
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:13:01-05:00'
sources: []
---

**Clarify**  
We’re asked about *Date‑Tiered Compaction* (DTC) in the context of SSTable compaction for ScyllaDB. Assume we’re dealing with a LSM‑style store where data is written to immutable SSTables and later compacted into larger tables, and that “date‑tiered” refers to grouping by write timestamp.

**Approach**  
1. Explain the goal: reduce read amplification while keeping writes fast.  
2. Outline DTC’s key idea: bucket SSTables into time‑based tiers (e.g., 5 min, 15 min).  
3. Describe how compaction works per tier and across tiers.  
4. Mention interaction with other strategies (Size‑Tiered, Level‑Based).

**Depth**  
- **Tiers**: Each tier holds SSTables whose write timestamps fall within a fixed window. The window size is configurable; smaller windows mean more frequent but lighter compactions.  
- **Intra‑tier compaction**: Within a tier, DTC merges all SSTables into one larger table, discarding obsolete rows (based on TTL or newer versions). This reduces the number of files read for recent data.  
- **Cross‑tier promotion**: After merging, the new SSTable is promoted to the next higher tier. Older tiers are compacted less often; this amortizes write amplification over time.  
- **Conflict with Size‑Tiered**: DTC avoids the “hot spot” problem of SSTable size thresholds by focusing on age rather than size. It still respects a maximum number of files per tier to prevent too many merges.  

**Edge Cases**  
- *Burst writes*: If many writes arrive in a short window, the tier may grow large; we cap the tier’s file count and force an early merge.  
- *Long‑lived data*: Data older than the highest tier will never be compacted again—potentially leaving stale versions unless TTL is applied.  
- *Clock skew*: Incorrect timestamps can misplace SSTables into wrong tiers, causing read amplification.

**Optimize & Communicate**  
Explain trade‑offs: DTC keeps write latency low (writes go to a small number of recent tiers) but may increase disk usage temporarily until promotion occurs. It’s ideal for workloads with high temporal locality and TTLs. In ScyllaDB, you tune tier sizes via `compaction_tier_size` and monitor `dropped_rows`. Conclude by highlighting that DTC is a pragmatic strategy balancing compaction overhead against read performance in time‑series workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
