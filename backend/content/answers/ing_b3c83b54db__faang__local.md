---
qid: ing_b3c83b54db__faang__local
question: 'Explain: Vertical vs Horizontal Scaling | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 554
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:42:01-05:00'
sources: []
---

**Clarify**  
You’re asking how to grow a machine‑learning (ML) system: *vertical* (bigger machines) versus *horizontal* (more machines). I’ll assume we’re scaling inference workloads for a production model that must stay within latency budgets.

**Approach**  
1. Compare resource needs (CPU, GPU, memory, disk, network).  
2. Identify the bottleneck (compute vs IO).  
3. Evaluate cost, complexity, and operational overhead of each strategy.  
4. Map to concrete architectural patterns (e.g., model server clusters vs. single‑node GPUs).

**Depth**  

| Aspect | Vertical Scaling | Horizontal Scaling |
|--------|------------------|--------------------|
| **Compute** | Add more powerful CPUs/GPUs; simpler deployment, but limited by single‑machine ceiling and thermal limits. | Distribute inference across a cluster (e.g., TensorFlow Serving + gRPC). Enables linear throughput scaling up to network limits. |
| **Memory & Disk** | Requires larger RAM/disk; expensive for high‑capacity GPUs. | Replicate model shards or use shared storage (S3, GCS) with local caching per node. |
| **Latency** | Lower inter‑process overhead; single‑point latency is minimal but can suffer from contention. | Introduces network hop and load balancer latency; mitigated by careful placement and batching. |
| **Fault Tolerance** | Single failure point; need hot standby or live migration. | Built‑in redundancy; graceful degradation if a node fails. |
| **Cost & Ops** | Higher per‑unit cost, complex cooling/maintenance. | Requires orchestration (K8s, ECS), load balancers, scaling policies; but cheaper per throughput and easier auto‑scaling. |

**Edge Cases**  
- Models that are *GPU‑bound* may hit memory limits even on the largest GPU; horizontal scaling with model parallelism becomes necessary.  
- Latency‑critical services (e.g., real‑time recommendation) may prefer vertical scaling to avoid network jitter, but can still benefit from a small cluster of ultra‑low‑latency nodes.

**Optimize & Communicate**  
Start with vertical scaling for rapid prototyping and small traffic; monitor CPU/GPU utilization. Once saturation hits, transition to horizontal scaling: deploy stateless inference pods behind a load balancer, use model sharding or batching, and implement autoscaling based on queue depth. Explain that this hybrid strategy balances simplicity, cost, and robustness—exactly the kind of trade‑off reasoning FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
