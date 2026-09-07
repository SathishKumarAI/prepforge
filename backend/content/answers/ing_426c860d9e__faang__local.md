---
qid: ing_426c860d9e__faang__local
question: 'Explain: Counting Bloom Filter — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 442
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:18:39-05:00'
sources: []
---

**Clarify**  
We’re asked to explain a *Counting Bloom Filter* (CBF) in the context of system design—how it works, why we’d use it over a standard Bloom filter, and its trade‑offs.

---

### Approach
1. **Define the problem:** Need a probabilistic membership test that supports deletions and counts.
2. **Recall Bloom basics:** bit array + k hash functions; false positives only.
3. **Introduce CBF extension:** replace bits with small counters.
4. **Show operations & math.**

---

### Depth
A CBF stores an array of *counters* (e.g., 8‑bit).  
- **Insert(item):** For each of k hash functions, increment the corresponding counter.  
- **Query(item):** Return “present” if all k counters > 0.  
- **Delete(item):** Decrement those counters (only safe if no underflow).

*Space:* `k * size_of_counter` vs. `m` bits for a Bloom filter.  
*False‑positive rate* ≈ `(1 - e^{-kn/m})^k`, identical to Bloom.  
*Deletion safety:* Requires that the item was inserted exactly k times; otherwise counters may underflow.

---

### Edge Cases
- **Counter overflow:** Use larger counters or wrap‑around logic.  
- **Underflow on delete:** Guard against negative values.  
- **Hash collisions:** Same as standard Bloom, but now can affect counts more severely.

---

### Optimize & Communicate
- **Choose counter width** based on expected max count (e.g., 4 bits for ≤ 15).  
- **Use scalable CBFs** (layered or hierarchical) to handle dynamic size.  
- **Explain trade‑offs:** Extra memory, deletion cost vs. ability to support approximate frequency counts.

*In a system interview, I’d highlight how CBFs enable efficient cache eviction policies or rate‑limiting counters while keeping space below that of a full hash table.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
