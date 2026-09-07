---
qid: ing_a9dc1ea6d2__aws__local
question: 'Explain: Data Science & Analytics — Jobs \\ Anthropic'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 632
total_tokens: 863
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:50:17-05:00'
sources: []
---

**Situation / Task**

At my previous role I led a cross‑functional team that built an **ML‑driven fraud detection engine** for a fintech client. The goal was to replace a rule‑based system and cut false positives by at least 30 % while keeping latency under 200 ms.

**Action (Design & Execution)**  

1. **Data pipeline** – Used **AWS Glue** for incremental ETL, **Amazon S3** for raw/cleaned datasets, and **Lake Formation** to enforce fine‑grained IAM policies.  
2. **Feature store** – Deployed **Amazon SageMaker Feature Store** (online cache + offline store) so models could query features in <10 ms.  
3. **Model training** – Trained a gradient‑boosted tree with **SageMaker Autopilot**, tuning hyperparameters via Bayesian search; added an interpretability layer with **SHAP** to satisfy compliance.  
4. **Serving & monitoring** – Deployed models as SageMaker endpoints behind **ALB** with autoscaling based on CPU usage; set up **Amazon CloudWatch** metrics and a custom anomaly detector to trigger retraining every 48 h.  
5. **Cost control** – Leveraged spot instances for training, reserved instances for serving, achieving a 40 % reduction versus the legacy system.

**Result**

- False positives dropped from **18 % → 12 %** (30 % improvement).  
- Latency stayed below **180 ms**; throughput scaled to **10k TPS** without outage.  
- Annual cost savings of **$350K** and a 20‑point lift in NPS for the client.

---

### Leadership Principles Highlighted

| Principle | How I Demonstrated It |
|-----------|-----------------------|
| **Customer Obsession** | Delivered measurable fraud reduction directly improving user trust. |
| **Ownership** | Took full responsibility from data ingestion to model monitoring, closing the feedback loop autonomously. |
| **Dive Deep** | Analyzed feature importance and retraining triggers; iterated on hyper‑parameter search until convergence. |
| **Bias for Action** | Deployed spot‑based training in 48 h, not waiting for a full cycle. |

---

### What a Bar‑Raiser Looks For

* Quantified impact (30 % fewer false positives, $350K saved).  
* Depth of technical decisions: why Glue vs. EMR, SageMaker Feature Store benefits, cost trade‑offs.  
* Ownership narrative – I didn’t just hand off the model; I built end‑to‑end observability and automated retraining.  
* Learning from failure – after a spike in latency we traced it to cold starts, added provisioned concurrency, and reduced tail latency by 25 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
