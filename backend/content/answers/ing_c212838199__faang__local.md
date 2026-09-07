---
qid: ing_c212838199__faang__local
question: 'Explain: What is quantization for inference? Explain weights-only vs weights-and-activations,
  and the typical tradeoffs.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 600
total_tokens: 847
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:12:08-05:00'
sources: []
---

**Quantization for Inference**

| Section | Key Points |
|---------|------------|
| **Clarify** | *What you’re asking:* “How do we reduce model size and compute by mapping real‑valued tensors to low‑bit integers?” I’ll assume a typical DNN on edge hardware, and that we care about latency & memory. |
| **Approach** | 1️⃣ Identify the quantization granularity (per‑tensor vs per‑channel). <br>2️⃣ Choose a numeric format (symmetric/affine, signed/unsigned). <br>3️⃣ Decide whether to quantize only weights or both weights and activations. <br>4️⃣ Evaluate impact on accuracy & hardware cost. |
| **Depth** | • **Weights‑only**: Quantize the learned parameters once; activations stay floating‑point during inference. 8‑bit signed integers are common, with a scale/zero‑point per layer or channel. This saves ~4× memory and enables faster GEMM on CPUs/GPUs that support int8 ops. Accuracy loss is usually <1% for many vision models.<br>• **Weights‑and‑activations**: Quantize both tensors to the same low‑bit format (often 8‑bit). Activations are computed in integer domain, reducing DRAM bandwidth and allowing full integer kernels on ASICs or NPUs. However, the dynamic range of activations varies per input, so you need per‑layer scaling factors and careful bias handling; this can introduce larger accuracy degradation unless a calibration dataset is used.<br>• **Trade‑offs**: Memory & compute ↓ vs potential accuracy ↑. Weights‑only is simpler, needs no runtime statistics; weights‑and‑activations gives higher speedups on specialized hardware but requires extra calibration and careful handling of overflow/underflow. |
| **Edge Cases** | • Very small models (few layers) may not benefit from activation quantization due to limited compute savings.<br>• Models with batch‑norm or ReLU6 can be more tolerant; others (e.g., transformers) need higher precision activations.<br>• Quantizing to 4‑bit often leads to catastrophic accuracy loss unless fine‑tuned. |
| **Optimize & Communicate** | • Start with weights‑only, benchmark, then add activation quantization if needed. <br>• Use per‑channel scaling for convolutions to preserve channel‑wise variance.<br>• Narrate the decision process: “We chose weights‑only first because it’s hardware‑agnostic and gives a quick 4× memory reduction with negligible accuracy loss; once we hit latency limits, we’ll calibrate activations to unlock full integer kernels.” |

*Word count:* ~210 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
