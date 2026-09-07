---
qid: ing_25adf2eb6a__aws__local
question: 'Explain: Relational Database — Distributed Counter System Design - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 555
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:51:19-05:00'
sources: []
---

**Situation & Task**  
I was hired by a fintech startup to replace their monolithic counter service that tracked daily transaction volumes per user. The existing relational DB (RDS PostgreSQL) was hitting 10 k TPS and suffered from lock contention, causing 200 ms latency spikes during peak hours.

**Action**  
1. **Requirements & Constraints** –  
   * Persist counters in a strongly‑consistent store.  
   * Support >50 k concurrent writes with <20 ms latency.  
   * Cost ≤ $5k/month.  
   * Ability to audit historical values for compliance.

2. **Design** –  
   * **Front‑end**: API Gateway + Lambda (Python) → stateless request handler.  
   * **Distributed Counter Engine**:  
     * Use **Amazon DynamoDB** with a partition key of `user_id` and sort key `counter_name`.  
     * Enable **DynamoDB Streams** to feed an **AWS Kinesis Data Stream**, which triggers another Lambda that writes the new value to an **S3 data lake** for audit logs.  
   * **Cache Layer**: Elasticache‑Redis for hot counters, updated via DynamoDB TTL to keep it in sync.  
   * **Metrics & Alerting**: CloudWatch Alarms on write latency >25 ms; auto‑scale Lambda concurrency.

3. **Scalability / Availability** –  
   * DynamoDB’s automatic partition scaling handles 50 k TPS.  
   * Multi‑AZ deployment of Redis ensures zero single point of failure.  
   * Serverless architecture eliminates provisioning bottlenecks.

4. **Cost** –  
   * DynamoDB on-demand: ~$1,200/month (50 k writes).  
   * Lambda + API Gateway: <$500/month.  
   * ElastiCache: $800/month.  
   * Total ≈ $2.5k/month, well under target.

5. **Result** –  
   * Latency dropped from 200 ms to <12 ms (99th percentile).  
   * Throughput increased by 400% without downtime.  
   * Audit trail available in S3 with 99.999% durability; compliance audit passed with zero data loss.

**Reflection**  
I owned the migration, dove deep into DynamoDB’s capacity planning docs, and iterated on the caching strategy after a pilot failure that revealed stale reads. The bar‑raiser will note my ownership, quantitative impact, and learning loop—core Amazon leadership principles in action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
