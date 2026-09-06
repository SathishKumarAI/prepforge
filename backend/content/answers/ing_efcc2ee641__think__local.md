---
qid: ing_efcc2ee641__think__local
question: 'Explain: QK ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 416
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:51:21-05:00'
sources: []
---

**Metacognitive Road‑Map for Explaining “QK ¶ – Paged Attention in vLLM”**

1. **Clarify the ask & set assumptions**  
   *Confirm what “QK ¶” refers to: the product of query (Q) and key (K) matrices, sliced into pages.*  
   *Assume the audience knows basic transformer attention but not the paging trick.*

2. **Choose a mental model**  
   *Use the “matrix‑multiplication pipeline” framework: Q × Kᵀ → scaling → softmax → weighted sum with V.*  
   *Overlay the “memory‑bandwidth bottleneck” picture to motivate why we page.*

3. **Step‑by‑step reasoning**  
   - Show the naive attention cost (O(N²)) and memory traffic.  
   - Introduce paging: split K into blocks of size B, process each block with Q once.  
   - Explain how “QK ¶” is computed per page, then accumulated across pages.  
   - Highlight that this keeps a small working set in GPU RAM.

4. **Spot common traps**  
   *Don’t conflate paging with quantization.*  
   *Avoid implying that all attention becomes linear; it’s still quadratic within each page.*  
   *Be careful not to over‑simplify the softmax step across pages.*

5. **Sanity‑check & verbalize**  
   - Verify dimensional consistency: Q (N×d) × Kᵀ(B×d) → (N×B).  
   - Explain that after each page we add its contribution before moving to the next.  
   - Summarise benefits (lower VRAM, same accuracy) and trade‑offs (extra kernel launches).

Follow this structure whenever you need to demystify a technical optimization—clarify, model, walk through, watch pitfalls, then validate & communicate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
