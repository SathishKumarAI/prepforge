---
qid: ing_1300b06ae8__faang__local
question: 'Explain: Multi-tenant fairness and noisy neighbours'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 502
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:27:57-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *multi‑tenant fairness* in shared AI resources and the *noisy‑neighbour* problem that can break it. I’ll assume we’re talking about a cloud platform where many users deploy ML models on shared GPUs/TPUs, and each model is an isolated “tenant”.

**Approach**  
1. Define multi‑tenant fairness: equal or proportional access to compute, latency, throughput, and cost.  
2. Explain noisy neighbours: one tenant’s workload can degrade others’ performance via contention (memory bandwidth, cache, I/O).  
3. Show typical mitigation techniques (resource quotas, scheduling, isolation).  

**Depth**  
- *Fairness metrics*: per‑tenant latency SLA, resource share ratios, weighted fairness (e.g., max‑min).  
- *Noisy neighbour causes*:  
  - **Memory bandwidth contention** – heavy matrix ops saturate bus.  
  - **Cache thrashing** – large models evict each other’s data.  
  - **I/O spikes** – training jobs write checkpoints, pulling I/O head.  
  - **Dynamic voltage/frequency scaling (DVFS)** – one tenant’s load forces GPU to throttle for all.  
- *Mitigations*:  
  - **GPU virtualization**: vGPUs with fixed memory & compute slices.  
  - **Scheduling policies**: fair‑share or deadline‑aware queues.  
  - **Hardware partitioning**: NUMA‑aware binding, cache partitioning (Intel CAT).  
  - **Monitoring + auto‑rebalancing**: detect latency spikes → migrate to idle GPU.

**Edge Cases**  
- A tenant with a *very* small model may still hog memory bandwidth if it runs many concurrent instances.  
- Batch size tuning can inadvertently create noisy neighbours; need per‑tenant batch caps.  
- Sudden spikes from a single user’s training job can violate SLA even with quotas—requires real‑time throttling.

**Optimize & Communicate**  
Explain trade‑offs: tighter isolation (vGPU slices) reduces overall utilization but guarantees fairness; looser sharing boosts throughput but increases noisy‑neighbour risk. Emphasize that a robust system blends static quotas with dynamic monitoring, and that clear SLAs plus automated rollback are key to maintaining multi‑tenant fairness in AI workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
