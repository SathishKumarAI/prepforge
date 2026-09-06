---
qid: ing_45bd719c87__fp__local
question: 'Explain: When to Use Vertical Scaling — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 472
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:33:38-05:00'
sources: []
---

**When to use vertical scaling in ML system design?**

Start from the *resource‑bound* problem: a single worker (CPU, GPU, memory) is saturated while the workload (training data, inference requests) grows. The fundamental constraint is that the worker’s **compute budget** limits the throughput or latency; adding more workers does not help because the bottleneck is the *single* resource itself.

Vertical scaling solves this by increasing that budget—adding a larger instance type, more RAM, faster disks, or higher‑clock GPUs. It works only when:

| Condition | Why vertical scaling fixes it |
|-----------|------------------------------|
| **CPU/GPU bound** | A single core or GPU is the limiting factor; adding identical workers would still leave that core idle while other workers wait for data transfer. |
| **Memory‑bound** | The job needs a contiguous memory region (e.g., large embedding tables, batch buffers). Multiple nodes cannot share a single RAM pool without sharding and complex synchronization. |
| **I/O latency critical** | Low‑latency SSDs or NVMe drives are required; network‑based storage adds unacceptable round‑trip time for high‑frequency reads/writes (e.g., parameter server updates). |

From an optimization viewpoint, vertical scaling increases the *capacity* of a single processing element, thereby reducing the *per‑iteration cost* \(C = \frac{L}{P}\) where \(L\) is load and \(P\) is processing power. If \(P\) grows linearly with instance size, latency drops proportionally until the next bottleneck appears.

**Non‑obvious insight:** In distributed training, *parameter synchronization* often becomes the limiting factor once each worker can process its mini‑batch quickly enough. Vertical scaling can actually expose this hidden bottleneck by making each node faster; you’ll then see that communication overhead dominates. Thus, before sharding across nodes, try a larger instance to confirm whether the problem is truly distributed or just local resource starvation.

In short: vertical scaling is your first stop when a single machine’s CPU/GPU/memory/I/O ceiling stops throughput, and you need a quick, low‑complexity remedy that keeps all data in one place.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
