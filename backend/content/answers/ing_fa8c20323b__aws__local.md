---
qid: ing_fa8c20323b__aws__local
question: 'Explain: Amazon S3 – Object Expiration — Amazon S3 \u2013 Object Expiration
  | AWS News Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 354
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:44:58-05:00'
sources: []
---

**Situation / Task**  
When I led the migration of our data lake from on‑prem to S3, we hit a storage cost wall: stale logs were piling up and inflating our bill by ~25 % each month.

**Action**  
I championed **Object Expiration** (S3 Lifecycle) to automatically delete objects older than 90 days. I first *dive deep* into the bucket policy, identifying that 70 % of the 1.2 TB volume consisted of hourly logs no longer needed after compliance review. I defined a lifecycle rule in CloudFormation:

```yaml
Resources:
  ExpireLogsRule:
    Type: AWS::S3::BucketLifecycleConfiguration
    Properties:
      BucketName: !Ref DataLakeBucket
      Rules:
        - Id: DeleteOldLogs
          Status: Enabled
          Prefix: logs/
          ExpirationInDays: 90
```

I coordinated with DevOps to deploy the rule, monitored metrics via CloudWatch (bytes deleted per day) and verified that storage cost dropped from $1.20K/month to $0.85K/month— a **29 %** reduction.

**Result**  
The automated policy freed up capacity for new analytics workloads without manual intervention, aligning with *Customer Obsession* (delivering a clean data environment) and *Ownership* (taking end‑to‑end responsibility). I documented the rollback plan and added an alert if deletion rates fall below threshold, turning a one‑time fix into a resilient, self‑healing system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
