---
qid: ing_01a473f1a1__star__local
question: 'Explain: Latency'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 347
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:31:42-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a real‑time fraud detection service for a payment processor. The system had to analyze each transaction within 150 ms to avoid blocking the user flow, but our initial model inference took ~350 ms on a single GPU, causing a 200 % latency increase and a spike in abandoned carts.

**Task:**  
Reduce inference time below the 150 ms threshold while maintaining ≥99.5 % detection accuracy and keeping CPU usage under 30 % to stay within our hosting budget.

**Action:**  
I first profiled the pipeline with NVIDIA Nsight Systems and found that the bottleneck was a dense layer with 2048 neurons. I replaced it with a low‑rank approximation using TensorRT’s INT8 quantization, which cut matrix multiply time by 4×. Then I restructured the data flow to batch every 10 concurrent requests, leveraging GPU parallelism without exceeding the latency target. Finally, I added an early‑exit branch: if the first two layers produced a confidence > 0.95, we skipped the heavy layers entirely.

**Result:**  
Inference time dropped to 110 ms on average (a 69 % reduction), CPU usage fell from 45 % to 22 %, and overall fraud detection accuracy stayed at 99.6 %. The project saved us ~$120k annually in infrastructure costs, and I learned how quantization, batching, and early exits can be combined to meet strict latency constraints in production ML systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
