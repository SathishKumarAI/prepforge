---
qid: ing_55cf2b3ac3__star__local
question: What does TensorRT / TensorRT-LLM actually do to a model to make it faster
  - and when will it *not* help?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 312
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:19:35-05:00'
sources: []
---

**Situation:**  
I was tasked with deploying a GPT‑style language model on an NVIDIA Jetson AGX Xavier for an edge‑AI chatbot. The baseline inference latency was ~2 s per request, far too slow for real‑time conversation.

**Task:**  
Reduce the per‑token latency to under 200 ms while keeping perplexity within 5 % of the original model and maintaining a GPU memory footprint below 4 GB.

**Action:**  
I wrapped the PyTorch checkpoint with TensorRT‑LLM. First, I used its engine builder to fuse matrix multiplications into single fused kernels, lowering kernel launch overhead. Then I enabled INT8 calibration for the transformer layers; TensorRT’s dynamic quantization reduced the per‑token compute by 3× while preserving accuracy because the model was already robust to weight noise. Finally, I applied layer‑wise fusion of softmax and top‑k sampling into a single custom CUDA kernel, eliminating intermediate tensor allocations.

**Result:**  
Inference latency dropped from ~2 s to **170 ms** (≈12× speedup), with GPU memory usage at 3.8 GB. Accuracy loss was <0.4 % perplexity. I learned that TensorRT shines on highly‑parallel, dense linear algebra workloads; it offers little benefit for sparse models or when the model size exceeds GPU memory, where kernel fusion can’t be applied due to memory constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
