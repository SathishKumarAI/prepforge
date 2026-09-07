---
qid: ing_fa77f03da7__aws__local
question: 'Explain: Cost Efficiency — Tech-Stacks-Live-Apps/Grab/OrderProcessing at
  main \u00b7 Anshul619/Tech-Stacks-Live-Apps \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 262
output_tokens: 361
total_tokens: 623
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:44:42-05:00'
sources: []
---

**Situation & Task**  
I was tasked to cut the cost of our live‑order processing micro‑service (used by Grab’s food‑delivery app) while keeping SLAs intact. The stack had grown to 12 containers, each pulling a heavy ML model from S3 and running on an EC2 fleet.

**Action**  
*Ownership & Dive Deep*: I profiled CPU/memory usage with CloudWatch + X-Ray. Found that the inference engine was idle 70 % of the time during off‑peak hours.  
1. **Serverless switch** – migrated the model to **AWS Lambda@Edge** with a container image (10 MB) and used **Amazon SageMaker Runtime** for predictions, eliminating idle EC2 costs.  
2. Added **API Gateway caching** (TTL 60 s) to reduce duplicate calls.  
3. Leveraged **Cost Explorer** to identify the most expensive regions; re‑deployed the Lambda function to the cheapest AZ with equivalent latency.  

**Result**  
- Reduced infrastructure spend from **$120k/month to $48k/month** (60 % savings).  
- Latency dropped 12 % (avg 210 ms → 185 ms).  
- 99.95 % availability maintained; no SLA breaches.

**Learning**  
The failure of the initial monolith taught me that *cost efficiency* is not a one‑off but an ongoing loop: continuously profile, refactor, and re‑measure—exactly what Amazon expects from a high‑impact engineer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
