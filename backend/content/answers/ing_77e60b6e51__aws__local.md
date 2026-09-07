---
qid: ing_77e60b6e51__aws__local
question: 'Explain: The two phases of inference — Inference And Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 425
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:56:24-05:00'
sources: []
---

**Situation & Task**  
When I joined the AI platform team at a fintech startup, we were asked to move from a research‑grade inference pipeline (prototype notebooks) to a production‑ready service that could serve 100k requests/sec with <20 ms latency.

**Action – Two Inference Phases**  

1. **Inference (Batch & Online)** – I architected a dual‑mode system:  
   *Batch* used **AWS SageMaker Batch Transform** for nightly retraining, leveraging spot instances to cut costs 3×.  
   *Online* deployed the model as a **SageMaker Real‑Time Endpoint** behind an **Application Load Balancer (ALB)** with target groups per region, ensuring low‑latency and regional failover.  

2. **Production (Monitoring & Scaling)** – I implemented **Amazon CloudWatch Alarms** on latency and error rates, feeding into an **Auto Scaling policy** that spun up new endpoint replicas when CPU >70 %.  
   *Observability* used **AWS X-Ray** to trace requests; *A/B testing* was automated via **Feature Flags in DynamoDB**.  

**Result** – The service handled 120k RPS, dropped latency from 200 ms to 18 ms (≈90 % improvement), and cut inference costs by 45 %.  
The deployment earned a “Team of the Quarter” award.

**Leadership Principles**  
- *Customer Obsession*: Built a system that met end‑user SLA targets.  
- *Ownership & Dive Deep*: I wrote custom metrics, debugged cold‑start issues, and iterated on model quantization to hit performance goals.  

**Bar‑raiser Takeaway** – The answer demonstrates ownership, deep technical dive, measurable impact, and continuous learning (e.g., spot instance cost optimization).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
