---
qid: ing_4b573b1777__think__local
question: You need to quantize a model for a customer's hardware. How do you choose
  a scheme, and how do you prove quality hasn't regressed?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 384
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:20:40-05:00'
sources: []
---

**1️⃣ Clarify the constraints & assumptions**  
   * What is the target device (CPU/GPU/ASIC)?  
   * Does it support INT8, FP16, or custom fixed‑point?  
   * Are latency, memory, and power budgets known?  
   * Assume we can run a validation set on the device to measure accuracy.

**2️⃣ Adopt a quantization framework**  
   * Start with **post‑training dynamic/static quantization** for speed.  
   * If accuracy drops, move to **quantization‑aware training (QAT)**.  
   * Use per‑tensor or per‑channel scaling depending on layer type (conv vs linear).

**3️⃣ Step‑by‑step reasoning**  
   1. Benchmark the full‑precision model on a held‑out set.  
   2. Apply dynamic quantization → measure accuracy drop.  
   3. If within tolerance, stop; otherwise retrain with QAT using fake‑quant nodes.  
   4. After each training epoch, evaluate on validation data to track drift.

**4️⃣ Common pitfalls to avoid**  
   * Forgetting that batch norm folding is required before static quantization.  
   * Assuming INT8 will always work—some models need per‑channel scaling or higher precision (FP16).  
   * Ignoring the impact of activation ranges; use clipping or moving averages.

**5️⃣ Sanity‑check & communicate**  
   * Plot accuracy vs. batch size and compare against full‑precision baseline.  
   * Report metrics: top‑1/top‑5 accuracy, latency, memory footprint.  
   * Explain that any regression is quantified and bounded by the chosen tolerance (e.g., <1% drop).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
