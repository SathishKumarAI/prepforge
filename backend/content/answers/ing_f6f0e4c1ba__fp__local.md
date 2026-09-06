---
qid: ing_f6f0e4c1ba__fp__local
question: 'Explain: Multiple reference points — Sort search results | Elasticsearch
  Reference'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 431
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:44:36-05:00'
sources: []
---

### Why “multiple reference points” are needed

When a query asks for *“closest to this point”* we are solving a nearest‑neighbour optimisation: minimise the distance \(d(x, p)\) over all indexed documents \(x\).  
If the user supplies **one** point \(p\), the solution is simply the single minimum.  
In many applications (e.g., “find items near *any* of these three stores”), we actually want to minimise the distance to the *closest* of several points:
\[
\min_{x}\;\min_{i} d(x, p_i).
\]
Mathematically this is a **nested minimisation**.  
Elasticsearch implements it by evaluating each \(d(x, p_i)\) in turn and keeping the smallest value found so far. The engine therefore needs to:

1. Compute the distance from every document to *each* reference point.
2. Keep track of the current best (smallest) distance while iterating.

This is why the query language offers a *multiple‑reference‑points* construct: it tells ES to perform the inner minimisation automatically, without the user having to write custom scripts for each candidate.

### Deeper principle

The optimisation above is equivalent to **convex hull** evaluation in metric space: the set of points closest to any of the references is the union of their Voronoi cells. Elasticsearch’s approach implicitly constructs these cells on‑the‑fly, avoiding a full‑grid scan.

### Non‑obvious insight

A common mistake is to assume that adding more reference points will linearly increase cost. In fact, because ES stops evaluating a document once it finds a distance smaller than the current best, *more* references can **reduce** work when they are close to many documents. The optimal ordering of reference points (e.g., sorting them by expected proximity) is an easy yet powerful optimisation that most users overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
