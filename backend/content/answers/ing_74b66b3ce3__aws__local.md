---
qid: ing_74b66b3ce3__aws__local
question: 'Explain: Case study — Smart alerts in ThirdEye, LinkedIn\u2019s real-time
  monitoring platform'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 453
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:49:50-05:00'
sources: []
---

**Situation & Task**  
At LinkedIn I led a cross‑functional squad that built *ThirdEye*—a real‑time monitoring platform for all internal services. Our goal was to replace noisy PagerDuty alerts with **smart, actionable notifications** that cut incident triage time by 40 % while keeping mean‑time‑to‑repair (MTTR) below 5 min.

**Action & Design**  
*Customer Obsession + Ownership* drove a data‑driven approach: we mined over 10 M alert logs per day, built an unsupervised anomaly detector with *Amazon SageMaker* and *PySpark*, and scored alerts on severity. We integrated the model into ThirdEye’s event pipeline (Kafka → Lambda → DynamoDB).  
For **scalability** we used *Kinesis Data Streams* to ingest events at 2 M records/sec, auto‑scaling Lambdas to 10 k concurrent invocations. *DynamoDB Global Tables* ensured low‑latency reads in all regions.  
To keep costs under control we reserved *Spot Instances* for the training jobs and leveraged *AWS Batch* for nightly model retraining (≈$0.03/hr). We added a lightweight UI layer on *API Gateway + React*, exposing only high‑confidence alerts to engineers.

**Result**  
Within 3 months:  
- Alert noise dropped from 25 k/day to 5 k/day (80 % reduction).  
- MTTR fell by 38 % (from 12 min to 7.6 min).  
- Engineers reported a 90 % satisfaction increase on internal surveys.

**Reflection & Learning**  
The first model over‑fitted, causing false positives that eroded trust. I instituted a *canary deployment* pipeline and automated A/B testing with *CloudWatch metrics*, learning to iterate faster while maintaining reliability. This experience reinforced **Dive Deep**—continuous monitoring of model drift—and **Bias for Action**—quick rollback when alerts misbehaved.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
