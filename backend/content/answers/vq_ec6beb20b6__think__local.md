---
qid: vq_ec6beb20b6__think__local
question: HOW DO YOU DELETE DUPLICATE RECORDS WHILE KEEPING ONE COPY?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 421
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:37:57-05:00'
sources: []
---

**1️⃣ Clarify the problem & set assumptions**  
   - Identify the data structure (array, list, linked‑list, BST, hash table).  
   - Decide whether duplicates are exact matches or based on a key/field.  
   - Assume we can modify in place; otherwise we’ll build a new collection.

**2️⃣ Pick a mental model / algorithmic framework**  
   - For unordered collections → use a *hash set* to track seen items.  
   - For sorted data → a single‑pass linear scan works because duplicates are adjacent.  
   - For linked lists → adjust pointers; for arrays → shift elements or mark deletions.

**3️⃣ Step‑by‑step reasoning**  
   1. Initialize an empty hash set `seen`.  
   2. Iterate over the collection with index/iterator.  
   3. If current element `x` is in `seen`, delete it (remove from list/shift array).  
   4. Else, add `x` to `seen` and keep it.  
   - *Sorted case*: compare each element with its predecessor; if equal, skip or remove.

**4️⃣ Common pitfalls to avoid**  
   - Forgetting that deletion changes indices in arrays/lists – use a secondary array or reverse iteration.  
   - Using a mutable key (e.g., object) directly in a hash set without proper hashing/equality.  
   - Over‑removing when duplicates span non‑adjacent positions in sorted data.

**5️⃣ Sanity‑check & communicate**  
   - Verify edge cases: empty input, all unique, all identical.  
   - Explain time/space trade‑offs: O(n) time + O(k) space for hash set; O(n) time, O(1) extra for sorted scan.  
   - Present pseudocode and a brief example to illustrate the flow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
