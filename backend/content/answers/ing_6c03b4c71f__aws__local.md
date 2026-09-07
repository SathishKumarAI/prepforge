---
qid: ing_6c03b4c71f__aws__local
question: 'Explain: Label your images — 9 Docker Best Practices You Must Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 455
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:28:13-05:00'
sources: []
---

**Situation / Task**  
I was hired by a startup that wanted to launch an automated image‑labeling service for e‑commerce sellers. The product had to run in containers, scale to millions of images per day, and keep costs under $5k/month. My job was to design the Docker pipeline and enforce best practices so the system could grow without breaking.

**Action (Technical & Leadership)**  
1. **Image Build – “Build Once, Deploy Everywhere”**  
   *Used multi‑stage builds in a single `Dockerfile`* to keep final images < 200 MB, reducing ECR storage and transfer costs.  
2. **Security – “Customer Obsession + Ownership”**  
   Scanned every image with Amazon Inspector before pushing to ECR; automated rollback if CVEs > 3.  
3. **Runtime – “Bias for Action & Invent & Simplify”**  
   Deployed containers on ECS Fargate Spot, auto‑scaling based on SQS queue depth (max 200 tasks). Each task pulled an image from S3, ran a PyTorch inference model, and pushed labels back to DynamoDB.  
4. **Observability – “Dive Deep”**  
   Instrumented with CloudWatch Logs & X-Ray; set up alerts for CPU > 80% or latency > 2 s.  
5. **Cost Control – “Deliver Results”**  
   Implemented a Lambda cleanup job that deletes ECR images older than 90 days, saving ~30 % annually.

**Result (Data‑Driven)**  
- First month: 3 M images processed with < 1 % error rate.  
- Cost stayed at $4,200/month vs the target $5k.  
- Mean inference latency dropped from 2.8 s to 0.9 s after optimizing layer caching.

**Bar‑raiser notes**  
I owned the entire pipeline, dug into Dockerfile inefficiencies, quantified cost and performance gains, and learned that Spot instances require robust retry logic—implemented a graceful backoff strategy in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
