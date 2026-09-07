---
qid: ing_f2b684f1fb__faang__local
question: vLLM, SGLang, TensorRT-LLM, TGI, llama.cpp/Ollama - how do you choose a
  serving stack?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 660
total_tokens: 913
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:03:39-05:00'
sources: []
---

**Clarify**  
We need to pick a production‑ready inference stack for large language models (LLMs).  
Assumptions:  
- Model size ≈ 7–13 B, possibly up to 70 B.  
- Throughput ≥ 50 QPS with < 200 ms latency.  
- Budget constraints on GPU/CPU resources.  
- Need easy model‑to‑deployment pipeline and robust monitoring.

**Approach**  
1. Profile the target workload (batch size, prompt length).  
2. Map each candidate stack to resource & performance knobs: vLLM (GPU‑only), SGLang (CPU+GPU hybrid), TensorRT‑LLM (TensorRT optimised GPU), TGI (REST/GRPC API + multi‑model support), llama.cpp/Ollama (CPU‑only, edge).  
3. Benchmark on a representative model and dataset.  
4. Evaluate operational complexity: CI/CD, autoscaling, observability.

**Depth**  
- **vLLM** gives ~10× speedup over vanilla Hugging Face by memory‑efficient KV caching; best when you have NVIDIA GPUs with enough VRAM for the whole LLM + batch.  
- **SGLang** splits attention across CPU & GPU, lowering VRAM needs but adding PCIe overhead; suitable for 70 B models on modest GPUs or heterogeneous clusters.  
- **TensorRT‑LLM** compiles FP16/INT8 kernels, yielding the lowest latency (~1–2 ms per token) when you own a recent RTX/Datacenter GPU and can tolerate extra build time.  
- **TGI (Text Generation Inference)** is a lightweight wrapper around vLLM/TensorRT‑LLM; it adds multi‑model routing, authentication, and Prometheus metrics—ideal for microservice architectures.  
- **llama.cpp/Ollama** runs on CPU/Apple Silicon with minimal dependencies; acceptable latency (~20–30 ms per token) when GPU budgets are zero or you need edge deployment.

**Edge Cases**  
- Extremely short prompts → vLLM overhead dominates; switch to TGI with static batching.  
- Multi‑tenant inference → TGI’s routing is essential; vanilla vLLM cannot isolate resources.  
- Memory fragmentation on long sequences → SGLang mitigates but may hit PCIe limits.

**Optimize & Communicate**  
Start with **TGI + vLLM** for most cases: it gives a clean API, easy scaling, and good GPU utilisation. If you hit VRAM ceilings or need ultra‑low latency, swap to **TensorRT‑LLM**; if you must run 70 B models on modest GPUs, use **SGLang**. For edge or zero‑GPU scenarios, fall back to **llama.cpp/Ollama**. Always keep a monitoring dashboard (Prometheus + Grafana) and automated GPU utilisation alerts so that the stack can auto‑scale or trigger a model swap when thresholds are breached. This layered decision tree balances performance, cost, and operational simplicity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
