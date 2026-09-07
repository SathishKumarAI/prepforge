---
qid: ing_01fbe90f65__faang__local
question: 'Explain: No Chunking Strategy — Anti Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 461
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:48:43-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain why a “No‑Chunking” strategy is an anti‑pattern in AI pipelines—i.e., processing raw data streams without breaking them into manageable chunks. I’d confirm: *What type of AI (NLP, CV, RL)?* *Is the data stream real‑time or batch?* *What constraints (latency, memory, parallelism) exist?*

**Approach**  
1. List the benefits of chunking (bounded memory, parallelism, easier debugging).  
2. Contrast with a no‑chunk strategy: unbounded buffers, sequential bottlenecks, hard fault isolation.  
3. Map each drawback to concrete problems in typical AI workloads.

**Depth**  
- **Memory blowout:** Unchunked streams grow until OOM; e.g., processing a 100 GB video frame‑by‑frame without batching will exhaust GPU RAM.  
- **Latency spikes:** Without chunking, every inference must wait for the entire input—critical for real‑time NLP (e.g., chatbots).  
- **Parallelism loss:** Batching enables SIMD on GPUs; no‑chunk forces scalar execution and underutilizes hardware.  
- **Fault isolation:** A corrupted record can corrupt an entire batch; chunking localizes errors to a single segment.  
- **Pipeline complexity:** Backpressure handling is trivial with fixed‑size chunks; otherwise you need sophisticated flow control.

**Edge Cases**  
- Extremely short inputs (e.g., 1‑sentence queries) may seem fine, but batching them later still yields better throughput.  
- Streaming sensor data: if you truly need one‑by‑one processing, consider micro‑batches with minimal delay instead of pure streaming.

**Optimize & Communicate**  
I’d suggest *micro‑batching* (e.g., 32–128 samples) to balance latency and throughput, coupled with backpressure queues. I would narrate: “Chunking is a proven pattern that keeps resource usage predictable, maximizes hardware utilization, and simplifies error handling—essential for scalable AI services.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
