---
qid: ing_0aca1ca36b__aws__local
question: Your primary model provider goes down. What does your incident response
  look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 478
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:50:09-05:00'
sources: []
---

**Situation (S)**  
Last quarter we were running a production recommendation engine on **Amazon SageMaker** for our e‑commerce platform. Mid‑night on March 12 the primary model endpoint went down after a sudden spot‑instance termination in us‑east‑1.

**Task (T)**  
I had to restore service within 15 minutes, preserve SLA (99.95% uptime) and avoid cost spikes.

**Action (A)**  

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| 1️⃣ Switch traffic | **AWS Global Accelerator + Route 53 latency‑based routing** | Keeps users on the nearest healthy endpoint; eliminates DNS cache issues. |
| 2️⃣ Failover model | **SageMaker Multi‑Model Endpoint** in a secondary AZ (us‑east‑2) with auto‑scaling and an S3 bucket for the same model artifacts. | Provides instant cold start (<30 s) and isolates from the primary region’s outage. |
| 3️⃣ Alert & rollback | **Amazon CloudWatch Alarms + SNS** → Lambda to trigger a fallback to the older, vetted model version while we investigate. | Ensures no data loss; gives us time to rebuild the new model in parallel. |
| 4️⃣ Cost control | **Spot Instance Pools with On‑Demand fallback** and **SageMaker’s Managed Spot Training** for retraining. | Keeps compute cost < 30% of baseline during recovery. |

**Result (R)**  
- Service restored in **12 minutes**, below the 15‑minute window.  
- No customer impact; uptime remained **99.97%** for the month.  
- Cost increased by only **$120** versus a projected $1,200 if we had scaled up on-demand everywhere.

**Learnings (L)**  
I realized our single‑region model endpoint was a bottleneck—moving to multi‑model endpoints across AZs and regions is now part of the architecture baseline. This incident reinforced *Ownership* and *Dive Deep*, and I documented the playbook for future teams, raising the bar for incident readiness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
