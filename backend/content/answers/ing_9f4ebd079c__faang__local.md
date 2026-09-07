---
qid: ing_9f4ebd079c__faang__local
question: Budget the compute and latency for the onboard stack. What breaks when a
  model gets bigger?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 523
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:54:22-05:00'
sources: []
---

**Clarify**  
We need to estimate on‑board compute (GPU/TPU cycles, memory) and end‑to‑end latency for an AI inference stack running a deep learning model. Assume a mobile or edge device with 8 GB RAM, a mid‑tier GPU (≈10 TFLOPs/s), and a user‑defined target of <50 ms total latency. Ask: *What model size (params, FLOPs) can we fit?* *Which resource becomes the bottleneck first?*

**Approach**  
1. Map model to compute: #FLOPs ≈ 2×(params × 3‑to‑4‑layer ops).  
2. Compute memory footprint: params (bytes) + intermediate activations (~0.5×params).  
3. Estimate GPU time = FLOPs / TFLOP/s, add kernel launch & I/O overhead (~10 %).  
4. Verify that total latency < target and that RAM usage < 8 GB.  

**Depth**  
- **Compute bottleneck**: For a 300‑M‑param transformer (≈1.2 TFLOPs), GPU time ≈120 ms → >50 ms.  
- **Memory bottleneck**: Activations ~150 MB; with batch size 1 stays fine, but larger batches exceed RAM.  
- **Energy & thermal limits**: Larger models increase power draw (~30 W for 300 M params), causing throttling and higher latency.  

Thus, a model >200 M parameters typically breaks the latency budget on such hardware.

**Edge cases**  
- *Tiny batch size*: Latency dominated by kernel launch; scaling up batch improves throughput but worsens memory usage.  
- *Quantization*: 8‑bit reduces FLOPs and memory but may degrade accuracy; need to validate.  

**Optimize & communicate**  
- Apply model pruning or knowledge distillation to shrink parameters while keeping inference cost <50 ms.  
- Use mixed‑precision (FP16) to halve FLOPs without significant accuracy loss.  
- Profile with realistic workloads to confirm that GPU throttling is not a hidden bottleneck.  

*Narrative*: “When the model grows past ~200 M params, compute time alone pushes latency beyond our 50 ms goal, and memory pressure forces batch‑size reductions or paging—both hurting performance.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
