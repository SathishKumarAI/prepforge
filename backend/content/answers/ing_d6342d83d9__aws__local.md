---
qid: ing_d6342d83d9__aws__local
question: You're training on tens of thousands of GPUs and hardware fails constantly.
  How do you keep goodput high?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 510
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:23:34-05:00'
sources: []
---

**Situation** – I was leading a team that trained GPT‑style models on 30 k GPUs in an on‑prem cluster. Hardware failures hit ~4 % of nodes per day, causing training stalls and cost blowouts.  

**Task** – Keep goodput (completed epochs per hour) above 95 % while keeping the cost < $0.05 per GPU‑hour.  

**Action**  
1. **Ownership + Dive Deep** – Built a *Health‑Check Service* that pinged each node’s NVMe, network, and temperature every minute. Logs were pushed to CloudWatch Logs; anomalies triggered SNS alerts.  
2. **Checkpointing & Resume** – Integrated PyTorch Lightning with S3 checkpoints every 10 k iterations. A DynamoDB table tracked checkpoint offsets per job. If a node failed, the scheduler (Kubernetes + Argo‑Workflow) pulled the latest checkpoint from S3 and spun up a replacement pod on a healthy node.  
3. **Auto‑Scale & Spot** – Configured an EC2 Auto Scaling group with mixed instance types and Spot capacity pools. A Lambda function scanned the Health‑Check metrics; if a 5‑minute spike in failures was detected, it launched spot replacements pre‑emptively.  
4. **Cost Control** – Used Savings Plans for on‑prem GPUs and reserved instances for baseline usage; spot instances covered bursty workloads.  

**Result** – Goodput rose from 78 % to 96 % (≈ +18 pp). Failure‑related downtime dropped from 1.2 h/day to < 0.3 h/day, saving ~$120k/month in wasted GPU hours. The team now follows a “self‑healing” pipeline that is audited quarterly for continuous improvement.

**Bar‑raiser notes** – Demonstrated end‑to‑end ownership, deep technical design (metrics, checkpointing, autoscaling), quantified ROI, and lessons learned from early failure spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
