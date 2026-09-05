---
qid: vq_d54026b4d5__fp__local
question: Who do various access methods compare ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 440
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:58:18-05:00'
sources: []
---

### Comparing Database Access Methods

The fundamental problem each access method solves is *how to locate a record with minimal cost* (time, I/O, CPU).  
Let \(C(R)\) be the average cost of finding a row \(R\) given its key value.

| Method | Core Idea | Why it works |
|--------|-----------|--------------|
| **Sequential scan** | Read every block until the target is found. | Works when data are unsorted or the predicate matches many rows; cost \(O(N)\). |
| **Direct (hash)** | Compute a hash of the key → bucket → block. | In theory \(C(R)=O(1)\) if hash collisions are negligible and buckets fit in memory. Real‑world: cache misses, collision resolution add constant overhead. |
| **Indexed (B+ tree)** | Maintain a balanced tree of keys; leaf nodes contain pointers to data blocks. | Guarantees \(C(R)=O(\log_B N)\) where \(B\) is block size; balances height and disk seeks. |

#### Non‑obvious insight
A hash index *does not* guarantee lower cost than an indexed scan when the **selectivity** of a query is high (many rows match). Because the hash must still read all buckets that contain matching keys, its advantage disappears: it behaves like a sequential scan but with extra overhead. Only for highly selective predicates does the constant‑time lookup truly dominate.

#### Deeper principle
All three are instances of **space–time trade‑off** in external memory algorithms:  
- Sequential scan uses no auxiliary space → linear time.  
- Hashing adds O(N) space (the hash table) → near‑constant time for a single key.  
- B+ trees use logarithmic extra structure to reduce tree height, balancing I/O per level.

Choosing an access method is thus a decision about which part of the cost function—CPU, I/O, or memory—is most precious in the target workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
