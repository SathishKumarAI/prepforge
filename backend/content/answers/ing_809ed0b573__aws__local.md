---
qid: ing_809ed0b573__aws__local
question: 'Explain: We didn''t discover with our code, but — Anomaly Detection: Algorithms,
  Explanations, Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 406
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:15:53-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was asked to build an anomaly‑detection pipeline for a fleet of IoT sensors that reported millions of events per day. The goal was to surface “unknown unknowns” – patterns our models hadn’t seen during training – while keeping latency < 2 s and cost <$0.02/event.

**Action**  
I chose a two‑stage approach:  

1. **Feature engineering & clustering** – used K‑means on PCA‑reduced features in SageMaker, then applied Isolation Forest to flag high‑score points.  
2. **Explainability layer** – deployed SHAP values via an AWS Lambda that ran in parallel with the inference step and streamed explanations to EventBridge for audit.

All data flowed through **S3 → Glue ETL → Redshift** for historical analysis, while real‑time scoring used **Kinesis Data Streams → SageMaker Real‑Time Endpoint**. I added a CloudWatch alarm that triggered an Auto Scaling group of Lambda workers if the false‑positive rate exceeded 5 % for >10 min.

**Result**  
Within three months we reduced undetected critical events by **42 %**, cut downstream investigation time from 4 h to 30 min, and kept per‑event cost at **$0.015**. The model also achieved an AUC‑ROC of **0.93** on a held‑out set.

**Learnings**  
Ownership drove me to iterate the pipeline until we hit SLA targets; diving deep into feature importance helped us avoid overfitting. I documented every failure point in a post‑mortem wiki, ensuring the team could replicate success and improve resilience.  

*Leadership Principles: Ownership, Dive Deep, Deliver Results.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
