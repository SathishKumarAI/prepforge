---
qid: vq_ec6beb20b6__fp__local
question: HOW DO YOU DELETE DUPLICATE RECORDS WHILE KEEPING ONE COPY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 371
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:02:36-05:00'
sources: []
---

When you “delete duplicates while keeping one copy,” you’re solving a **selection problem**: given a multiset of records, produce a set that contains exactly one representative per equivalence class (records that are equal).  
The fundamental constraints are:

1. **Correctness** – every distinct record appears once.
2. **Efficiency** – linear time and minimal extra space if possible.

From the lens of **information theory**, each input record carries *entropy* about its value. We must compress this entropy by merging identical symbols, which is precisely what a hash table does: it maps each key to a single slot, discarding subsequent collisions.  

Algorithmically:

1. Create an empty hash set `S`.
2. Scan the list once.  
   *If* `record` ∉ `S`, insert it and keep it;  
   *else*, skip (it’s a duplicate).
3. Output the contents of `S`.

This runs in **O(n)** expected time with **O(k)** auxiliary space, where *k* is the number of distinct records—optimal because any algorithm must at least read all input once.  

**Non‑obvious insight:**  
If you cannot afford extra memory (e.g., external sorting), sort the data first (`O(n log n)` time). Then a single linear scan removes duplicates: adjacent equal keys are merged. Sorting is essentially a *geometric* transformation—arranging points on a line so that identical ones become neighbors, making deletion trivial. Thus, whether you hash or sort, you’re exploiting a structure (hash buckets or order) to collapse duplicate entropy into a single representative.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
