---
qid: ing_896a9f7804__faang__local
question: Explain tensor parallelism vs pipeline parallelism for inference. When do
  you need each?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 490
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:04:08-05:00'
sources: []
---

**Clarify**  
You’re asking how two common distributed‑inference strategies—*tensor parallelism* and *pipeline parallelism*—differ, and when each is appropriate. I’ll assume we’re dealing with a single large transformer (e.g., GPT‑3) deployed across multiple GPUs or nodes, and that the goal is to reduce latency while keeping memory usage manageable.

**Approach**  
1. Define each method in the context of inference.  
2. Contrast their resource footprints and communication patterns.  
3. Map typical workloads (model size vs batch size vs request frequency) to the right strategy.  

**Depth**  
- **Tensor Parallelism** splits *each* layer’s weight tensors across devices. A single token or small batch is processed by all GPUs in lockstep; each GPU holds only a fraction of the matrix. After local computation, an all‑reduce aggregates partial results.  
  - *Pros*: Minimal pipeline stalls; good for large models that cannot fit on one device.  
  - *Cons*: Requires collective communication per layer → higher latency if bandwidth is limited.

- **Pipeline Parallelism** partitions the model into stages (e.g., layers 1–10, 11–20, …). Each stage runs on a different GPU; an input token flows sequentially through the pipeline.  
  - *Pros*: No all‑reduce per layer; throughput scales with number of stages.  
  - *Cons*: Stalls at stage boundaries for small batch sizes; memory per device equals full model slice.

**Edge Cases**  
- **Very large batch size**: Tensor parallelism still benefits because communication is amortized, but pipeline stalls vanish as multiple micro‑batches overlap.  
- **Low bandwidth interconnect**: Pipeline wins since it relies on point‑to‑point transfers.  
- **Memory‑constrained edge device**: Tensor parallelism may be infeasible; pipeline can run a tiny slice per device.

**Optimize & Communicate**  
In practice, we often combine them (tensor × pipeline). For inference at scale, start with tensor parallelism to fit the model, then add pipeline stages if latency remains high or GPU count is limited. I’d present this trade‑off diagrammatically and validate by measuring end‑to‑end latency on a representative workload.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
