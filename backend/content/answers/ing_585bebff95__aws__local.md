---
qid: ing_585bebff95__aws__local
question: 'Explain: Design a Distributed Job Scheduler - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 450
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:45:19-05:00'
sources: []
---

**Situation / Task**  
At my previous company we needed to run hundreds of ML training jobs nightly across a shared GPU cluster. The existing cron‑based scheduler caused resource contention, unpredictable runtimes, and no visibility into job health.

**Action**  
I designed **ML‑Scheduler**, a fault‑tolerant distributed system built on AWS:

| Component | Service | Reasoning |
|-----------|---------|-----------|
| Job queue | Amazon SQS + FIFO | Guarantees order, decouples producers/consumers, scales to >10k msgs/s. |
| Orchestrator | Amazon ECS Fargate + Step Functions | Handles state transitions (queued → running → succeeded/failed) without server maintenance; Step Functions gives built‑in retry and circuit‑breaker patterns. |
| Worker pool | EC2 Spot Instances with GPU AMI | Cost‑effective scaling to 50+ GPUs, auto‑scaling via CloudWatch metrics (CPU/Memory utilization). |
| Monitoring | Amazon CloudWatch + XRay | Distributed tracing of job stages; alerts on >5 min latency spikes. |
| Storage | S3 for artifacts, DynamoDB for metadata | Durable, highly available, and low‑latency lookups. |

I added a **policy engine** (AWS Lambda) that enforces per‑team quota limits, preventing runaway jobs.

**Result**  
After deployment:

- Job throughput increased from 120 / night to 480 / night (+300 %).
- Average job completion time dropped by 2.3×.
- Cost savings of $18k/month by shifting to Spot Instances and eliminating idle CPU hours.

**Learning & Ownership**  
I iterated on failure handling after an initial incident where a mis‑configured GPU AMI caused workers to crash; the fix was to add health checks in ECS task definitions, reducing MTTR from 45 min to <5 min. This demonstrates **Ownership**, **Dive Deep**, and a bias for action—core Amazon Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
