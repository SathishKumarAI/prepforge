---
qid: ing_27e5bcd585__star__local
question: 'Explain: Parallelizing across query heads for multi-query attention'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 363
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:48:17-05:00'
sources: []
---

**Situation** – In my last role as a machine‑learning engineer at a video‑analytics startup, we were building a transformer‑based captioning model that had to run in real time on edge devices. The baseline multi‑head self‑attention was too slow; latency hit 200 ms per frame, exceeding our 50 ms target.

**Task** – I needed to cut the inference time by at least 60% without sacrificing BLEU score or increasing memory usage beyond the device’s 2 GB limit.

**Action** – I re‑implemented the multi‑query attention layer so that each query head shared a single key/value pair, turning the standard \(O(H \cdot N^2)\) complexity into \(O(H + N^2)\). To parallelize across heads, I used PyTorch’s `torch.nn.functional.scaled_dot_product_attention` with batch dimensions for heads and leveraged CUDA graph capture to avoid kernel launch overhead. I also fused the projection matrices into a single GEMM per head using cuBLASLt to reduce memory traffic. Finally, I added mixed‑precision (FP16) support and tuned the workspace size to stay within 1.8 GB.

**Result** – Inference latency dropped from 200 ms to 70 ms on our target GPU, a 65% improvement. BLEU remained at 35.2, matching the baseline. The experience taught me that restructuring attention to reduce redundant key/value computations can yield dramatic speedups when paired with careful kernel fusion and mixed‑precision tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
