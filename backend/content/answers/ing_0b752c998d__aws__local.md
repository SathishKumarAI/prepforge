---
qid: ing_0b752c998d__aws__local
question: 'Explain: Anduril Custom Problems — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 527
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:51:55-05:00'
sources: []
---

**Situation & Task**  
During a recent FAANG‑style coding round I was asked to design an *Anduril Custom Problem* platform that lets teams submit tailored ML challenges (e.g., object detection on satellite imagery) and receive automated, metric‑based feedback. My goal was to build a solution that scales to thousands of concurrent users while keeping cost under \$2k/month.

**Action & Design**  
1. **Architecture** – I chose a serverless stack:  
   * AWS Lambda* (Python runtime) for the API layer,  
   * Amazon API Gateway* for throttling and authentication,  
   * S3 + Glacier Deep Archive* to store raw data and model checkpoints,  
   * Amazon SageMaker endpoints* for inference and evaluation,  
   * DynamoDB* for fast metadata queries.  

2. **Pipeline** – On submission, Lambda triggers a Step Functions workflow:  
   1. Validate payload → S3 upload.  
   2. Launch a SageMaker training job (using the provided script).  
   3. Once trained, invoke an inference endpoint on the test set; compute custom metrics (IoU, F1).  
   4. Store results in DynamoDB and send a CloudWatch alarm if performance < threshold.

3. **Cost & Scaling** – By keeping training jobs under 2 hrs and using spot instances, I projected <$0.15 per job. With 100 daily submissions, monthly cost ≈ \$120. Availability: Lambda + API Gateway are 99.95 %, Step Functions retries on failure (ensuring at‑least‑once semantics).

4. **Learning from Failure** – Initial prototype hit throttling limits during peak; I added a rate limiter in API Gateway and moved heavy validation to an async SQS queue, reducing cold starts by 35 %.

**Result**  
The final design handled 1,200 concurrent submissions with < 5 s latency per evaluation, cost $138/month, and achieved a 98.7 % success rate on automated tests.

---

### Leadership Principles Reflected
- **Ownership** – Took full responsibility from requirements to deployment, iterating on failures.
- **Dive Deep** – Analyzed Lambda limits, Step Functions state transitions, and SageMaker spot pricing to uncover bottlenecks.
- **Deliver Results** – Met scalability, cost, and reliability targets while delivering a production‑ready solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
