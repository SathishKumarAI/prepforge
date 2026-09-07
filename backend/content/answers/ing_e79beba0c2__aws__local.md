---
qid: ing_e79beba0c2__aws__local
question: 'Explain: Now once you have this information you — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 474
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:02:20-05:00'
sources: []
---

**Situation** – At my last role I led the “Smart Routing” feature for a navigation app that needed real‑time traffic predictions using machine learning. The goal was to reduce average trip time by 12 % and improve ETA accuracy from 70 % to >90 %.  

**Task** – Design an end‑to‑end ML pipeline on AWS that ingests live GPS, road network, and historical data, trains a model at scale, serves predictions with sub‑200 ms latency, and is cost‑effective for millions of concurrent users.  

**Action** –  
1. **Data ingestion**: Kinesis Data Streams → Lambda → S3 (raw) + DynamoDB (metadata).  
2. **Feature store**: Glue ETL → SageMaker Feature Store (high‑throughput, ACID).  
3. **Training**: SageMaker training jobs on Spot instances; Hyperparameter tuning with Bayesian optimization.  
4. **Model registry & deployment**: SageMaker Model Registry → Endpoint in an Auto Scaling group behind Application Load Balancer (ALB) for <200 ms latency.  
5. **Observability**: CloudWatch metrics, SageMaker Debugger, and Athena queries on model drift.  

**Result** – Deployed to production within 4 weeks; trip time dropped 14 % (above target), ETA accuracy hit 92 %. Operational cost was 30 % lower than a traditional EC2‑based pipeline due to Spot usage and serverless components.

---

### Leadership Principles Highlighted
- **Ownership** – Took full responsibility from data ingestion to monitoring.  
- **Dive Deep & Deliver Results** – Quantified impact, iterated on model performance, and documented trade‑offs (e.g., spot vs. on‑demand).  

### What a Bar‑Raiser Listens For
- Clear ownership narrative.  
- Depth of technical design with AWS services and scalability reasoning.  
- Concrete, data‑driven results and cost analysis.  
- Reflection on lessons learned when initial latency exceeded SLAs (shifted to Edge caching).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
