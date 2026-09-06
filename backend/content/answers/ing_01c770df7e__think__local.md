---
qid: ing_01c770df7e__think__local
question: What does FlashAttention actually do, and how is it different from PagedAttention?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 512
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:50:43-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - The user wants a conceptual explanation of **FlashAttention** versus **PagedAttention**.  
   - Assume they are familiar with transformer attention but not the low‑level optimizations.  
   - Focus on *what* each algorithm does and *how* they differ in memory access patterns.

**2️⃣ Mental model: Attention as matrix multiplication + softmax**  
   - Standard self‑attention = `Q·Kᵀ` → scaling, masking, exponentiation, normalisation, then `softmax·V`.  
   - The bottleneck is the huge temporary matrices (`QKᵀ`) that exceed GPU cache.  

**3️⃣ Step‑by‑step reasoning**  
   1. **FlashAttention**:  
      - Streams queries in tiles (e.g., 128×128).  
      - Computes each tile’s `QKᵀ` on‑the‑fly, keeps it in shared memory, applies softmax and multiplies by the corresponding slice of `V`.  
      - No full‑size attention matrix ever materialises; reduces global‑memory traffic.  
   2. **PagedAttention**:  
      - Organises keys/values into *pages* that fit in GPU memory (often via an LRU cache).  
      - For each query block, fetches only the pages needed, performs standard `QKᵀ` on those pages, and aggregates results.  
      - Keeps a *global* attention matrix but sparsifies it by paging rather than tiling.

**4️⃣ Common pitfalls to avoid**  
   - Confusing “paged” with “virtual memory”; it’s about cache‑friendly chunks, not OS paging.  
   - Assuming FlashAttention is always faster—its advantage shrinks when sequence length is small or hardware has huge shared memory.  
   - Overlooking that PagedAttention can still use a full attention matrix if all pages are resident.

**5️⃣ Sanity‑check & verbalise**  
   - Ask: “Does this explanation highlight the core difference?”  
   - Summarise succinctly: FlashAttention trades off *global memory bandwidth* by recomputing tiles in shared memory; PagedAttention trades off *memory footprint* by loading only needed pages. If that matches intuition, you’re good to go.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
