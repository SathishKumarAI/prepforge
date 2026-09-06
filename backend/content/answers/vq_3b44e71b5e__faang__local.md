---
qid: vq_3b44e71b5e__faang__local
question: Which operations is not lazy?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 475
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:06:23-05:00'
sources: []
---

**Answer (FAANG‑style)**  

| **Step** | **Content** |
|---|---|
| **Clarify** | The question asks which *operation* in a distributed data‑processing engine (e.g., Spark) is **not lazy** – i.e., triggers execution immediately. I’ll assume “operations” refer to the high‑level API calls on a Dataset/DataFrame, not low‑level RDD ops. |
| **Approach** | 1. List common *transformations* (map, filter, join, groupBy) that are lazy. <br>2. Identify *actions* that materialize data: `count`, `collect`, `show`, `write`. <br>3. Pick one action as the answer. |
| **Depth** | In Spark, transformations build a DAG lazily; they’re only executed when an action is called. Actions force a job submission to the cluster and return results or persist data. Examples: `count()` triggers a full scan, `collect()` pulls all rows to the driver, `write.format(...).save(...)` writes to storage. All of these are eager. |
| **Edge Cases** | *Streaming* contexts differ: some stream actions (`foreach`, `writeStream`) are also eager but run continuously. If the question were about RDDs only, `take(n)` is also an action. Testing would involve timing a transformation vs an action to confirm lazy vs eager behavior. |
| **Optimize & Communicate** | I’d explain that *lazy* = no immediate execution; *not lazy* = actions that return results or persist data. The most canonical non‑lazy operation is `collect()` because it forces the entire dataset to be materialized on the driver, illustrating the difference clearly. |

> **Answer:**  
> In Spark (and similar engines), an action such as **`collect()`** is *not lazy*—it triggers immediate execution and brings all data into the driver program. All transformations (`map`, `filter`, `join`, etc.) remain lazy until an action is invoked.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
