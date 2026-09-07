---
qid: ing_4b573b1777__faang__local
question: You need to quantize a model for a customer's hardware. How do you choose
  a scheme, and how do you prove quality hasn't regressed?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 512
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:39:34-05:00'
sources: []
---

**Clarify**

You’re asked to pick a quantization strategy for a customer’s on‑device accelerator (e.g., ARM Cortex‑M or custom ASIC) and demonstrate that inference accuracy stays within an acceptable margin (say < 1 % drop).  
Assumptions to confirm:  
- Target precision (8‑bit INT vs. 16‑bit FLOAT).  
- Available calibration data size and distribution.  
- Hardware support for per‑tensor scaling, requantization, or fused ops.  

**Approach**

1. **Profile the model** – measure layerwise dynamic ranges and sensitivity to quantization noise.  
2. **Select scheme** – start with *per‑channel symmetric* 8‑bit affine quantization (fast on most ASICs). If accuracy is insufficient, move to *per‑tensor asymmetric* or *mixed‑precision* (e.g., BFloat16 for activations).  
3. **Calibration** – run a small, representative dataset through the model and compute min/max or percentiles per tensor.  
4. **Fine‑tuning (optional)** – perform quantization‑aware training to recover lost accuracy.  

**Depth**

- Use the *TensorFlow Lite* or *PyTorch QAT* APIs to generate a calibrated quantized graph.  
- Evaluate top‑k/accuracy on a held‑out test set; compare against floating‑point baseline.  
- Compute *Mean Absolute Error (MAE)* of logits and *confidence interval* for accuracy drop.  
- Report the worst‑case layer error: `max(|w_q - w_f| / |w_f|)` to satisfy safety margins.

**Edge Cases**

- Outliers in input data causing saturation; test with adversarial samples.  
- Skewed distributions (e.g., ReLU outputs); verify asymmetric scaling works.  
- Hardware bugs in dequantization paths—run unit tests on the accelerator’s DSP core.

**Optimize & Communicate**

Present a concise dashboard: baseline accuracy, post‑quantization accuracy, quantization scheme chosen, and calibration effort (time, data). Highlight that per‑channel symmetry gave 0.8 % drop vs. asymmetric’s 1.2 %. Explain trade‑offs: faster inference with minimal memory overhead versus the slight extra compute for mixed precision. Conclude by recommending a rollback plan if real‑world accuracy falls outside the target window.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
