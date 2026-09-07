---
qid: ing_98285f3514__faang__local
question: 'Explain: Minimum Spanning Trees: — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 510
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:38:27-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise, interview‑ready explanation of *Minimum Spanning Trees (MST)*—the classic graph problem that often shows up in CS61B and interview prep.  
Assumptions:  
- Undirected weighted graph, no negative weights.  
- Need the total weight (or list of edges) of the MST.

**Approach**  
1. State the two canonical algorithms: Kruskal’s (sort‑then‑union) and Prim’s (grow a tree).  
2. Mention their data structures: DSU for Kruskal, priority queue for Prim.  
3. Highlight time complexities and when each shines.

**Depth**  

| Algorithm | Steps | Data Structures | Complexity |
|-----------|-------|-----------------|------------|
| **Kruskal** | *Sort* edges by weight; iterate, adding an edge if it connects two different components (checked via DSU). | Edge list + Disjoint‑Set Union with path compression & union‑by‑rank. | `O(E log E)` for sorting; practically `O(E α(V))` after that. |
| **Prim** | Start from any vertex, repeatedly pick the cheapest edge crossing the cut between tree and rest of graph (using a min‑heap). | Adjacency list + binary heap (or Fibonacci heap for theoretical `O(E + V log V)`). | `O((E+V) log V)` with binary heap; optimal `O(E + V log V)` with Fibonacci. |

**Edge Cases**  
- **Disconnected graph:** no MST exists; algorithm should detect by counting added edges (`V‑1` needed).  
- **Multiple equal‑weight edges:** both algorithms still produce a valid MST, but the exact tree may differ.  
- **Large dense graphs:** Prim’s heap operations dominate; consider adjacency matrix + array for `O(V²)` when `E ≈ V²`.  

**Optimize & Communicate**  
Explain trade‑offs: Kruskal is simpler to implement and great when edges are already sorted or sparse; Prim excels with dense graphs because it never needs to sort all edges. Mention that in practice, a binary heap is sufficient unless you’re chasing the theoretical lower bound. Conclude by summarizing that both yield the same minimal total weight, guaranteeing optimality due to the cut‑property of MSTs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
