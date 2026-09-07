---
qid: ing_32b1fdf068__faang__local
question: Break down the latency and cost budget of a RAG query. What do you optimise
  first?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 530
total_tokens: 771
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:42:23-05:00'
sources: []
---

**Clarify**  
We’re asked to break down *latency* and *cost* for a Retrieval‑Augmented Generation (RAG) query – the end‑to‑end request that fetches relevant documents, embeds them, feeds them into a generative model, and returns a response.  
Assumptions:  
1. Indexing is pre‑built (FAISS/Pinecone).  
2. Embedding model is hosted on GPU; generation model runs on TPU/CPU cluster.  
3. Network latency between services is non‑negligible.

**Approach**  
1. **Component‑level profiling** – measure each stage: query embedding, similarity search, document fetch, prompt construction, LLM inference.  
2. **Cost modeling** – map CPU/GPU time to billable units (e.g., GCP vCPU‑hrs, GPU‑hrs).  
3. **Prioritization** – decide which stage dominates latency vs cost.

**Depth**  
- *Latency*:  
  - **Embedding**: ~10 ms per query on a single GPU.  
  - **Similarity search**: sub‑millisecond with vector index; network hop adds ~5 ms.  
  - **Document fetch**: disk I/O + serialization ≈ 15 ms.  
  - **LLM inference**: dominant, 200–400 ms per token on a TPU.  
- *Cost*:  
  - Embedding GPU: $0.10/hrs → ~\$1×10⁻⁵/query.  
  - LLM TPU: $0.50/hrs → dominates (~\$5×10⁻⁴/query).  
  - Storage/network negligible.

**Edge Cases**  
- *Cold start* for GPU/TPU can add >100 ms.  
- *Large context windows* inflate inference time linearly.  
- *Index sharding failures* cause fallback to full‑text search, blowing latency/cost.

**Optimize & Communicate**  
First optimize **LLM inference**: batch requests, use smaller models or distillation, adjust prompt length. Next, profile embedding cost; if GPU is idle, consider a cheaper CPU encoder with acceptable quality loss. Finally, cache frequent embeddings and pre‑fetch documents to reduce network hops. Present the trade‑off table (latency vs cost) to stakeholders, emphasizing that reducing inference time yields the largest ROI in both metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
