---
qid: ing_eea8d81fcb__think__local
question: 'Explain: Google’s S2, geometry on the sphere, cells and Hilbert curve'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 517
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:46:51-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- Identify the core concepts the user wants: *S2* (Google’s spherical spatial index), how it represents geometry on a sphere, what “cells” are in this context, and why/where a *Hilbert curve* is used.  
- Assume the reader has basic ML / GIS knowledge but not deep familiarity with Google’s internal indexing.

**2️⃣ Adopt a mental model: hierarchical space‑filling + map projection**  
- Think of S2 as a hierarchy of nested quadrilaterals covering the sphere, analogous to quadtree tiles on Earth.  
- Map the 3‑D sphere to a cube (the *cube mapping* step), then flatten each face to a 2‑D square.  
- Use a space‑filling curve (Hilbert) to order those squares linearly while preserving locality.

**3️⃣ Step‑by‑step reasoning**  
1. **Cube map**: Project the sphere onto six faces → each face becomes a unit square in 2‑D.  
2. **Subdivision**: Recursively split each face into four child cells (quadtree) to arbitrary depth, yielding unique integer IDs.  
3. **Hilbert ordering**: On each face, traverse cells with a Hilbert curve; this gives an index that keeps neighboring cells close in the 1‑D ordering.  
4. **Geometric operations**: To query proximity or overlap, compare cell IDs and their ranges using the Hilbert order, avoiding expensive spherical geometry calculations.

**4️⃣ Common pitfalls to avoid**  
- Mixing up *Hilbert* with other curves (Morton/Z-order).  
- Forgetting that S2 uses a *quadtree*, not an octree.  
- Assuming cells are equal in area; on the sphere they get progressively smaller toward poles if using latitude‑based grids.

**5️⃣ Sanity‑check & verbalize**  
- Verify that a point’s cell ID can be derived by projecting to cube, finding face, then quadtree position.  
- Explain how the Hilbert curve ensures locality: nearby points → nearby IDs, making range queries efficient.  
- Summarize in plain language: “S2 turns the 3‑D globe into a tidy set of square tiles on six faces; a Hilbert walk orders those tiles so that the index is both compact and spatially coherent.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
