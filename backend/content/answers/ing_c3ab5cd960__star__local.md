---
qid: ing_c3ab5cd960__star__local
question: What is disaster recovery? — What is Disaster Recovery? | Google Cloud
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 365
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:01:19-05:00'
sources: []
---

**Situation** – In late 2023 I was leading the deployment of a recommendation engine for a subscription‑based e‑commerce platform that handled 1.2 M requests per day. The model lived on a Kubernetes cluster in GCP, and a sudden loss of the primary region caused a 72 h outage, wiping out real‑time personalization and costing us ~$45k/day in lost revenue.

**Task** – I had to design and implement a disaster recovery (DR) strategy that guaranteed less than 15 min of downtime, preserved model integrity, and met our SLA for data freshness (<12 hrs).

**Action** – I built an automated DR pipeline using GCP’s Multi‑Region Cloud Storage buckets as immutable checkpoints. The training job writes its checkpoint every 30 minutes to a bucket in the primary region; a Cloud Scheduler triggers a Cloud Function that mirrors these checkpoints to the secondary region via `gsutil -m rsync`. For inference, I deployed an Anthos Service Mesh with Istio’s failover policies so traffic automatically rerouted to the standby cluster. We also added a nightly `kubectl rollout restart` on the backup pods and integrated Stackdriver Monitoring alerts for any lag beyond 12 hrs.

**Result** – The DR plan cut recovery time from 72 h to under 10 minutes during a recent unplanned outage, restoring personalization with only a 2‑hour data lag. Overall we saved ~$400k in avoided revenue loss and reduced our incident response effort by 70%. I learned that treating checkpoints as immutable, versioned objects and automating failover via service mesh are key to resilient ML deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
