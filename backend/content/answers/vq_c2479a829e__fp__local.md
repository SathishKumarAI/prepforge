---
qid: vq_c2479a829e__fp__local
question: what is the difference between reduceByKey and GroupByKey?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 392
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:54:50-05:00'
sources: []
---

In a distributed key‑value stream, *reduceByKey* and *groupByKey* both aggregate values per key, but they differ fundamentally in how data is shuffled and combined.

**Fundamental problem:**  
We want to compute a function \(f\) over all values belonging to the same key. The cost lies in moving data across machines (network shuffle).  

- **reduceByKey** performs *local* reductions before shuffling: each executor applies \(f\) to its partition’s values for every key, producing intermediate partial results \((k, v_{\text{partial}})\). Only these compact summaries are sent over the network and then combined globally.  
- **groupByKey** skips local aggregation; it simply routes *every* value to a single reducer per key. The entire list of values is transferred, which can be huge.

**Why reduceByKey must work that way:**  
Map‑reduce theory tells us that any associative and commutative operation \(f\) allows intermediate reductions without affecting the final result: \(f(f(a,b),c)=f(a,f(b,c))\). Thus local reduction preserves correctness while minimizing data transfer, achieving optimal communication complexity.

**Non‑obvious insight:**  
Even when \(f\) is not associative (e.g., collecting a list), *reduceByKey* can still be used if you supply a custom combiner that mimics the global operation. Spark’s internal “combiner” logic allows local aggregation for non‑associative functions, reducing shuffle size without sacrificing correctness.

**Bottom line:**  
Use **reduceByKey** when \(f\) is associative/commutative or can be combined locally; use **groupByKey** only when you truly need the raw list of values per key.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
