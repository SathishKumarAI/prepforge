---
qid: ing_1de6f25398__aws__local
question: 'Explain: Sudden concept drift — What is concept drift in ML, and how to
  detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 723
total_tokens: 964
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:34:19-05:00'
sources: []
---

**Situation (S)**  
At a fintech startup I led the fraud‑prediction pipeline that served ~200 k daily transactions. Within weeks of launch we noticed a 12 % drop in recall—from 92 % to 80 %—while precision stayed high, indicating that our model was no longer recognizing new fraud patterns.

**Task (T)**  
My goal was to detect this *concept drift* quickly and rebuild the pipeline so it could adapt without manual intervention, ensuring we kept loss below 0.5 % of revenue.

**Action (A)**  

| Step | AWS Service | Why |
|------|-------------|-----|
| **Data capture** | Kinesis Data Streams + S3 | Real‑time ingestion and durable storage for drift analysis. |
| **Feature monitoring** | CloudWatch Metrics & Logs | Compute drift statistics (KS test, population stability index) every 5 min. |
| **Alerting** | SNS + Lambda | Trigger automated model retraining when drift exceeds threshold. |
| **Model retraining** | SageMaker Training Jobs (AutoML) | Retrain on last 30‑day window; hyper‑parameter sweep for speed/accuracy trade‑off. |
| **Deployment** | SageMaker Endpoint with Canary traffic shifting | Roll out new model after A/B testing; rollback if performance degrades. |
| **Cost control** | Spot Instances + Savings Plans | Keep retraining cost < $200/month vs $1k on on‑demand. |

I added a *drift score* metric in CloudWatch and set a 3σ alarm that fired within 15 min of the recall drop, giving us a 20‑minute window to trigger retrain. The new model restored recall to 93 % within 2 hours, saving ~$150k/month in fraud losses.

**Result (R)**  
- **Quantified impact:** Recall recovered from 80 % → 93 %, reducing fraudulent revenue loss by 15 %.  
- **Cost savings:** Retraining cost < $200/month vs $1k baseline.  
- **Scalability & availability:** System handles > 5 M events/day with < 2 s latency; endpoint is multi‑AZ and auto‑scales.

**Leadership Principles Reflected**

| Principle | How it shows |
|-----------|--------------|
| *Customer Obsession* | Immediate detection prevented customer distrust from fraudulent activity. |
| *Ownership* | Took full responsibility for pipeline health, built end‑to‑end monitoring. |
| *Dive Deep* | Implemented statistical tests and continuous metrics to understand drift drivers. |
| *Bias for Action* | Automated retrain loop removed manual bottlenecks. |
| *Invent & Simplify* | Replaced 3‑hour manual review with a 15‑min automated alert system. |
| *Deliver Results* | Quantified revenue protection and cost savings. |

**Bar‑raiser cues:**  
- Depth: detailed statistical approach (KS test, PSI).  
- Ownership: end‑to‑end automation.  
- Impact: clear metrics on recall, loss reduction, and cost.  
- Learning from failure: post‑mortem identified missing drift feature; we added new indicators (feature importance drift) for future resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
