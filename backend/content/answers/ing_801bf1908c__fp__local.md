---
qid: ing_801bf1908c__fp__local
question: 'Explain: NUMA Awareness and CPU Topology — Virtualization Architecture
  - by Neo Kim and Ayaan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 355
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:37:52-05:00'
sources: []
---

**NUMA awareness in virtualized CPU topology**

When a processor is *Non‑Uniform Memory Access* (NUMA) compliant, each core belongs to a node that owns its local DRAM bank. The fundamental problem NUMA solves is the **latency asymmetry** between accessing local versus remote memory: a core’s own cache‑line fetches in ~30 ns, while fetching from another node costs >80 ns and consumes inter‑node links. In a virtualized environment this asymmetry becomes a *hidden cost* because a guest VM may be scheduled on any physical core, unaware of the underlying node structure.

The solution is to expose **CPU topology** (NUMA nodes, sockets, cores) to the hypervisor and, ultimately, to the guest’s scheduler. The hypervisor maps virtual CPUs (vCPUs) to *physical* CPU resources respecting node boundaries, so that a VM’s hot‑threads stay on the same NUMA node. This reduces cross‑node traffic, preserves cache locality, and keeps the memory controller contention low.

**Non‑obvious insight:**  
NUMA awareness is not just about keeping threads local; it also *informs* memory placement policies. By aligning vCPU scheduling with memory allocation (e.g., using huge pages pinned to the same node), a hypervisor can achieve *memory affinity*, turning what looks like a simple scheduling tweak into a joint CPU‑memory optimization that cuts bandwidth bottlenecks by up to 30 %. This duality—coordinating compute and data locality—is why NUMA-aware virtualization outperforms naive core‑only mapping.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
