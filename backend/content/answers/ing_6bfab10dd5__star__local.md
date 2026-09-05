---
qid: ing_6bfab10dd5__star__local
question: 'Explain: DR planning — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 391
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:03:09-05:00'
sources: []
---

**Situation**  
At my previous role we ran a real‑time fraud detection pipeline on GCP that processed ~15 M events per day. One night a sudden outage of the primary Compute Engine region caused a 90% drop in availability, and our SLA was 99.9%.

**Task**  
I had to design and implement a Disaster Recovery (DR) plan that would keep the pipeline running with minimal data loss and ensure we could fail over within 10 minutes.

**Action**  
1. **Replication strategy:** I set up cross‑region Cloud Storage buckets for raw event ingestion, using `gsutil rsync` and Object Versioning to capture all changes.  
2. **Compute resources:** Deployed a second Kubernetes cluster in the secondary region with GKE Autopilot, mirroring the same node pools and autoscaling rules.  
3. **Data flow:** Implemented Cloud Pub/Sub subscriptions that automatically fail over to the secondary topic when the primary is unreachable, leveraging `dead-letter` queues for back‑pressure.  
4. **Automation & monitoring:** Wrote a Cloud Functions script triggered by Cloud Monitoring alerts; it flips DNS A records via Cloud DNS and updates load balancers, all logged in Cloud Logging.  
5. **Testing:** Ran bi‑weekly fail‑over drills, measuring recovery time objective (RTO) and recovery point objective (RPO).

**Result**  
After deployment, our RTO dropped from 90 minutes to under 8 minutes and RPO fell below 30 seconds. The SLA remained above 99.95% during subsequent outages. I learned that a well‑defined, automated DR plan on GCP not only protects uptime but also reveals hidden bottlenecks in data pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
