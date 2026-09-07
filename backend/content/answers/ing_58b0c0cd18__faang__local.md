---
qid: ing_58b0c0cd18__faang__local
question: 'Explain: Choosing the Right Index — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 521
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:09:47-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* In a large‑scale ML pipeline we store feature vectors and model artefacts in a database or key‑value store. We need to decide which column(s) to index so that inference queries (e.g., “fetch vector for user X”) run fast while keeping write latency low.  
*Assumptions to confirm:*  
- Data volume (millions of rows, GBs).  
- Query mix: read‑heavy or balanced.  
- Index cost (storage, write amplification).  
- DB type (relational vs. NoSQL).

**2️⃣ Approach**  
1. Profile query patterns → identify hot columns.  
2. Evaluate cardinality and selectivity.  
3. Choose index type: B‑tree for equality, hash for exact match, or vector‑indexing (FAISS) for nearest‑neighbor lookups.  
4. Simulate read/write trade‑offs; adjust as needed.

**3️⃣ Depth**  
- **Equality queries:** Single column B‑tree on `user_id` gives O(log n) lookup, minimal write overhead.  
- **Range or composite keys:** Multi‑column index (e.g., `(dataset_id, feature_hash)` ) reduces cache misses.  
- **Nearest‑neighbor ML use‑case:** Persist dense vectors in a column; build an IVF‑PQ index externally (FAISS), store the vector id as a key. Write cost high but read latency < ms for kNN.  
- Complexity: B‑tree O(log n) reads, O(1) writes plus log‑overhead; FAISS indices are O(log m) search but heavy disk I/O.

**4️⃣ Edge Cases**  
- Low cardinality columns (e.g., binary flag) yield poor selectivity → skip indexing.  
- Hot spot contention on a single indexed key → consider sharding or using a cache layer.  
- Schema evolution: adding an index can lock the table; use online DDL where possible.

**5️⃣ Optimize & Communicate**  
Start with the simplest index (`user_id`), monitor metrics, then iteratively add composite or vector indices only when query latency exceeds SLA. Explain to stakeholders that indexing is a cost–benefit trade‑off: each added index improves read speed but increases write time and storage; hence we adopt a data‑driven, incremental approach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
