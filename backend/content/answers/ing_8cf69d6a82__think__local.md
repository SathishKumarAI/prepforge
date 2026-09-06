---
qid: ing_8cf69d6a82__think__local
question: 'Explain: How PagedAttention Works (vLLM) — Paged Attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 493
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:22:42-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
- *What is being asked?* We need to explain the core idea of **Paged‑Attention** as implemented in **vLLM**, not a full implementation detail.  
- *Assumptions:* The reader knows basic transformer attention, tokenization, and that vLLM is a high‑performance inference library.

**2. Adopt a mental model**  
- Think of the self‑attention matrix as a huge sparse matrix where most entries are zero because only a few key tokens influence each query.  
- Paged‑Attention treats this sparsity by *partitioning* memory into *pages* (chunks) and *processing* only the pages that contain relevant keys for each query.

**3. Step‑by‑step reasoning**  
1. **Token embedding → page allocation:** As a batch of prompts is tokenized, tokens are mapped to fixed‑size “pages” in GPU/CPU memory.  
2. **Sparse attention mask construction:** For each query token, we compute which pages contain its relevant key/value pairs (often via locality or similarity).  
3. **Page‑wise kernel launch:** The attention computation is launched per page; only the keys/values from that page are loaded into fast scratchpad memory.  
4. **Accumulation across pages:** Partial results for a query are summed over all its active pages, yielding the final attention output.  
5. **Memory reuse & paging strategy:** After processing a page, it can be evicted or reused for another set of queries, reducing peak memory.

**4. Common traps to avoid**  
- *Confusing “paged” with “paged out to disk.”* It’s purely an in‑memory chunking strategy.  
- *Assuming every query touches all pages.* In practice, only a small subset is needed.  
- *Overlooking the need for a mask:* Without masking, you’d waste compute on irrelevant keys.

**5. Sanity checks & verbalizing**  
- Verify that the number of active pages per query matches the sparsity level expected from the model’s attention pattern.  
- Explain that Paged‑Attention trades a bit of overhead (page lookup) for massive memory savings and better GPU utilization, which is why vLLM can run large models on modest hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
