---
qid: ing_ba18dbe3c1__aws__local
question: 'Explain: Chunked Prefill & RAD-O — Batching Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 500
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:24:24-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led the migration of a generative‑AI inference pipeline from on‑prem to SageMaker. Our latency SLA was 200 ms for a 1 GB prompt, yet batch‑processing on GPU instances caused queue spikes and cost overruns.

**Action (Technical)**  
I introduced two batching strategies:  

| Strategy | What it does | AWS services | Trade‑offs |
|----------|--------------|--------------|------------|
| **Chunked Prefill** | Splits a long prompt into overlapping chunks, each sent to the model in parallel. The output tokens are stitched back, reducing per‑chunk latency and GPU memory pressure. | SageMaker `InferenceScheduler`, S3 for chunk storage, Lambda for stitching | Slightly higher compute due to overlap but cuts peak memory usage by 35 %. |
| **RAD‑O (Request‑Ahead Dynamic Optimizer)** | Dynamically groups incoming requests by token count; smaller batches are processed immediately while larger ones wait until GPU load is low. Uses an event‑driven architecture with EventBridge and a DynamoDB queue to track batch size. | SageMaker, EventBridge, DynamoDB, Step Functions | Adds a 5 ms orchestration overhead but improves throughput by 1.8× during peak hours. |

**Result**  
After deployment, we cut average inference cost from $0.12 to $0.07 per request (−42 %) and met the latency SLA in 97 % of cases, improving customer satisfaction scores by 18 points.

**Leadership Principles**  
- **Customer Obsession** – focused on end‑user latency.  
- **Ownership & Dive Deep** – built a data‑driven optimizer, iterated until metrics hit targets.  

**Bar‑raiser takeaways**  
* Ownership: I owned the full stack from S3 to Lambda.  
* Depth: I profiled GPU memory and CPU queues to justify chunk sizes.  
* Quantified impact: 42 % cost savings, 97 % SLA compliance.  
* Learning: Initial over‑chunking caused duplicate tokens; we added a de‑duplication step after the first iteration.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
