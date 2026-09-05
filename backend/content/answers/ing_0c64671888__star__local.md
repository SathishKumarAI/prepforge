---
qid: ing_0c64671888__star__local
question: 'Explain: Coding Interview Details — Together AI Interview Guide 2026: Open-Model
  Inference, CUDA Kernels, Speculative Decoding, and Enterprise AI \u2013 techinterview'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 395
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:53:23-05:00'
sources: []
---

**Situation:**  
In my last role I led a project to bring an open‑source LLM into our SaaS platform so we could offer on‑prem inference for compliance‑heavy clients. Our existing CPU‑only deployment was 10× slower than the cloud baseline, and the latency target from product was under 200 ms per request.

**Task:**  
I had to design a GPU‑accelerated inference pipeline that used custom CUDA kernels for tensor ops, integrated speculative decoding to reduce beam search overhead, and ensured we could package the model as an enterprise‑grade Docker image with minimal security exposure.

**Action:**  
First I profiled the transformer layers with Nsight Systems and identified that matrix multiplications on the attention heads were the bottleneck. I wrote a custom cuBLAS‑free kernel in CUDA to fuse the softmax, dropout, and top‑k sampling into one pass, cutting memory traffic by 35 %. Next, I implemented speculative decoding: before sending the beam search to the GPU I ran a lightweight CPU predictor that guessed the next token; when its prediction matched the GPU result we skipped the full decoder step, saving ~20 % of FLOPs. Finally, I containerized the runtime with a minimal Alpine image, added an OCI‑compliant signature and used gVisor for isolation.

**Result:**  
The new pipeline achieved 180 ms average latency on our target GPUs, a 5× speedup over CPU and a 1.7× improvement over our previous CUDA baseline. The product team launched the feature to two enterprise customers within a month, and we saw a 12% lift in upsell revenue from the compliance‑ready offering. I learned that aggressive kernel fusion combined with speculative decoding can deliver measurable gains without sacrificing model fidelity or security.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
