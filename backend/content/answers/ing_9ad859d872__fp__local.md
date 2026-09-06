---
qid: ing_9ad859d872__fp__local
question: When do you use spot GPUs, and how do you run workloads on them without
  getting burned?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 408
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:34:52-05:00'
sources: []
---

**Why “spot” GPUs are a tool, not a crutch**

At the core of every deep‑learning job is *compute density*: a model’s floating‑point operations per second (FLOPs) divided by its data throughput. A spot instance offers high FLOPs at a fraction of on‑demand price because cloud providers simply reclaim unused capacity. The problem reduces to a **knapsack**: maximize FLOPs under a budget constraint while respecting *availability probability*.

1. **When to use them**  
   - **Batch, embarrassingly parallel jobs** (e.g., hyper‑parameter sweeps, inference for static datasets).  
   - Workloads that can tolerate arbitrary restarts and have checkpointing built in.  
   - Jobs with a clear *time budget* but no hard deadline.

2. **How to run without burning money**  
   - **Checkpoint every 5–10 min**; store checkpoints on persistent storage (S3, GCS).  
   - **Use preemptible‑aware schedulers** (Kubeflow, AWS Batch) that automatically restart the job on a new spot instance.  
   - **Set a maximum runtime or cost cap** in your orchestration tool to abort if the spot price spikes.  
   - **Blend with on‑demand GPUs**: run critical phases (model convergence) on guaranteed hardware; reserve spot for the rest.

**Non‑obvious insight:** Spot markets are *price‑discriminated by demand curves*. A sudden spike often reflects a temporary surge in a single tenant’s workload. By aligning your checkpoints with **cloud provider “maintenance windows”** (usually early morning UTC), you can reduce preemption risk more than simply buying at the lowest bid. This subtle timing hack saves both money and time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
