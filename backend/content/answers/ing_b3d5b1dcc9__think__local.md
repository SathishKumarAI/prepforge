---
qid: ing_b3d5b1dcc9__think__local
question: 'Explain: Memory use during compaction — SSTable compaction and compaction
  strategies \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 743
total_tokens: 957
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:52:05-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- *What is being asked?*  
  We need to explain how memory is consumed during SSTable compaction in ScyllaDB, and outline the main compaction strategies it offers.  
- *Assumptions:*  
  - The reader knows basic LSM‑tree concepts (SSTables, compaction).  
  - They are interested in practical memory behavior (buffers, buffers per partition, etc.) rather than raw C++ internals.

**2️⃣ Adopt a mental model**

1. **Layered view:**  
   - *Read side:* SSTables → Bloom filters → Indexes.  
   - *Write side:* Memtables → Commit log → Flush to SSTable.  
2. **Compaction as merge:**  
   - Think of it as merging multiple sorted files into one, which requires holding parts of each file in memory.
3. **Scylla’s tuning knobs:**  
   - `compaction_strategy` (e.g., Leveled, SizeTiered).  
   - Per‑strategy parameters (`min_sstable_size`, `max_sstable_size`, etc.).

**3️⃣ Step‑by‑step reasoning**

1. **Identify memory buckets** during compaction:  
   - *Input buffers* for each source SSTable (row/partition chunks).  
   - *Output buffer* where merged rows are accumulated before flushing to disk.  
2. **Compute per‑bucket size:**  
   - Roughly `input_buffer_size = page_size × num_pages_per_sstable` plus overhead.  
   - Output buffer typically 1–2 × the input buffer (depends on strategy).
3. **Scale with number of SSTables** being merged:  
   - SizeTiered merges many files → higher peak memory.  
   - Leveled merges fewer files → lower peak but more frequent compactions.
4. **Incorporate GC & caching effects:**  
   - Compaction can be paused or throttled when the node’s cache is full or when the system is under heavy read/write load.

**4️⃣ Common pitfalls to avoid**

- *Confusing “compaction size” with “SSTable size.”*  
  Remember, memory usage depends on how many SSTables are merged at once, not just their disk size.  
- *Ignoring per‑partition buffers.*  
  Scylla may keep a small buffer per partition; under heavy write churn this can add up.  
- *Assuming linear scaling.*  
  Some strategies (e.g., Leveled) have logarithmic growth in memory usage due to fewer merges.

**5️⃣ Sanity‑check & communicate**

1. **Cross‑verify numbers:**  
   - Use Scylla’s `nodetool cfstats` or metrics (`compaction_memory_usage`) to confirm estimates.  
2. **Explain trade‑offs verbally:**  
   - “With SizeTiered, you’ll see a spike in memory during large merges; with Leveled, the peak is lower but you pay more on CPU and I/O.”  
3. **Summarize key takeaways**:  
   - Memory ≈ *buffers per SSTable* × *# of SSTables merged*.  
   - Choose strategy based on workload: heavy writes → SizeTiered; read‑heavy & low latency → Leveled.

This structured approach keeps the explanation clear, grounded in Scylla’s architecture, and easy to reuse for other compaction‑related questions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
