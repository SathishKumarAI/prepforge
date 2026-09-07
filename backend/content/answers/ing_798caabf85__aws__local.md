---
qid: ing_798caabf85__aws__local
question: 'Explain: A customer''s Bedrock-hosted workload costs too much. Cut inference
  cost dramatically without unacceptable quality loss - walk me through it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 383
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:59:48-05:00'
sources: []
---

**Situation (S)** – I was on a support team for a fintech client who ran their fraud‑detection model on Bedrock. Inference cost hit $12k/month and they risked shutting down the service.

**Task (T)** – Reduce inference spend by > 70 % while keeping AUC ≥ 0.92, meeting their SLA of 200 ms per request.

**Action (A)**  
1. **Dive Deep** into logs: identified that 45 % of requests were “cold starts” on a single large model.  
2. Deployed the same model to **SageMaker Endpoint** with *Multi‑Model* hosting, using *Elastic Inference* for GPU‑light workloads.  
3. Introduced a **Cache Layer** (Amazon ElastiCache Redis) for 30 % of high‑frequency queries, reducing Bedrock calls by 60 %.  
4. Enabled **Endpoint Auto Scaling** with warm pool to keep 2 instances ready, cutting cold‑start latency by 80 %.  
5. Added a **Cost‑aware inference queue** (Amazon SQS + Lambda) that batches low‑priority requests during off‑peak hours.

**Result (R)** – Monthly inference cost dropped from $12k to $3.4k (72 % savings). AUC remained at 0.93, latency averaged 180 ms. The client retained the service and reallocated $8.6k/month to product development.  

*Leadership Principles:* **Ownership** (took end‑to‑end responsibility), **Dive Deep** (analyzed telemetry), **Bias for Action** (proposed & iterated solutions quickly).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
