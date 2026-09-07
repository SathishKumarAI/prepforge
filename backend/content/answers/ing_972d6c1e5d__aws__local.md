---
qid: ing_972d6c1e5d__aws__local
question: 'Explain: Perform parallel asynchronous processing'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 411
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:07:54-05:00'
sources: []
---

**Situation / Task**  
I led a team that had to process 1 M user‑generated AI prompts nightly while keeping latency under 5 s per prompt. The existing batch job hit timeouts and cost $12K/month.

**Action**  
- Adopted **Customer Obsession** & **Ownership**: rewrote the pipeline as a serverless, event‑driven architecture to give users instant feedback.  
- Decomposed the workload into independent micro‑tasks (tokenization, inference, post‑processing).  
- Used **Amazon SQS** for durable queuing, **AWS Lambda** (concurrency 10 k) for stateless workers, and **Step Functions** orchestrating retries & dead‑letter handling.  
- Stored intermediate results in **DynamoDB** with TTL to avoid duplicate work.  
- Implemented a simple retry policy (3× exponential backoff) and CloudWatch metrics to trigger auto‑scaling of the Lambda concurrency limit.

**Result**  
- Latency dropped from 45 s to <4 s per prompt (99th percentile).  
- Throughput increased to 200 k prompts/hour, eliminating nightly bottlenecks.  
- Monthly cost fell from $12K to $3.5K (≈70 % savings).  
- Customer satisfaction score rose 18 points (NPS +35).

**Reflection**  
The bar‑raiser will note that I owned the end‑to‑end flow, dived deep into failure modes, quantified impact with real numbers, and learned from early retries to refine error handling. This demonstrates Amazon’s emphasis on **Ownership**, **Dive Deep**, and **Deliver Results**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
