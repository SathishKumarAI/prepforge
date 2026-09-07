---
qid: ing_7f5ce75659__faang__local
question: 'Explain: Supported Services — Dynamostyledatabases'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 609
total_tokens: 842
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:41:05-05:00'
sources: []
---

## Clarify  
You’re asking which AWS services can **directly** interact with Amazon DynamoDB (the “dynamo‑styled” NoSQL database). I’ll list the primary integrations and note any assumptions: that we’re talking about *runtime* services (not just SDKs), and that you want a concise, interview‑style answer.

## Approach  
1. Identify core AWS services with built‑in DynamoDB connectors.  
2. Group them by use case (compute, analytics, messaging).  
3. Highlight any special features (e.g., on‑demand capacity, global tables).

## Depth  

| Service | Interaction type | Key feature |
|---------|------------------|-------------|
| **AWS Lambda** | Event source or client SDK | Triggers on table changes via DynamoDB Streams; can read/write directly. |
| **Amazon API Gateway** | Proxy to Lambda or SDK | Exposes REST/GraphQL endpoints that talk to DynamoDB. |
| **Amazon SageMaker** | Data input/output | Reads/writes training data and model artifacts in DynamoDB tables (via built‑in SDK). |
| **AWS Glue** | ETL jobs | Connects via JDBC/NoSQL connector; can crawl, transform, and load into DynamoDB. |
| **Amazon Kinesis / Firehose** | Streaming ingestion | Streams can write directly to DynamoDB via the Kinesis Data Firehose connector (for logs/events). |
| **AWS Step Functions** | Orchestrate workflows that call DynamoDB actions. |
| **Amazon EventBridge** | Event routing to Lambda that updates DynamoDB. |
| **AWS AppSync** | GraphQL layer with DynamoDB as data source; supports real‑time subscriptions. |

Other services (e.g., CloudWatch, CloudTrail) log events but don’t *store* in DynamoDB.

## Edge Cases  
- **Throughput limits**: high‑volume workloads may hit provisioned capacity; consider on‑demand or auto‑scaling.  
- **Consistency models**: default eventual consistency—use `ConsistentRead=True` for strong reads if needed.  
- **Regional vs global tables**: ensure the service is in the same region unless using Global Tables.

## Optimize & Communicate  
Explain trade‑offs: Lambda gives low latency but per‑invoke cost; API Gateway adds a managed layer with throttling; AppSync offers real‑time updates at the expense of more complex schema design. Clarify that SDKs (Python boto3, Java AWS SDK) are universal but not “services.” This concise structure demonstrates clear problem framing, systematic coverage, and awareness of practical constraints—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
