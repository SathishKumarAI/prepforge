---
qid: ing_95b8226a6d__aws__local
question: 'Q: Your RAG system''s costs have tripled over the last month with no increase
  in query volume. How do you diagnose and fix this?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 478
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:04:30-05:00'
sources: []
---

**Situation & Task (S)**  
In my RAG stack (LLM + vector store), query volume stayed at ~4k/month but spend on SageMaker endpoints and DynamoDB grew from $3,200 to $9,600 in a single month—tripling costs without performance changes. My goal: pinpoint the root cause, reduce spend by ≥50% while keeping latency <300 ms.

**Action (A)**  
1. **Dive Deep into Metrics** – enabled CloudWatch logs for SageMaker endpoints, Lambda invocations, and DynamoDB read/write capacity.  
2. **Identify Anomalies** – found that the `Inference` endpoint’s CPU utilization spiked to 95% on weekdays, causing autoscaling to launch three additional instances (each $0.30/hr).  
3. **Root Cause Analysis** – traced back to a nightly batch job that updated embeddings in S3 and triggered a Lambda chain which, due to an unguarded `for` loop, re‑indexed the entire vector store every 12 hours. This caused 2× more write capacity on DynamoDB (cost $0.25 per 1000 writes).  
4. **Fix & Optimize** –  
   * Refactored Lambda to upsert only changed vectors using a delta table in S3.  
   * Switched from on‑demand to provisioned SageMaker endpoint with a baseline of 2 instances and a target utilization of 70%.  
   * Enabled auto‑scaling policies tied to CPU and request latency, not raw count.  
5. **Validate** – re‑ran the nightly job; CloudWatch now shows 30 % fewer writes, endpoint utilization stabilizes at ~60%, and spend drops to $4,200/month.

**Result (R)**  
Cost decreased by **55%** in two weeks, latency remained <280 ms, and the system stayed fully available. Learned that even silent background jobs can inflate costs; proactive metric monitoring and delta‑based indexing are essential for ownership and cost discipline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
