---
qid: ing_d19ed3ef07__aws__local
question: 'Explain: Request Body — Webhooks | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 526
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:14:40-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a webhook ingestion system for an ML‑driven recommendation engine that receives JSON payloads from third‑party vendors every 5 minutes and triggers model inference in real time.

**Action – Design**  
1. **API Gateway + Lambda** – Exposes a REST endpoint; throttles 10k req/s, auto‑scales, and validates schema via OpenAPI.  
2. **EventBridge → SQS** – Each validated event is sent to an EventBridge rule that routes to a FIFO SQS queue (`webhook-queue.fifo`). Guarantees order per vendor (important for stateful models).  
3. **Lambda Consumer + Step Functions** – A fleet of 5 Lambdas poll the queue, batch up to 10 messages, and invoke an ECS‑Fargate task that runs the inference container (CPU 2 vCPU, RAM 4 GiB).  
4. **DynamoDB** – Stores per‑vendor last processed timestamp; Lambda updates it atomically (`UpdateItem`).  
5. **CloudWatch + X-Ray** – Full observability; alerts on >1 s latency.

*Scalability:* Auto‑scaling of Lambda and Fargate tasks keeps up with burst traffic (tested to 50k req/s).  
*Availability:* SQS is highly available (multi‑AZ); EventBridge provides dead‑letter queues.  
*Cost:* 10 M requests/month → ~$200 in API Gateway, $30 in SQS, $120 in Lambda, $40 in Fargate; total <$400/mo.

**Result**  
After deployment:  
- **Latency** dropped from 4.8 s to 0.6 s (80% reduction).  
- **Throughput** increased to 30k req/s with zero failures.  
- **Cost per inference** decreased by 35%.

**Reflection & Learning**  
I realized early that using a standard queue would break ordering for stateful models, so I switched to FIFO SQS after a failure where two events were processed out of order, causing incorrect recommendations. This taught me the value of *dive deep* into vendor constraints and *ownership* over data consistency.

---  

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivered faster, more reliable inference for downstream users.  
- **Ownership** – Took full responsibility from API to model execution, iterating after failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
