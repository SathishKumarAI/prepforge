---
qid: ing_e98bd2c742__aws__local
question: 'Explain: Conflict Resolution — Strong vs. Eventual Consistency - by Ashish
  Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 473
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:06:09-05:00'
sources: []
---

**Situation (S)** – I led a team that built an ML‑model registry for a global SaaS platform. The registry had to support *strong* consistency for model metadata (audit trails, versioning) and *eventual* consistency for serving predictions at scale.

**Task (T)** – Design a conflict‑resolution strategy that balances the need for immediate consistency with low latency for inference, while staying cost‑effective on AWS.

**Action (A)**  
1. **Data modeling**: Split data into two tables—`MetadataTable` (DynamoDB *Strongly Consistent* reads) and `PredictionCache` (DynamoDB *Eventual*).  
2. **Conflict resolution**: Use DynamoDB’s conditional writes (`ConditionExpression`) to enforce version numbers for metadata; any write that violates the expected version is rejected, forcing the client to resolve conflicts locally. For predictions, we accept eventual consistency because stale results are tolerable up to 1 s.  
3. **Eventual sync**: A Lambda triggered by DynamoDB Streams propagates changes from `MetadataTable` to a Kinesis stream that updates an ElasticCache Redis cluster used for inference.  
4. **Monitoring & rollback**: CloudWatch metrics track *WriteLatency* and *ConflictRate*. If conflicts exceed 2 % of writes, the pipeline auto‑scales Lambda concurrency or falls back to a stricter consistency mode.

**Result (R)** – The system handled 5 M daily writes with <0.5 s latency for predictions, while maintaining 99.999 % accuracy on audit logs. Conflict resolution reduced manual merges by 90 %.  

> **Leadership Principles**  
> • *Customer Obsession*: Delivered reliable model governance for customers worldwide.  
> • *Dive Deep*: Leveraged DynamoDB’s conditional writes and Kinesis Streams to create a fault‑tolerant, cost‑effective solution.  

Bar‑raisers look for ownership of the entire pipeline, deep understanding of consistency trade‑offs, measurable impact (conflict reduction), and learning from any failure (e.g., scaling Lambda when conflict spikes).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
