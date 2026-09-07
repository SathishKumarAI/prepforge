---
qid: ing_2846470d4b__aws__local
question: 'Explain: 3 Phenomenology of On-Policy Distillation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 519
total_tokens: 752
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:56:48-05:00'
sources: []
---

**Situation & Task**  
While leading a fraud‑detection ML team at a fintech startup, we needed to deploy an on‑policy distillation model that could run in real time on our serverless stack without exceeding the 10 ms latency SLA. The challenge was to preserve the high‑accuracy teacher policy while keeping inference cost low and avoiding catastrophic forgetting during continual learning.

**Action (Design & Implementation)**  
1. **Collect on‑policy data** – I built a Lambda pipeline that sampled live traffic, stored state‑action pairs in Kinesis Data Streams, and forwarded them to an S3 bucket for batch training.  
2. **Distillation loss with policy ratio clipping** – Using the teacher’s softmax outputs, we applied a KL divergence loss weighted by a clipped action probability ratio (± 0.1) to enforce on‑policy consistency and prevent drift.  
3. **Model architecture & deployment** – A lightweight feed‑forward network (4×128 ReLU layers) was distilled from a 12‑layer Transformer teacher. The student was containerized in Docker, published to AWS SageMaker Endpoint with an autoscaling policy that capped the number of concurrent invocations at 2000.  
4. **Monitoring & rollback** – CloudWatch metrics tracked latency and AUC‑PR. We enabled canary releases via SageMaker’s “Rolling update” strategy; if the error rate exceeded 2 %, traffic automatically rolled back.

**Result (Data‑driven Impact)**  
- Latency dropped from 45 ms to **12 ms** on average, meeting the SLA.  
- Cost per inference fell by **68 %** ($0.00004 → $0.000014).  
- Fraud detection AUC‑PR remained at **0.93**, unchanged from the teacher.

**Reflection (Leadership Principles)**  
*Ownership* – I drove the end‑to‑end pipeline, from data ingestion to deployment, and took responsibility for rollback safety nets.  
*Dive Deep* – The policy ratio clipping trick came from iterating over 12 K training logs; we quantified the impact of each hyperparameter change.  
*Learned from Failure* – A mid‑deployment spike in false positives taught us to add a secondary calibration step, reducing Type I errors by 15 % in the next iteration.

This solution demonstrates how on‑policy distillation can be engineered for AWS serverless environments while maintaining performance and cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
