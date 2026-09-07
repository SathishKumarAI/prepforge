---
qid: ing_4403b76455__aws__local
question: 'Explain: Five teams share a cluster of 64 GPUs for training and inference.
  Design the scheduling and quota system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 468
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:00:01-05:00'
sources: []
---

**Situation & Task**  
At a previous startup I managed **5 ML teams** that needed to share a single 64‑GPU cluster for both training and inference. The goal was to maximize GPU utilization while guaranteeing each team’s critical deadlines.

**Action – Scheduler + Quota Design**  
I built an *AWS‑native* scheduler using **Amazon ECS with Fargate GPU profiles** plus a custom **Kubernetes (EKS) node pool**.  
1. **Quota Layer** – Each team gets a *GPU quota* defined in an IAM policy (e.g., 10 GPUs for Team A, 8 for B). The policy is enforced by a Lambda that intercepts ECS task submissions and updates the cluster’s resource‑share map.  
2. **Scheduling Layer** – I deployed **KubeScheduler** with a *resource‑aware* custom scheduler plugin that respects the quotas and also applies *fair‑share* weighting.  
3. **Dynamic Scaling** – Spot Instances (p4d.xlarge) back the cluster; an Auto Scaling group scales out when GPU utilization > 80% for > 5 min, ensuring 99.9 % availability.  
4. **Monitoring & Alerting** – CloudWatch metrics feed into a Grafana dashboard; alerts trigger if any team exceeds its quota by > 10 %.  

**Result**  
GPU utilization rose from **58 % to 87 %**, while each team met SLAs (training < 12 h, inference latency < 200 ms). Cost dropped 22 % due to spot‑instance savings.  

**Leadership Principles**  
- *Customer Obsession*: Teams saw instant ROI on GPU time.  
- *Ownership & Dive Deep*: I audited every task for inefficiencies and iterated the scheduler rules quarterly.  

Bar‑raiser notes: I quantified impact, demonstrated ownership by automating quota enforcement, and learned from a failed “one‑size‑fits‑all” policy that required deeper dive into team workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
