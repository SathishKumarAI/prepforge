---
qid: ing_1aa4c6f042__think__local
question: 'Explain: qk_max and logits ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 650
total_tokens: 844
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:29:28-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**

- *What is being asked?*  
  The user wants an explanation of two terms that appear in the context of **paged‑attention** as implemented in **vLLM**: `qk_max` and `logits`.  
- *Assumptions*:  
  - The reader knows basic transformer math (query, key, value tensors).  
  - They are familiar with vLLM’s high‑level goal (fast inference via memory‑efficient attention).  
  - The explanation should stay conceptual, not dive into CUDA kernels unless needed.

**2️⃣ Mental model / framework**

1. **Standard scaled dot‑product attention**:  
   `logits = Q @ Kᵀ / sqrt(d_k)` → softmax → weighted sum over V.  
2. **Paged‑attention**:  
   - Stores activations in *pages* to fit GPU memory.  
   - Computes logits per page, then normalizes across all pages (global softmax).  
3. **Numerical stability tricks** used in large‑scale transformers:
   - Subtract the maximum logit (`qk_max`) before exponentiation.

**3️⃣ Step‑by‑step reasoning**

1. **Compute raw logits** for a page: `raw = Q_page @ Kᵀ / sqrt(d_k)`.  
2. **Find the maximum value** in that matrix: `qk_max = max(raw)` (scalar per query).  
3. **Subtract** this from all logits to avoid overflow when exponentiating:  
   `stable_logits = raw - qk_max`.  
4. **Exponentiate & sum** across keys, accumulate sums over pages for the global softmax denominator.  
5. The *final* attention weights are obtained by dividing each page’s exp(logits) by the global sum.

Thus, `qk_max` is a per‑query (or per‑token) scaling factor that stabilizes the exponential step; `logits` are the scaled dot products before softmax.

**4️⃣ Common traps to avoid**

- Mixing up *per‑page* vs. *global* maxima: each page computes its own `qk_max`, but the denominator is global.  
- Forgetting that vLLM’s paged attention still follows the same softmax formula; only the memory layout changes.  
- Assuming `logits` are the final probabilities— they’re not; they become probabilities after softmax.

**5️⃣ Sanity‑check & verbalize**

- Verify dimensions: Q (batch×seq×d), K (batch×seq×d) → logits (batch×seq×seq).  
- Check that subtracting `qk_max` keeps the relative differences unchanged.  
- Explain in plain language: “We pull out the biggest number so that when we turn numbers into probabilities, none explode.”  

By walking through these points, you can articulate a clear, accurate explanation of `qk_max` and `logits` within vLLM’s paged‑attention mechanism.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
