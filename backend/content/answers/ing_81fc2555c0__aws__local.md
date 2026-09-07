---
qid: ing_81fc2555c0__aws__local
question: 'Explain: Abridge Just Hits Different — Abridge Software Engineer Interview
  Experience - United States'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 640
total_tokens: 877
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:18:47-05:00'
sources: []
---

**Situation**

When I joined Abridge, the product team wanted to add an “Instant Summary” feature that could distill hours of medical transcripts into concise notes in under 10 seconds. The existing solution was a simple keyword‑based pipeline that took 30 minutes and produced noisy summaries.

**Task**

I had to design a scalable, low‑latency ML system that delivered high‑quality summaries while keeping cost per transcript <$0.05 on AWS.

**Action**

1. **Model Selection & Training**  
   * Chose T5‑Base fine‑tuned on a custom “clinical‑summary” corpus (≈ 200k transcripts).  
   * Trained on an EC2 Spot cluster with 8 p3.8xlarge GPUs; training cost ≈ $120, achieved ROUGE‑L = 0.42 vs baseline 0.31.

2. **Serving Architecture**  
   * Deployed the model to **Amazon SageMaker Endpoint (GPU‑MLC)** for inference latency < 200 ms.  
   * Wrapped the endpoint in a Lambda layer that validates input, handles retry logic, and streams partial output via **API Gateway WebSocket** so users see progressive summaries.

3. **Scalability & Availability**  
   * Auto‑scales SageMaker instances (min 1, max 8) based on CloudWatch metrics; uses **Elastic Load Balancer** to distribute traffic.  
   * Stores raw transcripts in **S3 Glacier Deep Archive** and intermediate embeddings in **DynamoDB** for quick lookup.

4. **Cost Control**  
   * Spot instance usage + SageMaker Savings Plans cut inference cost from $0.18 → $0.04 per transcript.  
   * Implemented a “fallback” rule: if latency > 300 ms, return keyword summary to avoid SLA breach.

5. **Monitoring & Continuous Improvement**  
   * Built a Grafana dashboard with key metrics (latency, error rate, cost).  
   * Conducted quarterly A/B tests; each iteration improved ROUGE‑L by 0.02 and reduced latency by 15 %.

**Result**

* 10× reduction in inference time (30 min → 10 s).  
* Cost per transcript dropped to $0.04, enabling a projected annual saving of ~$1.2M for 3 million transcripts.  
* User satisfaction scores rose from 4.2/5 to 4.8/5, and churn decreased by 12%.

**Reflection**

I took full ownership—coordinated data prep, model training, deployment, and ops—all while staying customer‑obsessed. The biggest learning was that a hybrid approach (GPU inference + partial fallback) balances quality with cost; we’ll iterate further on distillation to push latency below 5 s next quarter.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
