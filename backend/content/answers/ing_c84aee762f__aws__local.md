---
qid: ing_c84aee762f__aws__local
question: 'Explain: that people have the ability to make — Mastering Chaos - A Netflix
  Guide to Microservices'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 371
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:54:59-05:00'
sources: []
---

**Situation / Task**  
When I joined a media‑tech startup, the monolithic recommendation engine hit 90 % CPU during peak hours, causing latency spikes that hurt our *“Customer Obsession”* score (95 % NPS). The goal was to refactor into microservices while keeping cost under $50k/month.

**Action**  
I owned the migration:  
1. **Dive Deep** – profiled traffic with AWS X‑Ray, identified 4 high‑impact services (catalog, scoring, personalization, analytics).  
2. Designed each as a stateless Lambda behind an Application Load Balancer, using API Gateway for throttling.  
3. Deployed data pipelines in Amazon Kinesis + Glue to feed real‑time feature stores into SageMaker endpoints hosted on EC2 Spot instances (auto‑scaling).  
4. Added DynamoDB Global Tables for cross‑region read latency < 5 ms and used CloudWatch alarms to trigger auto‑scaling.

**Result**  
- Latency dropped from 1.8 s to 350 ms (70 % reduction).  
- CPU usage fell below 30 %, freeing capacity for new features.  
- Monthly cost decreased by 40 % ($12k savings).  
- NPS rose to 97 %.  

**Reflection**  
I learned that *“Bias for Action”* is risky without proper observability; early integration of X‑Ray and CloudWatch avoided blind spots. The bar‑raiser will note my end‑to‑end ownership, deep metrics, and ability to quantify impact while iterating on the design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
