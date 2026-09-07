---
qid: ing_11273bf8de__faang__local
question: Explain self-attention. What's its computational complexity, and what are
  your options when contexts get long?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 521
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:23:48-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *self‑attention* (the core of Transformer encoders/decoders), state its time/memory cost, and discuss strategies when the sequence length grows large.

**Approach**  
1. Define query/key/value matrices and the attention score computation.  
2. Derive the O(L²·d) complexity (L = sequence length, d = hidden dim).  
3. List practical mitigations: sparse/low‑rank, locality, and recurrence.

**Depth**  
Self‑attention computes
\[
A_{ij}=\frac{\exp(q_i^\top k_j/\sqrt{d})}{\sum_k \exp(q_i^\top k_k/\sqrt{d})},
\]
then the output is \( \sum_j A_{ij}v_j \).  
With dense matrices, we form Q, K, V (each L×d), compute a score matrix S = QKᵀ (O(L²·d)), apply softmax, and multiply by V (O(L²·d)). Thus **time & memory are Θ(L²·d)**.  

When L is large:
- **Sparse attention**: restrict each query to a fixed set of keys (e.g., local windows, strided patterns) → O(L·w·d).  
- **Low‑rank / linearized attention**: approximate softmax by kernel tricks; complexity drops to O(L·d²).  
- **Recurrence/Chunking**: process tokens in overlapping blocks or use hierarchical representations.  

**Edge Cases**  
- Extremely long documents (hundreds of thousands tokens) make dense self‑attention infeasible.  
- Sparse patterns must preserve expressiveness; naive locality can hurt global reasoning.  
- Linearized methods may under‑estimate attention scores for rare key/value pairs.

**Optimize & Communicate**  
I’d first benchmark the vanilla transformer on a moderate L (≈512). If scaling fails, I’d prototype a linearized attention (e.g., Performer) because it keeps the same API and offers O(L·d²) with negligible constant factors. For truly massive contexts, combining hierarchical chunking + sparse cross‑chunk links gives a practical trade‑off: local detail via dense attention inside chunks, global coherence via sparse inter‑chunk hops. I’d explain these choices to interviewers, highlighting how each reduces the quadratic bottleneck while preserving model capacity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
