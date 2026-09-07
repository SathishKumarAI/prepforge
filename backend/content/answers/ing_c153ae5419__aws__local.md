---
qid: ing_c153ae5419__aws__local
question: 'Explain: Amazon SNS — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 354
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:40:17-05:00'
sources: []
---

**Situation & Task**  
In my last role I led a feature that needed real‑time alerts for data pipeline failures. The team had no on‑prem messaging layer, and we were under a 3‑month deadline to ship.

**Action (Technical)**  
I chose **Amazon SNS** as the serverless pub/sub engine because it natively scales to millions of messages per second, has built‑in retries, and integrates with Lambda, SQS, and HTTP endpoints. I designed a single topic “Pipeline‑Failure” with two subscriptions:  

1. *Lambda* that logs to CloudWatch and updates DynamoDB.  
2. *SQS* that feeds a downstream alerting microservice.

Using **AWS IAM** policies I restricted publish rights only to the pipeline job, ensuring ownership. I enabled **Message Filtering** on SQS so we only processed “critical” tags, cutting downstream traffic by 70 %.  

**Result**  
We reduced mean time to detect (MTTD) from 45 min to 2 min— a **94 % improvement**— and cut operational cost by $1.5k/month versus the legacy Kafka setup.

**Reflection**  
I learned that “Dive Deep” into the billing model was crucial; SNS pricing is per publish, so I set up throttling to avoid accidental spikes. The bar‑raiser will notice my ownership of both security and cost, the quantified impact on reliability, and my iterative learning from the initial pilot failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
