---
qid: ing_6e12ad58c3__faang__local
question: 'Explain: Multi-Head Attention — Llm Internals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 495
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:59:35-05:00'
sources: []
---

**Clarify**  
The question asks for a concise, technical explanation of *Multi‑Head Attention*—the core mechanism in transformer‑based large language models (LLMs). I’ll assume the interviewee knows basic neural nets and wants to hear how multiple attention heads enable richer representations and why they’re efficient.

**Approach**  
1. Define scaled dot‑product attention.  
2. Show how Q, K, V matrices are projected per head.  
3. Explain parallel execution and concatenation.  
4. Mention positional encoding & residual connections.  

**Depth**  
In a transformer layer, each token’s representation is a vector **xᵢ** ∈ ℝᴰ. For *h* heads we learn weight matrices W_Q⁽ʰ⁾, W_K⁽ʰ⁾, W_V⁽ʰ⁾ (size D×d_k).  
- Query: Q⁽ʰ⁾ = XW_Q⁽ʰ⁾  
- Key:   K⁽ʰ⁾ = XW_K⁽ʰ⁾  
- Value: V⁽ʰ⁾ = XW_V⁽ʰ⁾  

Attention scores are computed as softmax((Qᵢ·Kⱼᵀ)/√d_k), yielding a weight for each token pair. The output per head is Σ α_ij V_j. All heads run in parallel, producing h vectors of size d_v; they’re concatenated and projected back to D (via W_O). This allows the model to attend to different sub‑spaces simultaneously—capturing syntax, semantics, coreference, etc.—while keeping parameter count linear in D.

**Edge Cases**  
- Very long sequences → quadratic memory from attention weights. Solutions: sparse or linear attention.  
- Training instability when d_k is small; use scaling √d_k.  
- Head redundancy – pruning can reduce compute without loss.

**Optimize & Communicate**  
Highlight that multi‑head attention balances expressivity and efficiency: parallelism fits GPU pipelines, and projection keeps cost O(n²·D). Conclude by noting its centrality to LLMs like GPT‑4 or BERT, enabling powerful context modeling with manageable computation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
