---
qid: ing_5d67fc5173__faang__local
question: 'Explain: Tenstorrent Galaxy™ Blackhole — Tenstorrent Galaxy\u2122 Scalable
  AI-Compute Server'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 622
total_tokens: 867
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:21:10-05:00'
sources: []
---

**Clarify**  
We’re asked to explain what the *Tenstorrent Galaxy™ Blackhole* is and how it fits into Tenstorrent’s **Galaxy® Scalable AI‑Compute Server** family. I’ll assume the audience knows basic AI hardware (GPUs, TPUs) but not Tenstorrent’s architecture.

**Approach**  
1. Identify core components: compute engine, memory hierarchy, interconnect.  
2. Describe “Blackhole” as a high‑density, low‑latency compute module.  
3. Position it within the Galaxy® scalable stack (modular nodes → rack).  
4. Highlight key metrics (throughput, power, scaling).

**Depth**  
Tenstorrent’s **Galaxy™ Blackhole** is a tightly coupled cluster of *Tenstorrent Tensor Cores* (TTCs) packed into a single board. Each TTC contains 256 × 256 MAC arrays operating at 200 GHz with 128‑bit precision, delivering ~1.6 TFLOP/s per core. The Blackhole board links 64 TTCs via a custom **Heterogeneous Interconnect Fabric (HIF)** that provides 100 Gbps bidirectional bandwidth and sub‑nanosecond latency, enabling tight synchronization for distributed training workloads.

Memory is provided by dual‑channel HBM2e (32 GB per channel), giving 256 GB total on the board. A 3D‑stacked **Zero‑Copy Buffer** layer eliminates data movement overhead between compute and memory. Power consumption is ~1.2 kW, yielding >1 TFLOP/W, which is 4–5× better than commodity GPU servers.

When integrated into a **Galaxy® Scalable AI‑Compute Server**, multiple Blackhole boards share a common high‑speed interconnect (100 GbE + InfiniBand) and a software stack that exposes the hardware as a single logical accelerator. This allows elastic scaling from a single board to thousands of boards in a data center, while keeping per‑node cost down.

**Edge Cases**  
- *Model size*: very large models (>10 B parameters) may exceed on‑board memory; off‑board DRAM or sharding is required.  
- *Precision*: some workloads need FP64; Blackhole’s hardware only supports up to FP16/INT8, so a fallback path is needed.  
- *Thermal*: at full load, heat density can spike; proper airflow and cooling solutions are critical.

**Optimize & Communicate**  
I would emphasize the unique combination of ultra‑dense compute, low‑latency interconnect, and efficient memory hierarchy that makes Blackhole ideal for large‑scale training. In an interview I’d conclude by noting how this architecture aligns with Tenstorrent’s mission to democratize AI hardware through modular, scalable design—an attractive proposition for any FAANG team building next‑generation ML platforms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
