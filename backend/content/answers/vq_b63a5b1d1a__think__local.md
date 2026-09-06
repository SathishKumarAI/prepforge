---
qid: vq_b63a5b1d1a__think__local
question: what is accumulator?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 425
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:15:11-05:00'
sources: []
---

**1️⃣ Clarify the context & assumptions**  
- *What domain?* We’re in data engineering, so “accumulator” likely refers to a Spark construct (or similar distributed processing).  
- *Audience level?* Assume interviewees know basic ETL concepts but not the deep internals of Spark.  

**2️⃣ Mental model / framework**  
Think of an accumulator as a **distributed counter or sum** that can be updated from many parallel tasks and then collected by the driver. It’s a thread‑safe, write‑only variable that aggregates results across workers.

**3️⃣ Step‑by‑step reasoning toward the answer**  

1. Define it: “A mutable variable that can only be added to (or merged) by executors.”  
2. Explain usage: e.g., `LongAccumulator` for counting rows, `DoubleAccumulator` for summing values.  
3. Highlight immutability of driver‑side view vs mutability on workers.  
4. Mention Spark’s API (`SparkContext.longAccumulator(name)`), and that the value is exposed via `.value`.  
5. Touch on side effects: accumulators are read‑only in transformations, only updated inside actions.  

**4️⃣ Common traps to avoid**  
- *Confusing accumulators with broadcast variables* – they’re opposite (write‑only vs read‑only).  
- *Assuming arbitrary mutation* – only `add`/`merge` operations allowed.  
- *Ignoring serialization* – accumulators must be serializable and thread‑safe.  

**5️⃣ Sanity‑check & verbalize**  
Re‑state: “In Spark, an accumulator is a distributed, write‑only counter that lets executors add values; the driver can read the final result after job completion.”  
If the interviewer asks for examples, be ready to show code snippets and mention pitfalls like lazy evaluation or task retries causing double counting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
