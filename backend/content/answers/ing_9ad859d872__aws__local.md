---
qid: ing_9ad859d872__aws__local
question: When do you use spot GPUs, and how do you run workloads on them without
  getting burned?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 661
total_tokens: 899
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:15:21-05:00'
sources: []
---

**When do I use Spot GPUs?**  
I reserve Spot GPU instances for *non‑time‑critical, batch ML training* and inference jobs that can tolerate interruptions—e.g., hyper‑parameter sweeps or nightly model refreshes.  

**How do I run workloads without getting burned?**  

| Step | What it solves | AWS service(s) |
|------|----------------|----------------|
| 1️⃣ **Define a Spot Fleet with Diversified AMIs** | Reduces the chance of all instances being evicted at once | EC2 Spot Fleet, Auto Scaling Group |
| 2️⃣ **Add Hibernation and Grace‑period timers** | Allows in‑flight jobs to pause instead of terminate | Spot Instance hibernation, CloudWatch Alarms |
| 3️⃣ **Persist state to S3 + DynamoDB checkpoints** | Guarantees resumable training steps | S3, DynamoDB |
| 4️⃣ **Use SageMaker Processing with Spot options** | Abstracts away instance management, auto‑retries on eviction | SageMaker Processing |
| 5️⃣ **Monitor cost & performance in real time** | Detect runaway jobs or underutilization | CloudWatch + Cost Explorer |

**STAR example**

- *Situation:* Our ML team needed to train 120 models nightly, costing ~\$10k/month on On‑Demand GPUs.  
- *Task:* Cut GPU spend by 70% while keeping a 95 % success rate.  
- *Action:* Implemented a Spot Fleet (p2.xlarge + p3.8xlarge) with hibernation enabled and S3 checkpoints every epoch. Added CloudWatch alarms that trigger a Lambda to spin up On‑Demand instances if the fleet is below 80 % capacity for >5 min.  
- *Result:* GPU cost fell to \$3k/month (70 % reduction). Training success rate rose from 82 % to 96 %. We saved ~\$7k per month, and the team spent 30 % less time managing infrastructure.

**Bar‑raiser check**

- **Ownership:** I own the full lifecycle—deployment, monitoring, rollback.  
- **Dive Deep:** I quantified eviction rates (average 1 eviction/2 h) and tuned hibernation windows accordingly.  
- **Quantified Impact:** 70 % cost savings + 14 % uptime gain.  
- **Learning from Failure:** After an initial spike in evictions, I added a “fallback pool” of On‑Demand instances; now we never exceed our SLA.

**Leadership Principles Highlighted**

- *Customer Obsession:* Delivering reliable models at lower cost for product teams.  
- *Ownership & Dive Deep:* Designing the end‑to‑end Spot strategy and continuously optimizing it.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
