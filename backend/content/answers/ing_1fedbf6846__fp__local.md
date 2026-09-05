---
qid: ing_1fedbf6846__fp__local
question: 'Explain: Hilbert Curve — Google\u2019s S2, geometry on the sphere, cells
  and Hilbert curve | Terra Incognita'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 386
total_tokens: 575
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:13:44-05:00'
sources: []
---

**Why a space‑filling curve?**  
A map of the Earth must index every point with an *order‑preserving* key so that nearby points stay close in one dimension.  A naïve latitude/longitude pair collapses longitudes at the poles and makes range queries expensive.  The S2 library solves this by projecting the sphere onto a cube, recursively subdividing each face into *cells*, and ordering those cells with a **Hilbert curve**.

**From cube to Hilbert order**  
1. Map a point \((x,y,z)\) on the unit sphere to one of six cube faces using the dominant coordinate.  
2. Scale the face coordinates to \([0,1)^2\).  
3. Apply a 2‑D *Hilbert* space‑filling curve: at level \(k\), each face is split into \(4^k\) squares; the Hilbert recursion visits them in a pattern that preserves locality better than row/column scans because it twists every other quadrant.  

The key property is *self‑similarity*: each cell contains exactly one child of each type, and the curve’s adjacency guarantees that two cells sharing an edge are adjacent in the 1‑D Hilbert index. Thus range queries on latitude–longitude become simple interval lookups.

**Non‑obvious insight**  
Because the cube projection is *conformal* only locally, distortion varies across faces. Yet the Hilbert ordering automatically adapts: near a face corner, cells are split more finely in the direction of greatest distortion, keeping the index quasi‑isotropic over the sphere.  This subtle interplay between geometry and combinatorics lets S2 support fast geospatial queries while remaining numerically stable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
