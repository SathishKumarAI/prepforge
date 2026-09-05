---
qid: vq_3f8bc28b83__fp__local
question: what are major issues faced in spark development?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 387
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:32:08-05:00'
sources: []
---

**Why Spark struggles**

At its core, Spark is a distributed iterative engine that trades *memory‑for‑speed* by materializing entire RDDs (or DataFrames) across the cluster. The fundamental problem it solves—computing on massive data sets in parallel—is elegant, but the naïve execution model induces three intertwined bottlenecks:

1. **Shuffle‑dominated latency**  
   Each stage boundary forces a network shuffle. Because partitions are rehashed, the cost is *O(N log N)* communication and disk I/O, which dwarfs local CPU work when datasets exceed memory. This becomes acute for wide joins or group‑by operations that must redistribute data globally.

2. **Skewed partitioning**  
   Spark assumes roughly equal‑size partitions. When key distributions are heavy‑tailed (e.g., a few hot users in logs), one executor monopolizes CPU and network, while others sit idle—violating the *law of large numbers* that underpins parallel efficiency.

3. **Catalyst optimizer limits**  
   The logical plan optimizer performs rule‑based rewrites but lacks full cost‑based reasoning for user‑defined functions (UDFs). Consequently, it cannot foresee the hidden penalty of a non‑vectorized UDF, leading to suboptimal plans that still incur shuffle overhead.

**Non‑obvious insight**

Most engineers tune Spark by increasing executors or memory. The deeper principle is *data locality*: if you can restructure the computation so that most operations become **local** (e.g., broadcast joins for small tables, map‑side aggregations), you eliminate shuffle altogether. This reduces both latency and the need for expensive recomputation after failures—turning Spark into a near‑in‑memory engine rather than a disk‑centric one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
