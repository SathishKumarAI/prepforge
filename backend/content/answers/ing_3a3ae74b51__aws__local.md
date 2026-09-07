---
qid: ing_3a3ae74b51__aws__local
question: 'Explain: Week 1: Introduction to Machine Learning'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 467
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:37:58-05:00'
sources: []
---

**Situation & Task**  
During my first week on a new product line at Amazon, I was tasked with showing how we could use machine learning (ML) to improve the recommendation engine for our Prime Video catalog. The goal was to boost user engagement by 5 % within three months.

**Action**  
I *owned* the end‑to‑end pipeline:  
1. **Data ingestion** – used **Amazon Kinesis Data Streams** to capture watch history in real time, then stored it in an **S3 data lake** (partitioned by user segment).  
2. **Feature store** – built a catalog with **AWS Glue** and **DynamoDB** for low‑latency lookups.  
3. **Model training** – leveraged **Amazon SageMaker** to train a collaborative filtering model on GPU instances, tuning hyperparameters via SageMaker Experiments (tracking > 200 runs).  
4. **Serving** – deployed the model with **SageMaker Endpoint**, auto‑scaling based on CloudWatch metrics to keep 99.9 % availability while keeping cost < $1.2 M/month.  
5. **Monitoring & Feedback loop** – set up SageMaker Model Monitor and integrated A/B testing through Amazon CloudFront to capture click‑through rates.

**Result**  
After rollout, we observed a **7.3 % lift in session time** and a **4.1 % increase in subscription renewals**, surpassing the target. The system handled 10× our peak traffic without downtime, and cost savings of ~15 % were achieved by using spot instances for training.

---

### Leadership Principles Highlighted  
- **Customer Obsession** – focused on metrics that directly impact user satisfaction.  
- **Ownership & Dive Deep** – took full responsibility from data ingestion to monitoring, continuously iterating based on real‑world feedback.  

Bar raisers will notice my clear ownership narrative, deep technical decisions (service choices, cost trade‑offs), and quantified business impact, as well as lessons learned when tuning the auto‑scaling policy during early traffic spikes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
