---
qid: ing_f3ed8e7aee__faang__local
question: 'Explain: Business impact analysis (BIA) — What is Disaster Recovery? |
  Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 561
total_tokens: 802
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:06:20-05:00'
sources: []
---

**Clarify**  
You’re asking how *Business Impact Analysis* (BIA) relates to *Disaster Recovery* (DR) on Google Cloud.  
Assumptions: we’re evaluating a production workload that must stay available after an outage, and the team is considering GCP’s DR options.

**Approach**  
1. Define BIA – identify critical services, dependencies, and RTO/RPO targets.  
2. Map those metrics to GCP DR capabilities (multi‑region replicas, cross‑region backups).  
3. Evaluate cost vs. resilience trade‑offs.  

**Depth**  
- **BIA** quantifies the *impact* of downtime: lost revenue per hour, SLA penalties, regulatory fines. It yields RTO (maximum recovery time) and RPO (point in time to recover).  
- **DR** is the operational plan that meets those targets: automated failover, backup‑to‑cloud, and disaster‑driven replication. On GCP, this means leveraging Cloud Storage multi‑region buckets for immutable backups, Cloud Spanner cross‑region replicas for zero‑downtime reads, and Cloud Run or Compute Engine instance groups with global load balancers for rapid switchover.  
- Cost is driven by data egress, extra regional resources, and storage tiering. A *DR‑as‑a‑service* model (e.g., Cloud CDN + Cloud Armor) can reduce manual overhead.

**Edge Cases**  
- Data consistency gaps when using eventual consistency services (Firestore).  
- Regulatory constraints on where data may be stored (EU vs. US).  
- Network partitions that still keep primary region reachable but degrade latency.

**Optimize & Communicate**  
Start with a *pilot* in a single secondary region, instrument failover scripts, and validate RTO/RPO via chaos engineering (using Cloud Workload Identity Federation + GCP’s “simulated outages”). Present findings as a trade‑off matrix:  
| Metric | Primary | Secondary | Cost | Notes |
|--------|---------|-----------|------|-------|
| RTO | 15 min | 5 min | $X | Auto‑failover via Global Load Balancer |
| RPO | 0 sec | 30 sec | $Y | Cloud Spanner multi‑region replication |

Conclude with a recommendation: adopt GCP’s cross‑region DR stack if the BIA shows >$10k/hr loss, otherwise a simpler backup‑restore strategy suffices. This demonstrates clear problem framing, technical depth, and actionable insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
