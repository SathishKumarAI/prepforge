---
qid: ing_b2b31563e6__star__local
question: Compare FP8, INT8, and INT4 quantization for LLM inference. How do you decide,
  and how do you validate?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 397
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:29:09-05:00'
sources: []
---

**Situation:**  
When I was leading the rollout of a conversational AI assistant for a wearable health tracker, we had to squeeze a 6‑Billion‑parameter transformer into an ARM Cortex‑A55 with only 4 GB RAM and a strict inference latency target of <30 ms per request.

**Task:**  
I needed to pick a quantization scheme that balanced model size, speed, and accuracy while staying within the hardware’s SIMD capabilities. The goal was to keep BLEU‑like intent‑accuracy above 92% and reduce peak memory by ≥80%.

**Action:**  
First, I benchmarked FP8, INT8, and INT4 on a representative validation set using PyTorch Quantization Toolkit, profiling throughput, cache misses, and per‑layer error. INT8 gave ~3× speedup over FP32 with only 1.2% loss in accuracy; INT4 dropped accuracy to 85% and caused significant overflow in the attention heads. I then ran a mixed‑precision hybrid: keep the first two transformer layers at INT8 for stability, compress later layers to INT4, and fine‑tune the quantized weights with a small learning rate schedule. Finally, I deployed each variant on the target SoC, measured real‑time latency with the Qualcomm Snapdragon profiler, and ran an end‑to‑end intent classification test.

**Result:**  
The hybrid INT8/INT4 model achieved 93% intent accuracy, used only 1.2 GB of RAM, and hit a 22 ms inference time—meeting all constraints. The exercise taught me that quantization is not one‑size‑fits‑all; profiling on the actual hardware and validating with domain‑specific metrics are essential before committing to a scheme.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
