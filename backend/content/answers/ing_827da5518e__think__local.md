---
qid: ing_827da5518e__think__local
question: 'Explain: Latency Numbers Every Programmer Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 540
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:36:49-05:00'
sources: []
---

**1️⃣ Clarify the goal and assumptions**  
   - *Goal*: Help a programmer understand key latency metrics that affect ML workloads (data loading, inference, training).  
   - *Assumptions*: The reader knows basic ML terminology but not system‑level timing; they’re interested in practical numbers for CPUs/GPUs.

**2️⃣ Adopt a layered mental model**  
   1. **Input pipeline** – disk I/O, data shuffling, preprocessing.  
   2. **Computation core** – floating‑point ops on CPU/GPU/TPU.  
   3. **Communication** – inter‑device sync (MPI, NCCL) or model parallelism.  
   4. **Output** – writing checkpoints or serving predictions.

Each layer has a characteristic latency range; treat them as independent “blocks” that add up to end‑to‑end time.

**3️⃣ Reason step by step toward the answer**  
   - Gather benchmark data: e.g., reading a 1 GB CSV on SSD ≈ 200 ms, CPU inference for a small CNN ≈ 10–20 ms, GPU inference ≈ 1–5 ms.  
   - Translate these into “rule‑of‑thumb” numbers (e.g., *disk I/O ~ 100 µs per MB*, *GPU kernel launch overhead ~ 0.1 ms*).  
   - Show how they compose: total latency = Σ(layer latencies).  
   - Emphasize variability: network jitter, batch size, caching, and hardware differences.

**4️⃣ Avoid common traps**  
   - Don’t conflate **throughput** with **latency**; a system can be fast on average but have high per‑sample delays.  
   - Ignore the effect of *warm‑up* (first run slower due to JIT or CUDA context creation).  
   - Assume GPU always wins—small models may not benefit from GPU overhead.

**5️⃣ Sanity‑check & communicate clearly**  
   - Cross‑verify with known benchmarks (e.g., TensorFlow TFLOPs, PyTorch inference latency tables).  
   - Present the numbers in a concise table and a short narrative: “If you’re deploying a 50 ms model on edge CPUs, your bottleneck is likely data loading; if you hit 200 ms, look at network sync.”  
   - End with a quick checklist for developers to measure their own latency blocks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
