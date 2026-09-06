---
qid: ing_dae2d3ae2e__fp__local
question: 'Explain: You want to serve a 70B-parameter model on a single 80 GB GPU.
  Walk me through whether it fits and what single-stream tokens/sec you''d expect.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 662
total_tokens: 857
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:44:52-05:00'
sources: []
---

**Does it fit?**  
A 70‑billion‑parameter weight matrix, stored in single‑precision (4 bytes/param), requires  

\[
70\times10^9 \times 4~\text{B} = 280~\text{GB}.
\]

Even if we halve the precision to FP16 (2 bytes) it still needs 140 GB, far above an 80‑GB device.  
Activations add another ~1–3× the weight size during inference, so the model cannot reside entirely on a single GPU without sharding or CPU off‑loading.

**Throughput estimate (single stream, FP32 inference)**  

1. **Compute cost per token** – each transformer layer performs two large matrix multiplications of shape \((d_{\text{model}}\times d_{\text{model}})\).  
   For a 70B‑parameter model, the total FLOPs for one forward pass are roughly

\[
2\times70\times10^9 = 140~\text{GFLOP/token}.
\]

2. **GPU capability** – an 80 GB GPU (e.g., A100) delivers ≈30 TFLOP/s of floating‑point throughput.

3. **Ideal token rate**  

\[
\frac{30\times10^{12}\ \text{FLOPs/s}}{140\times10^9\ \text{FLOPs/token}}
\approx 214~\text{tokens/s}.
\]

4. **Reality check** – memory bandwidth and kernel launch overhead reduce this by ~20–30 %.  
   A practical single‑stream throughput would be in the range **150–170 tokens per second**.

**Non‑obvious insight**  
Even though compute alone suggests a modest token rate, *activation reuse* (caching intermediate tensors across layers) can halve memory traffic and slightly lift throughput. However, because the model cannot fit on one GPU, any such gains are moot unless you shard weights or use model‑parallel pipelines—otherwise the GPU will stall waiting for off‑loaded activations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
