---
qid: ing_68fb2ce658__star__local
question: 'Explain: So in some cases when we access — Seattle Conference on Scalability:
  YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 326
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:57:17-05:00'
sources: []
---

**Situation**  
At the Seattle Conference on Scalability, our team was demoing a real‑time recommendation engine that served millions of users per day. The live stream showed a spike in traffic after a keynote, and latency started creeping above 300 ms.

**Task**  
I had to diagnose why model inference slowed when the request rate doubled and bring latency back under 200 ms without sacrificing accuracy.

**Action**  
First, I profiled the GPU kernel using Nsight Systems; it revealed that our batch size of 32 was too small for the new traffic pattern. I re‑implemented a dynamic batching layer in TensorRT, letting the runtime accumulate requests until a threshold (batch=128) or a timeout (5 ms). Then I switched from FP32 to INT8 quantization, retraining with calibration data to keep RMSE within 2 %. Finally, I added a lightweight caching layer for top‑10 predictions per user session.

**Result**  
Latency dropped from 310 ms to 145 ms under peak load, and CPU usage fell by 35 %. The conference audience noted the smooth experience, and we documented the dynamic batching approach as a reusable pattern for future projects. I learned that combining batch sizing, quantization, and caching can dramatically improve scalability without compromising model quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
