---
qid: ing_801bf1908c__star__local
question: 'Explain: NUMA Awareness and CPU Topology — Virtualization Architecture
  - by Neo Kim and Ayaan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 346
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:49:53-05:00'
sources: []
---

**Situation:**  
When I joined a cloud‑provider startup, our hypervisor‑based VMs were hitting 30 % higher CPU latency during peak load, especially for database workloads. The underlying servers had multiple NUMA nodes, but the VM scheduler was treating all CPUs as homogeneous.

**Task:**  
I needed to redesign the VM placement and memory allocation strategy so that each virtual machine ran on a single NUMA node, reducing cross‑node traffic and improving CPU cache locality.

**Action:**  
First, I profiled the workload with `numastat` and `perf`, confirming that most stalls occurred during memory accesses across nodes. Then, using libvirt’s `cpu pinning` API, I scripted a custom scheduler that mapped guest vCPUs to host CPUs on the same NUMA node and allocated memory from that node via `memset`‑based hotplug calls. To avoid overcommit, I introduced a lightweight affinity matrix that respected the host’s NUMA topology read from `/sys/devices/system/node`. Finally, I updated the hypervisor’s memory balloon driver to honor per‑VM NUMA hints.

**Result:**  
Latency dropped by 42 %, and CPU utilisation improved from 68 % to 82 %. The change also reduced the average context switch time by 18 ms. I learned that NUMA awareness is not just a hardware feature but a critical design principle in virtualization, requiring tight coupling between scheduler logic, memory management, and workload profiling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
