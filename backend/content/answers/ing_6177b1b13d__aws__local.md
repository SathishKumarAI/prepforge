---
qid: ing_6177b1b13d__aws__local
question: 'Q: ColBERT stores one vector per token. How does it scale, and what are
  the storage tradeoffs?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 502
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:05:57-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a search‑optimization sprint for a global e‑commerce catalog that had 12 M SKUs and 4 B user queries per month. We migrated from BM25 to a neural retriever – ColBERT – because we needed semantic relevance without sacrificing latency.

**Action**  
ColBERT stores a dense vector for every token in the query and the document. To keep it production‑ready I:

1. **Compressed embeddings** – applied 8‑bit quantization (int8) per dimension, reducing each vector from 768 × 4 bytes to 768 × 1 byte.
2. **Sparse storage** – only kept top‑k tokens (k = 32) per document; the rest were pruned by TF‑IDF thresholding.  
3. **Indexing** – used Amazon OpenSearch Service with a custom vector field (`knn`), backed by an Elastic Inference GPU for sub‑10 ms inference.
4. **Scaling strategy** – provisioned 2 g5.xlarge nodes (GPU + 32 GB RAM) per shard, auto‑scaling on CPU utilization >70 %.  
5. **Cost control** – leveraged spot instances and reserved capacity for the nightly re‑index job.

**Result**  
- Storage dropped from ~2.4 TB to ~0.48 TB (80 % reduction).  
- Query latency fell from 350 ms (BM25) to 95 ms, staying under the 200 ms SLA for 99.9 % of traffic.  
- Click‑through rate on product pages rose by **12 %** due to higher semantic relevance.

**Reflection (Bar‑raiser lens)**  
I owned the end‑to‑end pipeline, diving deep into quantization error vs. recall trade‑offs. The biggest learning was that aggressive token pruning could hurt niche queries; we added a fallback retrieval step for 1 % of “cold” terms, regaining 0.5 % extra conversion without breaking cost targets.

**Leadership Principles Highlighted**  
- **Customer Obsession** – directly improved search relevance and conversion.  
- **Ownership & Dive Deep** – engineered compression and scaling while quantifying impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
