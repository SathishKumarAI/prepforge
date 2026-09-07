---
qid: ing_b711143686__faang__local
question: Why is load balancing LLM inference different from load balancing stateless
  HTTP, and what does a good routing layer do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 594
total_tokens: 840
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:48:45-05:00'
sources: []
---

**Clarify**  
You’re asking why scaling a large‑language‑model (LLM) inference service is not the same as balancing ordinary stateless HTTP requests, and what responsibilities a “good” routing layer should have.

Assumptions:  
1. LLM inference is CPU/GPU‑bound, memory‑heavy, and latency‑sensitive.  
2. The system can run multiple model replicas or shard across GPUs.  
3. Clients may issue long‑running prompts that require session state.

**Approach**  
1. Identify the key differences (stateful vs stateless, resource profiles).  
2. Map each difference to a routing requirement.  
3. Define the properties of an effective router: load estimation, fast failover, and context awareness.

**Depth**  

| LLM Inference | Stateless HTTP |
|---------------|----------------|
| **Memory & GPU usage** – each request can consume 10–100 GB RAM or a fraction of a GPU; oversubscription kills throughput. | CPU only; memory per request is small. |
| **Latency‑sensitive batch windows** – requests are often queued for micro‑batches to amortize GPU kernel launches. | Each request served immediately. |
| **Session state / streaming** – prompts may span multiple calls, requiring a consistent replica or shard. | No persistence across calls. |

A good routing layer must:

1. **Profile workload**: estimate per‑request memory/GPU load and queue size; use historical latency histograms.  
2. **Batch-aware dispatch**: place requests into micro‑batches on the same GPU, respecting batch size limits to maximize throughput while keeping tail latency low.  
3. **Session affinity**: route all turns of a conversation to the same replica or shard, using sticky tokens or consistent hashing.  
4. **Dynamic scaling**: spin up/down replicas based on real‑time load and resource saturation; use predictive autoscaling.  
5. **Fast failure detection & fallback**: detect GPU stalls or memory leaks, redirect traffic to healthy nodes instantly.

**Edge cases**  

* Sudden “prompt storm” (many large prompts) → buffer overflow → backpressure.  
* Hot shards causing hotspotting → shard rebalancing needed.  
* Mixed precision workloads → dynamic GPU allocation.

Test with synthetic prompt mixes, varying batch sizes, and failure injection.

**Optimize & communicate**  
Explain that the router is essentially a *resource scheduler* plus a *session manager*. Emphasize trade‑offs: tighter batching improves GPU utilization but increases tail latency; aggressive session stickiness simplifies state but can cause uneven load. Convey that a robust routing layer turns LLM inference from a “hard‑to‑scale” workload into a predictable, high‑throughput service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
