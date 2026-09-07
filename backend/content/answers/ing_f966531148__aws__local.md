---
qid: ing_f966531148__aws__local
question: 'Explain: Now what we looked at earlier was — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 413
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:41:58-05:00'
sources: []
---

**Situation & Task**  
During my senior role at a fintech startup, we were asked to build an on‑demand fraud‑alert engine that needed to ingest ~5 M events/sec and score them in real time—essentially the same scale Google Maps uses for routing. The goal was to reduce false positives by 30% while keeping latency < 200 ms.

**Action (Design)**  
1. **Ingest Layer** – Kinesis Data Streams (shard‑based) → Lambda for preprocessing.  
2. **Feature Store** – DynamoDB + S3 (cold storage).  
3. **Model Serving** – SageMaker Endpoint with multi‑model strategy; autoscaled on CloudWatch metrics.  
4. **Routing Logic** – API Gateway + Elastic Load Balancer feeding a fleet of EC2 Spot instances behind an Application Load Balancer, weighted by model confidence.  

I applied *Dive Deep* to benchmark Lambda cold starts and moved critical transforms to Fargate to cut 15 ms. *Bias for Action* drove us to launch MVP in 3 weeks; *Ownership* meant I maintained the CI/CD pipeline and set up a real‑time monitoring stack (Grafana + Prometheus).

**Result**  
- Latency dropped from 450 ms to **210 ms** (40% improvement).  
- False positives fell by **32%**, translating to ~$2.4M annual savings on fraud payouts.  
- Cost per event reduced from $0.00018 to $0.00013 (≈28% cheaper).

**Learning & Bar‑raiser Insight**  
I documented every trade‑off, iterated the model after each release, and shared post‑mortems—showing true *Ownership* and a culture of continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
