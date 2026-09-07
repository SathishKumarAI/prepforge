---
qid: ing_1aa4c6f042__faang__local
question: 'Explain: qk_max and logits ¶ — Paged Attention - vLLM'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 584
total_tokens: 822
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:47:12-05:00'
sources: []
---

**Clarify**  
The interviewer asks how *qk_max* and the subsequent *logits* are computed in **paged‑attention** (used by vLLM). I’ll assume we’re dealing with a transformer layer that splits queries, keys, and values across GPU pages to reduce memory while keeping attention fast. The key point is how scaling is handled when only a subset of keys is present on a page.

**Approach**  
1. Compute per‑page query‑key dot products (Q·Kᵀ).  
2. Find the maximum value *qk_max* over all pages for each query.  
3. Subtract this *qk_max* from every raw score before exponentiating to obtain stable logits.  
4. Accumulate softmax sums and weighted values across pages.

**Depth**  
- **Q·Kᵀ** gives a matrix of shape *(batch, heads, seq_len_q, page_size)*.  
- For each query position *i*, we compute  
  \[
  s_{ij} = Q_i K_j^\top
  \]  
  across all keys *j* in the current page.  
- **qk_max** is the maximum of *s_{ij}* over *j* and over all pages, i.e.,  
  \[
  m_i = \max_{p,j} s_{ij}^{(p)} .
  \]  
- We then form logits:  
  \[
  l_{ij}^{(p)} = \exp\!\big(s_{ij}^{(p)} - m_i\big).
  \]  
  This subtraction guarantees numerical stability and preserves the softmax distribution because \(e^{x-m}\) is proportional to \(e^x\).  
- Finally, we accumulate the weighted values:  
  \[
  O_i = \frac{\sum_{p,j} l_{ij}^{(p)} V_j^{(p)}}{\sum_{p,j} l_{ij}^{(p)}} .
  \]  

**Edge cases**  
- Empty pages (no keys) → skip to avoid NaNs.  
- Very long sequences where *qk_max* may overflow before subtraction → use float32/float16 carefully.  
- Memory‑bound scenarios: ensure *qk_max* is computed with a reduction that can be fused with dot product kernels.

**Optimize & communicate**  
- Fuse the max reduction into the Q·K kernel to avoid an extra pass.  
- Use half‑precision for intermediate logits but keep *qk_max* in higher precision.  
- Explain that this design keeps the softmax computation exact while enabling page‑wise memory sharing, a key vLLM speedup.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
