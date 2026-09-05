---
qid: ing_9ad859d872__star__local
question: When do you use spot GPUs, and how do you run workloads on them without
  getting burned?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 322
total_tokens: 566
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:42:01-05:00'
sources: []
---

**Situation** – In late 2023 I was leading a research sprint for a new recommendation engine that required training a transformer on 8 TB of user interaction logs. Our on‑prem GPU cluster was fully booked, and the cloud budget for a month‑long run would exceed $20k.

**Task** – I needed to complete the model in under two weeks while keeping the spend below $5k, and ensure the jobs finished even if spot instances were reclaimed.

**Action** – I set up an autoscaling pool of Spot GPUs on AWS (g4dn.xlarge) with a 0.5‑hour interruption buffer. I containerized the training pipeline with Docker and used Kubeflow Pipelines to orchestrate checkpoints every 30 minutes, storing state in S3. A custom controller monitored spot termination notices; upon a notice it gracefully paused training, persisted the checkpoint, and resumed on a new instance. I also leveraged Spot Fleet’s “capacity-optimized” strategy to minimize eviction rates and set a maximum bid price of $0.15/hr.

**Result** – The model converged in 12 days at an average cost of $3,800—an 80% savings over the on‑prem run—and no data loss occurred during spot preemptions. I learned that combining checkpointing with proactive termination handling turns volatile Spot GPUs into a reliable, budget‑friendly compute backbone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
