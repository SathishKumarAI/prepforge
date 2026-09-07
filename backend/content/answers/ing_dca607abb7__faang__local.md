---
qid: ing_dca607abb7__faang__local
question: 'Explain: Identify Bottlenecks — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 428
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:11:26-05:00'
sources: []
---

**Clarify**  
The interviewer wants a roadmap for spotting performance bottlenecks before a system‑design interview on ML pipelines. I’ll assume we’re building a real‑time inference service (e.g., image classification) that must handle high throughput and low latency.

**Approach**  
1. **Define metrics**: latency, throughput, CPU/GPU usage, memory footprint, I/O bandwidth.  
2. **Map the data flow**: ingestion → preprocessing → model inference → post‑processing.  
3. **Identify candidate hotspots**: data transfer (network/SSD), feature extraction, GPU kernel stalls, serialization overhead.  
4. **Instrument each stage** with lightweight profilers (e.g., PyTorch profiler, NVIDIA Nsight).  
5. **Simulate load** using realistic workloads; capture metrics per component.

**Depth**  
- *CPU‑bound*: batch preprocessing, data augmentation; use vectorized ops or async pipelines.  
- *GPU‑bound*: kernel launch overhead; fuse operations, reduce memory copies.  
- *I/O bound*: prefetch tensors to pinned host memory; leverage NVMe SSDs for model weights.  
- *Network bound*: compress inputs (e.g., JPEG) and outputs; use gRPC with keep‑alive.  
Complexity: profiling is O(1) per request, but full analysis scales linearly with traffic simulation size.

**Edge Cases**  
- Sudden spike in input resolution → GPU memory overflow.  
- Model version change → stale cache invalidation.  
- Distributed inference across multiple nodes → clock skew affecting latency measurements.

**Optimize & Communicate**  
After pinpointing bottlenecks, propose concrete mitigations: pipeline parallelism, model quantization, batching strategy, or edge caching. Summarize findings in a concise slide deck, highlighting trade‑offs (e.g., latency vs. accuracy). This demonstrates structured thinking, depth of technical knowledge, and clear communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
