---
qid: ing_f736c94a3d__think__local
question: 'Explain: Explain how HNSW works, and what the M and ef parameters control.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 512
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:18:41-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
- Identify that “HNSW” refers to *Hierarchical Navigable Small World* graphs used for approximate nearest‑neighbor search.  
- Assume the audience knows basic ANN but not HNSW internals.  
- Note that “M” and “ef” are key hyper‑parameters: M controls graph connectivity, ef controls query time/accuracy.

**2. Adopt a mental model**  
- Treat the algorithm as building a multi‑layer directed graph where each layer is a *small‑world* network; lower layers have fewer edges (sparser) for fast traversal, higher layers are denser for better navigation.  
- Think of M as “max number of neighbors per node” and ef as “size of the candidate set during search”.

**3. Step‑by‑step reasoning**  
1. **Construction**: For each new point, insert it into the top layer with random level; connect to up to M nearest nodes in that layer (using approximate distance).  
2. **Propagation down layers**: Repeat connections for lower levels until the point’s level reaches 0.  
3. **Search**: Start at the entry point on the highest layer, greedily move to closer neighbors, then descend layers, each time maintaining a priority queue of best candidates.  
4. **ef role**: During search, keep an *open set* of size ef; larger ef means more candidates are considered → higher recall but slower query.  
5. **M role**: Determines the branching factor; larger M yields a denser graph → better accuracy and faster convergence, but increases memory and insertion time.

**4. Common pitfalls to avoid**  
- Confusing *ef* (search‑time parameter) with *efConstruction* (used only during building).  
- Assuming higher M always improves performance; in practice it can cause diminishing returns and more memory usage.  
- Overlooking that HNSW layers are probabilistic—higher layers may be empty if the dataset is small.

**5. Sanity‑check & communicate clearly**  
- Verify dimensions: M should be ≥ 1, ef ≥ M.  
- Explain with a simple example (e.g., 2‑D points) to show how edges are added and searched.  
- Conclude by summarizing that M tunes graph density and ef trades off query speed vs. recall.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
