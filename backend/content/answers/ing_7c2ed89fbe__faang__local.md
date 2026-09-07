---
qid: ing_7c2ed89fbe__faang__local
question: Explain arithmetic intensity and the roofline model as applied to LLM inference.
  Why does batching improve decode throughput so dramatically?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 564
total_tokens: 810
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:33:04-05:00'
sources: []
---

**Clarify**  
We’re asked to describe *arithmetic intensity* (AI) and the *roofline model* in the context of large‑language‑model (LLM) inference, then explain why batching boosts decode throughput dramatically.

**Approach**  
1. Define AI = FLOPs per byte moved from memory.  
2. Outline the roofline: performance limited by either compute or memory bandwidth; plot achievable FLOPs vs AI.  
3. Map LLM layers to this framework (matrix‑multiply heavy).  
4. Explain batching as a way to raise AI and shift the operating point.

**Depth**  

| Component | Description |
|-----------|-------------|
| **AI in LLM inference** | Each token requires a few matrix multiplications (~10⁹ FLOPs) but only ~1 GB of weights. AI ≈ 10²⁰ FLOPs/GB, i.e., compute‑bound. |
| **Roofline model** | Y-axis: attainable throughput (GFLOP/s). X-axis: AI. The *compute roof* = GPU peak FLOPs; the *memory roof* = bandwidth × AI. For LLMs, the curve is above the memory roof until a very high AI. |
| **Batching effect** | A batch of N tokens reuses the same weight matrices and pre‑computed key/value caches across all queries, so the number of FLOPs grows linearly with N while memory traffic stays roughly constant (only input embeddings change). AI ∝ N → moves closer to the compute roof. |
| **Throughput gain** | With larger AI, GPU cores are saturated; latency per token drops because we amortize kernel launch overhead and data movement over many tokens. Empirically, 16×‑batching can yield 10–20× decode throughput on modern GPUs. |

**Edge cases**  
- Very small batch sizes (N=1) stay memory‑bound; performance limited by latency of memory fetches.  
- Extremely large batches may hit register or cache limits, causing spilling and diminishing returns.  
- Models with sparse attention reduce FLOPs but increase memory traffic, lowering AI.

**Optimize & communicate**  
To maximize throughput: choose batch size until the operating point sits on the compute roof; use fused kernels to lower overhead; pre‑fetch weights into L2/L3 cache. In an interview I’d illustrate this with a quick sketch of the roofline plot and quantify the expected speedup (e.g., from 0.5 token/s to 10 tokens/s). This shows structured reasoning, clear communication, and depth on AI, roofline, and batching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
