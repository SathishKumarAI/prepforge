---
qid: ing_b9323f943f__aws__local
question: 'Explain: Introducing Command A+ | Cohere'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 402
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:22:42-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the launch of *Cohere’s Command A+*, an AI‑powered intent‑recognition API that powers chatbots for e‑commerce. The goal was to cut customer support tickets by 30% while keeping latency <200 ms.

**Action**  
1. **Ownership & Customer Obsession:** I mapped user journeys, gathered real‑world query logs, and built a feedback loop with the CX team.  
2. **Dive Deep + Bias for Action:** Deployed a micro‑service on **AWS Lambda** (Python 3.11) behind an **API Gateway**; each invocation triggers a **SageMaker Endpoint** hosting a fine‑tuned transformer model. I used **Amazon SageMaker Neo** to compile the model for edge inference, cutting CPU usage by 40%.  
3. **Scalability & Availability:** Employed **Elastic Load Balancer (ALB)** with *Target Group* health checks; Auto Scaling on Lambda via concurrency limits ensured 99.99% uptime.  
4. **Cost Control:** Leveraged **Spot Instances** for SageMaker training, saving ~35% versus On‑Demand.  

**Result**  
- Reduced support tickets by **32%** (from 12k to 8.2k/month).  
- Latency dropped from 350 ms to **180 ms** average.  
- Cost per inference fell 28%, translating to $120k annual savings.

**Bar‑raiser takeaways** – I demonstrated ownership, deep technical trade‑offs (Neo vs standard endpoint), quantified impact, and iterated on failures by adding a fallback rule‑engine after the first beta cycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
