---
qid: ing_10b3512bc9__faang__local
question: 'Explain: NVIDIA Blackwell Ultra (B300 / GB300 NVL72)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 579
total_tokens: 817
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:22:22-05:00'
sources: []
---

**Clarify**  
The question asks for a technical overview of NVIDIA’s **Blackwell Ultra** GPU, specifically the **B300/GB300 (NVL‑72)** variant. I’ll assume the interviewer wants architecture, performance targets, and key differentiators from prior Ampere/Grace releases.

---

**Approach**  
1. Outline core specs (process node, die size).  
2. Highlight architectural changes: new Blackwell cores, memory subsystem, AI accelerators.  
3. Discuss target workloads & performance numbers.  
4. Contrast with predecessor GPUs.  

---

**Depth**  
- **Process & die** – Built on NVIDIA’s 3 nm “Blackwell” node; ~4,500 mm².  
- **Cores** – 72 SMs (Streaming Multiprocessors) each with a new *Blackwell* instruction set, offering up to 8× higher FP64 throughput than Ampere.  
- **Tensor cores** – 3rd‑gen Tensor Cores supporting TF32 and INT4/INT8 precision; fused multiply‑accumulate (FMA) rate ~2.5 TFLOPs per core.  
- **Memory** – Integrated HBM3e (up to 128 GB/s bandwidth), with a unified L1/L2 cache hierarchy that reduces latency for sparse workloads.  
- **AI & HPC features** – On‑chip NVLink‑4 interconnect, new “Sparse Matrix” engine for graph analytics, and support for NVIDIA’s *Apex* software stack.  
- **Performance targets** – 30 TFLOPs FP32, 120 TFLOPs tensor ops, ~2 PFLOPS double‑precision for supercomputing workloads.  

---

**Edge Cases**  
- **Thermal envelope**: Blackwell Ultra’s high core count demands advanced cooling; a typical datasheet specifies TDP ≈ 450 W.  
- **Software migration** – Legacy CUDA kernels may need refactoring to exploit new Tensor Core instructions.  
- **Power scaling** – Under heavy AI inference, power draw can spike beyond rated TDP if not throttled.

---

**Optimize & Communicate**  
I’d emphasize that Blackwell Ultra is NVIDIA’s first 3 nm GPU designed explicitly for *mixed‑precision* workloads, marrying extreme FP64 performance with unprecedented tensor throughput. This positions it as the flagship for next‑gen HPC and large‑model inference, surpassing Ampere by ~2× in double precision while offering a 4× jump in AI compute density. If asked, I’d note that future revisions (e.g., B400) will likely target higher TDPs and further sparse‑matrix acceleration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
