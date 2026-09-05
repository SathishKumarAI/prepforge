---
qid: ing_696b8620e0__star__local
question: You are self-hosting a VLM for a document pipeline and throughput is a third
  of what you projected from the LLM's specs. Why, and what do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 336
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:57:55-05:00'
sources: []
---

**Situation:**  
I was managing a self‑hosted visual‑language model (VLM) for an enterprise document ingestion pipeline that was supposed to process 10,000 pages per hour. After deployment, we were only hitting about 3,300 pages/hour—roughly one‑third of the projected throughput from the vendor’s LLM spec sheet.

**Task:**  
I had to identify the bottleneck and redesign the architecture so we could meet or exceed the target while keeping cost and latency within SLA.

**Action:**  
First, I instrumented every stage: image pre‑processing, tokenization, GPU inference, and post‑processing. Profiling showed that the GPU kernel was saturating at 70 % but the CPU thread pool for image resizing was idle only 30 %. We re‑implemented the resize step with NVIDIA TensorRT’s async stream and offloaded it to a dedicated GPU worker pool. I also switched from single‑batch inference to dynamic batching (max batch size 32) using Triton Inference Server, which reduced per‑image overhead by ~40 %. Finally, I tuned the memory allocator to use pinned host memory, eliminating costly page‑faults.

**Result:**  
Throughput jumped to 9,200 pages/hour—95 % of our target. Latency dropped from 1.2 s to 0.6 s per document. The exercise taught me that vendor specs often assume ideal hardware utilization; real‑world pipelines need fine‑grained profiling and asynchronous I/O to unlock performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
