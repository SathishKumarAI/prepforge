---
qid: ing_4403b76455__faang__local
question: 'Explain: Five teams share a cluster of 64 GPUs for training and inference.
  Design the scheduling and quota system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 606
total_tokens: 851
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:22:43-05:00'
sources: []
---

**Clarify**  
We have five ML teams that need to run both **training jobs (long‑running, GPU‑heavy)** and **inference pipelines (shorter bursts)** on a shared cluster of **64 GPUs**. We must design a scheduler + quota policy that guarantees fair resource distribution, meets SLAs, and protects against starvation or “GPU hogging.”  
*Assumptions to confirm:*  
- All GPUs are homogeneous; each job requests an integer number of GPUs.  
- Jobs have known/estimable runtimes (or can be profiled).  
- Teams have defined priority levels (e.g., production vs research).  

**Approach**  
1. **Quota Layer** – assign each team a *GPU‑hour* quota per day/week and a *concurrent GPU* cap.  
2. **Scheduler Layer** – use a fair‑share scheduler (e.g., Fair Scheduler or Kubernetes QoS) that respects quotas, preempts lower‑priority jobs if needed, and enforces the cap.  
3. **Job Classification** – tag jobs as `training` or `inference`; inference gets higher priority in the same quota slice because it’s latency‑sensitive.  

**Depth**  
- *Quota calculation*: For team i, set `max_concurrent = floor(64 * team_share_i)`. E.g., if shares are 30/20/15/10/5 %, caps become 19,13,9,6,3 GPUs respectively.  
- Scheduler uses a weighted fair‑share algorithm: each queued job receives a token proportional to its requested GPUs; tokens drain as GPUs are allocated.  
- Preemption policy: lower‑priority training jobs can be paused or killed if an inference job from a higher‑priority team needs GPUs and quota would be exceeded.  
- Complexity: O(n log n) per scheduling cycle, negligible overhead on 64 GPUs.

**Edge Cases**  
- **Burst of inference requests** → scheduler must preempt training to honor latency SLAs.  
- **GPU underutilization** → if some teams idle their quota, the scheduler can redistribute unused capacity temporarily (dynamic quota bump).  
- **Quota violation** → enforce hard caps; jobs exceeding cap are queued until slots free.

**Optimize & Communicate**  
- Introduce *elastic quotas*: allow teams to borrow unused GPU‑hours from others at night when overall load is low.  
- Provide a dashboard showing real‑time GPU usage, quota consumption, and pending job wait times for transparency.  
- Explain the trade‑off: strict caps prevent runaway training jobs but may underutilize GPUs; dynamic borrowing maximizes throughput while preserving fairness.

This design gives each team predictable capacity, protects latency‑sensitive inference workloads, and scales linearly with cluster size—exactly what FAANG teams expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
