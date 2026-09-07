---
qid: ing_9d2d71aa22__faang__local
question: 'Explain: Compaction Strategies — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 539
total_tokens: 795
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:49:32-05:00'
sources: []
---

**Clarify**  
You’re asking how a distributed key‑value store (e.g., ScyllaDB) organizes on‑disk data: *SSTable compaction* and the various *compaction strategies*. I’ll assume we’re talking about LSM‑based systems, immutable SSTables, and that you want both an overview and why different strategies exist.

**Approach**  
1. Define what an SSTable is and why compaction matters.  
2. Explain the two primary goals: reclaim space & keep read latency low.  
3. Walk through the three classic strategies in ScyllaDB (Size‑Tiered, Leveled, Time‑Window).  
4. Touch on trade‑offs (write amplification vs read amplification, GC pressure).  

**Depth**  
- **SSTable compaction** merges immutable SSTables into a larger one, dropping tombstones and duplicate keys. Each merge is *full* (reads all source files) → write‑amplification but keeps reads simple (binary search on a sorted file).  
- **Size‑Tiered (STCS)**: group SSTables of similar size; when a threshold is hit, merge all in that tier. Simple to implement, low read cost, high write amplification (~log N).  
- **Leveled (LCS)**: fixed‑size levels where each level can hold at most one copy of any key. Merges happen between adjacent levels, keeping the number of overlapping files small → lower read amplification but higher CPU overhead during compaction.  
- **Time‑Window Compaction Strategy (TWCS)**: SSTables are partitioned by ingestion time; newer data is kept separate. Great for workloads with heavy TTLs or time series; reduces tombstone buildup and allows targeted eviction of old windows.

**Edge Cases**  
- Heavy write bursts can cause *compaction storms* if all tiers fill quickly.  
- Skewed key distribution may lead to “hot” SSTables that dominate reads.  
- Low‑TTL data can overwhelm TWCS if not tuned (too many tiny files).  

**Optimize & Communicate**  
To mitigate write amplification, one might tune *max‑merge‑factor* or enable *background compaction throttling*. For read‑heavy workloads, switch from STCS to LCS. In interviews, I’d conclude: “Choosing a strategy is a cost–benefit trade‑off; you need to profile your workload and adjust parameters accordingly.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
