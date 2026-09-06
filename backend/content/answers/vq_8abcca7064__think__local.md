---
qid: vq_8abcca7064__think__local
question: what is broadcast variable?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 360
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:00:09-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - Confirm that “broadcast variable” refers to distributed data‑processing frameworks (Spark/ Flink).  
   - Assume we’re explaining why it exists and how it behaves in a cluster.

**2️⃣ Adopt the “data‑flow + memory optimization” framework**  
   - Think of a job as many tasks running on worker nodes.  
   - Broadcast variables are read‑only data shared across those tasks, avoiding repeated shuffling or serialization.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify the problem: large lookup tables repeatedly sent to each executor → network/CPU overhead.  
   2. Explain broadcast as a single copy stored in memory (or disk) on each node.  
   3. Show how tasks reference that local copy, not the driver.  
   4. Mention lifecycle: created by driver, cleaned up after job or manually.

**4️⃣ Avoid common traps**  
   - Don’t mix it with mutable shared state; broadcast is immutable.  
   - Don’t assume it’s automatically cached forever—needs explicit unbroadcasting.  
   - Beware of size limits: if too big, can still cause OOM on workers.

**5️⃣ Sanity‑check & verbalize**  
   - Verify that the explanation covers purpose (efficiency), mechanism (single copy per executor), and usage patterns (creation, use in transformations, cleanup).  
   - Practice summarizing: “Broadcast variables let you ship a read‑only dataset once to every node so each task can access it locally, saving shuffle traffic and memory.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
