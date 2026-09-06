---
qid: ing_6ce2af358e__fp__local
question: 'Explain: Database Indexing — System Design was HARD until I Learned these
  30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 441
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:55:53-05:00'
sources: []
---

### Why database indexing feels like a black‑box puzzle  

At its core, an index is a **data structure that maps search keys to physical row locations** so that queries can avoid scanning the whole table.  
The hard part isn’t the idea—*store key → pointer*—but the *trade‑offs* hidden in that mapping:

1. **Space vs. Speed** – every extra level of indirection (e.g., B‑tree, hash) consumes disk pages; we must decide how deep a tree is acceptable given page size and node fan‑out.
2. **Write Amplification** – updates must keep the index coherent; balancing trees or maintaining hash buckets can cause costly I/O bursts that outweigh read gains.
3. **Concurrency & Locking** – readers and writers contend on nodes; fine‑grained locking or optimistic concurrency is required to avoid bottlenecks.
4. **Selectivity & Cardinality** – an index only helps if the predicate filters a small fraction of rows; estimating this requires statistical models that evolve with data.

These constraints are manifestations of a deeper principle: **information theory under I/O cost**.  
The entropy of the key distribution dictates how many bits you need to locate a row. A highly skewed distribution (e.g., `user_id` with 10 % distinct values) requires fewer index levels than a uniform one; failing to model this leads to over‑indexed or under‑indexed schemas.

**Non‑obvious insight:** *An index is essentially a compressed representation of the table’s key space.*  
If you can encode keys into a smaller, deterministic space (e.g., via perfect hashing or locality‑preserving sketches), you dramatically reduce both storage and traversal cost. Many designers ignore this because they treat indexes as opaque B‑trees; thinking in terms of compression unlocks new designs like *Hilbert R‑Trees* or *Cuckoo filters*, which blend geometry, probability, and information theory into a single elegant solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
