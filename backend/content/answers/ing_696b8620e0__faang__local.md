---
qid: ing_696b8620e0__faang__local
question: You are self-hosting a VLM for a document pipeline and throughput is a third
  of what you projected from the LLM's specs. Why, and what do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 509
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:48:32-05:00'
sources: []
---

**Clarify**

You’re running a Vision‑Language Model (VLM) on your own servers for a document processing pipeline but the observed throughput is only ~30 % of what the LLM’s documentation promised.  
Assumptions to confirm:  
- GPU/CPU specs match those in the spec sheet.  
- Batch size, image resolution and token length are as expected.  
- The inference engine (e.g., ONNX Runtime, PyTorch) is configured for maximum parallelism.  
- Network I/O or disk latency isn’t throttling the pipeline.

**Approach**

1. Profile the entire pipeline: CPU, GPU, memory, IO.  
2. Validate that batch size and image pre‑processing match the benchmark conditions.  
3. Benchmark the VLM in isolation to isolate model vs. infrastructure issues.  
4. If hardware is underutilized, adjust parallelism or use mixed‑precision.  
5. If I/O dominates, move images to SSD/optimize caching.

**Depth**

- Use `nvidia-smi` and PyTorch’s profiler to capture GPU utilization; aim for >70 % usage.  
- Reduce image resolution by a factor (e.g., 640→320) if it preserves OCR accuracy but cuts runtime.  
- Enable TensorRT or ONNX Runtime with FP16/INT8 precision; expect ~2–3× speedup.  
- Batch size: tune from 1 up to the GPU’s max without OOM; larger batches amortize kernel launch overhead.  
- Parallel inference threads (e.g., `torch.set_num_threads`) can saturate CPU cores when batching is limited.

**Edge Cases**

- Extremely large documents may exceed memory, causing fallback to CPU or spill‑over.  
- Variable image sizes can cause GPU underutilization if batches are padded heavily.  
- Mixed‑precision might degrade accuracy for certain OCR tokens; validate with a held‑out set.

**Optimize & Communicate**

Explain that the bottleneck was largely due to sub‑optimal batching and precision settings. After reconfiguring to FP16, increasing batch size to 8, and moving image storage to NVMe SSDs, throughput rose from ~30 % to ~80 % of spec. Highlight that continuous monitoring (e.g., Grafana dashboards) will catch regressions early, ensuring the pipeline remains within SLA targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
