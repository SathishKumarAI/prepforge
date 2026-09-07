---
qid: ing_0016adaf66__aws__local
question: 'Explain: Splunk IT Service Intelligence — Luna Evaluation Models  Cloud
  Observability | Splunk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 465
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:24:40-05:00'
sources: []
---

**Situation / Task**  
I was hired by a fintech firm to replace an on‑prem “log‑only” stack that delivered noisy alerts and 30 % SLA drift for its payment gateway. The goal: build a **cloud‑native observability layer** that could surface *root cause* insights in under three minutes, drive automated remediation, and cut alert fatigue by at least 50 %.  

**Action**  
1. **Ownership & Dive Deep** – I mapped every data source (CloudWatch logs, X-Ray traces, S3 metrics) to the 12 business‑critical KPIs.  
2. Built a *Luna‑style* evaluation model in **AWS SageMaker**:  
   * Feature store (Amazon Timestream + Glue) → high‑velocity telemetry.  
   * Model training on a nightly batch of 10 M log events, using XGBoost for anomaly detection.  
3. Deployed the inference endpoint via **Amazon SageMaker Real‑Time Inference** behind an **API Gateway**; traffic is auto‑scaling with Lambda edge to keep latency <200 ms.  
4. Integrated the model output into **Splunk ITSI** (via Splunk Connect for AWS) so that each anomaly becomes a *Smart Alert* with contextual dashboards.  
5. Added automated remediation scripts in **AWS Systems Manager Automation**, triggered when an alert exceeds severity 3.

**Result**  
- Alert noise dropped from 2,400/day to 1,050/day (56 % reduction).  
- Mean time to recovery for high‑severity incidents fell from 12 h to 1.8 h (85 % improvement).  
- Cost of observability stack was $4k/month vs. the legacy on‑prem ($12k).  

**Learnings & Bar‑raiser cues**  
I documented every assumption, ran a “failure mode” simulation, and iterated the model until false positives were <2 %. This demonstrates **Ownership**, *Dive Deep*, quantified impact, and learning from failure—exactly what an Amazon bar‑raiser expects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
