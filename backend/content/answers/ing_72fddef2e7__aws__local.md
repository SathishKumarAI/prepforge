---
qid: ing_72fddef2e7__aws__local
question: What causes high latency in conversational AI?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 385
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:45:46-05:00'
sources: []
---

**Answer (Amazon style)**  

*Leadership Principles:* **Customer Obsession** – we’re building a voice assistant that feels instant; **Dive Deep** – dissect every layer of the request pipeline.

**Situation / Task:**  
In 2023 I led the latency reduction effort for our new cross‑region conversational AI. Users reported > 700 ms response time during peak hours, hurting engagement (CR dropped 12%).

**Action:**  
1. **Profile end‑to‑end** with CloudWatch traces; identified the NLP inference step on a single GPU instance as the bottleneck (60 % of total latency).  
2. Deployed a **model‑parallel inference architecture** using Amazon SageMaker Multi‑Model Endpoints, routing each intent to a dedicated **ECS Fargate** container backed by an **Elastic Inference accelerator** (v4).  
3. Added **Amazon CloudFront + Lambda@Edge** for pre‑processing at the edge, cutting round‑trip time by 30 %.  
4. Implemented **Auto Scaling** with target tracking on request latency, ensuring we spin up additional containers during traffic spikes.

**Result:**  
Latency dropped from 700 ms to **210 ms** (70% reduction). Conversion rate rose 18%, and cost per inference fell 22% thanks to spot instance usage.  

*Bar‑raiser notes:* I owned the problem end‑to‑end, dived deep into telemetry, quantified impact with real metrics, and iterated quickly while learning that edge pre‑processing saved more than GPU scaling alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
