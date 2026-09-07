---
qid: ing_c38c2505b9__aws__local
question: 'Explain: N-Tier Architecture — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 552
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:45:18-05:00'
sources: []
---

**N‑Tier (Client‑Server) Architecture for a Scalable ML Inference Service**

**S – Situation:**  
A startup wanted to expose an image‑classification model (ResNet‑50) to 10 k concurrent users while keeping latency <200 ms and cost under $2k/month.  

**T – Task:**  
Design a multi‑tier system that separates concerns, scales horizontally, and guarantees high availability.

**A – Action (Technical Design):**  
1. **Client Tier (Web/Native App)** – HTTPS requests to an Application Load Balancer (ALB).  
2. **Presentation Tier (API Gateway + Lambda@Edge)** – API Gateway routes `/classify` to a Lambda function that validates payloads and forwards to the inference tier via AWS SDK.  
3. **Inference Tier** – A fleet of EC2 Spot instances in an Auto Scaling group running TensorFlow Serving behind an Application Load Balancer. Containerized on ECS Fargate for rapid scaling. The Lambda writes requests to an SQS queue; workers poll, batch 10 images per inference call (batching reduces GPU cost).  
4. **Data Tier** – S3 stores raw images and model artifacts; DynamoDB holds request metadata.  
5. **Observability** – CloudWatch metrics (latency, error rate), X-Ray traces, and a Lambda that aggregates results to Athena for daily reporting.

**R – Result:**  
- Latency dropped from 350 ms to 180 ms (+48%).  
- Cost fell to $1,700/month (30% under target).  
- 99.95% uptime over 6 months.  

---

### Leadership Principles

| Principle | How it Shaped the Design |
|-----------|--------------------------|
| **Customer Obsession** | Prioritized low latency and cost because users demanded instant feedback on uploads. |
| **Ownership** | Took full responsibility for end‑to‑end SLAs, monitoring, and incident response. |

---

### Bar‑raiser Checklist

- **Ownership:** I defined the SLA, built the monitoring stack, and owned post‑mortems.  
- **Dive Deep:** Batching logic was tuned by profiling GPU utilization; I iterated until batch size hit 10 for optimal throughput.  
- **Quantified Impact:** Showed concrete metrics (latency, cost, uptime).  
- **Learning from Failure:** After a Lambda timeout incident, I introduced retries and dead‑letter queues, reducing failures to <0.01%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
