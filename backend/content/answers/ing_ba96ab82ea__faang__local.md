---
qid: ing_ba96ab82ea__faang__local
question: 'Explain: Common Vertical Scaling Actions — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 500
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:56:38-05:00'
sources: []
---

**Clarify**  
You’re asking how a ML system scales vertically (adding more resources to a single node) and what actions are common for that. I’ll assume we’re talking about training or inference workloads on a single machine, not distributed clusters.

**Approach**  
1. Identify the bottleneck: CPU, GPU, memory, disk‑IO, network.  
2. Map each resource to an upgrade path (e.g., more vCPUs, larger RAM, faster SSD, higher‑end GPU).  
3. Consider software knobs that can exploit extra resources (batch size, parallelism flags, mixed‑precision).  
4. Evaluate cost vs. benefit: how much latency or throughput improves per dollar.

**Depth**  
- **CPU scaling:** Add cores; enable multi‑threaded libraries (MKL, OpenMP) and set `OMP_NUM_THREADS`.  
- **GPU scaling:** Upgrade to a higher‑end model with more CUDA cores/SMs and larger VRAM. Use mixed‑precision (`float16`) to fit larger batches.  
- **Memory scaling:** Increase RAM or swap to reduce paging; for GPU, use unified memory or host‑pinned buffers.  
- **Storage scaling:** Switch from HDD to NVMe SSD; increase I/O bandwidth with RAID0 or NVMe over PCIe 4.0.  
- **Parallelism knobs:** Increase batch size until GPU memory saturates; enable tensor‑core acceleration (`torch.backends.cudnn.benchmark`).  
- **Software stack tuning:** Profile with tools (NVIDIA Nsight, Intel VTune) to confirm that added resources are utilized.

**Edge Cases**  
- Diminishing returns once a single device is saturated.  
- Memory fragmentation or NUMA effects on multi‑core CPUs.  
- GPU thermal throttling if cooling isn’t upgraded.  
- Data pipeline bottlenecks (e.g., reading from slow disks) that negate hardware gains.

**Optimize & Communicate**  
Start with profiling to find the real limiter, then incrementally add resources while monitoring speedup vs. cost. Present a cost‑benefit curve: e.g., “Adding 32 GB RAM reduced training time by 12 % for a $200 expense.” This shows clear decision logic and keeps interviewers focused on structured thinking rather than just listing hardware upgrades.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
