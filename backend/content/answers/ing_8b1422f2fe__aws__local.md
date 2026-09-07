---
qid: ing_8b1422f2fe__aws__local
question: 'Explain: Lag — Change Data Capture (CDC) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 406
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:40:11-05:00'
sources: []
---

**Situation / Task**  
I was tasked to reduce the *lag* between our data lake ingest and downstream ML pipelines that required near‑real‑time training data. The existing batch ETL left a 12‑hour window, hurting model freshness for fraud detection.

**Action**  
1. **Ownership & Bias for Action:** I scoped a CDC solution using **AWS Database Migration Service (DMS)** + **Kinesis Data Streams**. DMS captured row‑level changes from Aurora MySQL and streamed them into Kinesis.  
2. **Dive Deep & Invent & Simplify:** I added an optional *buffer* in DynamoDB to dedupe high‑volume events, then forwarded unique records to a Lambda function that wrote to S3 in parquet for training.  
3. **Scalability / Availability:** Kinesis shards were auto‑scaled via CloudWatch alarms; Lambda concurrency was throttled with reserved capacity to protect downstream services.  
4. **Cost & Trade‑offs:** The CDC path costs ~\$0.20 per million records, versus \$1.00 for nightly batch jobs—30 % savings while cutting lag from 12 h to <5 min.

**Result**  
- Model retraining frequency increased from 24 hrs to 6 hrs, improving fraud detection precision by **15 pp** (from 82 % to 97 %).  
- Operational cost dropped 30 %.  
- The team adopted the CDC pattern across three other services, scaling it to handle 10× more traffic.

*Bar‑raiser note:* I showed deep ownership of the problem, quantified impact with real metrics, and documented lessons learned when a spike in write volume caused temporary throttling—leading to an automated alert rule that pre‑empted future incidents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
