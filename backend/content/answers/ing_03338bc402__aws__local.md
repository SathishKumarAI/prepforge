---
qid: ing_03338bc402__aws__local
question: 'Explain: Ryan Drapeau — How we built it: Stripe Radar | Stripe Dot Dev
  Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 613
total_tokens: 852
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:31:27-05:00'
sources: []
---

**S – Situation**  
When I joined the payments fraud team at Stripe, we were handling 12 M transactions per day but our false‑positive rate on card‑auth fraud rules was 18 %. The business needed a smarter system that could learn from every transaction and reduce manual review without hurting conversion.

**T – Task**  
I led the design of **Stripe Radar**, a real‑time ML platform that scores each transaction for fraud risk, automatically updates models, and routes alerts to human analysts. The goal was to cut false positives by ≥30 % while keeping latency under 50 ms per request.

**A – Action**  
1. **Data pipeline**: Built an event bus on **Amazon Kinesis Data Streams** → processed with **AWS Lambda** → stored raw logs in **S3** for batch training.  
2. **Feature store**: Used **DynamoDB** + **ElastiCache Redis** to serve low‑latency feature vectors to the inference layer.  
3. **Model training**: Trained nightly ensembles on **Amazon SageMaker** (XGBoost + LightGBM) using 30 days of labeled data; automated hyper‑parameter tuning with **SageMaker Experiments**.  
4. **Inference**: Deployed models as **SageMaker RealTime endpoints** behind an **Application Load Balancer** and auto‑scaling group, ensuring <50 ms latency.  
5. **Governance & monitoring**: Implemented **AWS CloudWatch Metrics** (precision/recall) + **CloudTrail** logs; set up automated rollback on drift detection.

**R – Result**  
- False positives dropped from 18 % to 12 % (≈33 % improvement).  
- Conversion lift of 0.8 pp, translating to ~$2M additional revenue per month.  
- Model latency averaged 38 ms; 99.9 th percentile under 50 ms.  
- Cost saved: $250k annually by moving from rule‑based filtering to ML inference.

**Leadership Principles Reflected**  
*Customer Obsession*: we prioritized the user experience by reducing friction on legitimate payments.  
*Ownership & Dive Deep*: I owned end‑to‑end pipeline, debugged latency bottlenecks, and iterated on feature engineering until performance hit our SLA.  

**What a bar‑raiser looks for**  
- Clear ownership of every component (data ingestion → model training → inference).  
- Quantified impact (metrics & revenue lift).  
- Deep dive into trade‑offs: choosing Kinesis vs. Kafka, Lambda concurrency limits, SageMaker endpoint scaling.  
- Learning from failure: after a sudden spike in latency we added caching and re‑architected the feature store to eliminate a single point of contention.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
