---
qid: ing_9aa08b44fc__think__local
question: Compare INT8, FP8, and FP4 for serving. What breaks, and how do you validate
  that a quantized endpoint is "good enough"?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 209
output_tokens: 617
total_tokens: 826
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:18:11-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- *Serving context*: inference on pre‑trained models (vision/ NLP) with a fixed batch size and latency target.
- *Metrics of “good enough”*: accuracy drop < 1 % relative to FP32, latency ≤ X ms, memory footprint ≤ Y MiB.
- Assume the quantization scheme is post‑training static; no per‑sample calibration.

**2️⃣ Mental model / framework**

Treat each precision as a point in a 3‑D space: **accuracy**, **latency**, **model size**.  
INT8 → lower bit‑width (fixed‑point), FP8/FP4 → floating‑point with fewer mantissa bits.  

Use the *quantization error* equation:
\(E = \|W_{fp32} - W_{q}\|\) and propagate it through layers to estimate accuracy loss.

**3️⃣ Step‑by‑step reasoning**

1. **Baseline**: run FP32 inference, record metrics.
2. **Quantize**: apply INT8, FP8, FP4 separately (using the same calibration data).
3. **Profile**: measure latency and memory for each on target hardware (GPU/CPU).
4. **Accuracy test**: compute top‑1/top‑5 error on a held‑out validation set.
5. **Error budget**: if INT8 loss < 1 % but FP8 loses 2 %, INT8 is acceptable; FP4 fails unless accuracy drop is within the allowed margin.
6. **Break points**:
   - *INT8*: may break on models with large dynamic range (e.g., attention layers) → need per‑channel scaling.
   - *FP8/FP4*: can break due to underflow in softmax or attention scores; check for NaNs.
7. **Iterate**: if FP8 fails, try mixed precision (INT8 for weights, FP8 for activations).

**4️⃣ Common traps**

- Assuming “quantization‑friendly” models automatically work; some architectures need custom quantizers.
- Ignoring activation ranges—FP8/FP4 can overflow if not properly clipped.
- Over‑optimizing latency at the cost of catastrophic accuracy loss (e.g., forcing too many layers to INT8).

**5️⃣ Sanity‑check & communicate**

- Plot a 3‑D scatter (accuracy vs. latency vs. size) for all three precisions; look for Pareto optimal points.
- Explain trade‑offs: “INT8 gives the best overall balance; FP8 offers ~30 % memory savings but risks >1 % accuracy loss on attention layers.”
- Summarize validation procedure in a table: precision | accuracy drop | latency | size | notes.

By following this structured approach, you can systematically decide which quantization level is “good enough” for your serving pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
