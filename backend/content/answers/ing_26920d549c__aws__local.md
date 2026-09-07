---
qid: ing_26920d549c__aws__local
question: 'Explain: AI-native and infrastructure — Company Interview Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 486
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:53:16-05:00'
sources: []
---

**Situation & Task**  
When I joined a fintech startup as Head of ML Ops, the team was struggling to ship models in production at scale. The CTO asked me to redesign our pipeline from “AI‑native” (models run as first‑class citizens) to an infrastructure that could support 50 × more inference requests per day while keeping latency <30 ms.

**Action**  
*Ownership & Bias for Action*: I scoped the project with a cross‑functional squad, defined SLAs and cost targets, then built a prototype in two weeks.  
1. **Model Serving** – deployed each model on **Amazon SageMaker Endpoint** with multi‑model endpoints to reduce per‑instance overhead.  
2. **Scalable Inference Layer** – wrapped the endpoint behind an **Application Load Balancer (ALB)** and used **AWS Lambda@Edge** for request routing, enabling auto‑scaling from 1–200 concurrent invocations.  
3. **Observability** – enabled **Amazon CloudWatch Logs & Metrics** plus **SageMaker Model Monitor** to track drift in real time.  
4. **Cost Control** – leveraged **spot instances** and **Savings Plans**, locking a 35 % reduction on GPU spend.

*Dive Deep*: I performed a cost‑benefit analysis comparing SageMaker vs. ECS + TensorFlow Serving, showing the former saved $12k/month for the same throughput while improving reliability by 99.9 %.  

**Result**  
Within 90 days we shipped 200 inference endpoints, handling 3 M requests/day with <30 ms latency, and cut infrastructure cost from $60k to $38k per month (‑36 %). The model drift detection reduced false positives by 70 %, improving customer trust.  

**Learnings**  
I realized that “AI‑native” is not just about code; it’s a system mindset—designing for observability, scalability, and cost from day one. This approach aligns with Amazon’s *Customer Obsession* (ensuring low latency) and *Ownership* (taking full responsibility for the end‑to‑end pipeline).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
