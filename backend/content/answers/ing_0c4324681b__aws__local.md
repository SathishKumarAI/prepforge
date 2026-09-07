---
qid: ing_0c4324681b__aws__local
question: 'Explain: A model runs fine in FP32 but produces garbage after conversion
  to FP16. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 413
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:53:29-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with deploying a transformer‑based recommendation model to the edge for real‑time inference on mobile devices. The team converted the FP32 checkpoint to FP16 to reduce memory and latency. After deployment, A/B testing showed a 35 % drop in click‑through rate (CTR) and a spike in user‑reported “irrelevant recommendations.”  

**Task:**  
Diagnose why the FP16 model behaved poorly while FP32 was stable, and restore performance without compromising on the edge constraints.

**Action:**  
1. **Dive Deep into Quantization Errors** – I ran a layer‑wise accuracy profiler (using `torch.autograd.profiler`) to compare FP32 vs. FP16 activations. The embedding lookups and softmax layers were most affected; their outputs underflowed due to reduced precision.  
2. **Implement Mixed Precision** – Re‑quantized the attention weights with 8‑bit integer scaling (`torch.quantization.quantize_dynamic`), while keeping embeddings in FP32. Added a small per‑layer bias correction calculated from validation data.  
3. **Validate & Iterate** – Ran automated unit tests on 10 k samples; CTR improved to within 2 % of the FP32 baseline, and inference latency dropped from 120 ms to 65 ms (≈ 45 % faster).  

**Result:**  
The revised mixed‑precision model restored a 96 % of the original CTR while meeting the mobile memory budget (< 50 MB). This saved an estimated $1.2M in cloud inference costs per year and improved user satisfaction scores by 18 %.  

*Leadership Principles:* **Ownership** – I took full responsibility for the failure; **Dive Deep** – I dissected layer‑wise errors to pinpoint the root cause.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
