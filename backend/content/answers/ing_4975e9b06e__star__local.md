---
qid: ing_4975e9b06e__star__local
question: 'Explain: Enhanced security — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 322
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:55:25-05:00'
sources: []
---

**Situation:**  
At my previous company we had a customer‑facing analytics platform that processed financial data from multiple regions. Their SLA demanded 99.95% uptime, and one of our internal audits revealed that the single‑zone deployment on Compute Engine was a single point of failure for power or network outages.

**Task:**  
I needed to design a disaster‑recovery strategy that would keep the service available across zones, reduce recovery time objectives (RTO) from 4 hours to under 15 minutes, and stay within our $200/month budget.

**Action:**  
I set up a multi‑region architecture: replicated the primary instance group to an opposite region using Cloud Load Balancing with health checks. I used Managed Instance Groups for auto‑scaling and Cloud Storage for immutable snapshots. For stateful data I enabled BigQuery’s cross‑regional replication and set up Cloud Spanner with synchronous replication to guarantee consistency. I scripted automated failover in Terraform, integrating Cloud Functions that monitored regional health via Stackdriver alerts and triggered DNS updates through Cloud DNS within seconds.

**Result:**  
After a simulated zone outage, the platform bounced to the secondary region in 12 minutes, keeping uptime above 99.98% for the month. The cost increased by only 7%, and we now have documented recovery procedures that pass quarterly compliance reviews. I learned how to balance latency, consistency, and cost when designing robust disaster‑recovery on GCP.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
