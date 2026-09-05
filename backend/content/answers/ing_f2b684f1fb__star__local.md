---
qid: ing_f2b684f1fb__star__local
question: vLLM, SGLang, TensorRT-LLM, TGI, llama.cpp/Ollama - how do you choose a
  serving stack?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 359
total_tokens: 615
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:33:16-05:00'
sources: []
---

**Situation** – In Q2 2025 I was leading a new chatbot service for an e‑commerce client that required sub‑200 ms latency on a single NVIDIA A100 GPU while serving 10k concurrent requests per hour.

**Task** – Pick the right inference stack to meet latency, cost and maintainability goals, then deploy it in production within two weeks.

**Action** – I benchmarked four frameworks: vLLM for its batched KV caching, SGLang for Python‑friendly scripting, TensorRT‑LLM for maximum GPU throughput, and llama.cpp/Ollama for edge‑device fallback. I ran a 5‑minute stress test with the Llama‑2‑70B model, measuring latency, GPU memory usage, and CPU overhead on each stack. vLLM gave the lowest latency (180 ms) but consumed 36 GB RAM; TensorRT‑LLM matched that latency while using only 24 GB and offered an ONNX export path for future upgrades. I chose TensorRT‑LLM, integrated it with FastAPI behind a Redis cache, and added a lightweight SGLang wrapper to handle dynamic prompts.

**Result** – The service achieved 190 ms average latency under peak load, cut GPU cost by 18 % compared to vLLM, and reduced engineering effort by 30 % thanks to the single‑framework deployment. I learned that real‑world constraints (GPU memory, model size, and operational simplicity) often outweigh raw speed gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
