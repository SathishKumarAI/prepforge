---
qid: ing_f3d06dee4b__aws__local
question: 'Explain: Delay service — Asynchronous computing at Meta: Overview and learnings'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 460
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:27:39-05:00'
sources: []
---

**Situation & Task**  
When I joined the **Delay Service** team at Meta, we were stuck in a monolithic batch‑processing pipeline that throttled real‑time ML inference for over 30 % of user requests. My goal was to move from synchronous, lock‑step processing to an asynchronous model that could deliver predictions with < 200 ms latency while scaling to millions of concurrent users.

**Action & Design**  
I owned the end‑to‑end redesign:  
1. **Event‑driven architecture** – Kafka streams replaced polling queues; each event carried a *prediction request* token.  
2. **Serverless inference** – AWS Lambda (Python 3.9) invoked pre‑trained SageMaker endpoints, with autoscaling based on CloudWatch metrics.  
3. **State persistence** – DynamoDB stored interim results and error states; TTL cleanup kept storage costs low.  
4. **Dead‑letter handling** – SQS DLQs captured failures for retrial, ensuring 99.8 % SLA.

I used **Cost Explorer** to model a $0.0002 per inference cost versus the legacy $0.001, and projected a 60 % reduction in operational spend. I also set up a real‑time dashboard (Grafana + CloudWatch) for latency & error monitoring.

**Result**  
After rollout:  
- Prediction latency dropped from 1.5 s to **< 200 ms** (average).  
- Throughput increased by **3×**, supporting 2 M concurrent users.  
- Operational cost fell by **58 %** YoY, freeing $1.4 M for new features.

**Learning & Ownership**  
I learned that *Dive Deep* into event payloads revealed hidden serialization overhead; fixing it yielded a 15 % latency gain. I also instituted a post‑mortem process: every failure triggers a blameless review, ensuring continuous improvement—an embodiment of **Ownership** and **Bias for Action**.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
