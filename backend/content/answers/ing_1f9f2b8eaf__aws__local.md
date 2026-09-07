---
qid: ing_1f9f2b8eaf__aws__local
question: 'Explain: HTTP/HTTPS — System Design was HARD until I Learned these 30 Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 510
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:38:31-05:00'
sources: []
---

**Situation & Task**  
When I joined the ML Ops team, we had a legacy inference API that was exposed over HTTPS but crashed under load and couldn’t scale to millions of predictions per day. The leadership asked me to redesign it so that latency stayed <50 ms at 10⁶ RPS while keeping cost below $5K/month.

**Action (Design & Concepts)**  
I broke the problem into three layers: *API gateway → model server → data store*. For each layer I applied 30 core concepts:

| Layer | AWS Service | Key Concept | Why |
|-------|-------------|-------------|-----|
| API | Amazon API Gateway + Lambda@Edge | **Caching, throttling, rate‑limiting** | Reduces load on back‑end and protects against DoS. |
| Inference | SageMaker Endpoints (multi‑model) + ECS Fargate | **Autoscaling, warm containers, spot instances** | Maintains 0.1 ms cold start; auto‑scales with CloudWatch alarms. |
| Storage | Amazon DynamoDB & S3 | **Eventual consistency, partition key design, versioning** | Guarantees fast metadata lookup and audit trail. |
| Security | Cognito + IAM | **Least privilege, token rotation** | Enforces customer data isolation without extra code. |

I also applied *Circuit Breaker*, *Retry with exponential back‑off*, *Graceful degradation* (fallback to a simpler model), and *Observability* via CloudWatch metrics & X-Ray traces.

**Result**  
- Latency dropped from 350 ms to **35 ms average** at peak load.  
- Throughput increased from 10⁴ to **1×10⁶ RPS** without any downtime.  
- Monthly cost fell from $12K to **$4.8K**, a 60% savings.  

**Reflection & Learning**  
Ownership pushed me to own the entire flow, not just “model inference.” Diving deep into AWS pricing models revealed that using spot Fargate + multi‑model endpoints cut GPU costs by 40%. The biggest failure was initially ignoring API throttling; after adding it we avoided a 3‑hour outage during a traffic spike. This experience taught me that *Customer Obsession* demands not only fast predictions but also reliable, cost‑effective service—exactly what the new design delivers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
