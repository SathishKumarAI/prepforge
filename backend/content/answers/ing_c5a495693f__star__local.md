---
qid: ing_c5a495693f__star__local
question: 'Explain: Overview — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 323
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:05:17-05:00'
sources: []
---

**Situation**  
When I joined a fintech startup, we had an on‑prem batch job that processed credit‑risk scores every night. It ran on a dedicated EC2 instance costing $300/month and frequently hit CPU spikes when the daily transaction volume doubled.

**Task**  
I was tasked with reducing operational costs while ensuring the pipeline could scale automatically to handle peak loads without manual intervention.

**Action**  
I re‑architected the job into an AWS Lambda function triggered by S3 uploads of raw transaction files. I used Amazon Step Functions to orchestrate data extraction, feature engineering, and model inference stages, each running in separate Lambdas with dedicated IAM roles. For storage I swapped our legacy MySQL for Amazon DynamoDB, enabling event‑driven reads via DAX caching. To keep cold starts low, I set provisioned concurrency to 10 and monitored metrics in CloudWatch, adjusting the scaling policy as traffic patterns changed.

**Result**  
The new serverless pipeline cut infrastructure spend from $300/month to under $60/month and reduced end‑to‑end processing time by 40%. Moreover, we gained auto‑scaling that handled a sudden 3× spike during a quarterly audit with no performance degradation. I learned how to balance Lambda’s stateless nature with stateful services like DynamoDB, and the importance of monitoring to fine‑tune concurrency for cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
