---
qid: ing_6cb98b8177__aws__local
question: 'Explain: Disadvantage(s): failover — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 271
output_tokens: 505
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:29:37-05:00'
sources: []
---

**Situation & Task**  
I was leading the migration of a CI/CD pipeline (GitHub Actions) to an on‑prem Kubernetes cluster for a SaaS product that served 200 k concurrent users. The goal was to reduce vendor lock‑in and cut monthly spend by 30 %. A key requirement was “failover” – automatic switchover from GitHub to the internal runner if GitHub’s API became unavailable.

**Action & Design**  
I architected a **dual‑runner system**:  
* **Primary** – GitHub Actions (public) with 5× higher throughput.  
* **Secondary** – self‑hosted runners on EKS, backed by an Auto Scaling Group that scales from 2 to 20 nodes based on queue depth.

Failover logic lives in a lightweight Lambda function polling the GitHub API health endpoint every 10 s. If latency >200 ms or error rate >5 %, it flips a flag in DynamoDB; runners read this flag and pull jobs from an SQS queue instead of GitHub.  

**Disadvantage(s) – Failover Complexity**  
1. **State Drift** – Job metadata (e.g., secrets, environment variables) must be replicated across both systems; any mismatch leads to failures.  
2. **Cost & Latency Trade‑off** – Running 20 nodes idle for most of the day inflates cost (~$5k/month).  
3. **Operational Overhead** – Requires continuous health monitoring and manual rollback procedures if Lambda misfires.

I quantified impact: after implementation, we observed a *4×* reduction in vendor downtime incidents but a *12%* increase in overall infra cost during low‑traffic periods.

**Result & Learning**  
We achieved 99.9 % availability for CI/CD while keeping costs below the target by introducing an auto‑shutdown schedule for secondary runners. The key lesson: **failover introduces state‑sync and cost complexity; a lean, data‑driven approach to scaling is essential**.

> *Leadership Principles:* **Ownership** (I drove the end‑to‑end solution), **Dive Deep** (analyzed failure modes quantitatively), **Bias for Action** (implemented failover in 3 sprints).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
