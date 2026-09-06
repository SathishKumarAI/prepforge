---
qid: ing_ba96ab82ea__think__local
question: 'Explain: Common Vertical Scaling Actions — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 468
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:15:11-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What is “vertical scaling” in ML systems?* – Adding resources (CPU/GPU, RAM) to a single node or instance.  
- *Which components are involved?* – Training jobs, inference servers, data pipelines.  
- *Audience level?* – Assume readers know basic cloud infra but not deep system design.

**2️⃣ Adopt a “resource‑centric” framework**  
- **Capacity Planning** → Estimate peak CPU/GPU cycles, memory footprint, I/O bandwidth.  
- **Performance Modeling** → Use profiling (e.g., TensorBoard, nvidia-smi) to map load ↔ latency/throughput.  
- **Cost–Benefit Analysis** – Compare larger instance types vs. horizontal scaling costs.

**3️⃣ Step‑by‑step reasoning**  
1. Identify bottlenecks via monitoring (CPU stalls, memory swaps, GPU under‑utilization).  
2. Quantify how many more cores/GB would close the gap.  
3. Evaluate cloud options: on‑prem VMs, spot instances, autoscaling with larger sizes.  
4. Consider “burst” or “reserved” instance models for predictable load spikes.  
5. Validate with a pilot: spin up the upgraded node, run representative workloads, measure improvements.

**4️⃣ Common traps to avoid**  
- Assuming more cores always help; ignore memory bandwidth or I/O contention.  
- Ignoring cost elasticity—larger instances may be cheaper per core but not per dollar of throughput.  
- Over‑provisioning for “future” traffic that never materializes.

**5️⃣ Sanity‑check & communicate**  
- Re‑explain the scaling decision in one sentence: *“We chose a larger instance because memory bandwidth, not CPU cores, was the limiting factor.”*  
- Use visual aids (CPU/GPU utilization graphs) to back up the reasoning.  
- End with next steps: monitor post‑upgrade, revisit if traffic patterns shift.

This process keeps the explanation focused, data‑driven, and actionable for ML system designers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
