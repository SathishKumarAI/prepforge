---
qid: ing_de20ec464d__faang__local
question: 'Q: How does Flash Attention achieve O(n) memory?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 458
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:15:25-05:00'
sources: []
---

**Clarify**  
We’re asked how *Flash‑Attention* reduces the memory footprint of self‑attention from \(O(n^2)\) to linear in sequence length \(n\). Assume a single‑head query/key/value matrix, no sparse masks, and that we can stream over tokens.

**Approach**  
1. **Chunk the computation** into blocks of size \(B\).  
2. Compute partial dot products \(Q_iK_j^T\) for each block pair on‑the‑fly.  
3. Keep only the current row’s softmax statistics (running max and sum) instead of the full score matrix.

**Depth**  
For token \(i\), we maintain two scalars: `row_max` and `row_sum`. While iterating over key blocks, we update  
\[
s = \exp(Q_iK_j^T - row\_max)
\]
and accumulate `row_sum += s`. After all keys are processed, the final attention weight for token \(i\) is obtained by dividing each block’s contributions by `row_sum`. This requires only \(O(n)\) memory: one vector of length \(n\) for output and a few scalars per row. The key trick is **re‑scoring** each block with the same global max, which guarantees numerical stability without storing all scores.

**Edge Cases**  
- Very large \(B\) may overflow intermediate sums; we cap `row_sum` or use mixed precision.  
- Causal masking still needs a simple loop but does not affect memory.  
- If keys/values are split across GPUs, we must stream results and synchronize partial sums.

**Optimize & Communicate**  
We can fuse the dot‑product, softmax scaling, and weighted sum into one kernel to reduce launch overhead. Profiling shows Flash‑Attention uses ~1–2 × less memory than standard cuBLAS‑based attention while keeping latency comparable for long sequences. This design demonstrates a classic FAANG trade‑off: a modest algorithmic change (streaming with running stats) yields significant resource savings without sacrificing accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
