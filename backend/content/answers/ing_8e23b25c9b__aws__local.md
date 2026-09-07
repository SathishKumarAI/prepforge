---
qid: ing_8e23b25c9b__aws__local
question: 'Explain: Types of Health Checks — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 515
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:47:25-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Customer Obsession*, *Dive Deep*  
> **Behavioral (STAR):**  
> **S – Situation:** At my previous role I led the migration of a legacy on‑prem health‑check service to an AWS‑native load‑balancer‑based architecture. The existing system had 3+ health‑check types (TCP, HTTP GET, custom script) but suffered from stale metrics and single points of failure.  
> **T – Task:** Redesign the health‑check logic so that every backend instance is monitored in real time, failures are detected within <2 s, and the system scales to 10k instances with zero downtime.  
> **A – Action:** I introduced three layers:  
> 1. **Application‑level checks** (HTTP/HTTPS + custom metrics) run as sidecar containers on each instance, reporting to an Amazon CloudWatch Metrics stream.  
> 2. **Infrastructure‑level checks** using Elastic Load Balancing (ELB) health‑check API (TCP/HTTP) for rapid failure detection.  
> 3. A **centralized Lambda orchestrator** that aggregates metrics every 10 s, applies thresholds, and writes a consolidated “instance‑health” metric to CloudWatch and an SQS queue.  
> The ELB is configured with *deregistration delay* = 30 s and *slow start* = 60 s to smooth scaling events. All components are deployed via CDK in a VPC with private subnets, using IAM roles for least‑privilege access.  
> **R – Result:** Post‑migration, mean time to detect (MTTD) dropped from 45 s to **<2 s**; mean time to recover (MTTR) improved by **70 %**, and the architecture supports auto‑scaling up to 20k instances with an estimated cost saving of **15 %** vs. the legacy solution.  
> **Bar‑raiser cues:** I demonstrated *ownership* by driving end‑to‑end migration, *deep dive* through metric aggregation logic, quantified impact (MTTD/MTTR), and highlighted a failure lesson—initially over‑tuning ELB deregistration caused “blow‑out” traffic; we re‑balanced thresholds after A/B testing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
