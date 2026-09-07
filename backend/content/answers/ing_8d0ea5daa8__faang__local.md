---
qid: ing_8d0ea5daa8__faang__local
question: How does Parallelism Works? — Concurrency vs Parallelism - by Ashish Pratap
  Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 826
total_tokens: 1068
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:12:01-05:00'
sources: []
---

## Clarify  
We need to explain how parallelism works in ML, distinguishing it from concurrency, and why it matters for training large models or inference pipelines. I’ll assume the audience knows basic threading concepts but not the nuances of distributed training.

---

## Approach  
1. Define **concurrency** vs **parallelism** with a simple example.  
2. Show how each maps to ML workloads: data‑level, model‑level, and pipeline parallelism.  
3. Discuss hardware (GPUs, TPUs) and software stacks (CUDA, NCCL, Horovod).  
4. Touch on synchronization primitives and communication overhead.

---

## Depth  

| Concept | Concurrency | Parallelism |
|---------|-------------|------------|
| **Goal** | Interleaved execution to improve resource utilization | Simultaneous execution of independent tasks to reduce wall‑clock time |
| **Typical ML use** | Serving multiple inference requests on one GPU (async kernels) | Training a single large model across many GPUs |
| **Implementation** | Thread pools, async I/O; tasks may block each other but share resources | Multi‑GPU data parallelism: each GPU processes a mini‑batch; model parallelism splits layers across devices |

### Parallelism in ML  
1. **Data Parallelism** – replicate the entire model on each device; split the batch (`N / D` samples per device). After local forward/backward passes, gradients are *all‑reduce* (e.g., NCCL) to synchronize weights.  
   - **Complexity**: O(`batch_size/D`) per device; communication cost ≈ `O(D log D)` for tree‑based reduce.  

2. **Model Parallelism** – split the model itself across devices (useful when a single layer exceeds GPU memory). Forward pass flows from one device to the next, requiring point‑to‑point communication of activations.  
   - **Trade‑off**: more communication per step; useful for transformer layers with huge hidden sizes.

3. **Pipeline Parallelism** – divide model into stages and run different mini‑batches concurrently across stages (Gpipe style). Latency per batch is reduced, but overall throughput may suffer if pipeline stalls.

4. **Hybrid Parallelism** – combine data + model or pipeline to balance memory, compute, and communication.

### Synchronization & Communication  
- **Barrier**: ensures all workers finish a step before proceeding.  
- **All‑reduce**: aggregates gradients; NCCL provides efficient GPU‑to‑GPU reduction.  
- **Ring‑reduction vs Tree‑reduction**: trade‑offs between bandwidth usage and latency.

---

## Edge Cases  

| Scenario | Issue | Test |
|----------|-------|------|
| Skewed batch sizes (unequal splits) | Load imbalance → idle GPUs | Verify GPU utilization metrics. |
| Straggler workers in data parallelism | Synchronization stalls | Insert timeouts, monitor per‑worker timings. |
| Memory overflow in model parallel stages | OOM errors | Profile memory on each device; add checkpointing. |
| Network congestion | Gradient staleness | Measure round‑trip times; test with simulated bandwidth limits. |

---

## Optimize & Communicate  

- **Optimization**: overlap communication and computation using CUDA streams; use mixed precision to cut memory traffic; employ gradient compression for high‑latency links.  
- **Narration**: Start by stating the problem (“We need to train a 1 B‑parameter transformer in <24 h”), then walk through how data parallelism scales compute, followed by why model/pipeline help when GPU memory is insufficient. End with concrete numbers (e.g., NCCL achieves ~80 GB/s on NVLink) and the trade‑off decision tree.

> *Signal*: Structured explanation, clear distinction, practical depth, edge‑case awareness, and actionable optimizations—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
