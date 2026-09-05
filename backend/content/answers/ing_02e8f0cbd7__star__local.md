---
qid: ing_02e8f0cbd7__star__local
question: What is TensorRT-LLM? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 329
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:34:07-05:00'
sources: []
---

**Situation:**  
When our product team wanted to ship a real‑time chatbot on edge devices, we hit the wall that latency from GPU inference was still >200 ms, and we couldn’t meet the 100 ms SLA for user queries.

**Task:**  
My goal was to cut inference time by at least 50% while keeping model accuracy intact, so the bot could run in a 4‑GB RTX 2060 on mobile hardware without offloading to the cloud.

**Action:**  
I explored NVIDIA’s TensorRT-LLM—a library that fuses low‑rank matrix factorization, kernel fusion, and mixed‑precision (FP16/INT8) into a single, highly optimized runtime. I first converted our 7B LLaMA checkpoint using `trtexec` with the `--use-cublaslt` flag to enable TensorRT’s tensor core acceleration. Then I applied dynamic shape profiling to handle variable context lengths and tuned INT8 calibration tables for minimal accuracy loss. Finally, I integrated the compiled engine into our inference service via the Python API, adding a simple caching layer for repeated prompts.

**Result:**  
Latency dropped from 210 ms to 95 ms on the RTX 2060, meeting the SLA and reducing GPU power by ~30%. The exercise taught me how TensorRT-LLM’s kernel fusion and quantization trade‑offs can be tuned for edge deployments without compromising user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
