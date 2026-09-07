---
qid: ing_b334bb847d__aws__local
question: 'Explain: Cut costs — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 541
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:09:52-05:00'
sources: []
---

**Situation & Task**  
At my previous role I was tasked to reduce the spend of our ML inference pipeline from **$120k/month** to under **$60k/month** while keeping latency < 200 ms for a real‑time recommendation engine.

**Action – Event‑Driven Architecture**  

| Step | AWS Service | Why |
|------|-------------|-----|
| Trigger | **Amazon EventBridge** (rule on new data in S3) | Eliminates idle polling, only spins resources when needed. |
| Compute | **AWS Lambda** (Python inference container) | Serverless scaling; we pay only for the 0.5 ms compute per invocation. |
| Storage | **S3 + DynamoDB** | S3 stores raw data, DynamoDB caches feature vectors – fast read/write, cost‑effective. |
| Orchestration | **Step Functions** (optional) | Guarantees retries and error handling without custom code. |

*Design decisions*:  
- **Stateless Lambda** → no EC2/Spot instances.  
- **Cold start mitigation** with provisioned concurrency for 10% of traffic, keeping cost < $1/day.  
- **Data partitioning** in DynamoDB (partition key = userID) to avoid hot‑spots.

**Result**  
*Cost*: Dropped from **$120k → $58k/month** (≈ 52 % savings).  
*Performance*: Inference latency averaged **185 ms**; 99th percentile < 350 ms.  
*Reliability*: 99.95 % uptime, no manual scaling.

**Reflection & Bar‑raiser notes**  

- **Ownership**: I drove the end‑to‑end refactor, owning both design and implementation.  
- **Dive Deep**: Benchmarked Lambda cold starts; tuned memory to 256 MB for optimal cost/latency trade‑off.  
- **Quantified Impact**: Directly linked spend reduction to measurable metrics (cost, latency).  
- **Learning from Failure**: Early prototypes used EC2 Spot; we lost capacity during spikes—pivoted to Lambda after analyzing spot termination logs.

This solution embodies *Customer Obsession* (delivering low‑latency service) and *Ownership* (full responsibility for cost & performance).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
