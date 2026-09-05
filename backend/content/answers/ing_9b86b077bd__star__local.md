---
qid: ing_9b86b077bd__star__local
question: What is the 3-2-1 rule for backup and disaster recovery?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 357
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:43:14-05:00'
sources: []
---

**Situation** – While leading the data‑engineering team for a fintech startup, we hit a critical compliance audit that required us to prove all customer transaction logs were recoverable within 24 hours after any failure. Our existing backup strategy was ad‑hoc: nightly full snapshots on an external drive and daily incremental copies stored in the cloud.

**Task** – I had to design a robust backup and disaster‑recovery framework that met regulatory standards, minimized downtime, and kept costs under our $5K/month budget.

**Action** – I implemented the 3‑2‑1 rule:  
1. **Three copies of data** – one primary on‑premise, two backups.  
2. **Two media types** – we used SSD‑based NVMe drives for quick restores and Amazon S3 Glacier for long‑term archival.  
3. **One off‑site location** – an encrypted region in AWS separate from our primary datacenter. I automated the workflow with Terraform scripts, scheduled nightly snapshots via `btrfs` subvolumes, and used `restic` to sync incremental changes to both local SSDs and Glacier. We also set up a failover test that rotated the off‑site copy as primary every month.

**Result** – Post‑implementation, we achieved 99.999% data durability, reduced recovery time from days to under 30 minutes, and cut backup costs by 18%. I learned that adherence to a simple rule like 3‑2‑1 can translate into measurable resilience without excessive complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
