---
qid: ing_339bbd9d10__star__local
question: 'Explain: Making decode fast: the serving playbook'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 350
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:11:52-05:00'
sources: []
---

**Situation:**  
At my last role I was leading a real‑time recommendation engine that served personalized product cards to millions of users per day. Our model’s decoding time hit 120 ms on average, which caused noticeable lag in the user flow and pushed us over our SLA of 100 ms.

**Task:**  
I needed to cut decoding latency by at least 30% without sacrificing recommendation quality or increasing inference cost.

**Action:**  
1. Profiling with PyTorch’s autograd profiler revealed that softmax + beam‑search dominated CPU usage.  
2. I replaced the vanilla beam search with a *length‑penalized top‑k* sampler, reducing branch factor from 10 to 3.  
3. Leveraged ONNX Runtime with GPU execution provider and added TensorRT engine conversion for the transformer layers, enabling fused kernels and mixed‑precision FP16 inference.  
4. Implemented async batching (max batch size = 32) in our request queue, allowing us to amortize kernel launch overhead.  
5. Added a small cache of top‑10 decoder states per user segment to warm subsequent requests.

**Result:**  
Decoding time dropped from 120 ms to 78 ms—an 35% improvement—and throughput increased by ~1.4×. User engagement metrics (click‑through rate) rose 2.3%, confirming that quality was preserved. I learned the importance of profiling, algorithmic pruning, and hardware acceleration synergy for production AI serving.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
