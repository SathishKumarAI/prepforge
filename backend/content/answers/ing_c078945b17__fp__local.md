---
qid: ing_c078945b17__fp__local
question: 'Explain: Algorithm Comparison — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 412
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:52:04-05:00'
sources: []
---

**Vector‑database algorithm comparison – a principled view**

At its core a vector database must solve the *nearest‑neighbour* (NN) problem: given an embedding **q**, find all data points whose inner product or Euclidean distance is within a tolerance. The naïve brute force scan costs \(O(nD)\) per query, prohibitive for large \(n\).  
The trade‑off arises from *information geometry*: we wish to compress the dataset into a structure that preserves local neighbourhoods while reducing search cost.  

*Brute‑force vs. exact tree structures (KD‑tree, Ball‑Tree)*: these rely on spatial partitioning, assuming data lies in low intrinsic dimension. In high‑dimensional, “curse of dimensionality” makes partitions ineffective; the algorithm’s pruning power collapses.  
*Approximate methods (LSH, HNSW, PQ)*: they trade exactness for *probabilistic guarantees*. LSH hashes vectors so that similar items collide with high probability—an instance of *hash‑based locality optimisation*. HNSW builds a navigable small‑world graph; its hop‑racing mechanism exploits the underlying metric’s triangle inequality. Product Quantisation compresses vectors into codebooks, turning distance computation into cheap lookup tables—here we leverage *information bottleneck* to retain only the most predictive components.

**Non‑obvious insight:** The choice of *distance function* (cosine vs Euclidean) often dominates algorithmic performance more than the data structure itself. Because many embeddings are unit‑norm, cosine similarity reduces to a dot product; indexing structures built for Euclidean distances may inadvertently bias search toward large‑magnitude vectors, skewing recall. A principled comparison must therefore normalize vector norms or explicitly adapt the metric before benchmarking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
