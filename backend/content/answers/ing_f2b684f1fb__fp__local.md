---
qid: ing_f2b684f1fb__fp__local
question: vLLM, SGLang, TensorRT-LLM, TGI, llama.cpp/Ollama - how do you choose a
  serving stack?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 574
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:34:56-05:00'
sources: []
---

**Choosing an LLM‑serving stack is a trade‑off between latency, throughput, hardware cost, and model flexibility.**

1. **Problem scope**  
   *If you need sub‑10 ms inference on a single GPU for real‑time chat*, pick a lightweight, highly optimised runtime (e.g., **llama.cpp/Ollama** or **TensorRT‑LLM**) that compiles the model to the target hardware’s native kernels.  
   *If your workload is batch‑heavy (tens of thousands of requests per minute) and you can tolerate 50–100 ms latency*, a more scalable server such as **vLLM** or **SGLang** (which expose a KV‑cache across requests) is preferable.

2. **Optimization principles**  
   *Memory‑bandwidth vs compute*: vLLM and SGLang keep the KV‑cache in GPU memory, amortising the cost of embedding generation over many tokens; TensorRT‑LLM fuses layers and applies tensor‑core mixed precision to squeeze FLOPs per watt.  
   *Model size*: For 70B+ weights, only **TensorRT‑LLM** or **vLLM** can handle them on modern GPUs; llama.cpp is limited to <8 GB models.

3. **Infrastructure constraints**  
   *If you have a GPU cluster with NVIDIA A100s and want zero‑copy inference*, TensorRT‑LLM + **TGI (Text Generation Inference)** gives the best throughput with minimal memory overhead.  
   *On CPUs or edge devices*, llama.cpp/Ollama is the only viable choice.

4. **Non‑obvious insight**  
   The *cache eviction policy* in vLLM/SGLang can be tuned to favour “long‑tail” requests: by keeping a small number of KV‑blocks per user session, you drastically reduce re‑generation cost for follow‑up prompts without inflating GPU memory usage. Many deployments ignore this and either cache everything (wasting RAM) or nothing (hurting latency).

**Bottom line:**  
- **Real‑time chat on one GPU** → *llama.cpp/Ollama* or *TensorRT‑LLM*.  
- **High‑throughput, multi‑GPU cluster** → *vLLM + TGI* or *SGLang + TGI*.  
- **Large models (>40 B)** → only *TensorRT‑LLM* (with A100s) or *vLLM* (if using 80 GB GPUs).  
Adjust the cache strategy to match your latency vs. memory budget; that subtle tuning often yields the biggest gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
