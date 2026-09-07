---
qid: ing_201b796d37__aws__local
question: 'Explain: Move Slow Work Out of the Request Path — Client-Server Architecture
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 446
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:39:54-05:00'
sources: []
---

**Situation & Task**  
I was tasked with redesigning a real‑time recommendation engine for a global e‑commerce platform that served ~1 M requests per second. The original monolith executed heavy ML inference (≈200 ms latency) inside the request path, causing 30 % of page loads to time‑out during peak traffic.

**Action**  
- **Architectural shift**: I moved the ML model inference to a **separate microservice** behind an API gateway.  
- **Asynchronous pipeline**: Incoming requests are queued in Amazon SQS; a fleet of Fargate tasks pulls items, performs inference via a pre‑trained SageMaker endpoint, and writes predictions to DynamoDB.  
- **Cache layer**: Frequently requested recommendations are cached in Amazon ElastiCache (Redis) with a TTL of 5 min.  
- **Observability**: Distributed tracing (X-Ray) and CloudWatch metrics were added for latency & error budgets.

**Result**  
- Latency dropped from 200 ms to <30 ms for the user‑facing path.  
- 99.9 % of requests now hit cache or served stale data within SLA.  
- Peak traffic handled without throttling; cost decreased by 18 % due to auto‑scaling Fargate tasks and reduced EC2 usage.

**Leadership Principles Highlighted**  
1. **Customer Obsession** – Delivered a faster, more reliable recommendation experience for millions of shoppers.  
2. **Ownership & Dive Deep** – Took full responsibility for the end‑to‑end redesign, dissecting latency bottlenecks and iterating on the queue‑based solution.

**Bar‑raiser cues I addressed**  
- Demonstrated ownership by owning both design and implementation.  
- Showed deep dive through metrics (latency, cache hit ratio) and trade‑offs (queue delay vs. throughput).  
- Quantified impact with concrete performance & cost numbers.  
- Learned from initial failure (in‑request inference) and applied a resilient, scalable pattern that aligns with AWS best practices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
