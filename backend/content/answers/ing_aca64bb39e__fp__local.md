---
qid: ing_aca64bb39e__fp__local
question: 'Explain: Indexing — Database-Internals/DataStructures/Index.md at main
  \u00b7 Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 480
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:11:56-05:00'
sources: []
---

**Why a database needs an index**

A relational system must answer *point* and *range* queries over large tables.  
Without extra structure the engine scans every row (an \(O(n)\) cost).  
The fundamental problem is to reduce this search from linear to logarithmic
time while keeping updates cheap.

---

### Deriving the index

1. **Search space reduction** – We want a data structure that, given a key,
   can skip irrelevant rows.  This is precisely what *search trees* do:
   each node stores a value and pointers to smaller/larger sub‑trees.
2. **Balanced search tree** – If we keep the tree height \(h = O(\log n)\),
   then locating a key costs \(O(h)\).  
   B‑trees (or variants) store multiple keys per node, matching the
   block‑based I/O of disks: each node fits one page, so we minimize disk seeks.
3. **Write cost** – Updating a leaf triggers rebalancing only locally,
   keeping insert/delete \(O(\log n)\).  
4. **Ordering** – Because B‑trees preserve key order, range scans become
   simple sequential reads of consecutive pages.

---

### Connection to deeper principles

* **Information theory**: The index compresses the table’s “search space” by
  encoding only boundary values; each comparison eliminates roughly half the
  remaining candidates.
* **Geometry**: In multi‑dimensional data, B+trees or R‑trees partition space,
  turning a linear search into a walk through a spatial lattice.

---

### Non‑obvious insight

Most people think of indexes as *lookup tables*.  
In reality they are **inverted partitions of the key domain**.  
When you delete a row, you don’t physically remove it from the leaf; instead
you mark it “tombstone”.  The index remains correct because the tree still
stores the boundary keys.  Periodic **vacuuming** reclaims space, but the
index’s logical structure is resilient to fragmentation—an essential property
for long‑running OLTP systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
