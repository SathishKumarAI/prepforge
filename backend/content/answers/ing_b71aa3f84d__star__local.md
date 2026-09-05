---
qid: ing_b71aa3f84d__star__local
question: 'Explain: Planning a disaster recovery strategy — What is Disaster Recovery?
  | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 386
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:37:24-05:00'
sources: []
---

**Situation:**  
While leading the deployment of a real‑time fraud detection model for a fintech client on Google Cloud, we discovered that our training pipeline was running on a single regional cluster. A sudden outage of that region would bring down both training and inference services, jeopardizing compliance with 24/7 uptime SLAs.

**Task:**  
Design a disaster recovery (DR) strategy that ensures zero data loss, minimal latency increase, and adherence to the client’s SLA while keeping costs under budget.

**Action:**  
1. Mapped critical assets: ML‑model checkpoints in Cloud Storage, training jobs on Vertex AI, and inference endpoints on GKE.  
2. Implemented multi‑region replication for Cloud Storage using dual‑replication buckets (us-central1 ↔ us-east4).  
3. Set up a standby Vertex AI pipeline in the secondary region triggered by Cloud Functions monitoring health metrics.  
4. Deployed a global HTTP(S) load balancer with traffic splitting to automatically redirect inference requests to the healthy endpoint.  
5. Created automated backup jobs for model checkpoints every 15 minutes, stored encrypted in Cloud KMS‑protected buckets.  
6. Ran quarterly DR drills, measuring failover time and data consistency.

**Result:**  
After three live drills, we achieved <30 seconds failover with no loss of training checkpoints and only a 2 ms increase in inference latency. The client’s SLA remained at 99.999% uptime, and the solution cost 12% less than a single‑region high‑availability setup. I learned that DR is not just about backup—it’s an integrated design that aligns with real‑time ML workloads and budget constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
