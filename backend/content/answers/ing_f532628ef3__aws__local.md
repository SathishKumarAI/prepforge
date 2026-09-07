---
qid: ing_f532628ef3__aws__local
question: 'Explain: Demonstrate your thinking and curiosity — Interview tips | Microsoft
  Careers'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 391
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:31:21-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked with building a real‑time anomaly detector for IoT sensor streams that could flag equipment failures before they caused downtime.

**Action (Design)**  
I chose **Amazon Kinesis Data Streams** for ingestion, **Lambda** to clean and transform data, and **Amazon SageMaker** to train a one‑class SVM on historical normal behavior. The model was deployed as an endpoint behind **API Gateway** and served via **AWS IoT Greengrass** at the edge so that decisions were made within 100 ms of ingestion. To keep costs low I used **SageMaker’s spot training jobs** and scheduled retraining weekly, while metrics are pushed to **Amazon CloudWatch** for alerting.

I also implemented a feedback loop: anomalies flagged in production were labeled by field engineers and fed back into the model via **S3**, ensuring continuous improvement. All services ran in an isolated VPC with IAM roles enforcing least privilege.

**Result**  
Within three months, we reduced unplanned downtime by **32 %** (from 12 to 8 hours/month) and cut infrastructure spend by **18 %** compared to the legacy batch system. The latency from sensor to alert dropped from 4 s to <0.1 s.

**Reflection**  
I owned every layer, diving deep into performance bottlenecks in Lambda and SageMaker tuning. When initial model precision hit 70 %, I iterated quickly—bias for action—and learned that a hybrid edge‑cloud approach was essential. This experience reinforces my commitment to *Customer Obsession* (protecting uptime) and *Ownership* (end‑to‑end responsibility).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
