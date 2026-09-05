---
qid: ing_475736739e__star__local
question: 'Explain: Better compliance — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 352
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:51:23-05:00'
sources: []
---

**Situation** – At my previous company we ran a real‑time fraud detection pipeline on Google Cloud that processed ~2 M events per day. One night the primary region’s load balancer failed, and our metrics showed a 99.7 % SLA breach within minutes.

**Task** – I had to design a disaster‑recovery (DR) plan that kept the service available with minimal data loss and automated failover across regions.

**Action** – I started by enabling **regional Cloud SQL replicas** for the event store and set up **Cloud Pub/Sub “topic forwarding”** so messages published in us-central1 were automatically mirrored to europe-west1. Next, I created a **managed instance group (MIG)** with auto‑healing probes and deployed a **global HTTP(S) load balancer** that used Cloud CDN and backend bucket failover rules. For compute, I spun up a second App Engine version in the secondary region and set up a Cloud Scheduler job to run health checks on both endpoints. Finally, I scripted a Terraform module that could spin down the primary group and promote the replica within 2 minutes.

**Result** – After testing, we achieved <30‑second failover time with zero data loss during a staged outage. The SLA impact dropped from 99.7 % to 99.999 %. I learned that DR isn’t just about backups; it’s an orchestrated set of services—Pub/Sub replication, regional databases, global load balancing—that must be validated regularly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
