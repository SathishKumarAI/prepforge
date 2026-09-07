---
qid: ing_47ac370e3c__faang__local
question: What is considered an IT disaster? — What is Disaster Recovery? | Google
  Cloud
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 480
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:30:40-05:00'
sources: []
---

**Clarify**  
*What do we mean by “IT disaster” and how does it differ from normal outages?*  
Assumptions:  
1. The organization relies on cloud‑native services (compute, storage, networking).  
2. Business continuity is defined in terms of data integrity, availability, and regulatory compliance.

**Approach**  
1. Define a taxonomy of disasters (data loss, downtime, security breach, compliance failure).  
2. Explain Disaster Recovery (DR) as the strategy to restore services/data after such events.  
3. Map Google Cloud’s built‑in DR primitives to each disaster type.

**Depth**  
- **IT Disaster**: Any event that causes irreversible data corruption, prolonged unavailability (> 4 h), or a breach of regulatory controls (e.g., GDPR). Examples: ransomware on persistent disks, multi‑region outage due to DNS misconfiguration, or loss of backups from accidental deletion.  
- **Disaster Recovery**: A set of policies and procedures—*Backup & Restore*, *Cross‑Region Replication*, *Failover Configurations*, *Service Level Objectives (SLOs)*—that together meet the recovery point objective (RPO) and recovery time objective (RTO). In GCP, this includes Cloud Storage multi‑region buckets for durability, Cloud SQL automated backups with Point‑in‑Time Recovery, and managed instance groups with regional load balancers that support automatic failover.

**Edge Cases**  
- *Partial data loss* where only a subset of shards is corrupted. Test by simulating shard failure in Bigtable.  
- *Simultaneous regional outage* (rare). Verify cross‑region replication latency.  
- *Compliance audit failure*: ensure logs are immutable via Cloud Logging + Cloud Archive.

**Optimize & Communicate**  
Highlight trade‑offs: higher RPOs allow cheaper storage tiers; tighter RTOs require active replicas and more bandwidth. Emphasize continuous testing (DR drills) and automated monitoring (Stackdriver alerts). Conclude that in GCP, a robust DR plan is an architectural choice—leveraging multi‑region services, immutable backups, and failover automation turns an “IT disaster” into a recoverable incident.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
