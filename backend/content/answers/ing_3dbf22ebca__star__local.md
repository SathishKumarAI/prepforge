---
qid: ing_3dbf22ebca__star__local
question: 'Explain: Amazon SNS message filtering — AWS-Services/4_MessageBrokers/AmazonSNS.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 268
total_tokens: 535
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:31:37-05:00'
sources: []
---

**Situation**  
During a migration of our IoT telemetry pipeline to AWS, the data lake was overwhelmed by messages that were not relevant to downstream analytics. We had 120+ MQTT topics but only a handful actually needed persistence in S3.

**Task**  
I needed to reduce unnecessary traffic to the S3 ingestion bucket by filtering out irrelevant SNS notifications while still ensuring critical alerts reached the monitoring dashboards within milliseconds.

**Action**  
I configured an Amazon SNS topic with multiple message attributes (device_type, region, severity). Using the SNS console I added a JSON-based filter policy that matched only `severity = "critical"` or `region = "us-west-2"`. For the rest of the traffic I set up a Lambda subscriber that simply logged and discarded messages. I also leveraged IAM policies to restrict publishing to the filtered topic, ensuring no accidental bypass.

**Result**  
Post‑deployment, S3 bucket write volume dropped by 78%, cutting storage costs from $1.20k/month to $0.28k/month. Alert latency improved to <200 ms on average. I learned that fine‑grained attribute filtering in SNS can dramatically optimize downstream processing without adding code complexity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
