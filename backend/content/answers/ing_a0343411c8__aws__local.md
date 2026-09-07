---
qid: ing_a0343411c8__aws__local
question: 'Explain: Dedicated Endpoint — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 475
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:27:01-05:00'
sources: []
---

**Situation & Task**  
While building a recommendation engine for a media‑streaming startup, we needed to expose the ML model as a **dedicated endpoint** that could receive *webhook* calls from partner services and return predictions in real time. The goal was 99.9 % uptime, <150 ms latency, and cost under $0.02 per inference.

**Action (Design)**  
1. **API Gateway + Lambda** – Front‑end receives the webhook, validates payload, and forwards it to a *Lambda* function.  
2. **SageMaker Runtime InvokeEndpoint** – The Lambda calls a dedicated SageMaker endpoint (warm pool size 3) for inference.  
3. **DynamoDB** – Stores request metadata for audit and throttling.  
4. **SNS + SQS** – If latency exceeds 120 ms, the request is queued to an SQS FIFO queue; a secondary Lambda processes it asynchronously, ensuring eventual consistency.  
5. **CloudWatch Alarms & Auto Scaling** – Monitors latency/CPU; triggers Lambda concurrency scaling and SageMaker endpoint auto‑scale (GPU vs CPU) based on traffic patterns.

**Result**  
- 99.97 % uptime over 6 months.  
- Avg inference latency: 112 ms, peak <250 ms.  
- Cost reduced by 35 % compared to a monolithic EC2 deployment.  

**Learning & Ownership**  
I identified that the single Lambda was a bottleneck during traffic spikes; moving to an async queue resolved it—an example of *Bias for Action* and *Dive Deep*. I documented the trade‑offs (extra SQS cost vs latency) so future teams could iterate faster.

> **Bar‑raiser cues:** ownership of end‑to‑end reliability, deep dive into latency bottlenecks, quantifiable impact on uptime & cost, and a clear lesson learned from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
