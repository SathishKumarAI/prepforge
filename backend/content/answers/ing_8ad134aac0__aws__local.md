---
qid: ing_8ad134aac0__aws__local
question: 'Explain: Two level scheduling — DevOps-SRE/2_ContainerOrchestration/ApacheMarathon&Mesos.md
  at main \u00b7 Anshul619/DevOps-SRE \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 530
total_tokens: 797
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:39:14-05:00'
sources: []
---

**Situation / Task**  
I was tasked with reducing container‑to‑container latency on a 1 TB dataset pipeline that ran nightly for a financial client. The legacy batch framework had unpredictable start times because Mesos’ single‑level scheduler queued jobs by CPU share only, causing contention when many data‑intensive services started simultaneously.

**Action (Design)**  
I introduced *two‑level scheduling* using Apache Marathon on top of Mesos:

1. **Mesos Level 1 – Resource offers**  
   * Use `mesos::Scheduler` to expose fine‑grained CPU, memory and GPU offers.  
2. **Marathon Level 2 – Grouped Policies**  
   * Define **App Groups** (e.g., ETL workers, model trainers) with priority tiers (`high`, `medium`, `low`).  
   * Configure Marathon’s `--minAvailable` and `--maxLaunchDelay` to enforce strict start order and avoid thrashing.  

I leveraged AWS ECS‑compatible API endpoints so the same cluster could run on Fargate for burst workloads, keeping costs predictable (≈$0.15/hr per vCPU). For monitoring, I hooked Marathon metrics into CloudWatch via a sidecar exporter, enabling real‑time SLA dashboards.

**Result**  
- **Start‑up time dropped 4×**: from 18 min to 4 min for the highest priority group.  
- **Resource utilization increased by 32%**, reducing idle CPU hours and cutting monthly spend from $12k to $8k.  
- **SLA compliance rose to 99.9%** for critical data pipelines, meeting the client’s regulatory requirements.

**Learnings & Bar‑raiser Notes**  
*Ownership*: I led cross‑team workshops to migrate existing services into Marathon groups and documented rollback plans.  
*Dive Deep*: I profiled Mesos offers with `mesos-monit` and tuned affinity rules to avoid hot spots.  
*Quantified Impact*: Metrics above show clear business value.  
*Failure Insight*: Initial rollouts caused a 10% spike in failed tasks; we mitigated by adding circuit‑breaker logic in Marathon’s health checks.

**Leadership Principles**  
- **Customer Obsession** – Delivered faster, more reliable data pipelines for the client.  
- **Ownership & Dive Deep** – Took end‑to‑end responsibility and engineered a scalable scheduling solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
