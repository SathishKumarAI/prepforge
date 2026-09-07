---
qid: ing_f2135844ed__aws__local
question: 'Explain: Implementation — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 473
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:24:24-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a multi‑region ML inference service on **Google Cloud** that delivered real‑time predictions for e‑commerce personalization. A single region outage would have killed revenue and violated our SLA of < 200 ms latency. I was tasked to design a *Disaster Recovery (DR)* plan that kept the model online with minimal data loss.

**Action & Design**  
I built an **active‑passive DR architecture**:

| Layer | GCP Service | Rationale |
|-------|-------------|-----------|
| Data replication | Cloud Storage + BigQuery cross‑region replication | Immutable, cheap, 99.999% durability |
| Model storage | Artifact Registry (multi‑regional) | Versioned, immutable artifacts |
| Inference runtime | Cloud Run + Memorystore for Redis (global) | Serverless, autoscaling, zero cold start latency |
| Orchestration | Cloud Functions + Cloud Scheduler | Automatic failover triggers on health checks |

The workflow: every 5 minutes a Cloud Function pulls the latest model from Artifact Registry and pushes it to Cloud Run. Health‑check endpoints expose status; if primary region fails, the scheduler flips traffic via Traffic Director to the secondary region within **2 seconds**.

**Result**  
During a simulated outage we achieved:

* **Zero downtime** – traffic switched in 1.8 s, no request failures.
* **Data loss < 0.01%** – BigQuery cross‑region replication kept the last 5 min of events intact.
* **Cost** – $4k/month vs $6k for a fully active multi‑region setup.

**Reflection (Bar‑raiser focus)**  
I owned the entire DR lifecycle, diving deep into latency budgets and cost trade‑offs. The key learning: *automate failover triggers*; manual switchover introduced human error in earlier tests. This experience sharpened my bias for action and reinforced that a robust DR strategy is not just a backup but a core component of delivering results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
