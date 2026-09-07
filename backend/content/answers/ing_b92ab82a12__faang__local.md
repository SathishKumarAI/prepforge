---
qid: ing_b92ab82a12__faang__local
question: 'Explain: Cost estimate — Semantic Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 534
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:53:30-05:00'
sources: []
---

**Clarify**  
We’re asked to provide a rough cost estimate for building a production‑grade semantic search engine (vector retrieval + ranking). Key assumptions:  
• Corpus size: 100 M documents, avg. 500 words → ~50 B tokens.  
• Model: OpenAI‑style transformer (≈12B params) fine‑tuned for embeddings.  
• Hardware: GPU clusters (A100), storage on SSD/GPFS.  
• Use case: 10k queries/sec, latency ≤200 ms.  

**Approach**  
1. **Embedding generation** – batch inference + caching.  
2. **Vector index** – approximate nearest neighbor (FAISS/HNSW) with disk‑backed persistence.  
3. **Retrieval & ranking** – lightweight neural reranker or BM25 fallback.  
4. **Ops** – autoscaling, monitoring, and data pipeline for incremental updates.  

**Depth**  
- *Embedding cost*: 50 B tokens × 0.0008 $ per token (A100 inference) ≈ **$40k/month**.  
- *Storage*: 50 B vectors (384‑dim float32) → 19 TB ≈ **$1.9k/month** on SSDs.  
- *Indexing & query*: 10k qps × 0.02 $ per qps = **$200/day** (~$6k/month).  
- *Compute for updates* (re‑index every week): ~8 k GPU‑hrs → **$4k/month**.  
Total ≈ **$52k/month**, with 20–30% buffer for scaling and redundancy.

**Edge Cases**  
- Sudden spike in qps → latency ↑; need pre‑provisioned burst nodes.  
- Model drift (topic shift) → re‑train cost spikes.  
- Data privacy: embedding leakage risk; mitigated via differential privacy or local inference.

**Optimize & Communicate**  
- Use quantized embeddings to cut storage by 4× and inference cost by ~30%.  
- Adopt vector compression (IVF+PQ) for faster ANN search, trading a few % recall.  
- Present the cost model in a slide deck: assumptions → per‑component breakdown → total & sensitivity analysis. This shows clear reasoning, trade‑offs, and readiness to scale—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
