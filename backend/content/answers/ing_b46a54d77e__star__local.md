---
qid: ing_b46a54d77e__star__local
question: 'Explain: Batching for Throughput — Inference Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 358
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:32:28-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup we launched a real‑time fraud detection service that served millions of transactions per day. Our model was a deep neural net trained in PyTorch and deployed on a single GPU; however, latency spikes during peak hours caused the SLA to slip from 50 ms to over 200 ms.

**Task:**  
I had to redesign the inference pipeline to boost throughput while keeping latency under our 100 ms target, without retraining the model or adding hardware.

**Action:**  
1. I profiled the GPU with NVIDIA Nsight and discovered that each forward pass was spending ~70% of its time on kernel launch overhead.  
2. Implemented dynamic batching using TensorRT’s `IAsyncInferContext` API: incoming requests were collected into micro‑batches of size 32–64, then passed to a single CUDA stream.  
3. Added an asynchronous queue with a token bucket regulator so that batch sizes adapted to traffic bursts.  
4. Tuned precision from FP32 to INT8 using TensorRT’s calibration to cut memory bandwidth by ~40%.  
5. Deployed the pipeline behind an NGINX reverse proxy that balanced load across three GPU nodes.

**Result:**  
Throughput increased from 3,200 inferences/second to 18,500, and average latency dropped to 78 ms during peak periods. The system now consistently meets SLA with a margin for future growth. I learned how careful batching and precision tuning can unlock hidden GPU performance without expensive infrastructure changes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
