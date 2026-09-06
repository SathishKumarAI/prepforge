---
qid: vq_afaf77b367__faang__local
question: State the reason why we can't perform aggregation in mapper? why do we need
  reducer for this?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 439
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:28:25-05:00'
sources: []
---

**Clarify**  
You’re asking *why a Map‑reduce job can’t finish all aggregations in the map phase* and *what role the reducer plays*.  
Assumptions: we’re talking about a typical Hadoop/MapReduce model where each mapper processes a split independently, emits key/value pairs, then reducers receive grouped keys.

**Approach**  
1. Explain the independence of mappers.  
2. Show why partial aggregation is insufficient for global aggregates.  
3. Describe how reducers merge these partial results into final values.

**Depth**  
- **Mapper isolation:** Each mapper sees only its input split; it can’t “know” about records that belong to the same key in other splits.  
- **Partial aggregates:** A mapper can emit a local sum, count, etc., but the global sum = Σ(local sums). The reducer’s job is to receive *all* partial values for a key and combine them.  
- **Shuffle & sort guarantees:** Hadoop guarantees that all pairs with the same key reach the same reducer, preserving correctness of aggregates like SUM, AVG, COUNT, MIN/MAX.  
- **Scalability:** Without reducers, you’d need to broadcast intermediate results or use costly in‑memory structures; reducers allow horizontal scaling by parallelizing aggregation across machines.

**Edge cases**  
- *Skewed keys*: one key with many records forces a single reducer—handle via custom partitioner or combiners.  
- *Large values*: if partial aggregates are large, memory limits can be hit; use combiner to reduce data before shuffle.

**Optimize & communicate**  
Mention **combiners**: an optional mini‑reducer that runs on the mapper side to pre‑aggregate, reducing network traffic. Also note that for truly global aggregates (e.g., overall max), a single reducer may still be required unless you use a two‑stage job or specialized frameworks like Spark.

---  
*This answer follows the FAANG “Signal” style: clear structure, technical depth, and awareness of edge conditions.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
