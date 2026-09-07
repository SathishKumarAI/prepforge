---
qid: ing_48de101a58__aws__local
question: 'Explain: Load Leveling — Message Queues | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 502
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:10:16-05:00'
sources: []
---

**Situation (S)**  
While leading the ML inference pipeline for a recommendation engine at my previous company, we hit a 30 % spike in request traffic during holiday sales. The real‑time scoring service was throttling and latency rose from 120 ms to 1.2 s, hurting conversion rates.

**Task (T)**  
I had to design a load‑leveling layer that could absorb traffic surges without breaking the end‑to‑end ML workflow, while keeping cost under $5k/month.

**Action (A)**  

| Step | Design Decision | AWS Services |
|------|-----------------|--------------|
| 1 | Decouple request ingestion from inference | **Amazon SQS FIFO** (deduplication + ordering) |
| 2 | Scale workers on demand | **AWS Lambda** with *Provisioned Concurrency* + **Application Auto Scaling** |
| 3 | Persist state for long‑running jobs | **Amazon DynamoDB** (low‑latency key‑value store) |
| 4 | Orchestrate batch inference | **Step Functions** to chain Lambda → SageMaker Batch Transform |
| 5 | Monitor & auto‑scale queue depth | CloudWatch Alarms → Auto Scaling Policy on Lambda |

*Why SQS?* FIFO guarantees message order for per‑user session consistency, while the built‑in dead‑letter queue captures failures.  
*Lambda vs EC2:* Lambda eliminates idle server costs; provisioned concurrency ensures 0 ms cold starts during peaks.

**Result (R)**  
- Latency dropped to <200 ms under 10× traffic.  
- Throughput increased from 5k req/min to 45k req/min.  
- Monthly cost stayed below $4,800, a 15 % savings over the previous EC2‑based approach.  
- Conversion rate improved by 8 %, translating to an estimated $1.2M additional revenue during the sale period.

**Reflection**  
I owned the full stack, dug deep into SQS visibility timeouts and Lambda burst limits, and iterated on retry logic after a first failure where 12 % of messages were lost. The bar‑raiser will note my ownership, data‑driven impact, and how I learned from that loss to tighten the dead‑letter policy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
