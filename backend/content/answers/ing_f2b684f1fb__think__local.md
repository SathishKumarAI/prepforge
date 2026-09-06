---
qid: ing_f2b684f1fb__think__local
question: vLLM, SGLang, TensorRT-LLM, TGI, llama.cpp/Ollama - how do you choose a
  serving stack?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 209
output_tokens: 495
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:01:41-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
   • Identify the *use‑case*: batch inference vs low‑latency chat, GPU/CPU budget, model size (e.g., Llama‑2‑70B).  
   • Note constraints: memory limits, throughput targets, integration needs (Python API, REST, gRPC), and whether you need quantization or mixed precision.  

**2️⃣ Build a mental framework**  
   – *Hardware*: GPU vs CPU, NVidia TensorRT support, multi‑GPU scaling.  
   – *Model & precision*: FP16/INT8/FP32, quantization tools (QLoRA).  
   – *Serving features*: request routing, batching, streaming, concurrency, observability.  

**3️⃣ Reason step‑by‑step**  
   1. **Hardware match**: If you have NVidia GPUs → consider TensorRT‑LLM or vLLM (CUDA kernels).  
   2. **Latency vs throughput**: vLLM excels at large batch throughput; TGI/llama.cpp/Ollama are tuned for low‑latency chat.  
   3. **Model size & memory**: For >30B, TensorRT‑LLM + model parallelism is often necessary; llama.cpp is limited to ~7B on CPU.  
   4. **Deployment complexity**: SGLang/TGI offer ready APIs; vLLM needs custom integration but gives more control.  
   5. **Ecosystem fit**: If you already use Hugging Face pipelines → TGI or SGLang integrate smoothly.  

**4️⃣ Avoid common traps**  
   – Assuming “more GPU = better” ignores memory fragmentation and kernel launch overhead.  
   – Ignoring quantization impact on accuracy when chasing speed.  
   – Over‑optimizing for one metric (latency) at the expense of throughput or cost.  

**5️⃣ Sanity‑check & communicate**  
   • Re‑run a quick benchmark with a representative batch size and model to confirm expectations.  
   • Summarize: “Given our GPU budget, we’ll use TensorRT‑LLM for 70B models with FP16 precision, leveraging TGI’s REST API for client integration.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
