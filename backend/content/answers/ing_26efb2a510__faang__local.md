---
qid: ing_26efb2a510__faang__local
question: 'Explain: System Design Interview — Together AI Interview Guide 2026: Open-Model
  Inference, CUDA Kernels, Speculative Decoding, and Enterprise AI \u2013 techinterview'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 488
total_tokens: 749
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:14:06-05:00'
sources: []
---

**Clarify**  
We’re asked to sketch a system that runs *open‑model* inference on GPUs (CUDA kernels), uses *speculative decoding*, and supports an enterprise AI stack (e.g., multi‑tenant, monitoring, compliance). Key assumptions:  
• Models are large LLMs (>10B params) hosted in memory.  
• Inference must be < 100 ms per token for interactive workloads.  
• Enterprise users need isolation, audit logs, and dynamic scaling.

**Approach**  
1. **Model serving layer** – shard the model across GPUs using *tensor‑parallel* + *pipeline parallel* strategies; expose a gRPC API.  
2. **CUDA kernel engine** – implement fused kernels for matmul+softmax+top‑k sampling to reduce launch overhead.  
3. **Speculative decoding** – run two pipelines: a fast “draft” model (smaller, lower precision) and a full “refine” model; accept drafts if probability > threshold, otherwise roll back.  
4. **Enterprise plumbing** – tenant‑aware request routing, per‑user rate limits, audit logging via a sidecar, and policy enforcement through a decision service.

**Depth**  
*CUDA*: Use mixed‑precision (FP16/INT8) with TensorRT for kernels; batch tokens to keep GPUs saturated.  
*Speculative decoding*: Maintain two queues; use a token‑level rollback buffer; complexity ≈ O(n).  
*Scaling*: Autoscale GPU nodes via Kubernetes HPA; use statefulsets for model shards.

**Edge Cases**  
• Token bursts exceeding GPU capacity → backpressure & graceful degradation.  
• Draft rejection probability spikes → increased latency, handle with fallback to single‑pass inference.  
• Multi‑tenant isolation breaches → ensure memory separation and tenant tags in logs.

**Optimize & Communicate**  
- Profile kernel launch times; fuse more ops if bottlenecked.  
- Reduce speculative branch factor by dynamic thresholding based on token entropy.  
- Explain trade‑offs: higher throughput vs. potential hallucinations from drafts, added latency for rollbacks, and the complexity of maintaining consistency across shards.  

This structured design balances performance, reliability, and enterprise governance—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
