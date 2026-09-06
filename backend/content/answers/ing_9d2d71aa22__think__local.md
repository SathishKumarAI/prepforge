---
qid: ing_9d2d71aa22__think__local
question: 'Explain: Compaction Strategies — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 212
output_tokens: 475
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:29:24-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Identify that “SSTable compaction” refers to how immutable sorted string tables (used in LSM‑style stores) are merged/garbage‑collected.  
   - Assume the reader knows basic LSM concepts and that ScyllaDB’s implementation follows Cassandra’s model but is tuned for CPUs.

**2️⃣ Adopt a mental framework**  
   - **Data flow diagram:** ingestion → memtable → SSTable → compaction → storage.  
   - **Key dimensions to track:** size tiers, merge policy, compaction strategy type (size‑tiered, leveled, time‑window), and performance knobs (threads, memory).

**3️⃣ Step‑by‑step reasoning**  
   1. Start with the *trigger* for compaction (SSTable count or size).  
   2. Explain each strategy:  
      - *Size‑tiered*: merges similar‑size SSTables; simple but can lead to “compaction storms”.  
      - *Leveled*: fixed‑size levels, deterministic merges, better read amplification.  
      - *Time‑window*: groups by time for use cases like logs or IoT.  
   3. Map ScyllaDB’s defaults and how they differ from Cassandra (e.g., parallelism, memory usage).  
   4. Show the impact on write throughput vs read latency.

**4️⃣ Avoid common pitfalls**  
   - Don’t conflate *compaction* with *deletion of tombstones*.  
   - Remember that compaction is *background*, not immediate; explain “dirty” data remains until merged.  
   - Clarify that strategy choice depends on workload (write‑heavy vs read‑heavy).

**5️⃣ Sanity‑check & verbalize**  
   - Recount the flow aloud: “When a memtable flushes, it becomes an SSTable… compaction picks SSTables based on …”.  
   - Verify that you covered both *how* and *why* each strategy is used.  
   - Check word count (150‑220 words) and adjust verbosity accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
