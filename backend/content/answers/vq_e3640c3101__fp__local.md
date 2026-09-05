---
qid: vq_e3640c3101__fp__local
question: WHAT ARE THE DIFFERENT TYPES OF INDEXES?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 495
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:01:08-05:00'
sources: []
---

**Indexes are the “lookup tables” that let a database turn an arbitrary query into a few disk seeks.**  
At their core they solve the same optimization problem: *given a key‑value pair, retrieve the row(s) in logarithmic time while keeping write overhead low.* The design choices—tree shape, hashing strategy, ordering of keys, and whether to duplicate data—are all manifestations of trade‑offs between search speed, space, and update cost.

| Index type | Structure | When it shines | Core insight |
|------------|-----------|----------------|--------------|
| **B‑Tree / B+Tree** | Balanced multiway tree; leaf nodes hold sorted key pointers. | Range queries, ordered scans, point lookups on large tables. | *Sorted order* keeps range scans cheap; balance guarantees O(log N) seeks. |
| **Hash Index** | Hash table mapping keys to bucket(s). | Exact‑match lookups on highly selective keys. | *Uniform hashing* turns lookup into constant‑time probes; no ordering, so range queries are impossible. |
| **Bitmap Index** | Bitmaps per distinct key value, often compressed. | Low cardinality columns (e.g., gender) and analytical workloads. | *Compression exploits long runs of identical bits*, giving very small storage for sparse values. |
| **Spatial/Geospatial Index (R‑Tree, Quad‑Tree)** | Bounding‑volume hierarchy for multi‑dimensional data. | Location queries, nearest‑neighbor searches. | *Spatial locality* reduces the number of nodes examined by pruning large bounding boxes early. |
| **Full‑Text Index** | Inverted index mapping words to posting lists. | Text search and relevance ranking. | *Tokenization + stop‑word removal* turns free text into a sparse, high‑dimensional vector space amenable to efficient intersection. |

### Non‑obvious insight
Many people treat indexes as static structures, but the **“index cardinality”**—the number of distinct key values relative to table size—determines which type is optimal. A hash index on a column with millions of distinct values wastes memory; a bitmap becomes bloated. Thus, profiling cardinality before designing an index often saves space and improves performance far more than tweaking tree fan‑out or bucket size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
