---
qid: ing_4975e9b06e__aws__local
question: 'Explain: Enhanced security — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 461
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:11:32-05:00'
sources: []
---

**Answer – Disaster Recovery (DR) in a Machine‑Learning context**

> **Leadership Principles:** *Ownership* + *Dive Deep*

### Situation  
I was leading the migration of an on‑prem ML pipeline to Google Cloud for a financial services client that required 99.999% uptime and regulatory compliance.

### Task  
Design a DR strategy that minimized downtime, kept data loss under one minute, and stayed within a $30K/yr budget.

### Action  
1. **Assess critical assets** – training data in BigQuery, model artifacts in Artifact Registry, inference endpoints on Vertex AI.
2. **Define RPO/RTO goals** – 60 s RPO, <5 min RTO.
3. **Architect a multi‑region failover**:
   * Replicate BigQuery tables via cross‑regional snapshots (≈$0.02/GB/day).
   * Store model artifacts in Cloud Storage with dual‑replication and set up Cloud Functions to trigger Vertex AI training jobs automatically in the secondary region.
   * Use Cloud Load Balancing + Cloud CDN for inference traffic, with health checks that switch over within 30 s.
4. **Automate testing** – CI/CD pipeline runs nightly DR drills; metrics are pushed to Stackdriver Monitoring.
5. **Cost control** – leverage committed use contracts and preemptible VMs for training bursts.

### Result  
- **Downtime <2 min** during a real outage, meeting RTO.  
- **Data loss 0 bytes**, satisfying RPO.  
- **Annual DR spend reduced by 18%** compared to baseline.  
- Learned that continuous testing surfaces hidden dependencies; we now run monthly “fail‑fast” drills.

---

**Bar‑raiser cues:** I demonstrated full ownership, dove deep into GCP’s replication primitives, quantified the impact (minutes saved, cost savings), and iterated on failures through automated drills.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
