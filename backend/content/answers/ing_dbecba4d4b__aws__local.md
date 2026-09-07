---
qid: ing_dbecba4d4b__aws__local
question: 'Explain: Centralized Rules — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 434
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:35:02-05:00'
sources: []
---

**Situation / Task**  
I led a project to replace an ad‑hoc rule engine in our recommendation service that was running on dozens of EC2 instances. The system suffered from slow roll‑outs (30 min) and unpredictable latency spikes during traffic bursts.

**Action**  
I designed a **centralized rules‑as‑a‑service** using a **client–server architecture**:

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Rule store & versioning | Amazon DynamoDB (global tables) | Low read latency, strong consistency for rule changes. |
| Inference engine | AWS Lambda (Python 3.9) | Pay‑per‑invocation, scales to thousands of requests per second. |
| Client SDK | Custom Go/Java libraries | Minimal overhead; cached rules via Amazon ElastiCache (Redis). |
| Monitoring & A/B testing | CloudWatch + SageMaker Experiments | Real‑time metrics and controlled roll‑outs. |

I added **feature flags** in DynamoDB to toggle rule sets, enabling blue‑green deployments that cut roll‑out time from 30 min to <5 min. The Lambda function’s cold‑start penalty was mitigated by keeping a pool of warm containers (Provisioned Concurrency) during peak hours.

**Result**  
- Latency dropped 4× (from 250 ms to 60 ms average).  
- Uptime improved from 95% to >99.9%.  
- Operational cost fell 35% by eliminating idle EC2 instances and using on‑demand Lambda pricing.  

**Reflection**  
I learned that **Ownership**—taking end‑to‑end responsibility for both performance and cost—was key, while the design’s **Dive Deep** into AWS services ensured we chose the right trade‑offs. The bar‑raiser will note my quantified impact and iterative learning from the initial cold‑start issue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
