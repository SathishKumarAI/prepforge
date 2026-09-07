---
qid: ing_2f61d1ee86__aws__local
question: 'Explain: Minimize Dependency Back to the Monolith'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 483
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:12:38-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was leading a migration of our recommendation engine from a monolithic Java service to an event‑driven micro‑service architecture on AWS. The monolith tightly coupled data ingestion, model training and inference, which made it hard to scale the ML pipeline independently.

**Action**  
I introduced a *dependency minimization* strategy:  
1. **Decouple via Event Bus** – Moved all data feeds (clickstream, user profile updates) into Amazon Kinesis Data Streams so that downstream services subscribe without direct API calls.  
2. **Separate Model Service** – Deployed the inference service as an AWS Lambda function behind Amazon API Gateway, using a pre‑trained SageMaker endpoint for predictions.  
3. **Immutable Training Pipeline** – Scheduled training jobs with Amazon SageMaker Pipelines triggered by CloudWatch Events on data arrival, storing artifacts in S3 and publishing model versions to SageMaker Model Registry.  
4. **Observability & Governance** – Implemented AWS X-Ray across services, used Amazon EventBridge for audit logs, and enforced IAM roles to restrict cross‑service access.

**Result**  
- Cut end‑to‑end latency by **45 %** (from 1.2 s in the monolith to 0.65 s).  
- Reduced monthly ops cost from $12k to $5.3k by eliminating unnecessary EC2 hours and leveraging serverless compute.  
- Increased system availability from 99.8 % to **>99.95 %** by isolating failures; a Kinesis stream failure no longer brought down inference.

**Reflection (Bar‑raiser lens)**  
I owned the migration, diving deep into each service’s metrics to identify bottlenecks. The trade‑off of adding an event bus was offset by the gain in scalability and fault isolation. Post‑mortem on a Lambda cold‑start spike taught me to pre‑warm functions via scheduled events—an iterative improvement that further reduced latency.

*Leadership Principles:* **Customer Obsession** (faster, more reliable recommendations), **Ownership** (end‑to‑end responsibility), **Dive Deep** (metrics‑driven decisions), and **Bias for Action** (quickly prototyped event‑driven design).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
