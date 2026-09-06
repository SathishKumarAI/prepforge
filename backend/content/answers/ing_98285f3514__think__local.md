---
qid: ing_98285f3514__think__local
question: 'Explain: Minimum Spanning Trees: — OG CS61B Data Structures and Sorting
  Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 519
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:09:53-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
- Confirm that “Minimum Spanning Tree” (MST) refers to an undirected, weighted graph problem (not a directed one).  
- Assume the audience knows basic graph terminology (vertices, edges, weights) but may not know MST algorithms.  
- State that we’ll focus on two canonical algorithms: **Kruskal** and **Prim**, as those are standard CS61B material.

**2. Choose a mental framework**  
- Treat MST as an optimization problem: *pick a subset of edges with minimum total weight that keeps the graph connected*.  
- Use the “cut property” and “cycle property” as invariants that guide both algorithms.  
- Map each algorithm to a data‑structure pattern: Kruskal → Union‑Find; Prim → Priority Queue (min‑heap).

**3. Step‑by‑step reasoning**  
- **Kruskal**:  
  1. Sort all edges by weight (O(E log E)).  
  2. Iterate edges, adding an edge iff it connects two previously disconnected components.  
  3. Use Union‑Find to test connectivity in near‑constant amortized time.  
- **Prim**:  
  1. Start from any vertex; maintain a min‑heap of frontier edges.  
  2. Repeatedly extract the cheapest edge that connects a new vertex, adding it to the tree.  
  3. Update the heap with edges incident to the newly added vertex.

Explain why both yield the same optimal cost (cut property proof sketch) and discuss time complexities in terms of E, V, and the data structures used.

**4. Avoid common pitfalls**  
- Don’t confuse MST with shortest‑path trees; emphasize that MST cares about total weight, not path length.  
- Beware of directed graphs—MST is only defined for undirected ones.  
- Remember to handle disconnected graphs: no spanning tree exists; the algorithm should detect this (e.g., after Kruskal we check if all vertices are in one component).

**5. Sanity‑check & verbalize**  
- Verify that the number of edges added equals V–1 for a connected graph.  
- Reiterate the cut/cycle properties to reassure correctness.  
- End with a quick comparison table (algorithm, data structures, complexity) so the learner can recall the key differences at a glance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
