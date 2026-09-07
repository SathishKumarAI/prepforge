---
qid: ing_a04d901ec2__faang__local
question: 'Explain: Multi-GPU Orchestration — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 534
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:57:11-05:00'
sources: []
---

**Clarify**  
We’re asked how a production‑grade system coordinates multiple GPUs to serve large language models (LLMs). Key assumptions:  
- Models are too big for a single GPU and need model parallelism or sharding.  
- Latency must stay below a few hundred ms; throughput can be thousands of requests per second.  
- The infra should tolerate node failures, support dynamic scaling, and expose a simple API to developers.

**Approach**  
1. **Model partitioning** – split the network into stages (e.g., transformer blocks) or shards (token‑wise).  
2. **Distributed runtime** – use a lightweight framework (Ray Serve, DeepSpeed‑Inference, Megatron‑Llama) that manages inter‑GPU communication via NCCL.  
3. **Request routing & batching** – a front‑end router collects requests, groups them into micro‑batches, and forwards each batch to the appropriate GPU pipeline.  
4. **Fault tolerance** – replicate critical stages; use heartbeats and automatic failover to spare GPUs.  
5. **Autoscaling** – monitor queue length / latency; spin up/down worker pods in Kubernetes or ECS.

**Depth**  
- *Pipeline parallelism* pipelines tokens sequentially through GPU shards, yielding ~ O(1) communication per layer but higher pipeline depth.  
- *Tensor/shard parallelism* splits tensors across GPUs, requiring all‑reduce after each operation (NCCL).  
- Latency = inference time + queue delay; batching reduces per‑token cost by amortizing kernel launch overhead.  
- Complexity: O(G·B) for G GPUs and batch size B; communication dominates when model size > GPU memory.

**Edge Cases**  
- Variable request lengths → padding or dynamic batching can waste compute.  
- Hot spot failures in a shard → fallback to replicated stage.  
- Network congestion between nodes → switch from NCCL to GPUDirect RDMA if available.

**Optimize & Communicate**  
We’d benchmark with synthetic workloads, measure per‑stage latency, and iteratively tune batch size and pipeline depth. In an interview I’d explain that the trade‑off is between *latency* (shorter pipelines) and *throughput* (larger batches), and how to pick the sweet spot for a given SLA. Finally, I’d highlight observability: metrics per GPU, error rates, and auto‑remediation scripts—all communicated through dashboards for ops teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
