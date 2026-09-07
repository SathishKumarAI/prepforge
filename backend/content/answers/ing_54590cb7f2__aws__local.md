---
qid: ing_54590cb7f2__aws__local
question: 'Explain: Serverless and Function-as-a-Service Evolution'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 470
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:37:02-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that had to migrate an on‑prem ML inference pipeline (≈ 10 M requests/day) to a fully serverless architecture so we could reduce ops overhead and scale elastically.

**Action**  
*Customer Obsession*: We first profiled latency from the user’s perspective, discovering 95 % of requests were < 200 ms.  
*Dive Deep & Ownership*: I mapped the pipeline into discrete micro‑functions: data enrichment → feature store lookup (Amazon SageMaker Feature Store) → model inference (SageMaker Endpoint via Lambda), and post‑processing.  
*Design Choices*  
- **AWS Lambda** for stateless preprocessing, using Provisioned Concurrency to guarantee 10 ms cold starts.  
- **SageMaker Edge Manager** on a spot fleet of EC2 Inf1 instances for low‑latency inference, invoked by Lambda via the `invokeEndpointAsync` API.  
- **Amazon DynamoDB** as a feature cache with TTL to avoid repeated Feature Store reads.  
- **Step Functions** orchestrated error handling and retries.  

*Bias for Action*: We rolled out in stages; first 1 M requests/day, then full scale.  

**Result**  
- Latency dropped from 350 ms (on‑prem) to 120 ms (serverless).  
- Cost fell by **47 %** per inference (from $0.05 to $0.027).  
- Operational overhead decreased: no server maintenance, auto‑scaling handled traffic spikes up to 5×.

**Bar‑raiser takeaways**  
*Ownership*: I drove the migration end‑to‑end and held weekly demos with stakeholders.  
*Depth*: Detailed trade‑off analysis between Lambda concurrency limits vs. Spot fleet cost.  
*Quantified impact*: Delivered measurable latency & cost gains.  
*Learning*: Early misestimation of DynamoDB read capacity led to throttling; we added adaptive scaling via CloudWatch alarms, improving throughput by 30 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
