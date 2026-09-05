---
qid: ing_f2b98faa16__star__local
question: 'Explain: Use cases — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 301
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:33:16-05:00'
sources: []
---

**Situation:** In my previous role at a fintech startup, we were building an automated fraud detection system that needed to process millions of transaction records daily while keeping infrastructure costs low.

**Task:** I was tasked with designing a real‑time scoring pipeline that could handle variable traffic spikes—especially during holiday shopping seasons—without manual scaling or overprovisioning.

**Action:** I chose AWS Lambda for serverless inference, pairing it with Amazon SageMaker endpoints for model hosting. Transactions were streamed via Kinesis Data Streams to trigger Lambda functions; each function pulled a batch of events, invoked the SageMaker endpoint, and pushed predictions back to DynamoDB for downstream risk scoring. To keep latency under 200 ms, I used Lambda’s provisioned concurrency during peak hours and leveraged API Gateway throttling to protect the SageMaker endpoint from sudden surges. For cost control, I monitored usage with CloudWatch metrics and applied reserved concurrency budgets.

**Result:** The solution handled a 4× traffic spike during Black Friday without any outages, reduced infrastructure spend by 35% compared to our previous EC2‑based batch jobs, and lowered prediction latency from 1.2 s to 0.18 s on average. I learned how serverless components can be orchestrated for ML workloads while maintaining strict SLAs and cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
