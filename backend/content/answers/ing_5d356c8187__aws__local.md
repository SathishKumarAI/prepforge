---
qid: ing_5d356c8187__aws__local
question: 'Explain: So that is remote procedure calls. So — System Design BASICS:
  Horizontal vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 497
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:56:35-05:00'
sources: []
---

**Situation & Task**  
During my last role at a fintech startup, we had to expose a recommendation engine to millions of users via gRPC. The team was debating whether to scale the model service horizontally (adding more instances) or vertically (upgrading CPUs/GPUs). I owned the decision and needed a clear design that aligned with AWS best practices.

**Action**  
1. **Requirements & Constraints** – Latency < 50 ms, 99th‑percentile SLA, cost ≤ $0.10 per inference.  
2. **Design Choices**  
   * **Horizontal scaling**: Deploy the model in a **ECS (Fargate)** cluster behind an **ALB** with **Auto Scaling** based on CPU utilization and request latency. Each task runs one instance of the PyTorch model loaded into shared memory via **Amazon Elastic File System (EFS)** so GPU memory is reused across tasks.  
   * **Vertical scaling**: Use a single **EC2 g5.xlarge** (4 GPU, 16 vCPU) and rely on **NVIDIA Multi-Process Service (MPS)** to multiplex inference streams.  
3. **Evaluation** – Ran load tests in AWS CloudWatch + Grafana.  
   * Horizontal: 10‑node cluster handled 200k QPS with <45 ms latency, cost $0.09/QPI.  
   * Vertical: Single node capped at 35k QPS, latency spiked to 120 ms under burst load, cost $0.15/QPI.  

**Result**  
Implemented the horizontal design; after launch, we saw a **30% reduction in inference latency** and a **25% lower cost per prediction** versus the vertical baseline. The Auto Scaling policy also cut down manual intervention by 80 %.  

---

> **Leadership Principles Reflected**  
> *Customer Obsession* – Ensured sub‑50 ms latency for end users.  
> *Ownership* – Took full responsibility from requirement gathering to deployment and monitoring.  
> *Dive Deep* – Benchmarked both scaling strategies, analyzed CloudWatch metrics, and iterated on the Auto Scaling policy.  

**Bar‑raiser takeaways**: Showed ownership, quantitative impact, deep technical analysis, and a learning loop (adjusting thresholds after production feedback).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
