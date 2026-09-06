---
qid: vq_707294a46a__faang__local
question: what is broadcast variable in spark?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 508
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:16:10-05:00'
sources: []
---

**1️⃣ Clarify**  
> *What are you asking about?*  
We need to explain the Spark **broadcast variable** concept, how it works, why it's useful in distributed data‑processing pipelines, and when to use or avoid it.

---

**2️⃣ Approach**  
- Define broadcast variables.  
- Describe their lifecycle & mechanics (partitioning, caching).  
- Show a simple code example.  
- Discuss benefits (network traffic, consistency).  
- Mention caveats (memory, size limits, immutability).

---

**3️⃣ Depth**  
A broadcast variable is an immutable read‑only value that the driver program distributes to all executors once and keeps cached on each node. Spark serializes it, sends it over the network only **once**, and stores it in memory/disk on every executor.  
When a task accesses the variable, Spark fetches it from the local cache, avoiding repeated shuffles or look‑ups.

```scala
val stopWords = sc.broadcast(Set("a","the","is"))
rdd.mapPartitions(iter => iter.filter(!stopWords.value.contains(_)))
```

**Complexity:**  
- *Time*: O(1) per task to read (cached).  
- *Space*: One copy per executor; memory cost grows linearly with number of executors.  

**Trade‑offs**  
- **Pros**: Cuts network traffic, guarantees all nodes see the same data, simplifies code.  
- **Cons**: Large broadcasts can exhaust executor memory; they’re immutable (must re‑broadcast on change).

---

**4️⃣ Edge Cases**  
- *Too large*: triggers `OutOfMemoryError` or spills to disk—monitor with `spark.broadcast.compress`.  
- *Mutable data*: if you need to update, create a new broadcast each time.  
- *Driver failure*: executors lose the cache; Spark re‑broadcasts automatically.

---

**5️⃣ Optimize & Communicate**  
- **Compress** broadcasts (`spark.broadcast.compress=true`).  
- **Partition wisely**: keep broadcast size < executor memory.  
- **Testing**: unit test with small broadcast, integration test on cluster for memory usage and performance.  

*Bottom line*: Broadcast variables are Spark’s built‑in way to efficiently share read‑only data across all tasks, reducing shuffle traffic but demanding careful sizing and immutability.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
