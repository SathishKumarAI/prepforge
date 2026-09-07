---
qid: ing_3e7a362cdf__faang__local
question: 'Explain: Drawbacks — Vertical vs Horizontal Partitioning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 563
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:09:20-05:00'
sources: []
---

**Clarify**  
You’re asking for the trade‑offs between *vertical* (column‑level) and *horizontal* (row‑level) partitioning of a machine‑learning feature store or dataset. I’ll assume we’re dealing with relational storage that feeds downstream training pipelines, and that partitions are used to improve parallelism and manage data locality.

**Approach**  
1. Define each strategy.  
2. List benefits in terms of query performance, storage, and maintenance.  
3. Enumerate drawbacks: fragmentation, join costs, schema evolution, and consistency.  
4. Summarize when one wins over the other.

**Depth**  

| Aspect | Vertical Partitioning | Horizontal Partitioning |
|--------|-----------------------|-------------------------|
| **Data locality** | Keeps related features together; great for feature‑store reads that pull a few columns per instance. | Groups many instances per partition; good for bulk training jobs that consume full rows. |
| **Join cost** | Joins across partitions become expensive because each column resides separately—requires shuffling or distributed joins. | Joins are cheap if the join key is included in every row; otherwise, you need a separate lookup table. |
| **Schema evolution** | Adding a new feature only touches one partition; other columns stay untouched. | Adding a feature means altering every row or adding a nullable column that may be sparse, leading to wasted storage. |
| **Compression & pruning** | Columns can be compressed individually; unused columns can be dropped without touching others. | Compression is per-row; dropping a seldom‑used column requires rewriting entire partitions. |
| **Parallelism** | Read parallelism limited by the number of columns; writing new rows needs to touch every partition. | Write parallelism scales with row count; reading a few columns still reads whole rows, hurting I/O. |

**Edge Cases**  
- Highly sparse features: vertical wins because unused columns can be omitted per instance.  
- Very wide tables (thousands of columns): vertical avoids scanning the entire row for training on a subset of features.  
- Workloads that require frequent joins across many features: horizontal is preferable.

**Optimize & Communicate**  
In practice, hybrid partitioning (e.g., column‑store engines or feature‑store services) often yields the best of both worlds—compress columns locally while still grouping rows for large‑scale training. I’d explain this trade‑off to stakeholders, highlighting that vertical partitioning shines in low‑latency inference pipelines, whereas horizontal partitioning is optimal for batch model training. This balanced view demonstrates structured reasoning and depth expected from FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
