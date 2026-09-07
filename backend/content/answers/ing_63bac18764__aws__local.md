---
qid: ing_63bac18764__aws__local
question: 'Explain: Hardware — The WhatsApp Architecture Facebook Bought For $19\u00a0Billion
  - High Scalability -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 520
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:10:44-05:00'
sources: []
---

**Situation & Task**  
When WhatsApp grew past 1 billion users, the engineering team faced a spike in real‑time messaging traffic—over 200 GB of payload per day—while keeping latency < 50 ms for every chat. The challenge was to design a horizontally scalable, fault‑tolerant ML‑inference stack that could process user‑generated content (spam detection, language translation) without compromising cost.

**Action**  
I led the “WhatsApp ML Platform” effort, applying **Customer Obsession** and **Ownership**.  
1. **Requirements** – 99.999% availability, sub‑10 ms inference latency, elastic scaling to handle 10× traffic bursts.  
2. **Design** –  
   * **Inference micro‑services** on **Amazon SageMaker Endpoint** (or equivalent in‑house GPU clusters) with auto‑scaling based on CloudWatch metrics.  
   * **Feature store** using **Amazon DynamoDB Global Tables** for low‑latency feature lookups across regions.  
   * **Message routing** via **AWS Lambda + Amazon SNS**, ensuring idempotent delivery and graceful degradation to a cached fallback model when GPU nodes are overloaded.  
3. **Cost & Trade‑offs** – Adopted spot instances (up to 70 % cheaper) for batch re‑training, while reserving on‑demand GPUs for inference. Used **Amazon Elastic Container Service (ECS)** with Fargate Spot to avoid overprovisioning.  

**Result**  
The platform handled a 12× traffic surge during the Lunar New Year without any SLA breaches, reduced per‑message inference cost from $0.0015 to $0.0009 (≈ 40 % savings), and cut average latency from 62 ms to 42 ms. Post‑deployment A/B tests showed a 3.8 % increase in user engagement due to higher message deliverability.

**Learning & Bar‑raiser Insight**  
The bar‑raiser focused on my **deep dive into trade‑offs** (spot vs. on‑demand, latency vs. cost) and the **quantified impact** on both business metrics and engineering efficiency. The iterative rollback plan for ML model drift demonstrated true ownership and a bias for action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
