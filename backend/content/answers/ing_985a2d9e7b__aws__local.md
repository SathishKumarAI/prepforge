---
qid: ing_985a2d9e7b__aws__local
question: 'Explain: Flexible APIs — Apache HBase'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 422
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:10:08-05:00'
sources: []
---

**Situation & Task (S)**  
In my last role I led a migration of an on‑prem HBase analytics layer to the cloud for a fintech client that needed real‑time fraud scoring. The legacy system exposed only monolithic batch jobs; customers demanded ad‑hoc, schema‑agnostic queries via REST.

**Action (A)**  
I architected a *flexible API* surface using **Amazon API Gateway + AWS Lambda** as a thin gateway to HBase on an **EC2 Auto Scaling group** with **AWS ParallelCluster**. Each Lambda parsed incoming JSON, translated it into a dynamic HBase `Get`/`Scan`, and returned results in Avro for downstream ML pipelines.  
I added **Amazon DynamoDB Streams** to capture write‑through events and push them to an **SQS queue**, where a dedicated EMR cluster performed incremental feature engineering for the fraud model. The entire stack was wrapped in CloudWatch metrics, enabling auto‑scaling on request latency.

**Result (R)**  
- Reduced average query latency from 12 s to **<400 ms** at peak load (5k concurrent requests).  
- Cut operational cost by **35 %** compared with the on‑prem cluster.  
- Enabled data scientists to run *any* HBase scan without code changes, increasing experimentation speed by **70 %**.

**Reflection**  
I took full ownership of the migration, diving deep into HBase’s row key design and Lambda timeout limits. A failure in the initial version caused a 30‑minute outage; I instituted a canary release pattern that eliminated downtime in subsequent deployments. This experience reinforced my bias for action while maintaining high availability—a true embodiment of Amazon’s **Ownership** and **Dive Deep** principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
