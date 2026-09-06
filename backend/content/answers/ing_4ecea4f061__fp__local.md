---
qid: ing_4ecea4f061__fp__local
question: Explain sliding-window attention and hybrid local/global stacks. What do
  you gain and what do you give up?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 479
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:53:00-05:00'
sources: []
---

**Sliding‑window attention (SWA)** tackles the quadratic cost of full self‑attention by restricting each token to attend only to a *local* neighbourhood \(W\) around it.  
From first principles: we want an approximation to
\[
\mathbf{A}_{ij}=\frac{\exp(\langle q_i,k_j\rangle)}{\sum_{m}\exp(\langle q_i,k_m\rangle)}
\]
but computing the denominator for all \(n^2\) pairs is \(\mathcal O(n^2)\).  
If the task exhibits *locality*—e.g., language or vision where nearby tokens carry most of the relevant information—we can replace the full softmax with a truncated one:
\[
\tilde{\mathbf{A}}_{ij}=0 \quad \text{if}\ |i-j|>W/2,
\]
and renormalise over the window.  
This is equivalent to projecting the attention matrix onto a band‑diagonal subspace, which preserves all *local* interactions while discarding far‑away ones.

**Hybrid local/global stacks** interleave SWA layers with sparse global hops (e.g., linear‑time global attention or random sampling). The idea mirrors multigrid methods: fine‑scale (local) updates capture high‑frequency details; coarse‑scale (global) updates propagate low‑frequency signals.  

*Gain*:  
- **Linear memory & compute** for long sequences.  
- **Preserved local coherence** and faster convergence on tasks with strong locality.

*Give up*:  
- Exact global dependencies—each token cannot directly see distant ones in a single step, requiring multiple layers or explicit global hops.  
- Theoretical guarantees of optimality; the approximation can miss long‑range cues unless carefully balanced.

**Non‑obvious insight**: In many natural signals, *information entropy* decays with distance. SWA implicitly exploits this by allocating more capacity to high‑entropy local interactions and compressing low‑entropy global ones into a few sparse hops—an efficient form of *information bottleneck* that is often overlooked when designing attention architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
