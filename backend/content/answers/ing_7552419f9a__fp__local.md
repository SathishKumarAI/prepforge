---
qid: ing_7552419f9a__fp__local
question: 'Explain: Scheduling — SSTable compaction and compaction strategies \u00b7
  scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 601
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:14:40-05:00'
sources: []
---

**Why SSTables need scheduled compaction**

A NoSQL store writes data as immutable *SSTables* (sorted string tables).  
Each write creates a new file; reads must merge many files to answer a query.  
Without compaction, the number of files grows linearly with writes, so read latency and storage waste explode.  

**Fundamental trade‑off**

Compacting merges overlapping key ranges, discarding tombstones and obsolete rows.  
Two competing goals arise:

| Goal | Cost |
|------|------|
| **Minimise read amplification** – fewer SSTables → faster reads | Requires frequent compaction, high CPU & I/O |
| **Limit write amplification** – keep writes fast | Less aggressive compaction, more stale data |

This is a classic *resource‑allocation optimisation*: we must choose a schedule that satisfies both latency constraints while keeping throughput acceptable.

**Compaction strategies as optimisation problems**

1. **Size‑tiered (ST)**  
   Merge files when their total size reaches a threshold.  
   *Objective*: keep each tier roughly the same size → geometric growth of tiers.  
   *Insight*: ST guarantees that the expected number of files per key is bounded by \(\log_{\text{tier\_size}}(N)\), independent of write rate.

2. **Leveled (LT)**  
   Partition the namespace into disjoint levels; each level’s size grows exponentially.  
   *Objective*: ensure at most one file per key range in a level → read amplification ≈ 1 + \(\log_{\text{level\_size}}(N)\).  
   *Insight*: LT reduces read cost to logarithmic but incurs higher write amplification because every compaction must rebuild the entire level.

3. **Hybrid / Adaptive**  
   Dynamically pick ST or LT based on current load, key distribution, and storage budget.  
   *Principle*: treat compaction as a **continuous optimisation problem** where the objective function blends read latency, write throughput, and disk usage; use feedback (e.g., queue depth) to adjust thresholds.

**Non‑obvious insight**

Most people focus on read amplification alone, but **compaction scheduling must also respect *tombstone decay* time**.  
If compactions are delayed, tombstones linger, consuming space and causing reads to scan unnecessary data.  
A principled scheduler therefore includes a *decay function* that triggers compaction when the proportion of deleted rows exceeds a threshold—this keeps storage lean without sacrificing performance.

In short, SSTable compaction is an optimisation over time‑varying workloads; understanding its geometry (file size vs. level) and probability (tombstone decay) yields schedules that balance latency, throughput, and space.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
