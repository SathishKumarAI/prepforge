---
qid: ing_45005072d1__star__local
question: 'Explain: AWS Lambda — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 335
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:46:52-05:00'
sources: []
---

**Situation:** In my last role I was tasked with building a real‑time image classification pipeline for an e-commerce platform that had to process thousands of product uploads per day without over‑provisioning servers.

**Task:** The goal was to create a scalable, cost‑effective system that could automatically classify images into categories and flag any that contained prohibited content, all within a 5‑minute processing window per image.

**Action:** I chose AWS Lambda for its serverless nature. First, I split the pipeline into three functions: an S3 trigger to ingest new uploads, a preprocessing function to resize and normalize images, and a final inference function that loaded a pre‑trained TensorFlow model stored in Amazon EFS for persistence across invocations. Each Lambda ran in a 2 GB memory configuration with 15 s timeout, and I used API Gateway for the front‑end upload endpoint. To handle burst traffic, I set reserved concurrency to 200 per function and enabled provisioned concurrency during peak hours. I also added CloudWatch metrics and an SNS alert if any function exceeded 90% CPU usage.

**Result:** The system processed 120,000 images in a week with an average latency of 1.8 seconds per image, cutting infrastructure costs by 65% compared to the previous EC2‑based solution. I learned how Lambda’s pay‑per‑invocation billing and automatic scaling can dramatically reduce operational overhead when combined with proper concurrency management.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
