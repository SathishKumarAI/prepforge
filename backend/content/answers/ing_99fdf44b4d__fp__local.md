---
qid: ing_99fdf44b4d__fp__local
question: 'Q: How do you handle the high TTFT associated with million-token prompts?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 717
total_tokens: 892
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:33:28-05:00'
sources: []
---

**High‑TTFT for million‑token prompts is a resource‑allocation problem.**  
A transformer processes *every* token pair through the self‑attention matrix \(QK^T\), costing \(\mathcal O(L^2d)\) time and \(\mathcal O(L^2)\) memory where \(L\) is sequence length. For \(L=10^6\), the naïve cost is astronomical: a trillion scalar operations and terabytes of activations—far beyond what any GPU can hold.

The *core principle* that forces this quadratic blow‑up is **full‑connectivity**: each token attends to every other token, guaranteeing exact conditioning on all context. To keep inference tractable we must *approximate* this connectivity while preserving the essential information flow.

1. **Chunking + Causal Overlap**  
   Break the prompt into overlapping blocks of size \(B\) (e.g., 4 k tokens). Run a transformer per block, feeding the last hidden state as a “summary” to the next block. This is essentially a *recurrent* application of a fixed‑size model; its cost becomes \(\mathcal O((L/B)\cdot B^2)=\mathcal O(LB)\), linear in \(L\). The overlap guarantees that tokens near block boundaries still see context from their neighbors.

2. **Sparse/Linear Attention**  
   Replace the dense attention kernel with a *kernel‑based* or *low‑rank* approximation (e.g., Performer, Linformer). These reduce the matrix multiplication to \(\mathcal O(Ld)\) by projecting queries and keys into a low‑dimensional space. The trade‑off is an implicit assumption that token interactions can be captured in this compressed form—a valid approximation for language where local coherence dominates.

3. **Memory‑Efficient Backprop & Checkpointing**  
   During training, recompute activations on the fly (gradient checkpointing) to keep peak memory below GPU limits while still handling long sequences. This is a *time–memory* trade‑off: more compute for less RAM.

4. **Streaming Inference**  
   Process tokens sequentially and discard intermediate states that are no longer needed. The transformer can be re‑used as a stateful decoder, updating only the hidden state vector per step—effectively turning inference into a one‑pass linear scan.

---

### Non‑obvious insight

*The bottleneck is not just the quadratic term itself but the **inevitable duplication of context** when we split the sequence.* Even with perfect chunking, each token’s representation must be recomputed in every overlapping block that contains it. A subtle way to mitigate this is to **cache and reuse** the hidden states of tokens that reappear in multiple blocks by hashing positions modulo a stride. This reduces redundant computation without increasing memory, turning what appears to be an unavoidable overhead into a manageable constant factor.

By viewing long‑prompt inference as a *resource allocation* problem—balancing time, memory, and accuracy—we can systematically choose the right combination of chunking, sparse attention, and streaming that keeps TTFT within practical limits while still honoring the transformer’s core conditioning principle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
