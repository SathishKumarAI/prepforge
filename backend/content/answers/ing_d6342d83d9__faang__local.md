---
qid: ing_d6342d83d9__faang__local
question: You're training on tens of thousands of GPUs and hardware fails constantly.
  How do you keep goodput high?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 471
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:57:20-05:00'
sources: []
---

**Clarify**  
We’re training a massive model on > 10⁴ GPUs, but the infrastructure is flaky—nodes drop out, networking hiccups, and storage stalls. The goal: keep *goodput* (useful compute per wall‑clock) as high as possible while respecting budget and deadlines.  
Assumptions to confirm:  
- Failure rate ≈ 1–5 % per hour.  
- Checkpoint interval is a few minutes; we can afford 10‑sec I/O.  
- Compute budget is tight; spinning idle GPUs wastes money.

**Approach**  
1. **Resilient scheduling:** use a dynamic cluster manager (e.g., Kubernetes + Ray) that tracks GPU health and migrates tasks on the fly.  
2. **Redundant checkpoints:** write checkpoints to multiple, geographically diverse object stores (S3 + GCS).  
3. **Speculative execution:** launch lightweight replicas of long‑running jobs; kill the original if a replica finishes earlier.  
4. **Adaptive batch sizing:** shrink batch size when failures spike to reduce memory pressure and retry overhead.  
5. **Hardware health telemetry:** feed GPU temperature, error logs into a predictive model that preempts failures.

**Depth**  
- Scheduler: O(1) per‑GPU status update; migration cost ≈ 30 s (checkpoint + warm‑up).  
- Checkpoints: 50 GB/epoch → 10 s write on SSD; redundant copy adds 2× I/O but amortized over epochs.  
- Speculation overhead: ~5 % compute waste when no failure, but saves >20 % time during spikes.

**Edge Cases**  
- Sudden rack‑wide outage → fall back to cloud burst capacity.  
- Corrupt checkpoints → validate via hash before restore.  
- Network partition → pause training until quorum restored.

**Optimize & Communicate**  
Iteratively profile *goodput* vs. checkpoint interval; tune the speculative threshold. Present findings with dashboards (GPU utilization, failure latency). Emphasize that a hybrid of proactive health checks and reactive scheduling yields the most robust throughput under flaky hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
