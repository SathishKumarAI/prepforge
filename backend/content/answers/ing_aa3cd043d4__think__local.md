---
qid: ing_aa3cd043d4__think__local
question: 'Explain: Read-optimized permanent index table — How LedgerStore Supports
  Trillions of Indexes at Uber'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 448
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:16:03-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Identify what “read‑optimized permanent index table” means in LedgerStore’s context (a column‑arised, immutable structure).  
   - Assume the audience knows basic distributed storage but not Uber’s specific implementation details.

**2️⃣ Adopt a layered mental model**  
   - *Data layout* → *Storage tiering* → *Query path* → *Scalability knobs*.  
   - Think of each layer as a separate problem: how data is partitioned, where it lives (SSD vs. HDD), and how the engine finds rows.

**3️⃣ Step‑by‑step reasoning**  
   1. **Partitioning strategy** – explain hash‑partitioning on key ranges to avoid hotspots.  
   2. **Immutable pages** – describe write‑once pages that enable fast reads without locking.  
   3. **Compressed columnar blocks** – highlight how column compression reduces I/O for point queries.  
   4. **Index metadata cache** – show the in‑memory Bloom‑filter + sketch that filters out non‑matching shards before disk access.  
   5. **Parallel scan orchestration** – illustrate how workers spawn per‑shard tasks and merge results efficiently.

**4️⃣ Avoid common pitfalls**  
   - Don’t conflate “index” with a B‑tree; it’s more like a bitmap/columnar index.  
   - Beware of overemphasizing raw throughput—latency constraints drive the design.  
   - Remember that scaling to trillions isn’t just sharding; it’s also the cost model of immutable storage.

**5️⃣ Sanity check & verbalize**  
   - Ask: “If I had 10 trillion rows, how many disk seeks would a single query need?”  
   - Answer: “Zero extra seeks thanks to pre‑filtered shards.”  
   - Convey this by walking through a concrete example (e.g., lookup of user ID X) while pointing out each layer’s contribution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
