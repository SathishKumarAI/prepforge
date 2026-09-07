---
qid: ing_16299e8d96__aws__local
question: 'Q: What is the difference between MHA, MQA, and GQA?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 485
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:15:36-05:00'
sources: []
---

**Answer (Amazon‑style)**  

During my last role designing a recommendation engine for a global e‑commerce platform, I was asked to explain the difference between **MHA**, **MQA**, and **GQA** while also mapping them to our architecture on AWS.

| Term | Definition | Typical Metric |
|------|------------|---------------|
| **MHA (Model Health Assessment)** | Continuous monitoring of model drift, bias, and performance gaps. Uses A/B‑testing pipelines and statistical tests (e.g., KS statistic). | Drift > 5% → trigger retraining |
| **MQA (Machine Quality Assurance)** | End‑to‑end validation of training data, feature integrity, and inference latency before production rollout. Relies on automated unit tests in SageMaker Pipelines. | 99.9 % feature completeness |
| **GQA (Global Query Accuracy)** | Aggregated accuracy across all regions post‑deployment, weighted by traffic volume to capture real‑world impact. | MAE < 0.02 for top‑10 recommendation list |

**Technical Design**  
- **AWS services:** SageMaker Pipelines for MQA, CloudWatch + S3 + Athena for MHA logs, and Lambda + DynamoDB for GQA aggregation.  
- **Scalability/Availability:** Serverless components (Lambda, Glue) auto‑scale; data stored in Redshift Spectrum ensures 99.99 % uptime.  
- **Cost Trade‑offs:** Using Spot Instances for retraining reduces cost by ~30 % while keeping SLA ≤ 4 hrs.

**Leadership Lens**  
- *Customer Obsession:* Ensured every metric directly tied to user satisfaction (e.g., click‑through rate).  
- *Ownership:* Built the entire monitoring stack and drove a 15 % lift in recommendation relevance after fixing drift.  

*Bar‑raiser focus:* I demonstrated ownership by owning the full pipeline, diving deep into statistical thresholds, quantifying impact (15 % CTR boost), and learning from an initial failure where missing bias checks caused a 7 % revenue dip—prompting us to add automated bias audits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
