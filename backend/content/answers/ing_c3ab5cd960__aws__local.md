---
qid: ing_c3ab5cd960__aws__local
question: What is disaster recovery? — What is Disaster Recovery? | Google Cloud
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 468
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:45:34-05:00'
sources: []
---

**Disaster Recovery (DR) for a machine‑learning pipeline**

*Leadership Principles:* **Ownership** & **Dive Deep**  
*Scenario:* I was the lead for an image‑classification service that served 1 M requests/day. The model training cluster ran on Amazon SageMaker, inference on Elastic Inference + Lambda, and data resided in S3 and DynamoDB.

| Step | Action | AWS Services | Result |
|------|--------|--------------|--------|
| **Identify critical assets** | Trained model artifacts, feature store, inference endpoints, and training data. | S3, SageMaker Model Registry, EFS, DynamoDB | Defined recovery point objective (RPO) = 15 min, recovery time objective (RTO) = 30 min |
| **Automate backups** | Scheduled nightly snapshots of EFS & DynamoDB; used S3 cross‑region replication for training data. | Amazon Data Lifecycle Manager, DMS, S3 Replication | 99.9% durability, cost $120/month |
| **Build a DR region stack** | Provisioned a duplicate SageMaker endpoint in us-west-2 with CloudFormation templates, using Lambda to switch traffic via Route 53 latency‑based routing. | CloudFormation, Route 53, Lambda, SageMaker | Zero downtime during a simulated outage; RTO < 20 min |
| **Test & validate** | Ran monthly failover drills, verified model accuracy (AUC remained 0.97) and latency (<120 ms). | AWS Fault Injection Simulator | Confidence score ↑ 4/5 from Ops team |

*Result:* After implementing this DR strategy, we reduced outage impact from a potential 6‑hour loss to <20 min, saving an estimated $15k/month in lost revenue and maintaining SLA compliance.  

**Bar‑raiser takeaways:** I owned the end‑to‑end design, dived deep into latency/availability trade‑offs, quantified success with RTO/RPO metrics, and learned that automated failover tests are critical—one missed test had previously caused a 1‑hour downtime in an earlier project.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
