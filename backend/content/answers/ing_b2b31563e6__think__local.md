---
qid: ing_b2b31563e6__think__local
question: Compare FP8, INT8, and INT4 quantization for LLM inference. How do you decide,
  and how do you validate?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 471
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:47:27-05:00'
sources: []
---

**1️⃣ Clarify the goal & constraints**  
   - *What* exactly are we optimizing (latency, throughput, memory)?  
   - *Which hardware* will run the model? (GPU, TPU, ASIC)  
   - *Model sensitivity*: is it a transformer with large hidden size or a small RNN?  
   State these upfront; they dictate the choice of bit‑width.

**2️⃣ Adopt a quantization framework**  
   - Treat each precision as a point in a 3‑D space: **Accuracy loss**, **compute cost**, **memory footprint**.  
   - Use a “budget” line (e.g., ≤ 1 % accuracy drop) and plot FP8, INT8, INT4 against it.

**3️⃣ Step‑by‑step reasoning**  
   1. **Baseline**: run the full‑precision model on target hardware to measure latency/accuracy.  
   2. **Simulate** each quantization scheme (post‑training or quantization‑aware training).  
   3. **Profile**: capture memory usage, MAC ops, and inference time per layer.  
   4. **Compare** against the budget line; pick the highest precision that stays within limits.

**4️⃣ Avoid common traps**  
   - *Assuming* INT4 always saves more memory ignores that it may need higher‑precision accumulators.  
   - *Neglecting* per‑layer sensitivity: some layers (e.g., attention softmax) are far less tolerant to low bits.  
   - Overlooking *hardware support*: not all GPUs have efficient FP8 kernels.

**5️⃣ Validate & communicate**  
   - Run **end‑to‑end inference** on a representative dataset; compute perplexity or accuracy.  
   - Perform an **A/B test** against the baseline.  
   - Present results in a table: precision, % accuracy drop, latency, memory.  
   - Summarize the decision logic: “We chose INT8 because it meets the ≤ 1 % loss budget while halving memory and keeping throughput within 10 % of FP32.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
