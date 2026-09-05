---
qid: ing_037ef3abcc__fp__local
question: 'Explain: You have an embedding model and a reranker. Why sell both? Design
  the two-stage retrieval pipeline and tell me when the reranker earns its latency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 546
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:12:37-05:00'
sources: []
---

### Why keep *both* an embedding model and a reranker?

The **embedding stage** solves the *coarse‑level similarity* problem: it maps every document to a low‑dimensional vector so that nearest‑neighbour search can be performed in sub‑linear time. It is highly parallelizable, memory‑friendly, and works for any query, but it only captures global semantic proximity; it cannot distinguish subtle relevance signals (e.g., exact keyword matches or entity co‑occurrence).

The **reranker** tackles the *fine‑level discriminative* problem: given a short list of candidates, it applies a richer model (often transformer‑based) that can attend to query–document interactions, metadata, and external knowledge. It is expensive because it processes each candidate sequentially, but its output quality is far higher.

### Two‑stage pipeline

1. **Stage 1 – Retrieval**  
   * Query → Encode → ANN search over index → Return top‑K (≈ 50–200) candidates.  
   Latency ≈ O(log N) + vector distance cost; negligible per query.

2. **Stage 2 – Re‑ranking**  
   * Pass the K candidates through a cross‑encoder or list‑wise model.  
   * Compute final scores, sort, and output top‑M (≈ 10–20).  

### When does the reranker justify its latency?

- **Precision‑critical use cases**: e.g., legal or medical search where every missed fact can be costly.  
- **High‑cost queries**: when the downstream cost of a wrong answer outweighs the extra milliseconds.  
- **Cold‑start or rare queries**: embedding models often mis‑rank uncommon terms; reranker recovers them.

A practical rule of thumb: if the *recall@K* from embeddings alone is below 0.90 on your evaluation set, adding a reranker can raise overall MAP by >10 %. The extra latency (typically 5–15 ms per candidate) becomes negligible when amortized over many queries in a high‑throughput system.

**Non‑obvious insight:** the embedding stage *implicitly learns a manifold* where relevance is locally clustered. A reranker that respects this geometry—e.g., by weighting distances more heavily near cluster boundaries—can achieve comparable gains to a full cross‑encoder while saving computation. This hybrid “distance‑aware” reranking is often overlooked but can bridge the gap between speed and accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
