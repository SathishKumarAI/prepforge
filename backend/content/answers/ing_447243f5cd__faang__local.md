---
qid: ing_447243f5cd__faang__local
question: 'Explain: A customer 10x''d their indexed documents and reports answer quality
  "got noticeably worse." Drive the investigation.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 639
total_tokens: 885
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:23:35-05:00'
sources: []
---

**Clarify**

> *Problem*: A client increased their document index size tenfold, yet the AI‑generated answers have degraded in quality.  
> *Assumptions to confirm*  
> 1. The indexing pipeline (tokenization, embeddings, storage) hasn’t changed except for volume.  
> 2. The same retrieval–generation model and prompts are still used.  
> 3. “Quality” refers to relevance, coherence, and factual accuracy of the answers.

**Approach**

1. **Data & Model Audits** – Verify that embeddings were recomputed correctly and that the vector store scales linearly with size.  
2. **Retrieval Path Analysis** – Check recall/precision of the retrieval step: are relevant docs being retrieved?  
3. **Generation Pipeline Check** – Ensure prompt length, context window, and temperature settings haven’t been inadvertently altered.  
4. **Performance & Latency Metrics** – High latency can cause fallback to less‑accurate caching or truncation.  
5. **User Feedback Loop** – Collect concrete examples of degraded answers for reproducibility.

**Depth**

- **Embedding drift**: With 10× documents, older embeddings may be outdated; recompute with the same model and confirm vector norms.  
- **Vector store capacity**: Verify that the ANN index (e.g., FAISS) still returns top‑k results without saturation or approximate errors.  
- **Context window limits**: If the retrieved docs exceed the model’s max tokens, truncation may remove key facts, hurting quality.  
- **Prompt length overflow**: The prompt + context might hit token limits, causing the model to ignore earlier parts.  
- **Sampling settings**: A higher temperature or lower top‑k could introduce noise; ensure consistency.

**Edge Cases**

| Scenario | What breaks | Test |
|----------|-------------|------|
| Retrieval returns irrelevant docs | Low recall → poor answers | Precision@k on a labeled query set |
| Context window overflow | Truncated facts | Simulate max token usage and inspect generated answer |
| Embedding mismatch (old vs new model) | Semantic drift | Compare similarity scores pre‑/post‑reindex |
| Latency spike | Timeouts → fallback to stale cache | Measure end‑to‑end latency under load |

**Optimize & Communicate**

- **Immediate Fixes**: Re‑index embeddings, enforce token limits, and restore original prompt settings.  
- **Long‑Term Improvements**: Adopt dynamic chunking (smaller context windows), use hierarchical retrieval, or upgrade to a larger model with extended context.  
- **Narrative**: “We first confirmed that the increase in documents didn’t alter our pipeline logic; then we isolated the retrieval step—its recall dropped because the ANN index was saturated. After recomputing embeddings and tightening token limits, answer quality rebounded.”  

This structured investigation aligns with FAANG expectations: clear assumptions → systematic diagnostics → deep technical reasoning → edge‑case awareness → actionable optimizations communicated succinctly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
