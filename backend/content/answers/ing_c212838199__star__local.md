---
qid: ing_c212838199__star__local
question: 'Explain: What is quantization for inference? Explain weights-only vs weights-and-activations,
  and the typical tradeoffs.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 364
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:57:52-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with deploying a transformer‑based recommendation model on an edge device that had only 512 MB of RAM and no floating‑point accelerator. The baseline inference time was 120 ms per request, which exceeded the product’s 80 ms SLA.

**Task:**  
Reduce latency and memory footprint to meet the SLA while keeping accuracy within ±2% relative to the full‑precision model.

**Action:**  
I first applied *weights‑only* quantization: we converted all 32‑bit floating‑point weights to 8‑bit integers using per‑tensor symmetric scaling. This cut the model size from 200 MB to 50 MB and lowered inference time to 90 ms, but accuracy dropped by 4%.  
Next, I added *weights‑and‑activations* quantization with dynamic range calibration on a validation set. Using TensorRT’s INT8 engine, we quantized both weights and activations, adjusting the per‑channel scale factors for each layer. This brought latency down to 75 ms and restored accuracy to within 1% of the baseline.  
I also implemented bias correction to mitigate the activation quantization error and profiled CPU vs GPU execution to confirm the trade‑off.

**Result:**  
The model now meets the 80 ms SLA, uses only 50 MB of RAM, and retains near‑original accuracy. I learned that *weights‑only* is faster to implement but can hurt performance on activation‑heavy networks; *weights‑and‑activations* offers better fidelity at a modest extra calibration cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
