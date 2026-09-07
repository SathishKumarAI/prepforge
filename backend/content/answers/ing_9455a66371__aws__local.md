---
qid: ing_9455a66371__aws__local
question: 'Explain: Behavioral round — Sierra Agent Engineer Interview Guide | Sample
  Questions (2026) - Exponent'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 462
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:01:19-05:00'
sources: []
---

**Behavioral — Sierra Agent Engineer Interview Guide (2026)**  
*Leadership Principles: Ownership & Dive Deep*

> *“Tell me about a time you delivered a machine‑learning feature that had to run in real time for millions of users.”*

---

### **Situation**
At my previous company we launched a fraud‑detection microservice that processed every transaction in the payment pipeline (≈ 10M/day). The existing batch model lagged 5 minutes, causing missed opportunities.

### **Task**
I owned the end‑to‑end design: data ingestion → feature engineering → inference → alerting. Goal: < 200 ms latency and > 99.9% uptime while keeping costs under $50k/month.

### **Action**
1. **Architecture** – Deployed a *Lambda* layer for lightweight inference, backed by an *ECS Fargate* cluster for heavy‑weight models.  
2. **Data Pipeline** – Used *Kinesis Data Streams* to stream raw events; *Glue* jobs materialized feature tables in *Redshift*, then pushed to *S3* as Parquet for fast read.  
3. **Model Serving** – Trained a *LightGBM* model, exported to ONNX, and cached predictions in *ElastiCache Redis*.  
4. **Monitoring** – Built CloudWatch dashboards; set up alarms on latency > 250 ms and error rate > 0.1%.  
5. **Cost Optimization** – Spot instances for Fargate, reserved capacity for Lambda concurrency.

### **Result**
- Latency dropped from 5 min to **180 ms** (≈ 99% improvement).  
- Uptime hit **99.97%** over 6 months.  
- Monthly cost reduced by **38%** ($32k vs $53k).  

*Bar‑raiser notes:* I demonstrated full ownership, deep dive into each component, quantified impact, and learned to trade off model complexity for latency—an insight that guided future model choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
