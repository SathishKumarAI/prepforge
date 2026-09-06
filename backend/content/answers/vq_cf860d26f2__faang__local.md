---
qid: vq_cf860d26f2__faang__local
question: How does one code a tree-structured query?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 438
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:34:37-05:00'
sources: []
---

**Clarify**  
You’re asked to *query* a tree‑like data structure (e.g., retrieving all descendants of a node). Confirm: is the tree static or dynamic? Are we allowed to pre‑compute auxiliary indices (e.g., Euler tour, parent pointers)? What query volume and latency constraints exist?

**Approach**  
1. Build an adjacency list (`Map<id, List<childIds>>`).  
2. For fast descendant lookup, run a depth‑first search once to assign each node an entry/exit timestamp (Euler tour).  
3. Store nodes in an array sorted by entry time; then any subtree is a contiguous slice `[entry[u], exit[u]]`.  

**Depth**  
```python
# Preprocess
time = 0
def dfs(u):
    global time
    start[u] = time; order[time]=u; time+=1
    for v in children[u]: dfs(v)
    end[u] = time-1

dfs(root)

# Query subtree of u
subtree_nodes = order[start[u]:end[u]+1]
```
Complexities: preprocessing `O(n)`. Each query `O(k)` where `k` is number of returned nodes (optimal). Space `O(n)` for timestamps and array. If updates are rare, this works; otherwise maintain a dynamic tree structure like a link‑cut tree.

**Edge Cases**  
- Empty tree or node not found → return empty list.  
- Large subtrees: ensure result fits memory; consider streaming results.  
- Concurrent modifications: need locks or immutable snapshots.

**Optimize & Communicate**  
If queries are frequent but updates rare, the Euler tour gives O(1) range bounds and O(k) output time—optimal for read‑heavy workloads. Explain trade‑offs: extra preprocessing vs. query speed; memory overhead is linear. Summarize that this technique is widely used in databases (nested sets) and graph engines for subtree queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
