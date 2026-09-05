---
qid: ing_30c19b7b45__fp__local
question: How to get nearby businesses with quadtree?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 363
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:48:35-05:00'
sources: []
---

**Why a Quadtree Helps Find Nearby Businesses**

The core problem is: *given a point \(p\) and a radius \(r\), retrieve all businesses whose locations lie within the disk \(\{x : \|x-p\|\le r\}\).*  
A naïve scan costs \(O(n)\). A quadtree partitions space recursively into four quadrants, each node storing the bounding box of its children. Because a rectangle’s intersection with a disk can be tested in constant time, we can prune entire subtrees: if a node’s bbox lies entirely outside the search circle, all its descendants are discarded; if it lies completely inside, all contained businesses are accepted without further checks.

This pruning exploits **spatial locality**—the principle that nearby points cluster. The quadtree guarantees that any leaf covers an area no larger than a fixed threshold (e.g., a few business points), so the number of nodes examined is proportional to \(\log n + k\) where \(k\) is the output size, yielding near‑linear query time.

**Non‑obvious Insight:**  
Quadtree depth need not be uniform. By adapting the split threshold to local density (e.g., stop subdividing when a node contains ≤ c points), we balance tree height against leaf fan‑out. In sparse regions the tree stays shallow, avoiding unnecessary splits that would otherwise inflate memory and query cost. This adaptive strategy is often overlooked but can halve search time on real‑world datasets with clustered businesses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
