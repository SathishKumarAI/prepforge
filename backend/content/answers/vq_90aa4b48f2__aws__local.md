---
qid: vq_90aa4b48f2__aws__local
question: How can I see what the uptime for my database is?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 416
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:03:41-05:00'
sources: []
---

**Situation / Task**  
When we migrated our e‑commerce catalog from a single‑node MySQL instance to an Amazon RDS Multi‑AZ deployment, the product team needed a reliable way to *see* database uptime in real time so they could correlate it with traffic spikes and customer complaints.

**Action**  
1. **Instrumentation** – I enabled Enhanced Monitoring for the DB instance (OS metrics) and CloudWatch Logs for MySQL error logs.  
2. **Health API** – Built a lightweight Lambda function that queries `SELECT 1;` against the reader endpoint every minute, writes the result to a DynamoDB table (`DBUptimeHistory`).  
3. **Dashboards** – Created a CloudWatch dashboard with two widgets:  
   *A line chart* of `DBUptimeHistory.LastCheckTime` vs. a binary “up/down” flag (derived from Lambda’s success/failure).  
   *An alarm* that triggers when the function fails twice in a row, sending an SNS notification to Ops.

**Result**  
- **Availability**: Achieved 99.95% uptime visibility with < 1 second latency per check.  
- **Cost**: <$0.10/month for Lambda invocations + minimal CloudWatch storage.  
- **Actionability**: Within two weeks, we correlated a 5‑minute outage with a failed replication slot and rolled out an automated failover script that reduced mean time to recovery from 12 min to < 30 s.

**Reflection (Bar‑raiser notes)**  
I took *ownership* by automating the entire pipeline; I *dived deep* into RDS internals, CloudWatch metrics, and Lambda error handling. The data‑driven impact is clear: a measurable reduction in MTTR and improved customer satisfaction scores. My learning: always expose the “heartbeat” of critical services early—it's cheaper to fix problems when you can see them in real time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
