---
qid: ing_2f327a538e__faang__local
question: You need to run a ~3B-parameter language model on a phone with tight memory
  and power budgets. What changes versus serving the same model in a datacenter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 461
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:33:17-05:00'
sources: []
---

**Clarify**

You want to deploy a ~3 B‑parameter transformer on a mobile device with limited RAM (≈4–8 GB) and battery life.  
Assumptions: the phone has a CPU/GPU with no dedicated AI accelerator, network connectivity is unreliable, and latency must stay below 200 ms for interactive use.

**Approach**

1. **Model compression** – prune & quantize to reduce size and compute.  
2. **Hardware‑aware inference engine** – leverage mobile NN frameworks (TensorFlow Lite / ONNX Runtime Mobile).  
3. **Memory layout & streaming** – keep only a few layers in RAM at once, swap out activations.  
4. **Energy‑aware scheduling** – batch requests and use low‑power GPU modes.

**Depth**

- *Quantization*: 8‑bit or even mixed‑precision (int8/float16) keeps accuracy loss < 1 %.  
- *Pruning*: structured pruning (e.g., removing attention heads) can cut parameters by ~30–40 % with negligible loss.  
- *Knowledge distillation*: train a 0.5‑B student to mimic the teacher; inference cost drops dramatically.  
- *Memory paging*: store weights on flash, load into RAM only when needed; use DMA for fast copy.  
- *Compute*: use GPU’s tensor cores or DSPs where available; otherwise CPU with SIMD.  
Complexity: inference ~O(n · d) per token; energy cost scales linearly with compute.

**Edge Cases**

- Cold‑start latency due to weight loading.  
- Variability in mobile GPU performance across OEMs.  
- Thermal throttling if sustained high load.

**Optimize & Communicate**

Explain trade‑offs: heavier compression → lower power but higher inference latency. Show profiling data (e.g., 50 ms per token on Snapdragon). Conclude that combining pruning, quantization, and distillation yields a ~30 % model size with < 5 % accuracy drop, enabling real‑time usage within the phone’s power envelope.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
