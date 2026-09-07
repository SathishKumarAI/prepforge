---
qid: ing_354c6be726__aws__local
question: 'Explain: Scalability vs. Performance — System Design: Top 15 Trade-Offs
  - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 415
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:25:00-05:00'
sources: []
---

**Scalability vs. Performance – 15 Key Trade‑offs (Ashish Pratap Singh)**  

*Leadership Principles: Ownership & Dive Deep*

> **Situation:** In a recent ML inference service for a global e‑commerce platform, we needed to serve 5 M requests/day while keeping latency under 50 ms.  
> **Task:** Design an architecture that balances horizontal scaling with per‑request performance.  
> **Action:** I mapped the top 15 trade‑offs (e.g., *Compute vs. Memory*, *Batching vs. Real‑time*, *Stateless vs. Stateful*), then prioritized those affecting our SLA and cost.  
> - **Compute vs. Memory:** Chose **AWS SageMaker Endpoint** with GPU instances for heavy models, but offloaded lightweight inference to **Lambda@Edge** to reduce memory footprint.  
> - **Batching vs. Real‑time:** Implemented a two‑tier queue—short‑lived **SQS FIFO** for real‑time requests and **Kinesis Data Streams** for batch jobs—allowing autoscaling with **Application Auto Scaling**.  
> - **Stateless vs. Stateful:** Used **EFS** only for model artifacts; kept inference stateless to maximize container elasticity on **Amazon ECS Fargate**.  
> **Result:** Latency dropped from 120 ms to 42 ms (−65 %), cost fell by 30 % YoY, and we scaled to 10× traffic without code changes.

*Bar‑raiser takeaways:* Demonstrated true ownership (architected end‑to‑end), deep dive into each trade‑off, quantified impact, and a post‑mortem that led us to replace the SageMaker GPU tier with a **Graviton2** inference endpoint, further cutting costs by 15 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
