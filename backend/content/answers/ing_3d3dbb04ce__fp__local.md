---
qid: ing_3d3dbb04ce__fp__local
question: Why is decode latency dominated by memory bandwidth rather than compute,
  and what does that imply for how you optimise a serving system?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 402
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:14:35-05:00'
sources: []
---

**Why the bottleneck is memory, not arithmetic**

Decoding a transformer token by token requires multiplying each query‑key‑value vector (size *d*) by all past key/value tensors and summing them. The number of floating‑point operations per token grows linearly with the sequence length **L**, but each operation is *cheap*: a 16‑bit dot product on an A100 takes ~0.1 ns, whereas moving one element from DRAM to the GPU memory bus costs ≈10–20 ns.  

During inference we often pre‑allocate key/value tensors in fast GPU RAM and stream them through the attention heads. The *volume* of data that must be read each step is roughly `L·d` elements, while the *computational work* is only `O(L·d)`. As L grows (e.g., 10 k tokens), the arithmetic intensity falls below 1 FLOP per byte, so the bandwidth bound dominates: the GPU sits idle waiting for data rather than doing math.  

**Implication for system design**

- **Cache‑friendly layouts**: Store past key/value tensors in a contiguous, column‑major layout that matches the attention read pattern to maximize burst transfers.
- **Batching across requests**: Even small batch sizes increase effective memory throughput by amortizing the DRAM latency per token.
- **Memory‑efficient models**: Techniques such as *FlashAttention* or *reversible layers* reduce the number of key/value reads, tightening the arithmetic intensity and moving closer to compute limits.

*Non‑obvious insight*: When bandwidth dominates, *reducing the number of tokens read* (e.g., via sparse attention) is far more effective than simply adding GPU cores. The optimal serving strategy therefore hinges on **data locality**, not raw compute power.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
