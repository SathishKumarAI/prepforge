---
qid: ing_7a72b5123d__faang__local
question: 'Explain: PagedAttention — Paged Attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 567
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:28:52-05:00'
sources: []
---

**Paged Attention – A Fast, Memory‑Efficient Transformer Kernel**

---

### 1️⃣ Clarify  
*What is it?* PagedAttention replaces the dense `Q·Kᵀ` matrix with a *paged* lookup that only materializes rows/columns needed for a given query.  
*Assumptions to confirm:* 1) The model uses multi‑head self‑attention; 2) We can pre‑tokenize sequences into fixed‑size “pages” (e.g., 128 tokens); 3) GPU memory is the limiting factor, not compute.

---

### 2️⃣ Approach  
1. **Pageify**: Split keys/values into contiguous blocks (pages).  
2. **Indexing**: For each query token, determine which pages of keys it can attend to (e.g., causal mask → only past pages).  
3. **Sparse multiplication**: Load only those key/value pages into registers, compute `Q·Kᵀ` locally, then accumulate results.  
4. **Caching**: Reuse loaded pages across multiple queries that share the same page set.

---

### 3️⃣ Depth  
*Complexity*:  
- **Time** ≈ `O(N · P)` where `N` = sequence length and `P` = number of relevant pages per query (often << N).  
- **Space** ≈ `O(P·d)`, drastically lower than full `N×N`.  

*Trade‑offs*:  
- **Speed vs. Accuracy**: Slight quantization error if page boundaries cut across semantically coherent tokens, but negligible in practice.  
- **Implementation**: Requires custom CUDA kernels; easier with frameworks like FlashAttention or Triton.

---

### 4️⃣ Edge Cases  
- **Very short sequences**: Paging overhead may dominate; fallback to dense attention.  
- **Non‑causal masks (e.g., cross‑attention)**: Must ensure page indices respect the mask.  
- **Memory fragmentation**: Use contiguous memory pools for pages to avoid GPU stalls.

---

### 5️⃣ Optimize & Communicate  
*Improvements*:  
- Dynamic page sizing based on token density.  
- Hybrid dense/sparse blend: keep a small “core” dense matrix for high‑importance tokens.  

*Narrative tip*: “PagedAttention is essentially a smart cache that only pulls the keys/values you need, turning an O(N²) kernel into O(N·P). It preserves full attention quality while slashing memory and latency—exactly what we need to scale transformers on commodity GPUs.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
