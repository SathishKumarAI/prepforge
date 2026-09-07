---
qid: ing_ca4592708c__faang__local
question: 'Explain: Multi-Query Attention (MQA) — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 521
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:29:54-05:00'
sources: []
---

**Clarify**  
The interviewer asks for an explanation of *Multi‑Query Attention* (MQA), a variant of the standard scaled dot‑product attention used in transformers. I’ll confirm that we’re talking about the version popularized by **Meta’s MQA paper**: one key query vector per head, but many value/key pairs so each head can attend to multiple positions efficiently.

**Approach**  
1. Describe vanilla multi‑head attention (Q,K,V per token).  
2. Highlight MQA’s compression of Q across heads → single Q per layer.  
3. Explain how this reduces memory and compute while preserving expressiveness.  

**Depth**  
- **Standard Attention:** For each head, `Q_i = XW_Q^i`, `K_i = XW_K^i`, `V_i = XW_V^i`; attention score `A_i = softmax(Q_i K_iᵀ / √d) V_i`. Complexity O(H·n²·d).  
- **MQA:** Compute a single query matrix `Q = XW_Q` shared across heads. For each head, distinct projections for keys/values: `K_i = XW_K^i`, `V_i = XW_V^i`. Attention per head uses the same Q but different K,V, yielding scores `A_i = softmax(Q K_iᵀ / √d) V_i`.  
- **Benefits:** Memory drops from O(H·n·d) to O(n·d + H·n·d) for keys/values only; compute reduces by factor H since Q is computed once.  
- **Trade‑offs:** Slightly less expressiveness because queries cannot diverge per head, but empirical results show negligible accuracy loss.

**Edge Cases**  
- When `H` is large relative to sequence length, shared Q may become a bottleneck.  
- For very short sequences, the benefit diminishes; we’d test with n=128 vs n=4096.  

**Optimize & Communicate**  
I’d mention that MQA enables larger batch sizes or longer contexts on the same GPU, making it ideal for LLM scaling. I’d conclude by summarizing: *MQA keeps per‑head diversity in K/V while sharing Q to cut memory and compute, achieving a near‑optimal trade‑off for large‑scale transformer inference.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
