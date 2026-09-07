---
qid: ing_8cb1364bd1__aws__local
question: Do you have a bulk pricing? — The Hundred-Page Machine Learning Book by
  Andriy Burkov
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 447
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:44:04-05:00'
sources: []
---

**Behavioral (Customer Obsession + Ownership)**  
*Situation*: A client in retail wanted to run 1 M training jobs per month on a new ML platform.  
*Task*: Show them how we can scale cost‑effectively while keeping performance.  
*Action*: I drafted an SLA‑based bulk‑pricing model, using spot instances for 70 % of the load and reserved instances for the baseline. I added a tiered discount: 10 % off after 500 k jobs, 20 % after 1 M, and a custom “enterprise” rate above that.  
*Result*: The client adopted the plan, reducing their spend from $2.4 M to $1.7 M per year (30 % savings) while maintaining <1 % SLA breaches.

**Technical/System (Dive Deep + Deliver Results)**  
- **Requirements**: 1 M jobs/month → ~34k/day, each job ≈10 min GPU time.  
- **Design**:
  - *Compute*: Use Amazon SageMaker Processing with GPU Spot Fleet (max 70 %) + Reserved Instances for baseline.  
  - *Storage*: S3 for data & checkpoints; lifecycle policies to archive old artifacts.  
  - *Cost Control*: AWS Cost Explorer + Athena queries on CloudTrail logs to monitor usage by job type and spot/RI mix.  
- **Scalability**: Auto‑scaling on SageMaker endpoints ensures up to 10× concurrent jobs.  
- **Availability**: Multi‑AZ deployment, health checks, and automatic failover to on‑demand if spot is interrupted.  
- **Cost vs Trade‑off**: Spot reduces GPU cost by ~60 % but adds interruption risk; RIs guarantee baseline capacity at a 30 % discount over On‑Demand.

**Bar‑raiser cues**: Ownership (I led the pricing model), dive deep into cost data, quantified impact (30 % savings), and learning from failure (handled spot interruptions with graceful fallback).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
