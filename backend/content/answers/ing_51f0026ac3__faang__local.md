---
qid: ing_51f0026ac3__faang__local
question: 'Explain: Disjoint Sets: — OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 700
total_tokens: 940
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:55:01-05:00'
sources: []
---

**Disjoint Sets (Union‑Find)**  
*CS 61B – a classic data‑structure for tracking equivalence classes.*

---

### 1️⃣ Clarify
We need to maintain a collection of disjoint subsets over a universe \(U\) and support two operations efficiently:
- **`find(x)`**: return the representative (root) of the set containing `x`.
- **`union(x, y)`**: merge the sets that contain `x` and `y`.

Assumptions:  
- Elements are static (no insert/delete).  
- Operations are called many times; we want near‑constant amortized time.

---

### 2️⃣ Approach
Implement each set as a *tree* where every node points to its parent, the root being its own parent.  
Use two optimizations:

1. **Path compression** in `find`: flatten the tree by making each visited node point directly to the root.
2. **Union by rank/size**: attach the smaller tree under the larger one to keep height logarithmic.

---

### 3️⃣ Depth (Complexity & Details)
- `find(x)` runs in \(O(\alpha(n))\) amortized, where \(\alpha\) is the inverse Ackermann function (~4 for all practical sizes).  
- `union` likewise costs \(O(\alpha(n))\).  
- Memory: one array per element (`parent`, optional `rank/size`).  

Implementation sketch (Python‑like):

```python
class DSU:
    def __init__(self, n):
        self.parent = list(range(n))
        self.rank   = [0]*n

    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])  # path compression
        return self.parent[x]

    def union(self, a, b):
        ra, rb = self.find(a), self.find(b)
        if ra == rb: return
        if self.rank[ra] < self.rank[rb]:
            self.parent[ra] = rb
        elif self.rank[ra] > self.rank[rb]:
            self.parent[rb] = ra
        else:
            self.parent[rb] = ra
            self.rank[ra] += 1
```

---

### 4️⃣ Edge Cases & Tests
- Unioning an element with itself (no-op).  
- Repeated unions on already‑merged sets.  
- `find` before any union (root should be itself).  
- Large chains to confirm path compression flattens correctly.

---

### 5️⃣ Optimize & Communicate
If we only need connectivity queries, we can drop the rank array and use *weighted* unions for slightly less memory. For parallel or distributed settings, a lock‑free DSU (e.g., with atomic compare‑and‑swap) is possible but adds complexity.  

When explaining to interviewers:  
- Start by restating the problem and its constraints.  
- Outline the tree model + two key optimizations.  
- Provide time/space analysis, mention \(\alpha(n)\).  
- Conclude with edge cases and a quick code sketch. This demonstrates structured thinking, depth of knowledge, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
