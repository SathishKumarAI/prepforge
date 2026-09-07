---
qid: ing_177fc77731__aws__local
question: 'Explain: Response Parts — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 437
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:18:55-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation & Task:**  
> I was tasked with designing a *real‑time ML inference API* for a retail company that wanted to recommend personalized product bundles on the fly, without compromising latency or cost.

> **Action – Design & AWS services:**  
> 1. **API Gateway** → throttles traffic and enforces IAM auth.  
> 2. **Lambda (or Fargate)** → stateless inference wrapper that pulls a pre‑built model from **S3** and calls **Amazon SageMaker Runtime** for predictions.  
> 3. **DynamoDB** stores user profiles; read/write capacity is auto‑scaled based on CloudWatch metrics.  
> 4. **CloudFront** + edge caching (Lambda@Edge) to reduce round‑trip time for static assets.  
> 5. **X-Ray & CloudTrail** for observability and audit trails.  

> I performed a *cost vs latency* trade‑off: Lambda cold starts were mitigated by keeping the function warm with scheduled events, reducing average latency from 350 ms to 90 ms at an extra $0.02/hr. Using DynamoDB’s on‑demand mode kept costs predictable during traffic spikes.

> **Result:**  
> Within two months of launch, the API handled 1M requests/day with <95 % error rate; recommendation accuracy (AUC) improved by 12 %, driving a 4 % lift in conversion.  

> **Leadership Principles Highlighted:**  
> *Customer Obsession* – delivering sub‑100 ms predictions for end users.  
> *Ownership* – I drove the full stack, from design to monitoring, and iterated based on real metrics.  

> **Bar‑raiser cues:** Clear ownership narrative, deep dive into scalability & cost trade‑offs, quantified business impact, and a learning loop that led to measurable performance gains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
