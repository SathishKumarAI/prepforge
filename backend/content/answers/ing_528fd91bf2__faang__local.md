---
qid: ing_528fd91bf2__faang__local
question: 'Explain: B-Tree — Database-Internals/DataStructures/BTree.md at main \u00b7
  Anshul619/Database-Internals \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 520
total_tokens: 780
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:56:25-05:00'
sources: []
---

**Clarify**  
The question asks for a concise explanation of B‑Trees as used in database internals. We assume the interviewer wants: definition, structure, operations, and why they’re chosen over other index structures.

**Approach**  
1. Define a B‑Tree and its key properties.  
2. Explain node layout (keys + child pointers).  
3. Outline search, insert, delete algorithms with complexity.  
4. Mention practical choices in databases (page size, fan‑out, leaf vs internal nodes).  

**Depth**  
A B‑Tree is a balanced multiway search tree where every node can hold *m* keys and *m+1* children (order *m*). All leaves reside at the same depth, guaranteeing O(logₘ n) time for lookup.  
- **Search:** Start at root; perform binary search on keys to pick child pointer; recurse until leaf.  
- **Insert:** Find leaf; if it has space, insert in sorted order. If full, split into two nodes, promote median key up. Splits may propagate upward, potentially adding a new root.  
- **Delete:** Remove key from leaf; if node underflows (<⌈m/2⌉ keys), borrow from sibling or merge with sibling and pull down a separator from parent.  

**Complexity & Trade‑offs**  
- *Time*: O(logₘ n) for all operations.  
- *Space*: Each page holds many keys, reducing disk I/O.  
- *Fan‑out*: Higher order → fewer levels → cheaper traversal but larger node size → more I/O per read.  
Databases tune *m* to match OS page size (e.g., 4 KB) and cache behavior.

**Edge Cases**  
- Splitting the root creates a new level.  
- Deleting the last key in the tree removes the root, leaving an empty tree.  
- Underflow at root may shrink height.  

**Optimize & Communicate**  
Highlight that B‑Trees are chosen because they minimize disk seeks (few page reads) while maintaining balanced search times. I would note that modern databases also use variants like B+Tree (all keys in leaves) and LSM‑trees for write‑heavy workloads, but the core principles remain identical. This succinctly covers definition, mechanics, complexity, and practical considerations within 200 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
