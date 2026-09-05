---
qid: vq_c9f8eaa563__fp__local
question: Difference between Narrow & wide transformations?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 320
total_tokens: 487
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:56:14-05:00'
sources: []
---

**Narrow vs. Wide Transformations – a principled view**

In distributed data processing the *fundamental problem* is moving data across machines without blowing up network traffic.  
A **narrow transformation** (e.g., `map`, `filter`) can compute each output record from a single input partition; it needs no inter‑node shuffle, so its cost is linear in the amount of data processed locally.  
A **wide transformation** (`groupByKey`, `reduceByKey`, `join`) requires all records with the same key to reside on the same node. This entails a *shuffle*—a global redistribution of data that costs O(n log p) (n = total rows, p = partitions).  

The deeper principle is **data locality**: narrow ops preserve locality and therefore respect the *Amdahl‑like* limit imposed by network bandwidth; wide ops violate it but are necessary for aggregations that combine remote records.  

**Non‑obvious insight:**  
Because shuffles dominate runtime, many engines *combine* consecutive wide transformations into a single stage (the “shuffle fusion” optimization). If you inadvertently insert an intermediate narrow op between two wides, the engine may still fuse them—so the user’s code can be “wide‑heavy” without extra stages. Recognizing this lets architects write more readable pipelines without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
