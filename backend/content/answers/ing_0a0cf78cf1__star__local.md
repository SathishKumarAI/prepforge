---
qid: ing_0a0cf78cf1__star__local
question: 'Explain: Related products and services — What is Disaster Recovery? | Google
  Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 350
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:49:04-05:00'
sources: []
---

**Situation** – While leading a migration of our e‑commerce platform to Google Cloud, the client’s existing on‑premises database had just hit its 99.9 % SLA, and any downtime would mean lost revenue during peak holiday sales.

**Task** – I was tasked with designing a disaster‑recovery (DR) strategy that could recover the entire stack within 15 minutes, keep data loss under 5 MB, and fit within a $10K/month budget.

**Action** – I chose Cloud Spanner for global replication, setting up cross‑region primary‑replica pairs. Using Cloud SQL “read replicas” I created a standby instance in a secondary region. I scripted automated failover with Terraform and set up Cloud Monitoring alerts to trigger Cloud Functions that switched the DNS entry from the primary to the replica via Cloud Load Balancer. For backup, I enabled continuous point‑in‑time recovery (PITR) on Spanner and scheduled nightly snapshots of Cloud Storage buckets using gsutil rsync. I also ran bi‑weekly DR drills, simulating a region outage and measuring recovery time objective (RTO) and recovery point objective (RPO).

**Result** – The pilot drill achieved an RTO of 12 minutes and RPO of 3 MB, well below targets. Post‑migration, the system maintained 99.95 % uptime during the holiday season, saving an estimated $150K in avoided downtime costs. I learned that blending managed services with automated orchestration can deliver enterprise‑grade DR without excessive overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
