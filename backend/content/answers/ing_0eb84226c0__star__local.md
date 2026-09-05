---
qid: ing_0eb84226c0__star__local
question: 'Explain: Process data at nearly any scale — Serverless Computing \u2013
  Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 360
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:57:53-05:00'
sources: []
---

**Situation:** In my last role, our marketing team wanted to run a sentiment‑analysis model on every new customer review that came in from the e‑commerce platform—roughly 50,000 reviews per day. The existing batch pipeline was slow and costly because we had to spin up an EC2 cluster for each job.

**Task:** I needed to build a near‑real‑time processing system that could ingest, transform, and score each review as it arrived, while keeping infrastructure costs under $200/month and ensuring the latency stayed below 5 seconds per record.

**Action:** I designed a serverless workflow: an S3 event trigger fired a Lambda function for every new review file. Inside the function, I used AWS Glue to clean the text (remove stop words, lemmatize), then invoked a pre‑trained BERT model packaged in a Docker image on Amazon SageMaker Edge containers. The Lambda output was streamed to DynamoDB for quick lookups and to an SQS queue that fed a downstream analytics dashboard via Kinesis Data Analytics. I also implemented auto‑scaling with Lambda’s concurrency limits and used CloudWatch metrics to monitor CPU usage, adjusting the memory allocation from 512 MiB to 1 GiB based on observed throughput.

**Result:** The new pipeline processed every review in under 3 seconds on average, reduced infrastructure spend by 60%, and provided real‑time sentiment scores that were incorporated into our recommendation engine. I learned how to balance Lambda’s stateless nature with heavy ML inference by leveraging SageMaker Edge, and how to use event‑driven architecture to eliminate idle compute resources.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
