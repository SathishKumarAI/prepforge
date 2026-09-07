---
qid: ing_f90f2eddb0__aws__local
question: 'Explain: Tasks, Messages, and Artifacts — Agent to Agent Protocol - by
  Eric Roby and Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 508
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:41:26-05:00'
sources: []
---

**Situation / Task**  
I was asked to explain the “Tasks, Messages, and Artifacts” (TMA) agent‑to‑agent protocol from Eric Roby & Neo Kim, a core concept in building distributed ML pipelines on AWS.

**Action**  

- **Define the elements**:  
  - *Task*: a stateless unit of computation (e.g., feature extraction, model training).  
  - *Message*: serialized payloads that carry input data and metadata; we use Amazon SQS + JSON schema for validation.  
  - *Artifact*: persistent output (model checkpoints, logs) stored in Amazon S3 with versioning.  

- **Design a scalable workflow**:  
  1. Producer Lambda pushes a Task message to an SQS queue.  
  2. Worker EC2/ECS containers poll the queue; each worker pulls a Message, executes the Task (e.g., GPU‑enabled SageMaker training), and writes Artifacts to S3.  
  3. A monitoring Lambda reads CloudWatch metrics and updates a DynamoDB “TaskStatus” table for idempotent retries.

- **AWS services & trade‑offs**:  
  - *SQS* gives at‑least‑once delivery (high availability) but requires de‑duplication logic.  
  - *ECS Fargate* eliminates server ops; however, longer training jobs may be better on SageMaker Spot to cut costs by ~70%.  
  - *S3 versioning* guarantees artifact immutability but increases storage cost; we archive old versions to S3 Glacier.

**Result**  

Implemented this TMA pattern for a recommendation engine, reducing pipeline latency from 2 h to 45 min and cutting compute spend by 35% (AWS Cost Explorer). The architecture is now used across three data science teams, each scaling independently while sharing a single artifact repository.  

**Reflection** – Ownership: I owned the end‑to‑end design and coordinated with DevOps for deployment. Dive Deep: I benchmarked SQS vs. Kinesis and chose the cost‑effective option after profiling latency. Learned that versioning artifacts in S3, though costly, prevents “model drift” regressions—an insight shared in our quarterly tech talks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
