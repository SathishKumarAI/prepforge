---
qid: ing_696b8620e0__think__local
question: You are self-hosting a VLM for a document pipeline and throughput is a third
  of what you projected from the LLM's specs. Why, and what do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 589
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:58:55-05:00'
sources: []
---

**1. Clarify the problem & state assumptions**  
- *What’s the “third of what projected” exactly?*  Is it inference latency, token‑rate, or overall throughput (docs/sec)?  
- *Which LLM specs were used in projection?*  FLOPs, memory bandwidth, GPU count, batch size.  
- *Environment details*: self‑hosted hardware, network, storage I/O, software stack (PyTorch vs TensorRT), and any preprocessing steps.  
- Assume the model was correctly compiled for the target GPUs and no obvious bugs.

**2. Adopt a systematic performance‑diagnosis framework**  
1. **Compute‑bound?** Check GPU utilisation, CUDA kernel occupancy, and whether the workload saturates the compute cores.  
2. **Memory‑bound?** Inspect VRAM bandwidth, cache misses, and tensor sizes (e.g., 16‑bit vs 32‑bit).  
3. **I/O‑bound?** Measure disk read/write speed for documents, network latency if pulling data remotely, and any serialization overhead.  
4. **Software‑stack inefficiencies**: model quantisation, batch size tuning, pipeline parallelism, or unnecessary CPU–GPU transfers.

**3. Step‑by‑step reasoning to find the bottleneck**  
- Run a micro‑benchmark (e.g., `torch.profiler`) on a single inference call; look at kernel times and memory traffic.  
- Compare measured GPU utilisation with the theoretical peak from specs.  
- If utilisation is low → compute‑bound: try larger batch sizes, mixed‑precision, or better kernel fusion.  
- If VRAM bandwidth saturates but utilisation stays high → memory‑bound: consider 8‑bit quantisation, reduce hidden‑state size, or use flash‑attention.  
- If disk/ network stalls appear early in the trace → I/O‑bound: move data to SSDs, prefetch, or stream documents into GPU memory.

**4. Avoid common pitfalls**  
- Don’t assume the model itself is slow; often the pipeline (tokeniser, pre/post‑processing) dominates.  
- Beware of “cold‑start” effects—measure after warm‑up passes.  
- Mixing metrics: latency vs throughput can mislead; focus on the metric that matters for your SLA.

**5. Sanity‑check & communicate**  
- Re‑run a small set of tests with adjusted parameters and confirm the expected change (e.g., batch size × 2 should roughly halve latency).  
- Document the bottleneck, the solution tried, and the quantitative improvement.  
- Share this in a concise report: “Throughput was limited by GPU memory bandwidth; switching to 8‑bit quantisation improved throughput from X to Y docs/sec.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
