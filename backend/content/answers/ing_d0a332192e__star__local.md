---
qid: ing_d0a332192e__star__local
question: 'Explain: Reduced recovery costs — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 403
total_tokens: 643
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:26:36-05:00'
sources: []
---

**Situation:**  
At my previous company we ran a multi‑region e‑commerce platform on Google Cloud. In Q2 we hit an unexpected outage when a Compute Engine instance group in us‑central1 was accidentally shut down, causing the entire checkout service to go offline for 45 minutes.

**Task:**  
I had to design and implement a disaster‑recovery (DR) strategy that would reduce recovery time objective (RTO) from minutes to seconds, lower recovery point objective (RPO) to near zero, and cut our monthly DR testing cost by at least 30%.

**Action:**  
1. Leveraged **Cloud Spanner** for globally replicated database with automatic failover.  
2. Created a **Managed Instance Group** in us‑east4 that automatically spun up new instances from a snapshot image stored in Cloud Storage, using an HTTP health check to trigger traffic routing via **Google Cloud Load Balancing**.  
3. Implemented **Cloud Functions** to monitor instance health and trigger a rollback script if the primary region remained down for >2 minutes.  
4. Added a **Stackdriver (now Operations) alert** that automatically sent a Slack notification to our on‑call team, reducing manual intervention time.  
5. Ran quarterly DR drills using **Cloud Deployment Manager** templates, re‑creating the entire environment in under 10 minutes.

**Result:**  
The new DR plan cut our RTO from 45 minutes to <30 seconds and RPO to <1 second during the next simulated outage. Monthly DR testing costs dropped by 35% due to automated provisioning. The team now has confidence that any region failure will be invisible to customers, and I learned how tightly integrating GCP services can deliver near‑real‑time resilience at a fraction of the cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
