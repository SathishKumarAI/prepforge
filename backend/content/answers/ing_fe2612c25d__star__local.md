---
qid: ing_fe2612c25d__star__local
question: 'Explain: Risk assessment — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 357
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:57:15-05:00'
sources: []
---

**Situation:**  
During a migration of our on‑prem data warehouse to BigQuery, the client’s quarterly financial reports were due within 48 hours and any downtime could cost them millions in compliance fines.

**Task:**  
I had to design a risk assessment plan that included Disaster Recovery (DR) for the new GCP environment, ensuring we could restore critical workloads within an RTO of 4 hours and an RPO of 15 minutes.

**Action:**  
1. I mapped out all data flows using Cloud Dataflow and identified the most latency‑sensitive tables.  
2. Leveraging BigQuery’s cross‑region replication, I set up bi‑directional streaming from our primary region to a standby region in us-west.  
3. For compute workloads, I enabled managed instance groups with regional autoscaling and implemented health checks that trigger failover to the standby zone automatically.  
4. I configured Cloud Spanner for transactional data, using its built‑in multi‑region replicas, and wrote Terraform scripts to automate the promotion of a replica during an outage.  
5. Finally, I set up automated alerts via Cloud Monitoring and scheduled DR drills every quarter to validate our recovery scripts.

**Result:**  
When a power outage hit our primary region last month, we switched to the standby region in under 30 minutes, restored all tables with less than 12 minutes of data loss, and met both RTO and RPO targets. The client avoided $3 million in penalties, and the exercise uncovered that our backup retention policy needed tightening—so I updated it to keep a 90‑day snapshot chain, improving overall resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
