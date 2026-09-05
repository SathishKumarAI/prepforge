---
qid: ing_375f5b5013__star__local
question: 'Explain: for DynamoDB replication so when we propagate'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 427
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:19:04-05:00'
sources: []
---

**Situation**  
I was leading a migration of our real‑time inventory service from an on‑prem MySQL cluster to Amazon DynamoDB. The existing system served ~15 k requests per second with sub‑100 ms latency, and we needed zero downtime during the cutover.

**Task**  
My goal was to set up cross‑region replication in DynamoDB so that the primary region could serve all traffic while a secondary region stayed fully synced for disaster recovery. I had to design a strategy that kept eventual consistency acceptable, avoided write amplification, and respected our 5 % SLA on latency spikes.

**Action**  
1. Configured **Global Tables** with two regions (us‑east‑1 & eu‑west-1).  
2. Enabled DynamoDB Streams in the primary region to capture every write, then used a Lambda function triggered by those streams to publish events to an SNS topic.  
3. Subscribed another Lambda in the secondary region that processed the SNS payload and performed `PutItem`/`UpdateItem` calls with conditional writes to preserve atomicity.  
4. Tuned provisioned capacity: started with 20 WCU/RCU per region, then auto‑scaling based on CloudWatch metrics (latency >200 ms → +25 %).  
5. Implemented a lightweight consistency check job that ran nightly, comparing hash sums of each partition key between regions and alerting on mismatches.

**Result**  
The replication lag stayed under 30 ms for 99.9 % of the time during peak traffic. After cutover, we observed no loss of data and zero service interruption. The auto‑scaling policy reduced costs by ~18 % compared to a static over‑provisioned setup. I learned that combining Global Tables with stream‑driven Lambda replication gives fine‑grained control over consistency while keeping operational overhead low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
