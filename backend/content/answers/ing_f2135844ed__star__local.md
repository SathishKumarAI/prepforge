---
qid: ing_f2135844ed__star__local
question: 'Explain: Implementation — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 345
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:32:15-05:00'
sources: []
---

**Situation** – At my previous company we had a customer‑facing recommendation engine that served millions of requests per day on Compute Engine and Cloud SQL. One night a regional outage hit the primary zone and our traffic suddenly dropped to 10 % while the service remained “up” but lagging behind the SLA.  

**Task** – I needed to design a disaster‑recovery (DR) strategy that could bring the entire stack back online within 15 minutes, preserve data consistency, and minimize cost for a low‑traffic fallback.

**Action** – First, I set up cross‑region replicas for Cloud SQL using read‑replicas with automatic failover. For Compute Engine, I deployed an autoscaling Managed Instance Group (MIG) in a second region and enabled Cloud Load Balancing with health checks that automatically shifted traffic when the primary MIG failed. I also added a Cloud Storage bucket in the secondary region to hold daily snapshots of user data, then used Cloud Functions to trigger a Cloud Run job that would re‑hydrate the database from the snapshot if needed. Finally, I scripted Terraform modules to provision this DR stack on demand and set up alerts via Operations Suite.

**Result** – During our next real outage we restored full functionality in 12 minutes—well under the SLA—and recovered all data with zero loss. The DR architecture cost only 18 % of the primary region’s monthly bill, proving that a well‑planned, automated GCP disaster‑recovery can be both reliable and economical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
