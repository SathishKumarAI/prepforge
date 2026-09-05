---
qid: ing_b9bb7c194f__star__local
question: 'Explain: Active-Passive policy — Availabilitypatterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 335
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:42:42-05:00'
sources: []
---

**Situation** – In my last role I was tasked with redesigning the user‑authentication service for a fintech app that needed 99.999% uptime during peak trading hours. The existing single‑instance setup kept breaking under load and had no graceful failover.

**Task** – Build an active‑passive architecture that would keep the service online, automatically switch traffic to a standby node if the primary failed, and preserve session data without noticeable lag for users.

**Action** – I set up two identical EC2 instances behind an AWS Elastic Load Balancer. Using Amazon RDS read replicas, I enabled synchronous replication of the user database so both nodes saw the same state. I implemented health‑checks on the ELB that pinged a lightweight “heartbeat” endpoint; if the primary failed to respond for 30 seconds, the ELB redirected all traffic to the standby. To avoid data loss, I added a shared S3 bucket for session persistence and used Redis Sentinel for cache failover. I also scripted automated scaling of the standby in case of sustained load.

**Result** – The system achieved >99.999% availability during a six‑month pilot, dropping downtime from 2 hours/month to <1 minute/year. I learned that the key to active‑passive is not just replication but orchestrating health checks and state synchronization so failover feels invisible to end users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
