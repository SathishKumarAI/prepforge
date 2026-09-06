---
qid: ing_7c2ed89fbe__fp__local
question: Explain arithmetic intensity and the roofline model as applied to LLM inference.
  Why does batching improve decode throughput so dramatically?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 580
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:29:40-05:00'
sources: []
---

**Arithmetic Intensity (AI) & Roof‑Line for LLM Inference**

The *fundamental problem* is that a transformer layer multiplies a weight matrix \(W\in\mathbb{R}^{d\times d}\) with an activation vector \(x\in\mathbb{R}^d\). Each element of the result requires one multiply‑add, i.e. two floating‑point operations (FLOPs), but the data that must be moved is only a few bytes per element (16 B for FP32 or 4 B for FP16).  

The **arithmetic intensity** \(AI = \frac{\text{FLOPs}}{\text{bytes transferred}}\) thus equals  
\[
AI_{\text{MLP}}=\frac{2d}{8d}=0.25~\frac{\text{FLOPs}}{\text{byte}}
\]
for a single token (ignoring bias). This is *low*; the operation is memory‑bound on most GPUs.

The **roof‑line model** plots attainable performance \(P = \min(P_{\text{peak}}, AI\times B)\), where \(B\) is peak bandwidth. For LLM inference, \(AI\) stays below the “memory‑bounded” knee, so throughput scales linearly with bandwidth and inversely with sequence length.

---

### Why batching boosts decode throughput

When decoding a single token, the GPU processes only one set of activations, leaving many compute units idle because each thread block still needs to fetch its own weights. By **batching \(B\) tokens**:

1. **Weight reuse:** The same weight matrix is streamed once and reused by all \(B\) threads, so bytes transferred per FLOP drop proportionally:  
   \[
   AI_{\text{batched}} = B \times AI_{\text{single}}
   \]
2. **Occupancy & pipeline depth:** Larger batches fill the GPU’s streaming multiprocessors (SMs), hiding latency and enabling better instruction‑level parallelism.
3. **Reduced kernel launch overhead** per token.

Consequently, the effective AI rises above the memory‑bound region, moving inference into a compute‑bound regime where throughput scales with \(B\). Empirically, a batch of 32 tokens can yield > 10× decode speed on consumer GPUs, despite no increase in model size.  

*Non‑obvious insight:* The bottleneck is not just bandwidth but **weight streaming**; batching turns the operation into a *matrix‑multiply kernel* with high reuse, making inference behave like conventional deep‑learning workloads rather than a pure memory fetch.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
