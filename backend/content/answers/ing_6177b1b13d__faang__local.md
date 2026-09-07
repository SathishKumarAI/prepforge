---
qid: ing_6177b1b13d__faang__local
question: 'Q: ColBERT stores one vector per token. How does it scale, and what are
  the storage tradeoffs?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 470
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:30:29-05:00'
sources: []
---

**Clarify**  
ColBERT indexes each query/ passage token with a dense embedding (e.g., BERT‐style). The question is how this per‑token vector strategy scales in storage and what trade‑offs arise compared to sentence‑level or sparse indexing.

**Approach**  
1. Estimate the size of one token vector (`d` dimensions, 32‑bit float).  
2. Multiply by average tokens per document/passage.  
3. Compare against traditional single‑vector or inverted‑index sizes.  
4. Discuss compression and pruning options.

**Depth**  
- **Vector size:** `s = d × 4 bytes`. For a 768‑dim BERT vector, `s ≈ 3 KB`.  
- **Per‑document storage:** If a passage has 200 tokens → `≈ 600 KB` per doc.  
- **Corpus scale:** A million passages → ~600 GB raw.  
- **Contrast:** One sentence embedding (~3 KB) would need only ~3 GB for the same corpus.  
- **Trade‑offs:**  
  *Higher recall & fine‑grained reranking* at the cost of *orders‑of‑magnitude storage*.  
  *Compression:* quantization (int8, float16), product quantization, or pruning low‑importance tokens can reduce size by 4–10×.  
  *Indexing overhead:* per‑token vectors require a dense index (FAISS) with larger memory footprints and slower construction.

**Edge Cases**  
- Extremely long documents inflate storage linearly; need chunking or summarization.  
- Token sparsity: highly repetitive vocab leads to redundant vectors—could cache shared embeddings.  

**Optimize & Communicate**  
- Recommend hybrid indexing: store a coarse sentence vector for filtering, then per‑token vectors only for top candidates.  
- Use GPU‑accelerated FAISS with quantized vectors to keep query latency low while keeping RAM manageable.  
- Clearly explain that the storage blow‑up is intentional—ColBERT trades disk/RAM for richer semantic matching—and that practical deployments rely on aggressive compression and tiered indexing to stay feasible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
