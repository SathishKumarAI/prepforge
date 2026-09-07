---
qid: ing_1542d7a591__aws__local
question: 'Explain: How Client-Server Communication Works — Client-Server Architecture
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 599
total_tokens: 835
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:13:06-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a real‑time recommendation engine for an e‑commerce platform that needed to serve 5 M users per day while keeping latency under 200 ms. The challenge was to build a robust client‑server architecture that could scale horizontally, remain highly available, and keep costs predictable.

**Action – Design & Implementation**  
1. **Client Layer (Front‑end)** – React + AWS Amplify for authentication, CDN via CloudFront.  
2. **API Gateway + Lambda** – Exposes REST/GraphQL endpoints; each request triggers a stateless Lambda that fetches user profile from DynamoDB and calls the inference service.  
3. **Inference Service** – Containerized TensorFlow model deployed on Amazon SageMaker Endpoint (Multi‑Model). The endpoint runs behind an Application Load Balancer with target group health checks, ensuring 99.9 % availability.  
4. **Cache Layer** – Elasticache Redis stores the last 10 k recommendations per user to avoid repeated inference calls. Cache miss rate dropped from 30 % to <5 %.  
5. **Observability** – CloudWatch metrics + X-Ray traces; alarms trigger auto‑scaling for Lambda concurrency and SageMaker instance count.

**Result**  
- Latency averaged 140 ms (down 30 % from baseline).  
- Cost per request fell from $0.12 to $0.04, a **67 % reduction** while serving the same traffic.  
- Model accuracy improved by 4 % due to real‑time feedback loop stored in S3 and retrained nightly.

---

### Leadership Principles Reflected
| Principle | How it Appears |
|-----------|----------------|
| **Ownership** | I led end‑to‑end design, chose AWS services, and iterated on cost/latency trade‑offs. |
| **Dive Deep** | I profiled every layer (API latency, cache hit ratio, SageMaker inference time) to identify bottlenecks. |
| **Deliver Results** | Quantified impact: 30 % latency reduction, 67 % cost savings, and higher recommendation accuracy. |

---

### Bar‑raiser Expectations  
- **Depth of Design** – Clear service choices with rationale (e.g., Lambda for statelessness, SageMaker for managed ML).  
- **Quantified Impact** – Metrics on latency, cost, cache hit rate.  
- **Learning from Failure** – Initial monolithic inference caused 400 ms spikes; refactored to multi‑model endpoint and caching.  

This architecture satisfies scalability (auto‑scaling Lambda & SageMaker), high availability (ALB + health checks), and cost control (pay‑as‑you‑go services).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
