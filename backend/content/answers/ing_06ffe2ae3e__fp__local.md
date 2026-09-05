---
qid: ing_06ffe2ae3e__fp__local
question: 'Explain: And then a scan allows you to — AWS re:Invent 2021 - Which NoSQL
  database is right for you?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 444
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:20:42-05:00'
sources: []
---

### Why a *Scan* is the “all‑purpose” query

In a key‑value or document store every item lives under a single primary key (or composite key).  
If you know that key, a **GetItem** hits exactly one node and returns in \(O(1)\) time.  
But real workloads often need *range* queries: “give me all users who signed up between X and Y” or “return every order older than 30 days”.  
NoSQL systems cannot index arbitrary predicates without incurring the cost of a relational‑style B‑tree, so they expose **Scan** as the fallback.

A Scan is essentially *“read every item in the table and filter locally”*.  
Because it reads the entire partition key space, its cost is proportional to the total size \(S\) of the data:  

\[
T_{\text{scan}} \approx \frac{S}{B}\times t_{\text{page}}
\]

where \(B\) is the page (block) size and \(t_{\text{page}}\) the read latency.  
This linear scaling is unavoidable unless you maintain a secondary index that mirrors the predicate.

**Non‑obvious insight:**  
A Scan can be *efficient* if you pair it with **parallelism** at the storage layer.  
Modern NoSQL engines split a table into shards (or partitions). A Scan issues one request per shard in parallel, reducing wall‑clock time to roughly \(T_{\text{scan}}/P\) where \(P\) is the number of shards.  
Thus, even though a Scan reads all data, it can finish in a few seconds on petabyte tables—provided you provision enough IOPS and shards.

**Bottom line:**  
Use Scan only when the query pattern cannot be expressed by an existing index; otherwise create a secondary index that captures your access pattern to avoid reading the entire table.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
