---
qid: ing_96a3844ef3__faang__local
question: 'Explain: You run a shared LLM platform for 30 internal teams on one GPU
  fleet. Design the tenancy model: fairness, isolation, and cost attribution.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 555
total_tokens: 809
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:34:39-05:00'
sources: []
---

**Clarify**  
We’re running a single‑GPU fleet that hosts LLM inference for ~30 internal teams. The goal is to (1) guarantee each team gets the compute it needs, (2) prevent one team’s workload from affecting others, and (3) bill teams accurately for their usage. I’d confirm: Do we support batch vs real‑time requests? What SLA (latency/throughput) does each team require? Is there a policy on model versioning or custom fine‑tuning?

**Approach**  
1. **Resource quotas** – assign each team a fixed GPU share (e.g., 0.5–2 GPUs).  
2. **Container isolation** – run each team’s inference in a Docker/Kubernetes pod with cgroups limiting GPU memory and compute.  
3. **Job scheduler** – use a lightweight job queue (e.g., Redis‑based) that respects quotas and priorities, spilling excess to a shared pool.  
4. **Metering** – instrument the inference engine to record per‑request GPU time and memory, aggregating per team for cost attribution.

**Depth**  
- **Fairness**: Static quota guarantees baseline throughput; dynamic oversubscription uses weighted round‑robin with back‑pressure when a pod exceeds its budget.  
- **Isolation**: cgroups enforce memory limits; NVIDIA’s MIG or multi‑process service (MPS) isolates CUDA contexts so one team can’t exhaust the GPU bus.  
- **Cost attribution**: Every inference logs `team_id`, `model_version`, `gpu_seconds`. Cost = `gpu_seconds * price_per_gpu_hour`. For batch jobs, split time proportionally to payload size.

Complexity is O(1) per request for scheduling; memory overhead is minimal (cgroup metadata). Trade‑off: static quotas may underutilize GPUs if some teams are idle; dynamic oversubscription mitigates this but risks violating SLAs.

**Edge cases**  
- A team submits a runaway inference loop → cgroup kills it.  
- GPU failure → pod restarts, logs the outage for billing adjustment.  
- Sudden spike in one team’s traffic → throttling kicks in; we alert ops.

**Optimize & communicate**  
We can layer a reinforcement‑learning scheduler that learns optimal quota adjustments based on historical demand. In interviews I’d emphasize: “First, isolate with cgroups and MIG to guarantee fairness; second, meter precisely for transparent cost attribution; third, iterate quotas via feedback loops.” This demonstrates structured problem solving, clear communication, and depth in technical design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
