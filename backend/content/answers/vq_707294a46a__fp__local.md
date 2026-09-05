---
qid: vq_707294a46a__fp__local
question: what is broadcast variable in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 317
total_tokens: 484
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:40:20-05:00'
sources: []
---

In Spark, a **broadcast variable** solves the problem of repeatedly shipping the same read‑only data to every executor during a distributed computation.  
When a job needs a lookup table (e.g., a dictionary mapping user IDs to demographic attributes), each task would otherwise have to fetch that table from the driver or recompute it locally. That incurs network traffic, serialization overhead, and memory duplication—precisely what Spark’s in‑memory cluster design seeks to avoid.

**Derivation**  
1. **Data locality principle**: Keep data close to computation.  
2. **Read‑only assumption**: The table is immutable during the job; otherwise consistency would be broken.  
3. **Broadcast semantics**: Ship a single copy from the driver and replicate it across executor nodes using efficient serialization (e.g., Kryo).  

When an action runs, each task pulls the broadcast value once into its local memory space. Subsequent tasks reuse that in‑process copy, yielding O(1) access per element and eliminating shuffle traffic.

**Non‑obvious insight**  
Broadcasts are *not* a replacement for shuffles; they avoid them only when the data is truly small enough to fit comfortably on each executor’s RAM. If the broadcast becomes too large, it can cause out‑of‑memory errors or degrade performance due to replication overhead—so sizing and partitioning remain critical design choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
