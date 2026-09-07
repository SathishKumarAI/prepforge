---
qid: ing_7ab2243a4b__aws__local
question: 'Explain: High-Level Architecture (10 minutes) — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 460
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:02:58-05:00'
sources: []
---

**High‑Level ML System for Real‑Time Recommendation**

*Situation:*  
Our e‑commerce platform needed a real‑time recommendation engine that could scale to 10M daily users and reduce bounce rate by >3 %.  

*Task:*  
Design an end‑to‑end architecture that ingests clickstream, trains models, serves predictions with <50 ms latency, and auto‑scales under traffic spikes.

*Action:*  
1. **Data Ingestion** – Kinesis Data Streams → Lambda (pre‑processing) → S3 (raw + processed).  
2. **Feature Store** – DynamoDB Global Tables for low‑latency read of user/item embeddings; Athena on S3 for batch analytics.  
3. **Model Training** – SageMaker Processing jobs nightly, using Spot instances to cut cost 40 %. Model artifacts stored in ECR and registered in SageMaker Model Registry.  
4. **Serving Layer** – SageMaker Endpoint with Multi‑Model Server behind an Application Load Balancer; autoscaling policy based on target CPU utilization (70 %).  
5. **Monitoring & Feedback** – CloudWatch metrics + Amazon Lookout for Metrics to detect drift; Lambda triggers retraining when accuracy drops below 0.85.

*Result:*  
- Latency <45 ms for 99th percentile requests.  
- Cost per inference $0.0002 (50 % lower than legacy).  
- Bounce rate dropped from 12 % to 9.1 % within two weeks of deployment.  

**Leadership Principles:** *Customer Obsession* – delivering low‑latency, high‑accuracy recommendations; *Ownership* – full pipeline from ingestion to feedback loop; *Dive Deep* – tuning Spot usage and autoscaling thresholds; *Bias for Action* – rapid prototype with SageMaker.  

Bar‑raiser will check: did I quantify impact? Did I show trade‑offs (Spot vs on‑demand, DynamoDB read capacity vs cost)? Did I reflect learning from a prior failure (model drift handling)?

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
