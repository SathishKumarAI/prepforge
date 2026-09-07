---
qid: ing_9e5bc886d5__aws__local
question: 'Explain: and the system like i guess what — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 424
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:22:53-05:00'
sources: []
---

**Situation & Task**  
While leading a campus‑wide parking program, I noticed that peak demand at the entrance caused long wait times (up to 12 min) and driver frustration. The goal was to build an end‑to‑end system that predicts arrival patterns, optimizes gate flow, and reduces dwell time by ≥30 %.  

**Action**  
1. **Data Layer** – Collected 6 months of sensor logs (vehicle count, timestamp, lane ID) in a Kinesis stream → persisted to Redshift for analytics.  
2. **ML Model** – Trained an LSTM on hourly counts; deployed via SageMaker Endpoint for real‑time predictions.  
3. **Decision Engine** – Lambda function ingests the prediction, adjusts gate priority (via DynamoDB), and triggers a CloudWatch alarm if forecast exceeds threshold.  
4. **User Interface** – A lightweight React app on S3 + CloudFront shows live queue length; drivers receive ETA via SNS push.  

**Result**  
- Gate wait time dropped from 12 min to **6 min** (50 % reduction).  
- Revenue per parking session increased by **$0.25** due to higher throughput.  
- System cost < $1,200/month vs. the prior on‑prem solution ($4,800).  

**Leadership Principles**  
- *Customer Obsession*: Delivered a smoother arrival experience for 15k daily users.  
- *Ownership & Dive Deep*: Built end‑to‑end pipeline, tuned LSTM hyperparameters, and iterated on failure modes (e.g., sensor outages).  

**Bar‑raiser Takeaway** – Showed clear ownership, deep technical dive into ML + AWS services, quantified impact, and lessons learned from initial model mis‑predictions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
