---
qid: ing_c5577c3429__faang__local
question: 'Q: How do you handle "Noisy Neighbors" in a multi-tenant LLM cluster?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 580
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:19:40-05:00'
sources: []
---

**Clarify**  
We’re asked how to mitigate interference (“noisy neighbors”) when multiple large‑language‑model (LLM) workloads share the same GPU/CPU cluster.  
Assumptions to confirm:  
- All tenants run inference or fine‑tuning jobs on shared hardware.  
- We have observability (metrics, logs) and control over job scheduling.  
- Latency is a primary SLAs; throughput may be secondary.

**Approach**  
1. **Resource isolation** – enforce per‑tenant limits on GPU memory, compute slots, and I/O bandwidth.  
2. **Dynamic scheduling** – use a fair‑share scheduler that throttles or migrates jobs when a tenant exceeds its quota.  
3. **Performance monitoring** – collect real‑time metrics (GPU utilisation, queue length, latency) to detect spikes.  
4. **Noise‑guarding policies** – implement “noisy‑neighbor” penalties: if a job’s CPU/GPU usage consistently pushes others below SLA, reduce its priority or suspend it.

**Depth**  
- *Isolation*: use Docker/Podman with cgroups v2 to cap GPU memory (`--gpus` flag) and set CPU shares. For GPUs, NVIDIA Multi‑Process Service (MPS) can multiplex kernels, but we still enforce a hard memory ceiling per container.  
- *Scheduler*: extend Kubernetes’ Cluster Autoscaler + custom scheduler plugin that reads tenant quotas from ConfigMaps. When utilisation > 80 % for >30 s, the scheduler evicts or throttles the job. Complexity: O(n) over running pods each tick; acceptable with low‑frequency ticks (5–10 s).  
- *Monitoring*: Prometheus exporters on GPUs (`nvidia-smi`) + custom latency probes per tenant. Alerts trigger auto‑scaling or throttling.  
- *Penalty logic*: compute a “noise score” = Σ(tenant utilisation – quota)²; if > threshold, downgrade priority. This is O(1) per event.

**Edge Cases**  
- **Burst workloads**: short spikes may be misinterpreted as noise; use moving‑average smoothing.  
- **Cold start**: new tenants may temporarily exceed quota during model warm‑up—provide a grace period.  
- **Hardware failures**: if a GPU dies, all tenants lose resources; fallback to CPU or other GPUs.

**Optimize & Communicate**  
To improve, integrate reinforcement learning that predicts future utilisation and pre‑emptively reallocates slots. Communicate decisions via dashboards (Grafana) so tenants see why their job was throttled. This structured pipeline ensures fair resource sharing, predictable latency, and clear accountability—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
