---
qid: ing_45ed87b3b8__aws__local
question: 'Explain: Now normally the choice of database depends'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 402
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:03:45-05:00'
sources: []
---

**Situation**  
In a recent project I was tasked with building a recommendation engine for a global e‑commerce platform. The core ML pipeline required ingesting click‑stream data, training models nightly, and serving predictions in real time.

**Task**  
I had to decide which database technology would best support the entire workflow: high‑velocity ingestion, low‑latency reads, and easy integration with SageMaker and Lambda.

**Action**  
*Customer Obsession & Ownership*: I mapped each requirement to a data‑store capability.  
- **Amazon DynamoDB** – NoSQL key/value store for ultra‑low‑latency lookups of user profile features (≤5 ms at 99th percentile).  
- **Amazon Timestream** – Time‑series DB for raw click events, enabling fast aggregation and retention policies (30 days hot tier, 365 days cold tier).  
- **Amazon S3 + Athena** – Long‑term storage of training datasets; cost‑effective and queryable with serverless SQL.  

I designed an event‑driven pipeline: Kinesis Firehose → Timestream/S3; SageMaker training jobs read from S3, write model artifacts to ECR; Lambda functions pull feature vectors from DynamoDB for inference via SageMaker Endpoint.

**Result**  
The system processed 10 M events/sec with <2 s latency for predictions. Cost dropped by **35%** compared to a monolithic RDS solution, and deployment time for new models fell from 3 days to under 12 hours.

**Reflection**  
If I had chosen a single relational database, we’d have faced scaling bottlenecks and higher costs—an oversight that taught me the value of *dive deep* into data patterns before selecting technology.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
