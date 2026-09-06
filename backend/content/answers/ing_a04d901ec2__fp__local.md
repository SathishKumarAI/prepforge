---
qid: ing_a04d901ec2__fp__local
question: 'Explain: Multi-GPU Orchestration — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 537
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:46:37-05:00'
sources: []
---

### Multi‑GPU Orchestration for AI Serving

When an inference job arrives, the goal is **minimise end‑to‑end latency** while keeping **throughput high** and respecting each GPU’s memory budget.  
Formally, we must solve  

\[
\min_{x}\; \max_i\{\,t_i(x)\,\}\quad
\text{s.t. }\sum_i x_i \le N_{\text{GPUs}},\;
M_i(x) \le B_i ,
\]

where \(x_i\) is the number of requests routed to GPU \(i\),  
\(t_i(\cdot)\) the per‑request processing time (including data transfer, kernel launch, and post‑processing),  
and \(M_i(\cdot)\) the memory usage.  
This is a *resource‑constrained scheduling* problem that can be viewed as a linear program once we approximate \(t_i\) and \(M_i\) linearly in batch size.

**Why orchestration matters**

1. **Memory fragmentation:** A single large model may not fit on one GPU; partitioning across devices reduces per‑GPU memory load.
2. **Bandwidth bottlenecks:** Even if compute is idle, PCIe or NVLink traffic can dominate latency; the scheduler must balance compute and communication.
3. **Dynamic workloads:** Incoming request rates fluctuate; static placement leads to either under‑utilisation (high latency) or oversubscription (OOM).

**Deep insight often missed**

The *optimal* batch size for a GPU is not the one that maximises utilisation, but the one that minimises the *maximum* per‑request time across all GPUs. Small batches avoid queuing delays on slower GPUs; larger ones exploit parallelism when all devices are already busy. Thus, orchestration must treat latency as a **min–max** objective rather than a simple throughput maximisation.

By solving this optimisation online—using lightweight profiling and predictive models—serving systems can dynamically re‑allocate workloads, ensuring low latency even under heavy, heterogeneous traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
